'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faArrowLeft, faCheckCircle, faStar, faRobot, faCheck } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, writeBatch } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../../lib/firebase';
import { useRouter } from 'next/navigation';

interface PromptProfile {
  id?: string;
  name: string;
  description: string;
  coreInstructions: string;
  targetWordCount: number;
  isDefault: boolean;
  createdAt: number;
}

const PromptsDashboard = () => {
  const [prompts, setPrompts] = useState<PromptProfile[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [currentPrompt, setCurrentPrompt] = useState<PromptProfile>({
    name: '',
    description: '',
    coreInstructions: 'You are a professional legal SEO and AEO strategist. Write in a highly authoritative, informative, and professional tone suitable for a top-tier law firm.',
    targetWordCount: 3500,
    isDefault: false,
    createdAt: Date.now()
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Authentication Check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Fetch Prompts
  const fetchPrompts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'prompts'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<PromptProfile, 'id'>)
      }));
      // Sort by newest first
      data.sort((a, b) => b.createdAt - a.createdAt);
      setPrompts(data);
    } catch (error) {
      console.error("Error fetching prompts data:", error);
    }
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentPrompt(prev => ({
      ...prev,
      [name]: name === 'targetWordCount' ? parseInt(value) || 0 : value
    }));
  };

  const handleCancelForm = () => {
    setCurrentPrompt({
      name: '',
      description: '',
      coreInstructions: 'You are a professional legal SEO and AEO strategist. Write in a highly authoritative, informative, and professional tone suitable for a top-tier law firm.',
      targetWordCount: 3500,
      isDefault: false,
      createdAt: Date.now()
    });
    setFormMode('add');
    setShowForm(false);
  };

  const handleEdit = (prompt: PromptProfile) => {
    setCurrentPrompt(prompt);
    setFormMode('edit');
    setShowForm(true);
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (window.confirm('Are you sure you want to delete this prompt profile?')) {
      try {
        await deleteDoc(doc(db, 'prompts', id));
        setPrompts(prev => prev.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error deleting prompt:", error);
      }
    }
  };

  const handleSetDefault = async (promptId: string | undefined) => {
    if (!promptId) return;
    
    try {
      // Find current default and update it
      const currentDefault = prompts.find(p => p.isDefault);
      
      const batch = writeBatch(db);
      
      if (currentDefault && currentDefault.id !== promptId) {
        const oldRef = doc(db, 'prompts', currentDefault.id!);
        batch.update(oldRef, { isDefault: false });
      }
      
      const newRef = doc(db, 'prompts', promptId);
      batch.update(newRef, { isDefault: true });
      
      await batch.commit();
      
      // Refresh list
      fetchPrompts();
    } catch (error) {
      console.error("Error setting default prompt:", error);
      alert("Error setting default prompt.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      const promptData = { ...currentPrompt };
      
      // If this is set as default, we need to unset all others
      if (promptData.isDefault) {
        const snapshot = await getDocs(query(collection(db, 'prompts'), where('isDefault', '==', true)));
        const batch = writeBatch(db);
        snapshot.docs.forEach(docSnap => {
          if (docSnap.id !== promptData.id) {
            batch.update(docSnap.ref, { isDefault: false });
          }
        });
        if (snapshot.docs.length > 0) {
          await batch.commit();
        }
      }

      if (formMode === 'add') {
        promptData.createdAt = Date.now();
        
        // If it's the first prompt ever created, make it default automatically
        if (prompts.length === 0) {
          promptData.isDefault = true;
        }
        
        await addDoc(collection(db, 'prompts'), promptData);
      } else {
        if (promptData.id) {
          const { id, ...updateData } = promptData;
          await updateDoc(doc(db, 'prompts', id), updateData);
        }
      }
      
      handleCancelForm();
      fetchPrompts();
    } catch (error) {
      console.error("Error saving prompt:", error);
      alert("Error saving prompt.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-slate-50 min-h-screen text-slate-800 font-sans">
      <AnimatePresence>
        {!showForm ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-5 bg-white p-6 rounded-2xl shadow-3xs">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="text-amber-600"><FontAwesomeIcon icon={faRobot} /></span>
                  <span>AI Prompt Configurations</span>
                </h1>
                <p className="text-slate-400 text-xs mt-1 font-semibold">
                  Manage the core writing styles, tones, and target lengths used by the AI article generator.
                </p>
              </div>
              <button
                onClick={() => {
                  setFormMode('add');
                  setShowForm(true);
                }}
                className="bg-[#B8860B] hover:bg-[#9E7307] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-3xs"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>Create Prompt Profile</span>
              </button>
            </div>

            {/* List */}
            {prompts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-3xs border-dashed border-slate-200">
                <FontAwesomeIcon icon={faRobot} className="text-slate-300 text-4xl mb-4" />
                <p className="text-slate-400 text-sm italic">No AI Prompts found. Create one to start generating blogs.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-3xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Profile Details</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Target Words</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Status</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {prompts.map((prompt) => (
                        <tr key={prompt.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 max-w-md">
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-1">
                              {prompt.name}
                            </span>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1">{prompt.description}</p>
                          </td>
                          <td className="p-4">
                            <span className="text-[11px] font-mono bg-slate-100 border border-slate-150 text-slate-600 px-2 py-0.5 rounded-md">
                              ~{prompt.targetWordCount} words
                            </span>
                          </td>
                          <td className="p-4">
                            {prompt.isDefault ? (
                              <span className="px-2 py-0.5 bg-green-50 border border-green-200/50 rounded-md text-[10px] font-extrabold text-green-700 flex items-center gap-1 w-max">
                                <FontAwesomeIcon icon={faStar} /> Default
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 bg-slate-50 border border-slate-200/50 rounded-md text-[10px] font-extrabold text-slate-500 w-max inline-block">
                                Inactive
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {!prompt.isDefault && (
                                <button
                                  onClick={() => handleSetDefault(prompt.id)}
                                  className="px-3 h-8 rounded-lg hover:bg-green-50 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-green-600 transition-colors cursor-pointer text-[10px] font-bold uppercase tracking-wider"
                                  title="Set as Default"
                                >
                                  Set Default
                                </button>
                              )}
                              <button
                                onClick={() => handleEdit(prompt)}
                                className="w-8 h-8 rounded-lg hover:bg-slate-100 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-[#B8860B] transition-colors cursor-pointer"
                                title="Edit profile"
                              >
                                <FontAwesomeIcon icon={faEdit} className="text-xs" />
                              </button>
                              <button
                                onClick={() => handleDelete(prompt.id)}
                                disabled={prompt.isDefault}
                                className="w-8 h-8 rounded-lg hover:bg-red-50 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-red-600 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                                title={prompt.isDefault ? "Cannot delete default profile" : "Delete profile"}
                              >
                                <FontAwesomeIcon icon={faTrash} className="text-xs" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onSubmit={handleSubmit}
            className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm"
          >
            {/* Form Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCancelForm}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                </button>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    {formMode === 'add' ? 'Create New AI Prompt' : 'Edit AI Prompt Profile'}
                  </h2>
                  <p className="text-slate-400 text-xs mt-0.5 font-semibold">
                    Set up a single, reusable writing instruction and target word count.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-1.5 md:col-span-1">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Profile Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={currentPrompt.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Formal Legal Advice, Aggressive Marketing"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Target Word Count */}
              <div className="flex flex-col gap-1.5 md:col-span-1">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Target Word Count *</label>
                <input
                  type="number"
                  name="targetWordCount"
                  required
                  min={100}
                  step={100}
                  value={currentPrompt.targetWordCount}
                  onChange={handleInputChange}
                  placeholder="e.g. 3500"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
                <span className="text-[10px] text-slate-400 italic">The system will dynamically divide this across the generated subheadings.</span>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Internal Description</label>
                <input
                  type="text"
                  name="description"
                  value={currentPrompt.description}
                  onChange={handleInputChange}
                  placeholder="A short note on when to use this prompt..."
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>
              
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Core Style & Tone Instructions *</label>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold">Injects into all AI steps</span>
                </div>
                <textarea
                  name="coreInstructions"
                  required
                  rows={6}
                  value={currentPrompt.coreInstructions}
                  onChange={handleInputChange}
                  placeholder="e.g. You are writing for an elite corporate law firm. Maintain a highly professional, academic, yet accessible tone. Use powerful legal terminology appropriately but avoid unnecessary jargon. Do not use exclamation marks."
                  className="p-4 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm text-slate-700 bg-white"
                />
              </div>

              <div className="flex items-center gap-3 md:col-span-2 p-4 bg-slate-50 border border-slate-200 rounded-xl mt-2">
                <input
                  type="checkbox"
                  id="isDefault"
                  name="isDefault"
                  checked={currentPrompt.isDefault}
                  onChange={(e) => setCurrentPrompt(prev => ({ ...prev, isDefault: e.target.checked }))}
                  className="w-5 h-5 accent-[#B8860B] rounded cursor-pointer"
                />
                <label htmlFor="isDefault" className="text-sm font-bold text-slate-700 cursor-pointer">
                  Set as Default Profile
                </label>
                <span className="text-xs text-slate-500 ml-auto">(Will automatically be selected in the blog generator)</span>
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleCancelForm}
                className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-bold transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#B8860B] hover:bg-[#9E7307] text-white rounded-xl text-sm font-bold shadow-sm transition-colors cursor-pointer flex items-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">💫</span>
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>{formMode === 'add' ? 'Create Profile' : 'Update Profile'}</span>
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PromptsDashboard;
