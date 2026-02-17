'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faEye, faTrash, faTimes, faBriefcase } from '@fortawesome/free-solid-svg-icons';
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
  serviceRequired: string;
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
  const [selectedFilter, setSelectedFilter] = useState('All Leads');
  const [selectedLead, setSelectedLead] = useState<TableData | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const router = useRouter();

  const FILTER_OPTIONS = [
    'All Leads',
    'Loan Settlement',
    'Other than Loan Settlement',
    'IPR/Trademark/Copyright/Patent',
    'Arbitration',
    'Drafting',
    'Real Estate',
    'Entertainment Law',
    'Corporate Law',
    'Cyber and IT Law',
    'Litigation',
    'Civil/Family/Divorce',
  ];

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
            serviceRequired: docData.serviceRequired || '-',
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
    }else if (itemId === 'careers'){
        router.push('/admin/careers')
    }else{
        setActiveTab(itemId);
    }
  };

  // Handle row click to open view modal
  const handleRowClick = (lead: TableData) => {
    setSelectedLead(lead);
    setShowViewModal(true);
  };

  // Close view modal
  const closeViewModal = () => {
    setShowViewModal(false);
    setSelectedLead(null);
  };

  // Handle document deletion with enhanced confirmation
  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent row click when clicking delete button
    
    if (isDeleting === id) return; // Prevent multiple clicks
    
    const lead = tableData.find(item => item.id === id);
    const confirmMessage = `Are you sure you want to delete the lead for "${lead?.name}"?\n\nThis action cannot be undone.`;
    
    if (confirm(confirmMessage)) {
      setIsDeleting(id);
      try {
        // Delete the document from Firestore
        await deleteDoc(doc(db, 'form', id));
        
        // Update the local state by filtering out the deleted document
        setTableData(prevData => prevData.filter(item => item.id !== id));
        
        // Show success message
        alert('Lead deleted successfully!');
      } catch (error) {
        const firebaseError = error as FirebaseError;
        console.error("Error deleting document:", firebaseError);
        alert('Failed to delete lead: ' + firebaseError.message);
      } finally {
        setIsDeleting(null);
      }
    }
  };

  // Truncate text for table display
  const truncateText = (text: string, maxLength: number = 50) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
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
              { id: 'amalive', label: 'AMA Live', icon: faCog },
              { id: 'careers', label: 'Careers', icon: faBriefcase }
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
            {/* Filter Dropdown */}
            <div className="mb-6 flex items-center gap-4">
              <label htmlFor="serviceFilter" className="text-sm font-medium text-[#5A4C33]">
                Filter by Service:
              </label>
              <div className="relative w-64">
                <select
                  id="serviceFilter"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="w-full bg-[#F8F5EC] text-[#5A4C33] px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#D2A02A] transition-colors appearance-none"
                >
                  {FILTER_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#5A4C33]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F0EAD6]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-32">
                      Date & Time
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-24">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-32">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-24">
                      Phone
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-24">
                      Service Required
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-20">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {(() => {
                    const filteredData = tableData.filter((row) => {
                      if (selectedFilter === 'All Leads') return true;
                      if (selectedFilter === 'Other than Loan Settlement') {
                        return row.serviceRequired !== 'Loan Settlement';
                      }
                      return row.serviceRequired === selectedFilter;
                    });

                    return (
                      <>
                        {filteredData.map((row) => (
                          <tr 
                            key={row.id} 
                            className="hover:bg-[#F8F5EC] transition-colors duration-150 cursor-pointer"
                            onClick={() => handleRowClick(row)}
                          >
                            <td className="px-4 py-4 text-sm font-medium text-[#5A4C33]">
                              {truncateText(row.timestamp, 20)}
                            </td>
                            <td className="px-4 py-4 text-sm text-[#5A4C33]">
                              {truncateText(row.name, 20)}
                            </td>
                            <td className="px-4 py-4 text-sm text-[#5A4C33]">
                              {truncateText(row.email, 25)}
                            </td>
                            <td className="px-4 py-4 text-sm text-[#5A4C33]">
                              {truncateText(row.phone, 15)}
                            </td>
                            <td className="px-4 py-4 text-sm text-[#5A4C33]">
                              {truncateText(row.serviceRequired, 20)}
                            </td>
                            <td className="px-4 py-4 text-sm text-[#5A4C33]">
                              {truncateText(row.message, 40)}
                            </td>
                            <td className="px-4 py-4 text-sm text-[#5A4C33]">
                              <div className="flex space-x-2">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => handleDelete(row.id, e)}
                                  disabled={isDeleting === row.id}
                                  className={`px-3 py-1 text-white rounded-md text-xs flex items-center space-x-1 ${
                                    isDeleting === row.id 
                                      ? 'bg-gray-400 cursor-not-allowed' 
                                      : 'bg-red-500 hover:bg-red-600'
                                  }`}
                                >
                                  <FontAwesomeIcon icon={faTrash} className="text-xs" />
                                  <span>{isDeleting === row.id ? 'Deleting...' : 'Delete'}</span>
                                </motion.button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </>
                    );
                  })()}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-between items-center">
              {(() => {
                const filteredData = tableData.filter((row) => {
                  if (selectedFilter === 'All Leads') return true;
                  if (selectedFilter === 'Other than Loan Settlement') {
                    return row.serviceRequired !== 'Loan Settlement';
                  }
                  return row.serviceRequired === selectedFilter;
                });
                return (
                  <div className="text-sm text-[#5A4C33]">
                    Showing <span className="font-medium">{filteredData.length > 0 ? 1 : 0}</span> to <span className="font-medium">{filteredData.length}</span> of <span className="font-medium">{filteredData.length}</span> results
                  </div>
                );
              })()}
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

      {/* View Modal */}
      {showViewModal && selectedLead && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeViewModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#5A4C33]">Lead Details</h2>
              <button
                onClick={closeViewModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <div className="p-3 bg-gray-50 rounded-md text-[#5A4C33]">
                    {selectedLead.name}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="p-3 bg-gray-50 rounded-md text-[#5A4C33]">
                    {selectedLead.email}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="p-3 bg-gray-50 rounded-md text-[#5A4C33]">
                    {selectedLead.phone}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                  <div className="p-3 bg-gray-50 rounded-md text-[#5A4C33]">
                    {selectedLead.timestamp}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <div className="p-3 bg-gray-50 rounded-md text-[#5A4C33]">
                    {selectedLead.serviceRequired}
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <div className="p-4 bg-gray-50 rounded-md text-[#5A4C33] whitespace-pre-wrap min-h-[100px]">
                  {selectedLead.message}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeViewModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md font-medium"
              >
                Close
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleDelete(selectedLead.id, e)}
                disabled={isDeleting === selectedLead.id}
                className={`px-4 py-2 text-white rounded-md font-medium flex items-center space-x-2 ${
                  isDeleting === selectedLead.id 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                <FontAwesomeIcon icon={faTrash} />
                <span>{isDeleting === selectedLead.id ? 'Deleting...' : 'Delete Lead'}</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AdminDashboard;
