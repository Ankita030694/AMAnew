'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../../lib/firebase'; // adjust the path as needed
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import('./TiptapEditor'), { 
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

// Define FAQ interface
interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

// Define Article interface with updated structure
interface Blog {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  faqs?: FAQ[]; // New field for FAQs
}

const ArticlesDashboard = () => {
  const [activeTab, setActiveTab] = useState('articles');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [newBlog, setNewBlog] = useState<Blog>({
    title: '',
    subtitle: '',
    description: '',
    date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
    image: '',
    created: Date.now(),
    metaTitle: '',
    metaDescription: '',
    slug: '',
    faqs: [] // Initialize empty FAQs array
  });
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

  // Navigation handler: Redirect for Blogs and Articles
  const handleNavigation = (itemId: string) => {
    if (itemId === 'blogs') {
      router.push('/admin/blogs');
    } else if (itemId === 'articles') {
      router.push('/admin/articles');
    } else if (itemId === 'home') {
      router.push('/admin/dashboard');
    } else if (itemId === 'users') {
      router.push('/admin/users');
    } else if (itemId === 'amalive') {
      router.push('/admin/amalive');
    } else {
      setActiveTab(itemId);
    }
  };

  // Fetch blogs data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'articles'));
        const data = querySnapshot.docs.map(doc => {
          const docData = doc.data();
          return {
            id: doc.id,
            title: docData.title || '',
            subtitle: docData.subtitle || '',
            description: docData.description || '',
            date: docData.date || '',
            image: docData.image || '',
            created: docData.created || Date.now(),
            metaTitle: docData.metaTitle || '',
            metaDescription: docData.metaDescription || '',
            slug: docData.slug || '',
            faqs: docData.faqs || []
          };
        });
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs data:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle blog form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBlog(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle Tiptap editor content changes
  const handleEditorChange = (content: string) => {
    setNewBlog(prevState => ({
      ...prevState,
      description: content
    }));
  };

  // Add FAQ to the article
  const addFaq = () => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }));
  };

  // Remove FAQ from the article
  const removeFaq = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index)
    }));
  };

  // Handle FAQ input changes
  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setNewBlog(prevState => {
      const updatedFaqs = [...(prevState.faqs || [])];
      updatedFaqs[index] = { 
        ...updatedFaqs[index], 
        [field]: value 
      };
      return {
        ...prevState,
        faqs: updatedFaqs
      };
    });
  };

  // Handle blog form submission (Create or Update)
  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add timestamp and format the date
      const blogWithMetadata = {
        ...newBlog,
        created: formMode === 'add' ? Date.now() : newBlog.created,
        date: new Date(newBlog.date).toISOString().split('T')[0] // Ensure date is in YYYY-MM-DD format
      };
      
      // Remove faqs from the main document since we'll store them in a subcollection
      const { faqs, ...blogData } = blogWithMetadata;
      
      let blogId = newBlog.id;
      
      if (formMode === 'add') {
        // Add to Firestore
        const docRef = await addDoc(collection(db, 'articles'), blogData);
        blogId = docRef.id;
      } else {
        // Update existing document
        if (blogId) {
          const blogRef = doc(db, 'articles', blogId);
          await updateDoc(blogRef, blogData);
        }
      }
      
      // Add FAQs to subcollection
      if (blogId && faqs && faqs.length > 0) {
        // First delete existing FAQs if updating
        if (formMode === 'edit') {
          const faqsSnapshot = await getDocs(collection(db, 'articles', blogId, 'faqs'));
          for (const doc of faqsSnapshot.docs) {
            await deleteDoc(doc.ref);
          }
        }
        
        // Add all FAQs to subcollection
        for (const faq of faqs) {
          await addDoc(collection(db, 'articles', blogId, 'faqs'), {
            question: faq.question,
            answer: faq.answer
          });
        }
      }
      
      // Reset form and show table
      resetForm();
      
      // Fetch the updated blogs
      const querySnapshot = await getDocs(collection(db, 'articles'));
      const updatedBlogs = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          title: docData.title || '',
          subtitle: docData.subtitle || '',
          description: docData.description || '',
          date: docData.date || '',
          image: docData.image || '',
          created: docData.created || Date.now(),
          metaTitle: docData.metaTitle || '',
          metaDescription: docData.metaDescription || '',
          slug: docData.slug || '',
          faqs: [] // Initialize empty faqs array
        };
      });
      setBlogs(updatedBlogs);
      
    } catch (error) {
      console.error("Error processing blog:", error);
    }
  };

  // Handle blog edit - needs to also fetch FAQs from subcollection
  const handleEdit = async (blog: Blog) => {
    try {
      // Fetch FAQs for this article
      const faqsSnapshot = await getDocs(collection(db, 'articles', blog.id!, 'faqs'));
      const faqs = faqsSnapshot.docs.map(doc => ({
        id: doc.id,
        question: doc.data().question || '',
        answer: doc.data().answer || ''
      }));
      
      setNewBlog({...blog, faqs});
      setFormMode('edit');
      setShowBlogForm(true);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setNewBlog(blog);
      setFormMode('edit');
      setShowBlogForm(true);
    }
  };

  // Handle blog delete
  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        // Delete document from Firestore
        await deleteDoc(doc(db, 'articles', id));
        
        // Update local state
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    }
  };

  // Reset form state
  const resetForm = () => {
    setNewBlog({
      title: '',
      subtitle: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      created: Date.now(),
      metaTitle: '',
      metaDescription: '',
      slug: '',
      faqs: [] // Reset FAQs array
    });
    setFormMode('add');
    setShowBlogForm(false);
  };

  // Cancel form handler
  const handleCancelForm = () => {
    resetForm();
  };

  // Handle title change to auto-generate slug
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const generatedSlug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special chars
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
    
    setNewBlog(prevState => ({
      ...prevState,
      title,
      slug: generatedSlug
    }));
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
              <h1 className="text-3xl font-bold text-[#5A4C33]">Articles Dashboard</h1>
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

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            {/* Header with Add Article Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#5A4C33]">
                {showBlogForm ? (formMode === 'add' ? 'Create New Article' : 'Edit Article') : 'Article Management'}
              </h2>
              <motion.button
                onClick={() => {
                  if (showBlogForm) {
                    resetForm();
                  } else {
                    setFormMode('add');
                    setShowBlogForm(true);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white rounded-md font-medium"
              >
                <FontAwesomeIcon icon={showBlogForm ? faChartLine : faPlus} className="mr-2" />
                {showBlogForm ? 'View Articles' : 'Add Article'}
              </motion.button>
            </div>

            {/* Conditional Rendering: Show either Data Table or Article Form */}
            {showBlogForm ? (
              // Article Creation/Edit Form with Updated Fields and Tiptap Editor
              <AnimatePresence mode="wait">
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmitBlog}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-[#5A4C33] mb-1">Article Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBlog.title}
                        onChange={handleTitleChange}
                        required
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                        placeholder="Enter article title"
                      />
                    </div>
                    
                   
                    <div>
                      <label htmlFor="slug" className="block text-sm font-medium text-[#5A4C33] mb-1">URL Slug</label>
                      <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={newBlog.slug}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                        placeholder="url-friendly-slug"
                      />
                      <p className="mt-1 text-xs text-gray-500">Auto-generated from title. You can edit it if needed.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                  <div>
                      <label htmlFor="subtitle" className="block text-sm font-medium text-[#5A4C33] mb-1">Subtitle/SEO Keywords</label>
                      <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={newBlog.subtitle}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                        placeholder="Enter subtitle or SEO keywords"
                      />
                    </div>
                    <div>
                      <label htmlFor="metaTitle" className="block text-sm font-medium text-[#5A4C33] mb-1">Meta Title</label>
                      <input
                        type="text"
                        id="metaTitle"
                        name="metaTitle"
                        value={newBlog.metaTitle || ''}
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                        placeholder="Enter meta title for SEO"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-[#5A4C33] mb-1">Publication Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={newBlog.date}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="image" className="block text-sm font-medium text-[#5A4C33] mb-1">Image URL</label>
                      <input
                        type="text"
                        id="image"
                        name="image"
                        value={newBlog.image}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                        placeholder="Enter image URL"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="metaDescription" className="block text-sm font-medium text-[#5A4C33] mb-1">Meta Description</label>
                      <input
                        type="text"
                        id="metaDescription"
                        name="metaDescription"
                        value={newBlog.metaDescription || ''}
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                        placeholder="Enter meta description for SEO"
                      />
                    </div>
                  </div>
                   {/* Add the FAQ section before the form submit buttons */}
                   <div>
                    <label className="block text-sm font-medium text-[#5A4C33] mb-1">FAQs</label>
                    <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
                      {/* Display existing FAQs */}
                      {(newBlog.faqs || []).map((faq, index) => (
                        <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium text-[#5A4C33]">FAQ #{index + 1}</h3>
                            <motion.button
                              type="button"
                              onClick={() => removeFaq(index)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-2 py-1 bg-red-500 text-white text-xs rounded-md"
                            >
                              Remove
                            </motion.button>
                          </div>
                          <div className="mb-2">
                            <label className="block text-xs font-medium text-[#5A4C33] mb-1">Question</label>
                            <input
                              type="text"
                              value={faq.question}
                              onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                              className="text-black w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                              placeholder="Enter FAQ question"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-[#5A4C33] mb-1">Answer</label>
                            <textarea
                              value={faq.answer}
                              onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                              rows={3}
                              className="text-black w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                              placeholder="Enter FAQ answer"
                            />
                          </div>
                        </div>
                      ))}
                      
                      {/* Add FAQ button */}
                      <motion.button
                        type="button"
                        onClick={addFaq}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-2 px-4 py-2 bg-[#D2A02A] text-white rounded-md text-sm font-medium flex items-center"
                      >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Add FAQ
                      </motion.button>
                      <p className="mt-2 text-xs text-gray-500">Add frequently asked questions related to this article.</p>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-[#5A4C33] mb-1">Article Content</label>
                    {/* Tiptap Editor Integration */}
                    <div className="border border-gray-300 rounded-md">
                      {typeof window !== 'undefined' && (
                        <TiptapEditor
                          content={newBlog.description}
                          onChange={handleEditorChange}
                          className="bg-white text-black min-h-[10px]"
                        />
                      )}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Use the toolbar above to format your content.</p>
                  </div>
                  
                 
                  
                  <div className="flex justify-end space-x-3">
                    <motion.button
                      type="button"
                      onClick={handleCancelForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white rounded-md font-medium"
                    >
                      {formMode === 'add' ? 'Publish Article' : 'Update Article'}
                    </motion.button>
                  </div>
                </motion.form>
              </AnimatePresence>
            ) : (
              // Articles Table
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-x-auto"
                >
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F0EAD6]">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">Subtitle</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">Created</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {blogs.length > 0 ? (
                        blogs.map((blog) => (
                          <tr key={blog.id} className="hover:bg-[#F8F5EC] transition-colors duration-150">
                            <td className="px-6 py-4 text-sm font-medium text-[#5A4C33] max-w-xs truncate">{blog.title}</td>
                            <td className="px-6 py-4 text-sm text-[#5A4C33] max-w-xs truncate">{blog.subtitle}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]"><img src={blog.image} className="w-20 h-20 rounded-full" alt="" /></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">
                              {new Date(blog.created).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]">
                              <div className="flex space-x-2">
                                <motion.button
                                  onClick={() => handleEdit(blog)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs flex items-center"
                                >
                                  <FontAwesomeIcon icon={faEdit} className="mr-1" />
                                  Edit
                                </motion.button>
                                <motion.button
                                  onClick={() => handleDelete(blog.id)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="px-3 py-1 bg-red-500 text-white rounded-md text-xs flex items-center"
                                >
                                  <FontAwesomeIcon icon={faTrash} className="mr-1" />
                                  Delete
                                </motion.button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                            No articles found. Click Add Article to create a new article.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-[#5A4C33]">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">{blogs.length}</span> of <span className="font-medium">{blogs.length}</span> results
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
              </AnimatePresence>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArticlesDashboard;