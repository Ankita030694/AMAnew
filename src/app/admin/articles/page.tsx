'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faPlus, faEdit, faTrash, faUpload, faMagic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
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

// Define Review interface
interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string;
}

// Define Article interface
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
  faqs?: FAQ[];
  reviews?: Review[];
  author: string;
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
    date: new Date().toISOString().split('T')[0],
    image: '',
    created: Date.now(),
    metaTitle: '',
    metaDescription: '',
    slug: '',
    faqs: [],
    reviews: [],
    author: 'Anuj Anand Malik'
  });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // AI Generation state
  const [primaryKeyword, setPrimaryKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // New Image Generation and Content Expansion state
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isUploadingGenerated, setIsUploadingGenerated] = useState(false);

  // RSS Debug - for parity with blogs even if articles doesn't use it yet
  const [isLoadingRss, setIsLoadingRss] = useState(false);
  const [rssDebugInfo, setRssDebugInfo] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter articles based on search term
  const filteredArticles = blogs.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    article.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const currentBlogs = filteredArticles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset pagination when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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
      router.push('/admin/ama-live');
    } else {
      setActiveTab(itemId);
    }
  };

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
          faqs: docData.faqs || [],
          reviews: docData.reviews || [],
          author: docData.author || 'Anuj Anand Malik'
        };
      });
      const sortedData = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setBlogs(sortedData);
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (showBlogForm && newBlog) {
      if (newBlog.title === '' && newBlog.description === '') return;
      const timer = setTimeout(() => {
        const key = formMode === 'edit' && newBlog.id ? `autosave_article_${newBlog.id}` : 'autosave_article_new';
        localStorage.setItem(key, JSON.stringify(newBlog));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [newBlog, showBlogForm, formMode]);

  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prevState => {
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

  const handleEditorChange = (content: string) => {
    setNewBlog(prevState => ({
      ...prevState,
      description: content
    }));
  };

  const addFaq = () => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }));
  };

  const removeFaq = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index)
    }));
  };

  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setNewBlog(prevState => {
      const updatedFaqs = [...(prevState.faqs || [])];
      updatedFaqs[index] = { ...updatedFaqs[index], [field]: value };
      return { ...prevState, faqs: updatedFaqs };
    });
  };

  const addReview = () => {
    setNewBlog(prevState => ({
      ...prevState,
      reviews: [...(prevState.reviews || []), { name: '', rating: 5, review: '' }]
    }));
  };

  const removeReview = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      reviews: (prevState.reviews || []).filter((_, i) => i !== index)
    }));
  };

  const handleReviewChange = (index: number, field: keyof Review, value: any) => {
    setNewBlog(prevState => {
      const updatedReviews = [...(prevState.reviews || [])];
      updatedReviews[index] = { ...updatedReviews[index], [field]: value };
      return { ...prevState, reviews: updatedReviews };
    });
  };

  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = document.createElement('img');
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          if (width > height) {
            if (width > MAX_WIDTH) { height = Math.round(height * (MAX_WIDTH / width)); width = MAX_WIDTH; }
          } else {
            if (height > MAX_HEIGHT) { width = Math.round(width * (MAX_HEIGHT / height)); height = MAX_HEIGHT; }
          }
          canvas.width = width; canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (!blob) { reject(new Error('Canvas to Blob failed')); return; }
            resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
          }, 'image/jpeg', 0.7);
        };
      };
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      setUploadProgress(0);
      if (!storage) {
        throw new Error("Firebase Storage is not initialized");
      }
      const storageRef = ref(storage, `article-images/${Date.now()}_${file.name}`);
      const reader = new FileReader();
      reader.onload = (event) => setImagePreview(event.target?.result as string);
      reader.readAsDataURL(file);
      const fileToUpload = file.type.startsWith('image/') ? await compressImage(file) : file;
      const snapshot = await uploadBytes(storageRef, fileToUpload);
      const url = await getDownloadURL(snapshot.ref);
      setNewBlog(prev => ({ ...prev, image: url }));
      setUploadProgress(100);
    } catch (error) {
      console.error(error);
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleGenerate = async () => {
    if (!primaryKeyword.trim()) {
      alert('Please enter a primary keyword.');
      return;
    }

    try {
      setIsGenerating(true);
      const response = await fetch('/api/generate-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ primaryKeyword }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate article');
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No reader available');
      }

      let accumulatedDetails = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulatedDetails += new TextDecoder().decode(value);
      }

      const generatedData = JSON.parse(accumulatedDetails);

      setNewBlog(prevState => ({
        ...prevState,
        title: generatedData.title || prevState.title,
        subtitle: generatedData.subtitle || prevState.subtitle,
        description: generatedData.description || prevState.description, // HTML content
        metaTitle: generatedData.metaTitle || prevState.metaTitle,
        metaDescription: generatedData.metaDescription || prevState.metaDescription,
        slug: generatedData.slug || prevState.slug, // Or generate from title
        faqs: generatedData.faqs || prevState.faqs,
        reviews: generatedData.reviews || prevState.reviews,
      }));

      // If slug wasn't provided but title was, generate one
      if (!generatedData.slug && generatedData.title) {
        const generatedSlug = generatedData.title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
          
        setNewBlog(prev => ({ ...prev, slug: generatedSlug }));
      }
      
      // Also set the image prompt if suggested
      if (generatedData.suggestedImagePrompt) {
        setImagePrompt(generatedData.suggestedImagePrompt);
      }
      
      alert('Article generated successfully! Please review and add an image.');
    } catch (error) {
      console.error('Error generating article:', error);
      alert('Failed to generate article. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateImage = async () => {
    const defaultPrompt = newBlog.title 
      ? `A highly professional legal illustration that MUST feature real people, an Indian landscape or setting in the background, and prominently feature the exact title of the article: "${newBlog.title}" written within the image. The image must exclusively use the colors #D29E0D, white, and black. Do NOT generate random infographics stuffed with numerics.`
      : `A highly professional legal illustration that MUST feature real people, an Indian landscape or setting in the background. The image must exclusively use the colors #D29E0D, white, and black. Do NOT generate random infographics stuffed with numerics.`;

    const finalPrompt = imagePrompt.trim() || defaultPrompt;

    try {
      setIsGeneratingImage(true);
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setGeneratedImageUrl(data.imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleUploadGeneratedImage = async () => {
    if (!generatedImageUrl) return;

    try {
      setIsUploadingGenerated(true);
      
      // Fetch the image from the URL directly (if data URI) or via proxy (if remote URL) to avoid CORS issues
      const response = generatedImageUrl.startsWith('data:')
        ? await fetch(generatedImageUrl)
        : await fetch(`/api/proxy-image?url=${encodeURIComponent(generatedImageUrl)}`);
      const blob = await response.blob();
      const file = new File([blob], `generated_${Date.now()}.png`, { type: 'image/png' });

      if (!storage) {
        throw new Error("Firebase Storage is not initialized");
      }
      const storageRef = ref(storage, `article-images/${Date.now()}_generated.png`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      setNewBlog(prevState => ({
        ...prevState,
        image: downloadURL
      }));
      setImagePreview(downloadURL);
      setGeneratedImageUrl(null); // Clear the preview once uploaded
      alert('Image uploaded to Firebase successfully!');
    } catch (error) {
      console.error('Error uploading generated image:', error);
      alert('Failed to upload image to Firebase.');
    } finally {
      setIsUploadingGenerated(false);
    }
  };

  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const blogWithMetadata = {
        ...newBlog,
        created: formMode === 'add' ? Date.now() : newBlog.created,
        date: new Date(newBlog.date).toISOString().split('T')[0]
      };
      const { faqs, reviews, ...blogData } = blogWithMetadata;
      let blogId = newBlog.id;
      if (formMode === 'add') {
        const docRef = await addDoc(collection(db, 'articles'), blogData);
        blogId = docRef.id;
      } else if (blogId) {
        await updateDoc(doc(db, 'articles', blogId), blogData);
      }
      if (blogId) {
        const faqsSnap = await getDocs(collection(db, 'articles', blogId, 'faqs'));
        for (const doc of faqsSnap.docs) await deleteDoc(doc.ref);
        if (faqs) {
          for (const faq of faqs) await addDoc(collection(db, 'articles', blogId, 'faqs'), faq);
        }
        const reviewsSnap = await getDocs(collection(db, 'articles', blogId, 'reviews'));
        for (const doc of reviewsSnap.docs) await deleteDoc(doc.ref);
        if (reviews) {
          for (const review of reviews) await addDoc(collection(db, 'articles', blogId, 'reviews'), review);
        }
      }
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (blog: Blog) => {
    try {
      const faqsSnap = await getDocs(collection(db, 'articles', blog.id!, 'faqs'));
      const faqs = faqsSnap.docs.map(doc => ({ ...doc.data(), id: doc.id } as FAQ));
      const reviewsSnap = await getDocs(collection(db, 'articles', blog.id!, 'reviews'));
      const reviews = reviewsSnap.docs.map(doc => ({ ...doc.data(), id: doc.id } as Review));
      setNewBlog({ ...blog, faqs, reviews });
      setFormMode('edit');
      const saved = localStorage.getItem(`autosave_article_${blog.id}`);
      if (saved && window.confirm('Restore draft?')) {
        const parsedDraft = JSON.parse(saved);
        setNewBlog(parsedDraft);
        if (parsedDraft.image) setImagePreview(parsedDraft.image);
      }
      setShowBlogForm(true);
    } catch (e) {
      setNewBlog(blog); setFormMode('edit'); setShowBlogForm(true);
    }
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id || !window.confirm('Delete article?')) return;
    try {
      const blogRef = doc(db, 'articles', id);
      const blogDoc = await getDoc(blogRef);
      if (blogDoc.exists() && blogDoc.data().image) {
        try {
          if (!storage) {
            throw new Error("Firebase Storage is not initialized");
          }
          const imgRef = ref(storage, blogDoc.data().image);
          await deleteObject(imgRef);
        } catch (e) {}
      }
      await deleteDoc(blogRef);
      fetchBlogs();
    } catch (error) { console.error(error); }
  };

  const resetForm = () => {
    setNewBlog({
      title: '', subtitle: '', description: '',
      date: new Date().toISOString().split('T')[0],
      image: '', created: Date.now(),
      metaTitle: '', metaDescription: '', slug: '',
      faqs: [], reviews: [], author: 'Anuj Anand Malik'
    });
    setFormMode('add');
    setShowBlogForm(false);
    setImagePreview(null);
    setGeneratedImageUrl(null);
    setImagePrompt('');
    localStorage.removeItem('autosave_article_new');
    if (newBlog.id) localStorage.removeItem(`autosave_article_${newBlog.id}`);
  };

  const handlePreviousPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      {/* Dashboard Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#D2A02A] mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#5A4C33]">Articles Dashboard</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mt-2"></div>
        </div>
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
                    // Check for saved draft for new article
                    const savedDraft = localStorage.getItem('autosave_article_new');
                    if (savedDraft) {
                      if (window.confirm('Found an unsaved draft. Do you want to restore it?')) {
                        const parsedDraft = JSON.parse(savedDraft);
                        setNewBlog(parsedDraft);
                        if (parsedDraft.image) setImagePreview(parsedDraft.image);
                      } else {
                        localStorage.removeItem('autosave_article_new');
                        resetForm();
                      }
                    }
                    setShowBlogForm(true);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white rounded-md font-medium"
              >
                <FontAwesomeIcon icon={showBlogForm ? faClipboardList : faPlus} className="mr-2" />
                {showBlogForm ? 'View Articles' : 'Add Article'}
              </motion.button>
            </div>

            {/* Conditional Rendering: Show either Data Table or Article Form */}
            {showBlogForm ? (
              // Article Creation/Edit Form - Matches Blog Form Layout
              <AnimatePresence mode="wait">
                <h2 className="text-xl font-bold mb-6 text-[#5A4C33] flex items-center">
                  <FontAwesomeIcon icon={formMode === 'add' ? faPlus : faEdit} className="mr-3" />
                  {formMode === 'add' ? 'Add New Article' : 'Edit Article'}
                </h2>
                
                <form 
                  onSubmit={handleSubmitBlog}
                  className="space-y-6"
                >
                  {/* AI Generator Section - Exactly like Blog */}
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-6">
                    <h3 className="text-indigo-800 font-medium mb-2 flex items-center">
                      <FontAwesomeIcon icon={faMagic} className="mr-2" />
                      AI Magic Generator
                    </h3>
                    <div className="flex flex-col gap-4">
                      <div>
                          <label className="block text-xs text-indigo-800 mb-1">Primary Keyword (Must be specific)</label>
                          <input
                            type="text"
                            value={primaryKeyword}
                            onChange={(e) => setPrimaryKeyword(e.target.value)}
                            placeholder="e.g., 'Divorce Law in India'"
                            className="w-full px-4 py-2 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
                            disabled={isGenerating}
                          />
                      </div>
                      <button
                        type="button"
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 transition-colors flex items-center justify-center"
                      >
                        {isGenerating ? (
                          <>
                            <span className="animate-spin mr-2">💫</span>
                            Generating...
                          </>
                        ) : (
                          <>
                            Generate Article
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-indigo-600 mt-2">
                      This will auto-fill the form with SEO-optimized title, description, content, FAQs, and more.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-[#5A4C33] mb-1">Article Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
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
                        placeholder="url-friendly-article-name"
                      />
                      <p className="mt-1 text-xs text-gray-500">Will be used in the URL: /articles/{newBlog.slug}</p>
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
                      <label htmlFor="image" className="block text-sm font-medium text-[#5A4C33] mb-1">Article Image</label>
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
                        
                        {(imagePreview || newBlog.image) && (
                          <div className="mt-2 text-black">
                            <img 
                              src={imagePreview || newBlog.image} 
                              alt="Article image preview" 
                              className="w-32 h-32 object-cover rounded-md border border-gray-300"
                            />
                          </div>
                        )}
                        
                        {/* AI Image Generation Studio - Inlined like Blog */}
                        <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-md">
                          <label className="block text-xs font-medium text-purple-800 mb-1">AI Image Generation Prompt</label>
                          <textarea
                            value={imagePrompt}
                            onChange={(e) => setImagePrompt(e.target.value)}
                            rows={3}
                            className="text-black w-full px-3 py-2 text-sm border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Describe the article image you want to generate..."
                          />
                          <button
                            type="button"
                            onClick={handleGenerateImage}
                            disabled={isGeneratingImage}
                            className="mt-2 w-full px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium disabled:bg-purple-300"
                          >
                            {isGeneratingImage ? 'Generating Image...' : 'Generate Image with DALL-E'}
                          </button>
                          
                          {generatedImageUrl && (
                            <div className="mt-4 flex flex-col items-center">
                              <img 
                                src={generatedImageUrl} 
                                alt="Generated" 
                                className="w-full max-w-xs rounded-lg shadow-lg mb-2"
                              />
                              <button
                                type="button"
                                onClick={handleUploadGeneratedImage}
                                disabled={isUploadingGenerated}
                                className="w-full px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium"
                              >
                                {isUploadingGenerated ? 'Uploading...' : 'Upload this Image to Firebase'}
                              </button>
                            </div>
                          )}
                        </div>
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
                      {(newBlog.faqs || []).map((faq, index) => (
                        <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                             <h3 className="text-sm font-medium text-[#5A4C33]">FAQ #{index + 1}</h3>
                             <button type="button" onClick={() => removeFaq(index)} className="px-2 py-1 bg-red-500 text-white text-xs rounded-md">Remove</button>
                          </div>
                          <div className="mb-2">
                            <label className="block text-xs font-medium text-[#5A4C33] mb-1">Question</label>
                            <input type="text" value={faq.question} onChange={(e) => handleFaqChange(index, 'question', e.target.value)} className="text-black w-full px-3 py-2 text-sm border border-gray-300 rounded-md" />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-[#5A4C33] mb-1">Answer</label>
                            <textarea value={faq.answer} onChange={(e) => handleFaqChange(index, 'answer', e.target.value)} rows={3} className="text-black w-full px-3 py-2 text-sm border border-gray-300 rounded-md" />
                          </div>
                        </div>
                      ))}
                      <button type="button" onClick={addFaq} className="mt-2 px-4 py-2 bg-[#D2A02A] text-white rounded-md text-sm font-medium">Add FAQ</button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#5A4C33] mb-1">Review Snippets</label>
                    <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
                      {(newBlog.reviews || []).map((review, index) => (
                        <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-sm relative">
                          <button type="button" onClick={() => removeReview(index)} className="absolute top-2 right-2 text-red-500"><FontAwesomeIcon icon={faTrash} /></button>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <input type="text" value={review.name} onChange={(e) => handleReviewChange(index, 'name', e.target.value)} placeholder="Name" className="text-black px-3 py-2 text-sm border border-gray-300 rounded-md" />
                            <select value={review.rating} onChange={(e) => handleReviewChange(index, 'rating', parseInt(e.target.value))} className="text-black px-3 py-2 text-sm border border-gray-300 rounded-md">
                              {[1,2,3,4,5].map(num => <option key={num} value={num}>{num} Stars</option>)}
                            </select>
                          </div>
                          <textarea value={review.review} onChange={(e) => handleReviewChange(index, 'review', e.target.value)} rows={2} placeholder="Review" className="text-black w-full px-3 py-2 text-sm border border-gray-300 rounded-md" />
                        </div>
                      ))}
                      <button type="button" onClick={addReview} className="mt-2 px-4 py-2 bg-[#D2A02A] text-white rounded-md text-sm font-medium">Add Review</button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-[#5A4C33] mb-1">Article Content</label>
                    <div className="border border-gray-300 rounded-md overflow-hidden">
                      <TiptapEditor content={newBlog.description} onChange={handleEditorChange} className="bg-white text-black h-[500px]" />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium">Cancel</button>
                    <button type="submit" className="px-4 py-2 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white rounded-md font-medium">
                      {formMode === 'add' ? 'Publish Article' : 'Update Article'}
                    </button>
                  </div>
                </form>
              </AnimatePresence>
            ) : (
              // Articles Table - Exactly like Blog
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-x-auto"
                >
                  {/* Search Bar */}
                  <div className="mb-4 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search articles by title, subtitle, slug, or author..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#D2A02A] focus:border-[#D2A02A] sm:text-sm text-black"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                      >
                        <FontAwesomeIcon icon={faTrash} className="text-xs" />
                      </button>
                    )}
                  </div>

                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F0EAD6]">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">Subtitle</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#5A4C33] uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-black">
                      {currentBlogs.length > 0 ? (
                        currentBlogs.map((blog) => (
                          <tr key={blog.id} className="hover:bg-[#F8F5EC] transition-colors duration-150">
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{new Date(blog.date).toLocaleDateString()}</td>
                            <td className="px-6 py-4 text-sm font-medium max-w-xs truncate">{blog.title}</td>
                            <td className="px-6 py-4 text-sm max-w-xs truncate">{blog.subtitle}</td>
                            <td className="px-6 py-4 whitespace-nowrap"><img src={blog.image} alt="" className="w-20 h-20 rounded-full object-cover" /></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div className="flex space-x-2">
                                <button onClick={() => handleEdit(blog)} className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs flex items-center"><FontAwesomeIcon icon={faEdit} className="mr-1" /> Edit</button>
                                <button onClick={() => handleDelete(blog.id)} className="px-3 py-1 bg-red-500 text-white rounded-md text-xs flex items-center"><FontAwesomeIcon icon={faTrash} className="mr-1" /> Delete</button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">No articles found.</td></tr>
                      )}
                    </tbody>
                  </table>

                  <div className="mt-4 flex justify-between items-center text-black">
                    <div className="text-sm">
                      Showing <span className="font-medium">{filteredArticles.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredArticles.length)}</span> of <span className="font-medium">{filteredArticles.length}</span> results
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={handlePreviousPage} disabled={currentPage === 1} className="px-3 py-1 bg-[#F0EAD6] rounded-md text-sm disabled:opacity-50">Previous</button>
                      <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-3 py-1 bg-[#F0EAD6] rounded-md text-sm disabled:opacity-50">Next</button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
      </motion.div>
    </motion.div>
  );
};

export default ArticlesDashboard;
