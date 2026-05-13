'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faPlus, faUpload, faUser, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, writeBatch } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, auth, storage } from '../../../lib/firebase'; // adjust the path as needed
import { useRouter } from 'next/navigation';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import {
  CSS,
} from '@dnd-kit/utilities';

// Define the TableData interface for users
interface TableData {
  id: string;
  name: string;
  position: string;
  role: string;
  image: string;
  sort: number;
}

const UsersDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [lawyerUsers, setLawyerUsers] = useState<TableData[]>([]);
  const [techUsers, setTechUsers] = useState<TableData[]>([]);
  const [businessUsers, setBusinessUsers] = useState<TableData[]>([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentUserId, setCurrentUserId] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    position: '',
    role: '',
    image: '',
    sort: 0,
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isUpdatingOrder, setIsUpdatingOrder] = useState(false);
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

  // Fetch Firebase data from the "users" collection
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const data = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          name: docData.name || '-',
          position: docData.position || '-',
          role: docData.role || '-',
          image: docData.image || '',
          sort: docData.sort || 0
        };
      });
      
      const sortedData = data.sort((a, b) => (a.sort || 0) - (b.sort || 0));
      setTableData(sortedData);

      // Group users by role
      const lawyers = sortedData.filter(user => user.role === 'lawyer');
      const tech = sortedData.filter(user => user.role === 'tech');
      const business = sortedData.filter(user => user.role === 'business_development');

      setLawyerUsers(lawyers);
      setTechUsers(tech);
      setBusinessUsers(business);
    } catch (error) {
      console.error("Error fetching Firebase data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle user form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({
      ...prevState,
      [name]: name === 'sort' ? parseInt(value) || 0 : value
    }));
  };

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  // Upload file to Firebase Storage
  const uploadImage = async (file: File): Promise<string> => {
    if (!storage) {
      throw new Error("Firebase Storage is not initialized");
    }
    const fileName = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `users/${fileName}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  };

  // Delete old image from Firebase Storage
  const deleteOldImage = async (imageUrl: string) => {
    try {
      if (imageUrl && imageUrl.includes('firebase')) {
        if (!storage) {
          throw new Error("Firebase Storage is not initialized");
        }
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      }
    } catch (error) {
      console.error('Error deleting old image:', error);
    }
  };

  // Handle user form submission (Create or Update)
  const handleSubmitUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    
    try {
      let imageUrl = newUser.image;
      
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
        if (isEditMode && newUser.image) {
          await deleteOldImage(newUser.image);
        }
      }
      
      const userData = {
        ...newUser,
        image: imageUrl
      };
      
      if (isEditMode) {
        await updateDoc(doc(db, 'users', currentUserId), userData);
      } else {
        await addDoc(collection(db, 'users'), userData);
      }
      
      setNewUser({
        name: '',
        position: '',
        role: '',
        image: '',
        sort: 0,
      });
      setSelectedFile(null);
      setPreviewUrl('');
      setShowUserForm(false);
      setIsEditMode(false);
      await fetchData();
      
    } catch (error) {
      console.error("Error managing user:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleEditUser = (user: TableData) => {
    setIsEditMode(true);
    setCurrentUserId(user.id);
    setNewUser({
      name: user.name !== '-' ? user.name : '',
      position: user.position !== '-' ? user.position : '',
      role: user.role !== '-' ? user.role : '',
      image: user.image || '',
      sort: user.sort || 0,
    });
    setPreviewUrl(user.image || '');
    setShowUserForm(true);
  };

  const handleConfirmDelete = async () => {
    if (userToDelete) {
      try {
        const userToDeleteData = tableData.find(user => user.id === userToDelete);
        if (userToDeleteData?.image) {
          await deleteOldImage(userToDeleteData.image);
        }
        await deleteDoc(doc(db, 'users', userToDelete));
        setShowDeleteModal(false);
        setUserToDelete(null);
        await fetchData();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    setCurrentUserId('');
    setNewUser({
      name: '',
      position: '',
      role: '',
      image: '',
      sort: 0,
    });
    setSelectedFile(null);
    setPreviewUrl('');
    setShowUserForm(false);
  };

  const handleDragEnd = async (event: DragEndEvent, role: string) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setIsUpdatingOrder(true);
      
      let currentUsers: TableData[] = [];
      let setUsers: React.Dispatch<React.SetStateAction<TableData[]>> | null = null;
      
      switch (role) {
        case 'lawyer':
          currentUsers = [...lawyerUsers];
          setUsers = setLawyerUsers;
          break;
        case 'tech':
          currentUsers = [...techUsers];
          setUsers = setTechUsers;
          break;
        case 'business_development':
          currentUsers = [...businessUsers];
          setUsers = setBusinessUsers;
          break;
      }

      if (!setUsers) return;

      const oldIndex = currentUsers.findIndex((user) => user.id === active.id);
      const newIndex = currentUsers.findIndex((user) => user.id === over?.id);

      const newUsersOrder = arrayMove(currentUsers, oldIndex, newIndex);
      setUsers(newUsersOrder);

      try {
        const batch = writeBatch(db);
        newUsersOrder.forEach((user, index) => {
          const userRef = doc(db, 'users', user.id);
          batch.update(userRef, { sort: index + 1 });
        });
        await batch.commit();
        await fetchData();
      } catch (error) {
        console.error('Error updating sort order:', error);
        await fetchData();
      } finally {
        setIsUpdatingOrder(false);
      }
    }
  };

  return (
    <div className="min-h-screen relative">
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md"
            >
              <h3 className="text-xl font-bold text-[#5A4C33] mb-4">Confirm Deletion</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this user? This action cannot be undone.</p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-md font-medium"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#D2A02A] mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#5A4C33]">User Management</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mt-2"></div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg p-6 shadow-md"
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-[#5A4C33]">
              {isEditMode ? 'Edit User' : showUserForm ? 'Add New User' : 'Team Members'}
            </h2>
          </div>
          <button
            onClick={() => {
              if (isEditMode) {
                handleCancelEdit();
              } else {
                setShowUserForm(!showUserForm);
              }
            }}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white rounded-md font-medium"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            {isEditMode ? 'Cancel Edit' : showUserForm ? 'View Users' : 'Add User'}
          </button>
        </div>

        {showUserForm ? (
          <form onSubmit={handleSubmitUser} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#5A4C33] mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D2A02A] text-black"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5A4C33] mb-1">Position</label>
                <input
                  type="text"
                  name="position"
                  value={newUser.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D2A02A] text-black"
                  placeholder="e.g. Senior Advocate"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5A4C33] mb-1">Role</label>
                <select
                  name="role"
                  value={newUser.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D2A02A] text-black"
                >
                  <option value="">Select Role</option>
                  <option value="lawyer">Lawyer</option>
                  <option value="business_development">Business Development</option>
                  <option value="tech">Tech</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5A4C33] mb-1">Sort Order</label>
                <input
                  type="number"
                  name="sort"
                  value={newUser.sort}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D2A02A] text-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5A4C33] mb-1">Profile Image</label>
              <div className="flex items-center space-x-6">
                <div className="flex-1">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FontAwesomeIcon icon={faUpload} className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="text-sm text-gray-500">Click to upload image</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={handleFileSelect} />
                  </label>
                </div>
                {previewUrl && (
                  <div className="relative">
                    <img src={previewUrl} alt="Preview" className="h-32 w-32 rounded-lg object-cover border" />
                    <button
                      type="button"
                      onClick={() => { setSelectedFile(null); setPreviewUrl(''); }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={uploading}
                className="px-6 py-2 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white rounded-md font-medium disabled:opacity-50"
              >
                {uploading ? 'Processing...' : (isEditMode ? 'Update User' : 'Add User')}
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-12">
            <RoleSection title="Lawyers" users={lawyerUsers} role="lawyer" onDragEnd={handleDragEnd} onEdit={handleEditUser} onDelete={(id: string) => { setUserToDelete(id); setShowDeleteModal(true); }} isUpdating={isUpdatingOrder} />
            <RoleSection title="Tech Team" users={techUsers} role="tech" onDragEnd={handleDragEnd} onEdit={handleEditUser} onDelete={(id: string) => { setUserToDelete(id); setShowDeleteModal(true); }} isUpdating={isUpdatingOrder} />
            <RoleSection title="Business Development" users={businessUsers} role="business_development" onDragEnd={handleDragEnd} onEdit={handleEditUser} onDelete={(id: string) => { setUserToDelete(id); setShowDeleteModal(true); }} isUpdating={isUpdatingOrder} />
          </div>
        )}
      </motion.div>
    </div>
  );
};

const RoleSection = ({ title, users, role, onDragEnd, onEdit, onDelete, isUpdating }: any) => {
  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));

  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-[#5A4C33] flex items-center">
          {title}
          <span className="ml-3 bg-[#D2A02A]/10 text-[#D2A02A] text-xs px-2.5 py-1 rounded-full border border-[#D2A02A]/20">
            {users.length}
          </span>
        </h3>
        <p className="text-xs text-gray-400 italic">Drag rows to reorder</p>
      </div>

      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={(event) => onDragEnd(event, role)}>
            <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-sm border border-gray-100">
              <thead className="bg-[#F0EAD6]/50">
                <tr>
                  {['Sort', 'Image', 'Name', 'Position', 'Actions'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-[10px] font-bold text-[#5A4C33] uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <SortableContext items={users.map((u: any) => u.id)} strategy={verticalListSortingStrategy}>
                  {users.map((user: any) => (
                    <SortableTableRow key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} isUpdating={isUpdating} />
                  ))}
                </SortableContext>
              </tbody>
            </table>
          </DndContext>
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-lg border border-dashed border-gray-200">
          <p className="text-gray-400 text-sm">No members added to {title}</p>
        </div>
      )}
    </div>
  );
};

const SortableTableRow = ({ user, onEdit, onDelete, isUpdating }: any) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: user.id, disabled: isUpdating });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    boxShadow: isDragging ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'
  };

  return (
    <tr ref={setNodeRef} style={style} className={`hover:bg-[#F8F5EC]/50 transition-colors ${isDragging ? 'bg-white' : ''}`}>
      <td className="px-6 py-4">
        <button {...attributes} {...listeners} className="text-gray-400 hover:text-[#D2A02A] cursor-grab active:cursor-grabbing p-1">
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
      </td>
      <td className="px-6 py-4">
        {user.image ? (
          <img src={user.image} alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-50" />
        ) : (
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
            <FontAwesomeIcon icon={faUser} />
          </div>
        )}
      </td>
      <td className="px-6 py-4 font-medium text-[#5A4C33]">{user.name}</td>
      <td className="px-6 py-4 text-[#5A4C33]/70">{user.position}</td>
      <td className="px-6 py-4">
        <div className="flex space-x-3">
          <button onClick={() => onEdit(user)} className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
          <button onClick={() => onDelete(user.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default UsersDashboard;