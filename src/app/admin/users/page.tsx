'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../../lib/firebase'; // adjust the path as needed
import { useRouter } from 'next/navigation';

// Define the TableData interface for users
interface TableData {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  role: string;
  position: string;
}

const UsersDashboard = () => {
  const [animationState, setAnimationState] = useState('initial'); // initial, welcome, dashboard
  const [activeTab, setActiveTab] = useState('users');
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentUserId, setCurrentUserId] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
    role: '',
    position: '',
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const router = useRouter();

  // Check if user is logged in; if not, redirect to login page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Logout handler using Firebase Auth
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Navigation handler: Redirect for Blogs and Articles
  const handleNavigation = (itemId: string) => {
    if (itemId === 'blogs') {
      router.push('/admin/blogs');
    } else if (itemId === 'articles') {
      router.push('/admin/articles');
    } else if (itemId === 'home'){
        router.push('/admin/dashboard')
    }else if (itemId === 'users'){
        router.push('/admin/users')
    }else if (itemId === 'amalive'){
        router.push('/admin/amalive')
    }else{
        setActiveTab(itemId);
    }
  };

  // Fetch Firebase data from the "users" collection
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const data = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          name: docData.name || '-',
          email: docData.email || '-',
          password: docData.password || '-',
          image: docData.image || '-',
          role: docData.role || '-',
          position: docData.position || '-'
        };
      });
      setTableData(data);
    } catch (error) {
      console.error("Error fetching Firebase data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle animation sequence
  useEffect(() => {
    // Start with black screen
    const welcomeTimer = setTimeout(() => {
      setAnimationState('welcome'); // Show Hello Anuj Bhiya

      // After showing welcome, transition to dashboard
      const dashboardTimer = setTimeout(() => {
        setAnimationState('dashboard');
      }, 1500); // 1.5 seconds as requested

      return () => clearTimeout(dashboardTimer);
    }, 500);

    return () => clearTimeout(welcomeTimer);
  }, []);

  // Handle user form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle user form submission (Create or Update)
  const handleSubmitUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        // Update existing user
        const userRef = doc(db, 'users', currentUserId);
        await updateDoc(userRef, newUser);
        setIsEditMode(false);
        setCurrentUserId('');
      } else {
        // Add new user
        await addDoc(collection(db, 'users'), newUser);
      }
      
      // Reset form and show table
      setNewUser({
        name: '',
        email: '',
        password: '',
        image: '',
        role: '',
        position: '',
      });
      setShowUserForm(false);
      
      // Fetch the updated users
      await fetchData();
      
    } catch (error) {
      console.error("Error managing user:", error);
    }
  };

  // Handle edit button click
  const handleEditUser = (user: TableData) => {
    setIsEditMode(true);
    setCurrentUserId(user.id);
    setNewUser({
      name: user.name !== '-' ? user.name : '',
      email: user.email !== '-' ? user.email : '',
      password: user.password !== '-' ? user.password : '',
      image: user.image !== '-' ? user.image : '',
      role: user.role !== '-' ? user.role : '',
      position: user.position !== '-' ? user.position : '',
    });
    setShowUserForm(true);
  };

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    if (userToDelete) {
      try {
        await deleteDoc(doc(db, 'users', userToDelete));
        setShowDeleteModal(false);
        setUserToDelete(null);
        await fetchData();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  // Cancel edit mode
  const handleCancelEdit = () => {
    setIsEditMode(false);
    setCurrentUserId('');
    setNewUser({
      name: '',
      email: '',
      password: '',
      image: '',
      role: '',
      position: '',
    });
    setShowUserForm(false);
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Black background that fades out */}
      <AnimatePresence>
        {animationState === 'initial' && (
          <motion.div
            key="black-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-black z-50"
          />
        )}
      </AnimatePresence>

      {/* Welcome message that fades in and out */}
      <AnimatePresence>
        {animationState === 'welcome' && (
          <motion.div
            key="welcome-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 flex items-center justify-center z-40 bg-[#F8F5EC]"
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1] // Spring-like ease
              }}
            >
              <h1 className="text-5xl font-bold text-[#5A4C33]">
                Hello Anuj Bhiya
              </h1>
              <motion.div 
                className="w-48 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mt-4"
                initial={{ width: 0 }}
                animate={{ width: "12rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md"
            >
              <h3 className="text-xl font-bold text-[#5A4C33] mb-4">Confirm Deletion</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this user? This action cannot be undone.</p>
              <div className="flex justify-end space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-md font-medium"
                >
                  Delete
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Dashboard */}
      <motion.div 
        className="min-h-screen bg-[#F8F5EC] flex flex-col mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: animationState === 'dashboard' ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D2A02A] opacity-5"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#5A4C33] opacity-5"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* Dashboard Content */}
        <div className="flex-1 p-6 relative z-10">
          {/* Dashboard Header */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#D2A02A] mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#5A4C33]">Users Dashboard</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mt-2"></div>
            </div>
            {/* Logout Button */}
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md font-medium"
            >
              Logout
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {[
              { id: 'home', label: 'Home', icon: faHome },
              { id: 'users', label: 'Users', icon: faUsers },
              { id: 'blogs', label: 'Blogs', icon: faChartLine },
              { id: 'articles', label: 'Articles', icon: faClipboardList },
              { id: 'amalive', label: 'AMA Live', icon: faCog }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-colors duration-300 ${
                  activeTab === item.id 
                    ? 'bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white' 
                    : 'bg-white text-[#5A4C33] hover:bg-[#F0EAD6]'
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-xl mb-2" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            {/* Header with Add User Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#5A4C33]">
                {isEditMode ? 'Edit User' : showUserForm ? 'Add New User' : 'User Management'}
              </h2>
              <motion.button
                onClick={() => {
                  if (isEditMode) {
                    handleCancelEdit();
                  } else {
                    setShowUserForm(!showUserForm);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white rounded-md font-medium"
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                {isEditMode ? 'Cancel Edit' : showUserForm ? 'View Users' : 'Add User'}
              </motion.button>
            </div>

            {/* Conditional Rendering: Show either Data Table or User Form */}
            {showUserForm ? (
              // User Creation/Edit Form
              <AnimatePresence mode="wait">
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmitUser}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#5A4C33] mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newUser.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent text-black"
                      placeholder="Enter user's name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#5A4C33] mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newUser.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent text-black"
                      placeholder="Enter user's email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-[#5A4C33] mb-1">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={newUser.password}
                      onChange={handleInputChange}
                      required={!isEditMode} // Not required during edit unless changing
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent text-black"
                      placeholder={isEditMode ? "Leave blank to keep current password" : "Enter user's password"}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-[#5A4C33] mb-1">Image URL</label>
                    <input
                      type="text"
                      id="image"
                      name="image"
                      value={newUser.image}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent text-black"
                      placeholder="Enter image URL"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-[#5A4C33] mb-1">Role</label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={newUser.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent text-black"
                      placeholder="Enter user's role"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-[#5A4C33] mb-1">Position</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={newUser.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent text-black"
                      placeholder="Enter user's position"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <motion.button
                      type="button"
                      onClick={handleCancelEdit}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 ${isEditMode 
                        ? 'bg-blue-500' 
                        : 'bg-gradient-to-r from-[#D2A02A] to-[#5A4C33]'} text-white rounded-md font-medium`}
                    >
                      {isEditMode ? 'Update User' : 'Add User'}
                    </motion.button>
                  </div>
                </motion.form>
              </AnimatePresence>
            ) : (
              // Data Table
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-x-auto"
                >
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F0EAD6]">
                      <tr>
                        {['ID', 'Name', 'Email', 'Password', 'Image', 'Role', 'Position', 'Actions'].map((header, index) => (
                          <th key={index} className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {tableData.map((row) => (
                        <tr key={row.id} className="hover:bg-[#F8F5EC] transition-colors duration-150">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#5A4C33]">{row.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">{row.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">{row.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">
                            {row.password !== '-' ? '•••••••••' : '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">
                            {row.image !== '-' ? (
                              <img src={row.image} alt={row.name} className="h-10 w-10 rounded-full object-cover" />
                            ) : (
                              '-'
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">{row.role}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">{row.position}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">
                            <div className="flex space-x-2">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleEditUser(row)}
                                className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs"
                              >
                                Edit
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                  setUserToDelete(row.id);
                                  setShowDeleteModal(true);
                                }}
                                className="px-3 py-1 bg-red-500 text-white rounded-md text-xs"
                              >
                                Delete
                              </motion.button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-[#5A4C33]">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">{tableData.length}</span> of <span className="font-medium">{tableData.length}</span> results
                    </div>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-[#F0EAD6] text-[#5A4C33] rounded-md text-sm"
                        disabled
                      >
                        Previous
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-[#F0EAD6] text-[#5A4C33] rounded-md text-sm"
                        disabled
                      >
                        Next
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UsersDashboard;