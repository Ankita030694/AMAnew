'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faEye, faTrash, faTimes, faBriefcase, faClock, faCheckCircle, faExclamationCircle, faUserCheck, faSync } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc, query, where, addDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../../lib/firebase'; // adjust the path as needed
import { useRouter } from 'next/navigation';

// Define the TableData interface for Pending Leads
interface TableData {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceRequired: string;
  otp: string;
  source: string;
  submissionUrl?: string;
  createdAt: string;
  expiresAt: string;
  originalCreatedAt: any;
  isVerified: boolean;
}

interface FirebaseError {
  code: string;
  message: string;
}

const PendingLeadsDashboard = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [selectedLead, setSelectedLead] = useState<TableData | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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

  // Fetch Firebase data from the "pending_leads" and "form" collections
  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Fetch both collections
      const [pendingSnapshot, formSnapshot] = await Promise.all([
        getDocs(collection(db, 'pending_leads')),
        getDocs(collection(db, 'form'))
      ]);

      // Create a set of verified phones from the "form" collection
      const verifiedPhones = new Set();
      formSnapshot.docs.forEach(doc => {
        const phone = doc.data().phone;
        if (phone) verifiedPhones.add(phone.toString().trim());
      });

      const data = pendingSnapshot.docs.map(doc => {
        const docData = doc.data();
        
        // Store original timestamp for sorting
        const originalCreatedAt = docData.createdAt;
        
        // Format timestamps
        let createdAt = '-';
        if (docData.createdAt) {
          createdAt = docData.createdAt.toDate ? 
            docData.createdAt.toDate().toLocaleString() : 
            docData.createdAt;
        }

        let expiresAt = '-';
        if (docData.expiresAt) {
          expiresAt = docData.expiresAt.toDate ? 
            docData.expiresAt.toDate().toLocaleString() : 
            docData.expiresAt;
        }

        // Check if verified (exists in form collection)
        const phone = docData.phone ? docData.phone.toString().trim() : '';
        const isVerified = phone ? verifiedPhones.has(phone) : false;
        
        return {
          id: doc.id,
          name: docData.name || '-',
          email: docData.email || '-',
          message: docData.message || '-',
          phone: docData.phone || '-',
          serviceRequired: docData.serviceRequired || '-',
          otp: docData.otp || '-',
          source: docData.source || '-',
          submissionUrl: docData.submissionUrl || '-',
          createdAt: createdAt,
          expiresAt: expiresAt,
          originalCreatedAt: originalCreatedAt,
          isVerified: isVerified
        };
      });

      // Sort data by createdAt in descending order (newest first)
      data.sort((a, b) => {
        if (!a.originalCreatedAt) return 1;
        if (!b.originalCreatedAt) return -1;
        
        const timeA = a.originalCreatedAt.toDate ? a.originalCreatedAt.toDate().getTime() : 0;
        const timeB = b.originalCreatedAt.toDate ? b.originalCreatedAt.toDate().getTime() : 0;
        
        return timeB - timeA; // Descending order
      });
      
      setTableData(data);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      console.error("Error fetching Pending Leads:", firebaseError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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

  // Handle lead verification and transfer to main database
  const handleVerify = async (lead: TableData, e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); // Prevent row click when clicking verify button
    
    if (isVerifying === lead.id) return;
    
    setIsVerifying(lead.id);
    
    try {
      // 1. Check for duplicate in main database (form collection)
      const q = query(collection(db, 'form'), where('phone', '==', lead.phone.toString().trim()));
      const querySnapshot = await getDocs(q);
      
      let proceed = true;
      
      if (!querySnapshot.empty) {
        // Lead already exists
        const existingLead = querySnapshot.docs[0].data();
        let existingDate = 'unknown date';
        
        if (existingLead.timestamp) {
          existingDate = existingLead.timestamp.toDate ? 
            existingLead.timestamp.toDate().toLocaleString() : 
            new Date(existingLead.timestamp).toLocaleString();
        }
        
        proceed = confirm(
          `A lead with this phone number (${lead.phone}) already exists in the main database.\n\n` +
          `Original Entry Date: ${existingDate}\n\n` +
          `Do you still want to verify and move this lead to the main database?`
        );
      }
      
      if (proceed) {
        // 2. Map data to form collection format
        const mainLeadData = {
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          serviceRequired: lead.serviceRequired,
          message: lead.message,
          source: lead.source,
          submissionUrl: lead.submissionUrl || '',
          timestamp: serverTimestamp(),
          verifiedFromPending: true, // Tag it as verified from pending
          originalPendingId: lead.id
        };
        
        // 3. Add to "form" collection
        await addDoc(collection(db, 'form'), mainLeadData);
        
        // 4. Delete from "pending_leads" collection
        await deleteDoc(doc(db, 'pending_leads', lead.id));
        
        // 5. Update local state
        setTableData(prevData => prevData.filter(item => item.id !== lead.id));
        
        if (showViewModal) closeViewModal();
        
        alert('Lead verified and moved to main database successfully!');
      }
    } catch (error) {
      const firebaseError = error as FirebaseError;
      console.error("Error verifying lead:", firebaseError);
      alert('Failed to verify lead: ' + firebaseError.message);
    } finally {
      setIsVerifying(null);
    }
  };

  // Handle document deletion
  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent row click when clicking delete button
    
    if (isDeleting === id) return; // Prevent multiple clicks
    
    const lead = tableData.find(item => item.id === id);
    const confirmMessage = `Are you sure you want to delete the pending lead for "${lead?.name}"?\n\nThis action cannot be undone.`;
    
    if (confirm(confirmMessage)) {
      setIsDeleting(id);
      try {
        await deleteDoc(doc(db, 'pending_leads', id));
        setTableData(prevData => prevData.filter(item => item.id !== id));
        alert('Pending lead deleted successfully!');
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
    if (typeof text !== 'string') return '-';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative"
    >
      {/* Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#D2A02A] mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#5A4C33]">Pending Leads</h1>
          <p className="text-gray-500 mt-1">Leads from the verification queue</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mt-2"></div>
        </div>
        <button 
          onClick={fetchData}
          className="px-4 py-2 bg-[#F8F5EC] text-[#5A4C33] rounded-lg border border-gray-200 hover:border-[#D2A02A] transition-colors"
        >
          Refresh Data
        </button>
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
                <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-32">
                  Created At
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
                  Service
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-24">
                  Source
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider w-20">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-gray-400">
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D2A02A] mb-2"></div>
                      <span>Loading leads...</span>
                    </div>
                  </td>
                </tr>
              ) : tableData.length > 0 ? (
                tableData.map((row) => (
                  <tr 
                    key={row.id} 
                    className="hover:bg-[#F8F5EC] transition-colors duration-150 cursor-pointer"
                    onClick={() => handleRowClick(row)}
                  >
                    <td className="px-4 py-4 text-sm font-medium text-[#5A4C33]">
                      {truncateText(row.createdAt, 20)}
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
                      {truncateText(row.source, 15)}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#5A4C33]">
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => handleVerify(row, e)}
                          disabled={isVerifying === row.id || isDeleting === row.id}
                          className={`px-3 py-1 text-white rounded-md text-xs flex items-center space-x-1 ${
                            isVerifying === row.id 
                              ? 'bg-gray-400 cursor-not-allowed' 
                              : 'bg-green-600 hover:bg-green-700'
                          }`}
                        >
                          <FontAwesomeIcon icon={isVerifying === row.id ? faSync : faUserCheck} className={`text-xs ${isVerifying === row.id ? 'animate-spin' : ''}`} />
                          <span>{isVerifying === row.id ? '...' : 'Verify'}</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => handleDelete(row.id, e)}
                          disabled={isDeleting === row.id || isVerifying === row.id}
                          className={`px-3 py-1 text-white rounded-md text-xs flex items-center space-x-1 ${
                            isDeleting === row.id 
                              ? 'bg-gray-400 cursor-not-allowed' 
                              : 'bg-red-500 hover:bg-red-600'
                          }`}
                        >
                          <FontAwesomeIcon icon={faTrash} className="text-xs" />
                          <span>{isDeleting === row.id ? '...' : 'Delete'}</span>
                        </motion.button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-gray-400">
                    No pending leads found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
              <h2 className="text-2xl font-bold text-[#5A4C33]">Pending Lead Details</h2>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Verification Status</label>
                  <div className={`p-3 rounded-md font-bold flex items-center ${selectedLead.isVerified ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    <FontAwesomeIcon icon={selectedLead.isVerified ? faCheckCircle : faExclamationCircle} className="mr-2" />
                    {selectedLead.isVerified ? 'Verified (Exists in main leads)' : 'Pending (Not yet verified)'}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">OTP Code</label>
                  <div className="p-3 bg-orange-50 border border-orange-100 rounded-md text-orange-700 font-bold text-lg">
                    {selectedLead.otp}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Created At</label>
                  <div className="p-3 bg-gray-50 rounded-md text-[#5A4C33]">
                    {selectedLead.createdAt}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expires At</label>
                  <div className="p-3 bg-red-50 text-red-700 rounded-md">
                    {selectedLead.expiresAt}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <div className="p-3 bg-gray-50 rounded-md text-[#5A4C33]">
                    {selectedLead.serviceRequired}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
                  <div className="p-3 bg-gray-50 rounded-md text-[#5A4C33]">
                    {selectedLead.source}
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
                onClick={(e) => handleVerify(selectedLead, e)}
                disabled={isVerifying === selectedLead.id || isDeleting === selectedLead.id}
                className={`px-4 py-2 text-white rounded-md font-medium flex items-center space-x-2 ${
                  isVerifying === selectedLead.id 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                <FontAwesomeIcon icon={isVerifying === selectedLead.id ? faSync : faUserCheck} className={isVerifying === selectedLead.id ? 'animate-spin' : ''} />
                <span>{isVerifying === selectedLead.id ? 'Verifying...' : 'Verify & Move to Main DB'}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleDelete(selectedLead.id, e)}
                disabled={isDeleting === selectedLead.id || isVerifying === selectedLead.id}
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

export default PendingLeadsDashboard;
