'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faPlus, faEdit, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth, storage } from '../../../lib/firebase'; // adjust the path as needed
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

// Define Blog interface with updated structure
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
  slug: string; // New slug field for URLs
  faqs?: FAQ[]; // New field for FAQs
  author: string; // New author field
}

const BlogsDashboard = () => {
  const [activeTab, setActiveTab] = useState('blogs');
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
    slug: '', // Initialize the slug field
    faqs: [], // Initialize empty FAQs array
    author: 'Anuj Anand Malik' // Default author changed from 'Team AMA'
  });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set the number of items per page
  const [rssDebugInfo, setRssDebugInfo] = useState<string>('');
  const [isLoadingRss, setIsLoadingRss] = useState(false);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get the current blogs to display based on the current page
  const currentBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
        const querySnapshot = await getDocs(collection(db, 'blogs'));
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
            slug: docData.slug || '', // Get the slug from database
            faqs: docData.faqs || [], // Get the faqs from database
            author: docData.author || 'Anuj Anand Malik' // Default author changed from 'Team AMA'
          };
        });
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs data:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle animation sequence
  // useEffect(() => {
  //   // Start with black screen
  //   const welcomeTimer = setTimeout(() => {
  //     setAnimationState('welcome'); // Show Hello Anuj Bhiya

  //     // After showing welcome, transition to dashboard
  //     const dashboardTimer = setTimeout(() => {
  //       setAnimationState('dashboard');
  //     }, 1500); // 1.5 seconds as requested

  //     return () => clearTimeout(dashboardTimer);
  //   }, 500);

  //   return () => clearTimeout(welcomeTimer);
  // }, []);

  // Add a helper function to generate slug from title
  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .trim(); // Trim spaces from start and end
  };

  // Handle blog form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prevState => {
      // If title field is changed, auto-generate slug (only if slug is empty or user hasn't modified it)
      if (name === 'title' && (!prevState.slug || prevState.slug === generateSlug(prevState.title))) {
        return {
          ...prevState,
          [name]: value,
          slug: generateSlug(value)
        };
      }
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  // Handle Tiptap editor content changes
  const handleEditorChange = (content: string) => {
    setNewBlog(prevState => ({
      ...prevState,
      description: content
    }));
  };

  // Add FAQ to the blog
  const addFaq = () => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }));
  };

  // Remove FAQ from the blog
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

  // Handle file upload to Firebase Storage
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (limit to 2MB)
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
    if (file.size > MAX_FILE_SIZE) {
      alert("Image is too large. Maximum size is 2MB.");
      return;
    }
    
    try {
      setUploading(true);
      setUploadProgress(0);
      
      // Create a reference to the file in Firebase Storage
      const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
      
      // Create a local preview of the image
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      // Compress the image before uploading if it's an image
      let fileToUpload = file;
      if (file.type.startsWith('image/')) {
        fileToUpload = await compressImage(file);
      }
      
      // Upload with retry logic
      const maxRetries = 3;
      let retryCount = 0;
      let uploadSuccessful = false;
      
      while (retryCount < maxRetries && !uploadSuccessful) {
        try {
          // Upload the file
          const snapshot = await uploadBytes(storageRef, fileToUpload);
          
          // Get the download URL and update the blog state
          const downloadURL = await getDownloadURL(snapshot.ref);
          setNewBlog(prevState => ({
            ...prevState,
            image: downloadURL
          }));
          
          uploadSuccessful = true;
          setUploadProgress(100);
        } catch (err) {
          console.error(`Upload attempt ${retryCount + 1} failed:`, err);
          retryCount++;
          
          if (retryCount >= maxRetries) {
            throw new Error(`Failed after ${maxRetries} attempts: ${err instanceof Error ? err.message : String(err)}`);
          }
          
          // Wait before retrying (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(`Failed to upload image: ${error instanceof Error ? error.message : "Please check your internet connection and try again."}`);
    } finally {
      setUploading(false);
    }
  };
  
  // Helper function to compress images
  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Calculate new dimensions while maintaining aspect ratio
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round(height * (MAX_WIDTH / width));
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round(width * (MAX_HEIGHT / height));
              height = MAX_HEIGHT;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Convert to blob with reduced quality
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Canvas to Blob conversion failed'));
                return;
              }
              
              // Create a new file from the blob
              const compressedFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              
              resolve(compressedFile);
            },
            'image/jpeg',
            0.7 // Quality (0.7 = 70%)
          );
        };
        
        img.onerror = () => {
          reject(new Error('Error loading image for compression'));
        };
      };
      
      reader.onerror = () => {
        reject(new Error('Error reading file for compression'));
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
        const docRef = await addDoc(collection(db, 'blogs'), blogData);
        blogId = docRef.id;
      } else {
        // Update existing document
        if (blogId) {
          const blogRef = doc(db, 'blogs', blogId);
          await updateDoc(blogRef, blogData);
        }
      }
      
      // Add FAQs to subcollection
      if (blogId && faqs && faqs.length > 0) {
        // First delete existing FAQs if updating
        if (formMode === 'edit') {
          const faqsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
          for (const doc of faqsSnapshot.docs) {
            await deleteDoc(doc.ref);
          }
        }
        
        // Add all FAQs to subcollection
        for (const faq of faqs) {
          await addDoc(collection(db, 'blogs', blogId, 'faqs'), {
            question: faq.question,
            answer: faq.answer
          });
        }
      }
      
      // Reset form and show table
      resetForm();
      
      // Fetch the updated blogs
      const querySnapshot = await getDocs(collection(db, 'blogs'));
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
          slug: docData.slug || '', // Get the slug from database
          faqs: [], // Initialize empty faqs array
          author: docData.author || 'Anuj Anand Malik' // Default author changed from 'Team AMA'
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
      // Fetch FAQs for this blog
      const faqsSnapshot = await getDocs(collection(db, 'blogs', blog.id!, 'faqs'));
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
    
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        // Delete document from Firestore
        await deleteDoc(doc(db, 'blogs', id));
        
        // Update local state
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error("Error deleting blog:", error);
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
      slug: '', // Reset slug field
      faqs: [], // Reset FAQs array
      author: 'Anuj Anand Malik' // Default author changed from 'Team AMA'
    });
    setFormMode('add');
    setShowBlogForm(false);
  };

  // Cancel form handler
  const handleCancelForm = () => {
    resetForm();
  };

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  // Add a function to test the RSS feed
  const testRssFeed = async () => {
    try {
      setIsLoadingRss(true);
      console.log('Testing RSS feed...');
      
      // Fetch the RSS feed
      const response = await fetch('/api/rss');
      console.log('RSS feed response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`RSS feed returned status: ${response.status}`);
      }
      
      // Get the XML content
      const xml = await response.text();
      console.log('RSS feed XML length:', xml.length);
      
      // Basic validation checks
      const isValidXml = xml.includes('<?xml version="1.0"') && 
                        xml.includes('<rss version="2.0"') &&
                        xml.includes('</rss>');
      
      console.log('Is valid XML structure:', isValidXml);
      
      // Count items in feed
      const itemCount = (xml.match(/<item>/g) || []).length;
      console.log('Number of items in feed:', itemCount);
      
      // Check for common issues
      const hasEmptyTitles = xml.includes('<title></title>');
      const hasEmptyLinks = xml.includes('<link></link>');
      const hasMalformedDates = xml.includes('<pubDate>Invalid Date</pubDate>');
      
      console.log('Feed has empty titles:', hasEmptyTitles);
      console.log('Feed has empty links:', hasEmptyLinks);
      console.log('Feed has malformed dates:', hasMalformedDates);
      
      // Set debug info
      setRssDebugInfo(
        `RSS Feed Status: ${response.status === 200 ? '✅ OK' : '❌ Error'}\n` +
        `Valid XML Structure: ${isValidXml ? '✅ Yes' : '❌ No'}\n` +
        `Items in Feed: ${itemCount}\n` +
        `Empty Titles: ${hasEmptyTitles ? '❌ Yes' : '✅ No'}\n` +
        `Empty Links: ${hasEmptyLinks ? '❌ Yes' : '✅ No'}\n` +
        `Malformed Dates: ${hasMalformedDates ? '❌ Yes' : '✅ No'}\n\n` +
        `Sample XML (first 500 chars):\n${xml.substring(0, 500)}...`
      );
    } catch (error) {
      console.error('Error testing RSS feed:', error);
      setRssDebugInfo(`Error testing RSS feed: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoadingRss(false);
    }
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
              <h1 className="text-3xl font-bold text-[#5A4C33]">Blogs Dashboard</h1>
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
            {/* Header with Add Blog Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#5A4C33]">
                {showBlogForm ? (formMode === 'add' ? 'Create New Blog' : 'Edit Blog') : 'Blog Management'}
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
                {showBlogForm ? 'View Blogs' : 'Add Blog'}
              </motion.button>
            </div>

            {/* Conditional Rendering: Show either Data Table or Blog Form */}
            {showBlogForm ? (
              // Blog Creation/Edit Form with Updated Fields and Tiptap Editor
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
                      <label htmlFor="title" className="block text-sm font-medium text-[#5A4C33] mb-1">Blog Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                        placeholder="Enter blog title"
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
                        placeholder="url-friendly-blog-name"
                      />
                      <p className="mt-1 text-xs text-gray-500">Will be used in the URL: /blog/{newBlog.slug}</p>
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
                      <label htmlFor="image" className="block text-sm font-medium text-[#5A4C33] mb-1">Blog Image</label>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="file"
                            id="image-upload"
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="px-4 py-2 bg-[#F0EAD6] text-[#5A4C33] rounded-md text-sm font-medium flex items-center"
                          >
                            <FontAwesomeIcon icon={faUpload} className="mr-2" />
                            {uploading ? 'Uploading...' : 'Choose Image'}
                          </button>
                          {newBlog.image && (
                            <span className="text-xs text-green-600">Image uploaded successfully</span>
                          )}
                        </div>
                        
                        {uploading && (
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-[#D2A02A] h-2.5 rounded-full" 
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                        )}
                        
                        {/* Image preview */}
                        {(imagePreview || newBlog.image) && (
                          <div className="mt-2">
                            <img 
                              src={imagePreview || newBlog.image} 
                              alt="Blog image preview" 
                              className="w-32 h-32 object-cover rounded-md border border-gray-300"
                            />
                          </div>
                        )}
                        
                        <input
                          type="hidden"
                          id="image"
                          name="image"
                          value={newBlog.image}
                        />
                      </div>
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
                    
                    <div>
                      <label htmlFor="author" className="block text-sm font-medium text-[#5A4C33] mb-1">Author</label>
                      <select
                        id="author"
                        name="author"
                        value={newBlog.author}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent"
                      >
                        <option value="Anuj Anand Malik">Anuj Anand Malik</option>
                        <option value="Shrey Arora">Shrey Arora</option>
                      </select>
                    </div>
                  </div>
                  
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
                      <p className="mt-2 text-xs text-gray-500">Add frequently asked questions related to this blog post.</p>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-[#5A4C33] mb-1">Blog Content</label>
                    {/* Tiptap Editor Integration */}
                    <div className="border border-gray-300 rounded-md">
                      {typeof window !== 'undefined' && (
                        <TiptapEditor
                          content={newBlog.description}
                          onChange={handleEditorChange}
                          className="bg-white text-black min-h-[300px]"
                        />
                      )}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Use the toolbar above to format your content.</p>
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <h3 className="text-sm font-medium text-blue-800 mb-1">RSS Feed Information</h3>
                    <p className="text-xs text-blue-600">
                      Your blog will be automatically added to the RSS feed at <strong>{process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://www.amalegalsolutions.com'}/api/rss</strong> 
                      which syncs with LinkedIn's RSS automation feature.
                    </p>
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
                      {formMode === 'add' ? 'Publish Blog' : 'Update Blog'}
                    </motion.button>
                  </div>
                </motion.form>
              </AnimatePresence>
            ) : (
              // Blogs Table
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
                      {currentBlogs.length > 0 ? (
                        currentBlogs.map((blog) => (
                          <tr key={blog.id} className="hover:bg-[#F8F5EC] transition-colors duration-150">
                            <td className="px-6 py-4 text-sm font-medium text-[#5A4C33] max-w-xs truncate">{blog.title}</td>
                            <td className="px-6 py-4 text-sm text-[#5A4C33] max-w-xs truncate">{blog.subtitle}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5A4C33]"><img src={blog.image} alt="" className="w-20 h-20 rounded-full" /></td>
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
                            No blogs found. Click Add Blog to create a new blog.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-[#5A4C33]">
                      Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, blogs.length)}</span> of <span className="font-medium">{blogs.length}</span> results
                    </div>
                    <div className="flex space-x-2">
                      <motion.button
                        onClick={handlePreviousPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-[#F0EAD6] text-[#5A4C33] rounded-md text-sm"
                        disabled={currentPage === 1}
                      >
                        Previous
                      </motion.button>
                      <motion.button
                        onClick={handleNextPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-[#F0EAD6] text-[#5A4C33] rounded-md text-sm"
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

            {/* RSS Feed Debug Panel - Add this at the end of the content section */}
            {!showBlogForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 p-4 border border-blue-200 rounded-md bg-blue-50"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-md font-semibold text-blue-700">RSS Feed Diagnostics</h3>
                  <motion.button
                    onClick={testRssFeed}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isLoadingRss}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md flex items-center"
                  >
                    {isLoadingRss ? 'Testing...' : 'Test RSS Feed'}
                  </motion.button>
                </div>
                
                <div className="flex mb-2">
                  <a 
                    href="/api/rss" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mr-4"
                  >
                    View RSS Feed
                  </a>
                  <a 
                    href="https://validator.w3.org/feed/check.cgi?url=https://www.amalegalsolutions.com/api/rss" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Validate with W3C Feed Validator
                  </a>
                </div>
                
                {rssDebugInfo && (
                  <div className="mt-3">
                    <pre className="bg-blue-100 p-3 rounded-md text-xs text-blue-800 overflow-x-auto whitespace-pre-wrap">
                      {rssDebugInfo}
                    </pre>
                  </div>
                )}
                
                <p className="mt-3 text-xs text-blue-600">
                  <strong>Tip:</strong> RSS feeds should be valid XML with proper entity escaping for special characters. 
                  Make sure all required fields (title, link, description, pubDate) are present for each item.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogsDashboard;