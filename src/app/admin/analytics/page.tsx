'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faLink, 
  faUsers, 
  faCalendarAlt, 
  faChevronRight,
  faArrowUp,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../../lib/firebase';
import { useRouter } from 'next/navigation';

interface LeadData {
  id: string;
  submissionUrl: string;
  serviceRequired: string;
  timestamp: any;
}

interface AnalyticsState {
  totalLeads: number;
  urlCounts: Record<string, number>;
  serviceCounts: Record<string, number>;
  leadsOverTime: Record<string, number>;
  loading: boolean;
}

const AnalyticsPage = () => {
  const [stats, setStats] = useState<AnalyticsState>({
    totalLeads: 0,
    urlCounts: {},
    serviceCounts: {},
    leadsOverTime: {},
    loading: true,
  });
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Update debounced search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 400); // 400ms debounce
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      setStats(prev => ({ ...prev, loading: true }));
      try {
        const response = await fetch(`/api/admin/analytics?q=${encodeURIComponent(debouncedSearch)}`);
        const data = await response.json();
        
        if (data.error) throw new Error(data.error);

        setStats({
          totalLeads: data.totalLeads,
          urlCounts: data.sources.reduce((acc: Record<string, number>, curr: any) => {
            acc[curr.url] = curr.count;
            return acc;
          }, {}),
          serviceCounts: {}, // Removed service interest section in previous step
          leadsOverTime: {}, 
          loading: false,
        });
      } catch (error) {
        console.error("SERVER API ERROR:", error);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchAnalytics();
  }, [debouncedSearch]);

  const filteredUrls = Object.entries(stats.urlCounts)
    .sort(([, a], [, b]) => b - a);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (stats.loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D2A02A]"></div>
      </div>
    );
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end bg-white p-8 rounded-2xl shadow-sm border-l-8 border-[#D2A02A] gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-[#5A4C33] tracking-tight">Source Attribution</h1>
          <p className="text-[#8B7E66] mt-2 font-medium">Track lead origin links and conversion performance</p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
          <div className="bg-[#5A4C33] px-6 py-2 rounded-xl text-white font-bold text-center">
            <span className="text-[#D2A02A] text-2xl mr-2">{stats.totalLeads}</span>
            <span className="text-xs uppercase tracking-widest opacity-80">Total Leads Captured</span>
          </div>
          <div className="text-[10px] font-bold text-[#8B7E66] uppercase tracking-[0.2em] pr-2">
            Updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Link Attribution Searchable Table */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl border border-[#E5E1D1] overflow-hidden">
        <div className="p-8 border-b border-[#E5E1D1] bg-[#FDFCF9]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <h2 className="text-2xl font-bold text-[#5A4C33] flex items-center">
              <FontAwesomeIcon icon={faLink} className="mr-4 text-[#D2A02A]" />
              Link Performance Analysis
            </h2>
            
            {/* Search Input */}
            <div className="relative group w-full lg:w-96">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8B7E66] group-focus-within:text-[#D2A02A] transition-colors">
                <FontAwesomeIcon icon={faFilter} className="text-sm" />
              </div>
              <input
                type="text"
                placeholder="Search leads by source link..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border-2 border-[#E5E1D1] focus:border-[#D2A02A] rounded-xl py-3 pl-12 pr-4 text-[#5A4C33] placeholder-[#8B7E66]/50 font-medium outline-none transition-all shadow-sm focus:shadow-md"
              />
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F8F5EC]">
              <tr>
                <th className="py-5 px-8 text-xs font-black text-[#8B7E66] uppercase tracking-[0.2em]">Source Link (URL)</th>
                <th className="py-5 px-8 text-xs font-black text-[#8B7E66] uppercase tracking-[0.2em] text-center w-40">Representation</th>
                <th className="py-5 px-8 text-xs font-black text-[#8B7E66] uppercase tracking-[0.2em] text-right w-40">Lead Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1EFE0]">
              {filteredUrls.length > 0 ? (
                filteredUrls.map(([url, count], index) => {
                  const percentage = (count / stats.totalLeads) * 100;
                  return (
                    <motion.tr 
                      key={url}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-[#FDFCF9] transition-all group"
                    >
                      <td className="py-6 px-8">
                        <div className="flex flex-col">
                          <a 
                            href={url.startsWith('http') ? url : `https://${url}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-sm font-bold text-[#5A4C33] hover:text-[#D2A02A] transition-colors break-all leading-relaxed"
                          >
                            {url}
                            <FontAwesomeIcon icon={faChevronRight} className="ml-2 text-[10px] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                          </a>
                        </div>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <div className="flex flex-col items-center gap-2">
                           <div className="w-24 bg-[#E5E1D1] rounded-full h-1.5 overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-[#D2A02A] rounded-full"
                              />
                           </div>
                           <span className="text-[10px] font-black text-[#8B7E66]">{percentage.toFixed(1)}%</span>
                        </div>
                      </td>
                      <td className="py-6 px-8 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <span className="text-2xl font-black text-[#5A4C33]">{count}</span>
                          <div className="w-1.5 h-8 bg-[#D2A02A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </td>
                    </motion.tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={3} className="py-20 text-center">
                    <div className="flex flex-col items-center text-[#8B7E66]/40">
                      <FontAwesomeIcon icon={faFilter} size="3x" className="mb-4" />
                      <p className="text-lg font-bold text-[#8B7E66]">No links matching "{searchTerm}"</p>
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="mt-4 text-[#D2A02A] font-bold hover:underline"
                      >
                        Clear search filter
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Insight Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-[#E5E1D1] flex items-center space-x-6">
          <div className="w-16 h-16 bg-[#F8F5EC] rounded-2xl flex items-center justify-center text-[#D2A02A]">
            <FontAwesomeIcon icon={faChartLine} size="xl" />
          </div>
          <div>
            <p className="text-[#8B7E66] text-[10px] font-black uppercase tracking-widest">Efficiency Insight</p>
            <p className="text-sm font-bold text-[#5A4C33]">The platform is currently tracking <span className="text-[#D2A02A]">{Object.keys(stats.urlCounts).length}</span> unique lead sources across your ecosystem.</p>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-[#E5E1D1] flex items-center space-x-6">
          <div className="w-16 h-16 bg-[#5A4C33] rounded-2xl flex items-center justify-center text-[#D2A02A]">
            <FontAwesomeIcon icon={faUsers} size="xl" />
          </div>
           <div>
            <p className="text-[#8B7E66] text-[10px] font-black uppercase tracking-widest">Growth Metric</p>
            <p className="text-sm font-bold text-[#5A4C33]">Average of <span className="text-[#D2A02A]">{(stats.totalLeads / (Object.keys(stats.urlCounts).length || 1)).toFixed(1)}</span> leads per active source URL.</p>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E1D1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D2A02A;
        }
      `}</style>
    </motion.div>
  );
};

export default AnalyticsPage;
