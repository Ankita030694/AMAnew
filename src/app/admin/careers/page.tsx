'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faTimes, faFileDownload, faSync } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { usePermissions } from '../../../hooks/usePermissions';

interface CareerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  position: string;
  resumeUrl: string;
  appliedAt: any;
  formattedDate: string;
}

const CareersDashboard = () => {
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('All Positions');
  const [selectedApp, setSelectedApp] = useState<CareerApplication | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const { isLoading } = usePermissions('admin');

  const POSITION_OPTIONS = [
    'All Positions',
    'Business Development Associate',
    'Legal Associate',
    'SDE Intern'
  ];

  const fetchData = async () => {
    try {
      setIsRefreshing(true);
      const querySnapshot = await getDocs(collection(db, 'careers'));
      const data = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        let formattedDate = '-';
        if (docData.appliedAt) {
          formattedDate = docData.appliedAt.toDate ? 
            docData.appliedAt.toDate().toLocaleString() : 
            docData.appliedAt;
        }
        
        return {
          id: doc.id,
          name: docData.name || '-',
          email: docData.email || '-',
          phone: docData.phone || '-',
          location: docData.location || '-',
          position: docData.position || '-',
          resumeUrl: docData.resumeUrl || '',
          appliedAt: docData.appliedAt,
          formattedDate: formattedDate
        };
      });

      data.sort((a, b) => {
        const timeA = a.appliedAt?.toDate ? a.appliedAt.toDate().getTime() : 0;
        const timeB = b.appliedAt?.toDate ? b.appliedAt.toDate().getTime() : 0;
        return timeB - timeA;
      });
      
      setApplications(data);
    } catch (error) {
      console.error("Error fetching careers data:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this application?')) {
      try {
        await deleteDoc(doc(db, 'careers', id));
        setApplications(prev => prev.filter(item => item.id !== id));
        alert('Application deleted successfully!');
      } catch (error) {
        alert('Failed to delete application.');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-20">
        <div className="w-10 h-10 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#D2A02A] mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#5A4C33]">Career Applications</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mt-2"></div>
        </div>
        <button
          onClick={fetchData}
          disabled={isRefreshing}
          className="p-3 bg-gray-100 text-[#5A4C33] rounded-full hover:bg-gray-200 transition-colors"
        >
          <FontAwesomeIcon icon={faSync} className={isRefreshing ? 'animate-spin' : ''} />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg p-6 shadow-md"
      >
        <div className="mb-6 flex items-center gap-4">
          <label className="text-sm font-medium text-[#5A4C33]">Filter by Position:</label>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="bg-[#F8F5EC] text-[#5A4C33] px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#D2A02A]"
          >
            {POSITION_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#F0EAD6]/50">
              <tr>
                {['Date', 'Name', 'Position', 'Location', 'Resume', 'Actions'].map((h) => (
                  <th key={h} className="px-6 py-4 text-left text-[10px] font-bold text-[#5A4C33] uppercase tracking-widest">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {applications
                .filter(app => selectedFilter === 'All Positions' || app.position === selectedFilter)
                .map(app => (
                  <tr key={app.id} className="hover:bg-[#F8F5EC]/30 transition-colors group cursor-pointer" onClick={() => { setSelectedApp(app); setShowViewModal(true); }}>
                    <td className="px-6 py-4 text-sm text-[#5A4C33]/70">{app.formattedDate.split(',')[0]}</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#5A4C33]">{app.name}</td>
                    <td className="px-6 py-4 text-sm text-blue-600 font-semibold">{app.position}</td>
                    <td className="px-6 py-4 text-sm text-[#5A4C33]/70">{app.location}</td>
                    <td className="px-6 py-4">
                      <a href={app.resumeUrl} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="text-[#D2A02A] hover:underline flex items-center gap-1 font-medium">
                        <FontAwesomeIcon icon={faFileDownload} /> PDF
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button onClick={e => handleDelete(app.id, e)} className="text-red-500 hover:text-red-700">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {applications.length === 0 && (
            <div className="text-center py-10 text-gray-400">No applications found.</div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {showViewModal && selectedApp && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4" onClick={() => setShowViewModal(false)}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8" 
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-2xl font-bold text-[#5A4C33]">Application Details</h2>
                <button onClick={() => setShowViewModal(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Name', value: selectedApp.name },
                  { label: 'Email', value: selectedApp.email },
                  { label: 'Phone', value: selectedApp.phone },
                  { label: 'Location', value: selectedApp.location },
                  { label: 'Position', value: selectedApp.position },
                  { label: 'Applied At', value: selectedApp.formattedDate },
                ].map(item => (
                  <div key={item.label}>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</label>
                    <p className="text-[#5A4C33] font-medium break-all">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href={selectedApp.resumeUrl} target="_blank" rel="noreferrer" className="block w-full text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                  View Full Resume (PDF)
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareersDashboard;
