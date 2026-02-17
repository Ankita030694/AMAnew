'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faEye, faTrash, faTimes, faFileDownload, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../../lib/firebase';
import { useRouter } from 'next/navigation';

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

const CareersAdmin = () => {
  const [activeTab, setActiveTab] = useState('careers');
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('All Positions');
  const [selectedApp, setSelectedApp] = useState<CareerApplication | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const router = useRouter();

  const POSITION_OPTIONS = [
    'All Positions',
    'Business Development Associate',
    'Legal Associate',
    'SDE Intern'
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push('/login');
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      }
    };
    fetchData();
  }, []);

  const handleNavigation = (itemId: string) => {
    if (itemId === 'home') router.push('/admin/dashboard');
    else if (itemId === 'users') router.push('/admin/users');
    else if (itemId === 'blogs') router.push('/admin/blogs');
    else if (itemId === 'articles') router.push('/admin/articles');
    else if (itemId === 'amalive') router.push('/admin/amalive');
    else if (itemId === 'careers') setActiveTab('careers');
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDeleting === id) return;
    if (confirm('Are you sure you want to delete this application?')) {
      setIsDeleting(id);
      try {
        await deleteDoc(doc(db, 'careers', id));
        setApplications(prev => prev.filter(item => item.id !== id));
        alert('Application deleted successfully!');
      } catch (error) {
        alert('Failed to delete application.');
      } finally {
        setIsDeleting(null);
      }
    }
  };

  const truncateText = (text: string, maxLength: number = 25) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-[#F8F5EC] flex flex-col mt-20">
      <div className="flex-1 p-6 z-10">
        <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#D2A02A] mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#5A4C33]">Career Applications</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mt-2"></div>
          </div>
          <button onClick={() => signOut(auth)} className="px-4 py-2 bg-red-500 text-white rounded-md font-medium">Logout</button>
        </div>

        <div className="grid grid-cols-6 gap-4 mb-6">
          {[
            { id: 'home', label: 'Leads', icon: faHome },
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
              className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-colors ${
                activeTab === item.id ? 'bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white' : 'bg-white text-[#5A4C33] hover:bg-[#F0EAD6]'
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-xl mb-2" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-lg p-6 shadow-md">
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
              <thead className="bg-[#F0EAD6]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase">Position</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase">Location</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase">Resume</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications
                  .filter(app => selectedFilter === 'All Positions' || app.position === selectedFilter)
                  .map(app => (
                    <tr key={app.id} className="hover:bg-[#F8F5EC] cursor-pointer" onClick={() => { setSelectedApp(app); setShowViewModal(true); }}>
                      <td className="px-4 py-4 text-sm text-[#5A4C33]">{app.formattedDate.split(',')[0]}</td>
                      <td className="px-4 py-4 text-sm font-bold text-[#5A4C33]">{app.name}</td>
                      <td className="px-4 py-4 text-sm text-blue-600 font-semibold">{app.position}</td>
                      <td className="px-4 py-4 text-sm text-[#5A4C33]">{app.location}</td>
                      <td className="px-4 py-4 text-sm">
                        <a href={app.resumeUrl} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="text-[#D2A02A] hover:underline flex items-center gap-1">
                          <FontAwesomeIcon icon={faFileDownload} /> PDF
                        </a>
                      </td>
                      <td className="px-4 py-4">
                        <button onClick={e => handleDelete(app.id, e)} className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {showViewModal && selectedApp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4" onClick={() => setShowViewModal(false)}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#5A4C33]">Application Details</h2>
              <button onClick={() => setShowViewModal(false)}><FontAwesomeIcon icon={faTimes} className="text-xl text-gray-400" /></button>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Name', value: selectedApp.name },
                { label: 'Email', value: selectedApp.email },
                { label: 'Phone', value: selectedApp.phone },
                { label: 'Location', value: selectedApp.location },
                { label: 'Position', value: selectedApp.position },
                { label: 'Applied At', value: selectedApp.formattedDate },
              ].map(item => (
                <div key={item.label}>
                  <label className="text-xs font-bold text-gray-400 uppercase">{item.label}</label>
                  <p className="text-[#5A4C33] font-medium">{item.value}</p>
                </div>
              ))}
              <div className="pt-4">
                <a href={selectedApp.resumeUrl} target="_blank" rel="noreferrer" className="block w-full text-center bg-[#D2A02A] text-white py-3 rounded-lg font-bold hover:bg-[#b58924] transition-colors">
                  View Full Resume (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CareersAdmin;
