'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSync, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase'; // adjust the path as needed
import { usePermissions } from '../../../hooks/usePermissions';

interface TableData {
  id: string;
  videoId: string;
  title: string;
  description?: string;
}

const AmaLiveDashboard = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [newVideo, setNewVideo] = useState({
    videoId: '',
    title: '',
    description: ''
  });
  const [editingVideo, setEditingVideo] = useState<TableData | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Use the permissions hook - admin required
  const { isLoading } = usePermissions('admin');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsRefreshing(true);
      const querySnapshot = await getDocs(collection(db, 'amalive'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        videoId: doc.data().videoId || '-',
        title: doc.data().title || '-',
        description: doc.data().description || '-'
      }));
      setTableData(data);
    } catch (error) {
      console.error("Error fetching Firebase data:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      try {
        await deleteDoc(doc(db, 'amalive', id));
        setTableData(prev => prev.filter(item => item.id !== id));
        alert('Video deleted successfully!');
      } catch (error) {
        console.error("Error deleting video:", error);
      }
    }
  };

  const handleEdit = (video: TableData) => {
    setEditingVideo(video);
    setNewVideo({
      videoId: video.videoId,
      title: video.title,
      description: video.description || ''
    });
    setShowVideoForm(true);
  };

  const handleSubmitVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVideo.videoId.trim()) return;
    
    try {
      if (editingVideo) {
        await updateDoc(doc(db, 'amalive', editingVideo.id), {
          ...newVideo,
          updatedAt: new Date().toISOString(),
        });
        setTableData(prev => prev.map(item => 
          item.id === editingVideo.id ? { ...item, ...newVideo } : item
        ));
      } else {
        await addDoc(collection(db, 'amalive'), {
          ...newVideo,
          timestamp: new Date().toISOString(),
        });
        await fetchData();
      }
      setNewVideo({ videoId: '', title: '', description: '' });
      setEditingVideo(null);
      setShowVideoForm(false);
    } catch (error) {
      console.error("Error saving video:", error);
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
      {/* Dashboard Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#D2A02A] mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#5A4C33]">AMA Live Sessions</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mt-2"></div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg p-6 shadow-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[#5A4C33]">
            {showVideoForm ? (editingVideo ? 'Edit Session' : 'Add New Session') : 'Managed Sessions'}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={fetchData}
              disabled={isRefreshing}
              className="p-2 bg-gray-100 text-[#5A4C33] rounded-md hover:bg-gray-200 disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faSync} className={isRefreshing ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={() => {
                setShowVideoForm(!showVideoForm);
                if (showVideoForm) { setEditingVideo(null); setNewVideo({ videoId: '', title: '', description: '' }); }
              }}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white rounded-md font-medium"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              {showVideoForm ? 'Back to List' : 'Add Video'}
            </button>
          </div>
        </div>

        {showVideoForm ? (
          <form onSubmit={handleSubmitVideo} className="space-y-6 max-w-2xl">
            <div>
              <label className="block text-sm font-medium text-[#5A4C33] mb-1">YouTube Video ID</label>
              <input
                type="text"
                value={newVideo.videoId}
                onChange={(e) => setNewVideo(prev => ({ ...prev, videoId: e.target.value }))}
                required
                className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#D2A02A]"
                placeholder="e.g. dQw4w9WgXcQ"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#5A4C33] mb-1">Video Title</label>
              <input
                type="text"
                value={newVideo.title}
                onChange={(e) => setNewVideo(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#D2A02A]"
                placeholder="Enter a title for this session"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#5A4C33] mb-1">Description</label>
              <textarea
                value={newVideo.description}
                onChange={(e) => setNewVideo(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#D2A02A]"
                placeholder="Session details..."
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => { setShowVideoForm(false); setEditingVideo(null); }}
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white rounded-md font-medium"
              >
                {editingVideo ? 'Update Video' : 'Save Video'}
              </button>
            </div>
          </form>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#F0EAD6]/50">
                <tr>
                  {['Preview', 'Title', 'Actions'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-[10px] font-bold text-[#5A4C33] uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {tableData.map((video) => (
                  <tr key={video.id} className="hover:bg-[#F8F5EC]/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-40 aspect-video rounded-md overflow-hidden shadow-sm">
                        <img 
                          src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-[#5A4C33]">{video.title}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-3">
                        <button onClick={() => handleEdit(video)} className="text-blue-600 hover:text-blue-800">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={() => handleDelete(video.id)} className="text-red-600 hover:text-red-800">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {tableData.length === 0 && (
              <div className="text-center py-10 text-gray-400">No sessions recorded yet</div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AmaLiveDashboard;
