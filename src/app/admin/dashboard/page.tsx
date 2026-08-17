'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faEye, faTrash, faTimes, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc, query, orderBy, limit, startAfter } from 'firebase/firestore';
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
  submissionUrl?: string;
  paymentStatus?: string;
}

interface FirebaseError {
  code: string;
  message: string;
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

  // Pagination state
  const [loading, setLoading] = useState(false);
  const lastVisibleRef = React.useRef<any>(null);
  const hasMoreRef = React.useRef(true);
  const loadingRef = React.useRef(false);

  const fetchLeads = async (isLoadMore = false) => {
    if (loadingRef.current) return;
    if (isLoadMore && !hasMoreRef.current) return;
    
    loadingRef.current = true;
    setLoading(true);
    
    try {
      let q;
      if (isLoadMore && lastVisibleRef.current) {
        q = query(collection(db, 'form'), orderBy('timestamp', 'desc'), startAfter(lastVisibleRef.current), limit(50));
      } else {
        q = query(collection(db, 'form'), orderBy('timestamp', 'desc'), limit(50));
      }

      const querySnapshot = await getDocs(q);
      
      const data = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        
        const originalTimestamp = docData.timestamp;
        
        let timestamp = '-';
        if (docData.timestamp) {
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
          originalTimestamp: originalTimestamp,
          submissionUrl: docData.submissionUrl || '-',
          paymentStatus: docData.paymentStatus || 'Pending'
        };
      });

      if (isLoadMore) {
        setTableData(prev => [...prev, ...data]);
      } else {
        setTableData(data);
      }

      if (querySnapshot.docs.length > 0) {
        lastVisibleRef.current = querySnapshot.docs[querySnapshot.docs.length - 1];
      }

      hasMoreRef.current = querySnapshot.docs.length === 50;
    } catch (error) {
      const firebaseError = error as FirebaseError;
      console.error("Error fetching Firebase data:", firebaseError);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  };

  // Fetch Firebase data from the "form" collection
  useEffect(() => {
    fetchLeads();
  }, []);

  const observer = React.useRef<IntersectionObserver | null>(null);
  const lastElementRef = React.useCallback((node: HTMLTableRowElement | null) => {
    if (loadingRef.current) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMoreRef.current) {
        fetchLeads(true);
      }
    });
    
    if (node) observer.current.observe(node);
  }, []);

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

  const truncateWords = (text: string, maxWords: number = 2) => {
    if (!text || text === '-') return text;
    const words = text.trim().split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative"
    >
      {/* Dashboard Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#D2A02A] mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#5A4C33]">Leads Overview</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mt-2"></div>
        </div>
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
                <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-32">
                  Name & Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-24">
                  Payment Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-24">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-24">
                  Service Required
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-64">
                  Submission URL
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-24">
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
                    {filteredData.map((row, index) => {
                      const isLastElement = index === filteredData.length - 1;
                      return (
                        <tr 
                          key={row.id} 
                          ref={isLastElement ? lastElementRef : null}
                          className="hover:bg-[#F8F5EC] transition-colors duration-150 cursor-pointer"
                          onClick={() => handleRowClick(row)}
                        >
                    <td className="px-4 py-4 text-sm font-medium text-[#5A4C33]">
                      {truncateText(row.timestamp, 20)}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#5A4C33]">
                      <div className="font-semibold">{truncateText(row.name, 20)}</div>
                      <div className="text-xs text-gray-500 mt-1">{truncateText(row.email, 25)}</div>
                    </td>
                    <td className="px-4 py-4 text-sm text-[#5A4C33]">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        row.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 
                        row.paymentStatus === 'Failed' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {row.paymentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-[#5A4C33]">
                      {truncateText(row.phone, 15)}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#5A4C33]">
                      {truncateText(row.serviceRequired, 20)}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#5A4C33]">
                      <a href={row.submissionUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all" onClick={(e) => e.stopPropagation()}>
                        {row.submissionUrl || '-'}
                      </a>
                    </td>
                    <td className="px-4 py-4 text-sm text-[#5A4C33]">
                      {truncateWords(row.message, 2)}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#5A4C33]">
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRowClick(row);
                          }}
                          className="px-3 py-1 text-white rounded-md text-xs flex items-center space-x-1 bg-blue-500 hover:bg-blue-600"
                        >
                          <FontAwesomeIcon icon={faEye} className="text-xs" />
                          <span>View</span>
                        </motion.button>
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
                );
              })}
              {loading && (
                <tr>
                  <td colSpan={8} className="px-4 py-4 text-center text-sm text-gray-500 font-medium">
                    <div className="flex justify-center items-center space-x-2">
                      <div className="w-4 h-4 rounded-full border-2 border-[#D2A02A] border-t-transparent animate-spin"></div>
                      <span>Loading leads...</span>
                    </div>
                  </td>
                </tr>
              )}
              {!loading && hasMoreRef.current && filteredData.length === 0 && tableData.length > 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-4 text-center">
                    <button onClick={() => fetchLeads(true)} className="px-4 py-2 bg-[#D2A02A] hover:bg-[#b88a24] text-white rounded-md transition-colors text-sm font-medium">
                      Load More Leads
                    </button>
                  </td>
                </tr>
              )}
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
                Showing <span className="font-medium">{filteredData.length}</span> loaded leads
                {!hasMoreRef.current && <span> (All leads loaded)</span>}
              </div>
            );
          })()}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Status</label>
                  <div className="p-3 bg-gray-50 rounded-md text-[#5A4C33]">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      selectedLead.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 
                      selectedLead.paymentStatus === 'Failed' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {selectedLead.paymentStatus}
                    </span>
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

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Submission URL</label>
                  <div className="p-3 bg-gray-50 rounded-md text-[#5A4C33]">
                    <a href={selectedLead.submissionUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">
                      {selectedLead.submissionUrl}
                    </a>
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
    </motion.div>
  );
};

export default AdminDashboard;
