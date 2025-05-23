'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../../lib/firebase'; // adjust the path as needed
import { useRouter } from 'next/navigation';

// Define the TableData interface
interface TableData {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
  originalTimestamp: any;
}

interface FirebaseError {
  code: string;
  message: string;
  // Add other properties as needed
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [tableData, setTableData] = useState<TableData[]>([]);
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

  // Fetch Firebase data from the "form" collection
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'form'));
        const data = querySnapshot.docs.map(doc => {
          const docData = doc.data();
          
          // Store original timestamp for sorting
          const originalTimestamp = docData.timestamp;
          
          // Format timestamp (if it exists) or provide a fallback
          let timestamp = '-';
          if (docData.timestamp) {
            // Handle Firestore timestamp
            timestamp = docData.timestamp.toDate ? 
              docData.timestamp.toDate().toLocaleString() : 
              docData.timestamp;
          }
          
          return {
            id: doc.id,
            name: docData.name || '-',
            email: docData.email || '-',
            message: docData.message || '-',
            phone: docData.phone || '-',
            timestamp: timestamp,
            originalTimestamp: originalTimestamp // Keep original for sorting
          };
        });

        // Sort data by timestamp in descending order (newest first)
        data.sort((a, b) => {
          if (!a.originalTimestamp) return 1;
          if (!b.originalTimestamp) return -1;
          
          const timeA = a.originalTimestamp.toDate ? a.originalTimestamp.toDate().getTime() : 0;
          const timeB = b.originalTimestamp.toDate ? b.originalTimestamp.toDate().getTime() : 0;
          
          return timeB - timeA; // Descending order
        });
        
        setTableData(data);
      } catch (error) {
        const firebaseError = error as FirebaseError; // Type assertion
        console.error("Error fetching Firebase data:", firebaseError);
      }
    };

    fetchData();
  }, []);

  // Handle animation sequence
  // useEffect(() => {
  //   // Start with black screen
  //   const welcomeTimer = setTimeout(() => {
  //     setAnimationState('welcome'); // Show Hello Anuj Bhiya

  //     // After showing welcome, transition to dashboard
  //     const dashboardTimer = setTimeout(() => {
  //       setAnimationState('dashboard');
  //     }, 1500); // 1.5 seconds as requested

  //     return () => clearTimeout(dashboardTimer);
  //   }, 500);

  //   return () => clearTimeout(welcomeTimer);
  // }, []);

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

  // Handle document deletion
  const handleDelete = async (id: string) => {
    try {
      // Delete the document from Firestore
      if (confirm('Are you sure you want to delete this entry?')) {
        await deleteDoc(doc(db, 'form', id));
        
      // Update the local state by filtering out the deleted document
      setTableData(tableData.filter(item => item.id !== id));
      
      // Optional: Show a success message
      alert('Entry deleted successfully');
    } else {
      alert('Entry not deleted');
    }
    } catch (error) {
      const firebaseError = error as FirebaseError;
      console.error("Error deleting document:", firebaseError);
      // Optional: Show an error message
      alert('Failed to delete entry: ' + firebaseError.message);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
     

      {/* Main Dashboard */}
      <motion.div 
        className="min-h-screen bg-[#F8F5EC] flex flex-col mt-20"
        initial={{ opacity: 1 }}
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
              <h1 className="text-3xl font-bold text-[#5A4C33]">Admin Dashboard</h1>
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

          {/* Data Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F0EAD6]">
                  <tr>
                    {['Date & Time', 'Name', 'Email', 'Number', 'Message', 'Actions'].map((header, index) => (
                      <th key={index} className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableData.map((row) => (
                    <tr key={row.id} className="hover:bg-[#F8F5EC] transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#5A4C33]">{row.timestamp}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">{row.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">{row.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">{row.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">{row.message}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">
                        <div className="flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDelete(row.id)}
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
            </div>

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
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
