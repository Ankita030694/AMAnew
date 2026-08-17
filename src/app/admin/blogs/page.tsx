'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faPlus, faEdit, faTrash, faUpload, faMagic, faSearch, faChevronLeft, faChevronRight, faTimes, faArrowLeft, faCheckCircle, faInfoCircle, faFileAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc, query, where } from 'firebase/firestore';
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
  reviews?: Review[]; // New field for Reviews
  author: string; // New author field
}

// Define Review interface
interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string;
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
    reviews: [], // Initialize empty Reviews array
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
  const [searchTerm, setSearchTerm] = useState('');

  // AI Generation state
  const [primaryKeyword, setPrimaryKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // New Image Generation and Content Expansion state
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isUploadingGenerated, setIsUploadingGenerated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prompt Management state
  const [promptsList, setPromptsList] = useState<{id: string, name: string, isDefault: boolean}[]>([]);
  const [selectedPromptId, setSelectedPromptId] = useState<string>('');

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the total number of pages based on filtered blogs
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  // Get the current blogs to display based on the current page
  const currentBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset pagination when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

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
      router.push('/admin/ama-live');
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
            slug: docData.slug || '',
            faqs: docData.faqs || [],
            reviews: docData.reviews || [],
            author: docData.author || 'Anuj Anand Malik'
          };
        });
        // Sort blogs by created timestamp in descending order (newest first)
        const sortedData = data.sort((a, b) => (b.created || 0) - (a.created || 0));
        setBlogs(sortedData);
      } catch (error) {
        console.error("Error fetching blogs data:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Fetch AI Prompts
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'prompts'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          isDefault: doc.data().isDefault || false
        }));
        setPromptsList(data);
        
        // Auto-select default prompt if available
        const defaultPrompt = data.find(p => p.isDefault);
        if (defaultPrompt) {
          setSelectedPromptId(defaultPrompt.id);
        } else if (data.length > 0) {
          setSelectedPromptId(data[0].id);
        }
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    };
    fetchPrompts();
  }, []);

  // Autosave functionality
  useEffect(() => {
    if (showBlogForm && newBlog) {
      // Don't save if it's empty initial state
      if (newBlog.title === '' && newBlog.description === '') return;

      const timer = setTimeout(() => {
        const key = formMode === 'edit' && newBlog.id ? `autosave_blog_${newBlog.id}` : 'autosave_blog_new';
        localStorage.setItem(key, JSON.stringify(newBlog));
      }, 1000); // Save after 1 second of inactivity

      return () => clearTimeout(timer);
    }
  }, [newBlog, showBlogForm, formMode]);

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

  // Add Review to the blog
  const addReview = () => {
    setNewBlog(prevState => ({
      ...prevState,
      reviews: [...(prevState.reviews || []), { name: '', rating: 5, review: '' }]
    }));
  };

  // Remove Review from the blog
  const removeReview = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      reviews: (prevState.reviews || []).filter((_, i) => i !== index)
    }));
  };

  // Handle Review input changes
  const handleReviewChange = (index: number, field: keyof Review, value: string | number) => {
    setNewBlog(prevState => {
      const updatedReviews = [...(prevState.reviews || [])];
      updatedReviews[index] = { 
        ...updatedReviews[index], 
        [field]: value 
      } as any;
      return {
        ...prevState,
        reviews: updatedReviews
      };
    });
  };

  // Handle file upload to Firebase Storage
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (limit to 10MB)
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_FILE_SIZE) {
      alert("Image is too large. Maximum size is 10MB.");
      return;
    }
    
    try {
      setUploading(true);
      setUploadProgress(0);
      
      // Create a reference to the file in Firebase Storage
      if (!storage) {
        throw new Error("Firebase Storage is not initialized");
      }
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

  // Handle AI generation
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
        body: JSON.stringify({ primaryKeyword, promptId: selectedPromptId }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate blog');
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
      
      alert('Blog generated successfully! Please review and add an image.');
    } catch (error) {
      console.error('Error generating blog:', error);
      alert('Failed to generate blog. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt.trim()) {
      alert('Please enter an image prompt.');
      return;
    }

    try {
      setIsGeneratingImage(true);
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: imagePrompt }),
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
      const storageRef = ref(storage, `blog-images/${Date.now()}_generated.png`);
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
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      // Add timestamp and format the date
      const blogWithMetadata = {
        ...newBlog,
        created: formMode === 'add' ? Date.now() : newBlog.created,
        date: new Date(newBlog.date).toISOString().split('T')[0] // Ensure date is in YYYY-MM-DD format
      };
      
      // Remove faqs and reviews from the main document since we'll store them in subcollections
      const { faqs, reviews, ...blogData } = blogWithMetadata;
      
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

      // Add Reviews to subcollection
      if (blogId && reviews && reviews.length > 0) {
        // First delete existing Reviews if updating
        if (formMode === 'edit') {
          const reviewsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'reviews'));
          for (const doc of reviewsSnapshot.docs) {
            await deleteDoc(doc.ref);
          }
        }
        
        // Add all Reviews to subcollection
        for (const review of reviews) {
          await addDoc(collection(db, 'blogs', blogId, 'reviews'), {
            name: review.name,
            rating: review.rating,
            review: review.review
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
          reviews: [], // Initialize empty reviews array
          author: docData.author || 'Anuj Anand Malik' // Default author changed from 'Team AMA'
        };
      });
      // Sort updated blogs by created timestamp in descending order
      const sortedUpdatedBlogs = updatedBlogs.sort((a, b) => (b.created || 0) - (a.created || 0));
      setBlogs(sortedUpdatedBlogs);
      
    } catch (error) {
      console.error("Error processing blog:", error);
      alert("Error processing blog: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsSubmitting(false);
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
      
      // Fetch Reviews for this blog
      const reviewsSnapshot = await getDocs(collection(db, 'blogs', blog.id!, 'reviews'));
      const reviews = reviewsSnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name || '',
        rating: doc.data().rating || 5,
        review: doc.data().review || ''
      }));
      
      setNewBlog({...blog, faqs, reviews});
      setFormMode('edit');
      
      // Check for saved draft for this specific blog
      const savedDraft = localStorage.getItem(`autosave_blog_${blog.id}`);
      if (savedDraft) {
        if (window.confirm('Found an unsaved draft for this blog. Do you want to restore your edits?')) {
          const parsedDraft = JSON.parse(savedDraft);
          setNewBlog(parsedDraft);
          if (parsedDraft.image) setImagePreview(parsedDraft.image);
        } else {
          localStorage.removeItem(`autosave_blog_${blog.id}`);
        }
      }
      
      setShowBlogForm(true);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setNewBlog(blog);
      setFormMode('edit');
      
      // Check for saved draft even on error
      const savedDraft = localStorage.getItem(`autosave_blog_${blog.id}`);
      if (savedDraft) {
        if (window.confirm('Found an unsaved draft for this blog. Do you want to restore your edits?')) {
          const parsedDraft = JSON.parse(savedDraft);
          setNewBlog(parsedDraft);
          if (parsedDraft.image) setImagePreview(parsedDraft.image);
        } else {
          localStorage.removeItem(`autosave_blog_${blog.id}`);
        }
      }
      
      setShowBlogForm(true); 
    }
  };
 
  // Handle blog delete
  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        // Get the blog content first to extract image URLs
        const blogDoc = await getDoc(doc(db, 'blogs', id));
        const blogData = blogDoc.data();
        
        if (blogData) {
          // Extract all image URLs from the blog content
          const content = blogData.description || '';
          const imgRegex = /<img[^>]+src="([^">]+)"/g;
          const imageUrls = new Set();
          let match;
          
          while ((match = imgRegex.exec(content)) !== null) {
            imageUrls.add(match[1]);
          }
          
          // Get all blog_images documents
          const imagesSnapshot = await getDocs(collection(db, 'blog_images'));
          const unusedImages = imagesSnapshot.docs.filter(doc => {
            const imageData = doc.data();
            return imageUrls.has(imageData.url);
          });
          
          // Delete unused images from Storage and Firestore
          for (const imageDoc of unusedImages) {
            const imageData = imageDoc.data();
            try {
              // Delete from Storage
              if (!storage) {
                throw new Error("Firebase Storage is not initialized");
              }
              const imageRef = ref(storage, imageData.path);
              await deleteObject(imageRef);
              
              // Delete from Firestore
              await deleteDoc(imageDoc.ref);
            } catch (error) {
              console.error(`Error deleting image ${imageData.filename}:`, error);
            }
          }
        }
        
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
    // Clear autosave draft based on current mode
    if (formMode === 'edit' && newBlog.id) {
      localStorage.removeItem(`autosave_blog_${newBlog.id}`);
    } else {
      localStorage.removeItem('autosave_blog_new');
    }

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
      reviews: [], // Reset Reviews array
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
    <div className="p-6 max-w-7xl mx-auto bg-slate-50 min-h-screen text-slate-800 font-sans">
      <AnimatePresence>
        {!showBlogForm ? (
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
                  <span className="text-[#B8860B]">📝</span>
                  <span>Curated Blog Dashboard</span>
                </h1>
                <p className="text-slate-400 text-xs mt-1 font-semibold">
                  Publish high-quality articles, SEO schemas, client star ratings, and detailed Q&A guides.
                </p>
              </div>
              <button
                onClick={() => {
                  setFormMode('add');
                  const savedDraft = localStorage.getItem('autosave_blog_new');
                  if (savedDraft) {
                    if (window.confirm('Found an unsaved draft. Do you want to restore it?')) {
                      const parsedDraft = JSON.parse(savedDraft);
                      setNewBlog(parsedDraft);
                      if (parsedDraft.image) setImagePreview(parsedDraft.image);
                    } else {
                      localStorage.removeItem('autosave_blog_new');
                      resetForm();
                    }
                  } else {
                    resetForm();
                  }
                  setShowBlogForm(true);
                }}
                className="bg-[#B8860B] hover:bg-[#9E7307] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-3xs"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>Write Blog Post</span>
              </button>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Total Published Blogs</span>
                <p className="text-3xl font-black text-[#B8860B] mt-1">{blogs.length}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">TOC & SEO Enriched</span>
                <p className="text-3xl font-black text-green-700 mt-1">
                  {blogs.filter(b => b.description?.includes('<h2') || b.description?.includes('<h3')).length}
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">FAQs Embedded</span>
                <p className="text-3xl font-black text-blue-700 mt-1">
                  {blogs.filter(b => b.faqs && b.faqs.length > 0).length}
                </p>
              </div>
            </div>

            {/* Filter and Search */}
            <div className="flex bg-white p-4 rounded-2xl border border-slate-100 shadow-3xs items-center gap-3">
              <FontAwesomeIcon icon={faSearch} className="text-slate-400 text-sm ml-2" />
              <input
                type="text"
                placeholder="Search blogs by title, subtitle, or slug..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none placeholder-slate-400 text-slate-700"
              />
            </div>

            {/* Blogs Table / List */}
            {currentBlogs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-3xs border-dashed border-slate-200">
                <FontAwesomeIcon icon={faClipboardList} className="text-slate-300 text-4xl mb-4" />
                <p className="text-slate-400 text-sm italic">No blog posts found matching search query.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-3xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Banner</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Title & Details</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Slug / Link</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Q&A / Reviews</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentBlogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4">
                            <img
                              src={blog.image || "/logo_qa.png"}
                              alt={blog.title}
                              className="w-16 h-10 object-cover rounded-lg bg-slate-100 border border-slate-200/50 shadow-3xs"
                            />
                          </td>
                          <td className="p-4 max-w-xs">
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-1 hover:text-[#B8860B] transition-colors">
                              {blog.title}
                            </span>
                            <div className="flex gap-2 items-center text-[10px] text-slate-400 font-semibold mt-1">
                              <span>{blog.date}</span>
                              <span>•</span>
                              <span>By: {blog.author}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-[11px] font-mono bg-slate-100 border border-slate-150 text-slate-600 px-2 py-0.5 rounded-md">
                              {blog.slug}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2 items-center">
                              <span className="px-2 py-0.5 bg-blue-50 border border-blue-200/50 rounded-md text-[10px] font-extrabold text-blue-700">
                                {blog.faqs?.length || 0} FAQs
                              </span>
                              <span className="px-2 py-0.5 bg-amber-50 border border-amber-200/50 rounded-md text-[10px] font-extrabold text-[#B8860B]">
                                {blog.reviews?.length || 0} Reviews
                              </span>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEdit(blog)}
                                className="w-8 h-8 rounded-lg hover:bg-slate-100 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-[#B8860B] transition-colors cursor-pointer"
                                title="Edit post"
                              >
                                <FontAwesomeIcon icon={faEdit} className="text-xs" />
                              </button>
                              <button
                                onClick={() => handleDelete(blog.id)}
                                className="w-8 h-8 rounded-lg hover:bg-red-50 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
                                title="Delete post"
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50/50">
                    <span className="text-xs text-slate-400 font-semibold">
                      Page {currentPage} of {totalPages}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-white text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
                      </button>
                      <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-white text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onSubmit={handleSubmitBlog}
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
                    {formMode === 'add' ? 'Publish a New Blog Post' : 'Modify Blog Post Details'}
                  </h2>
                  <p className="text-slate-400 text-xs mt-0.5 font-semibold">
                    Set up titles, subtitle blocks, canonical slug, Rich Tiptap body content, FAQs, and reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    const key = formMode === 'add' ? 'autosave_blog_new' : `autosave_blog_${newBlog.id}`;
                    const draft = localStorage.getItem(key);
                    if (draft) {
                      setNewBlog(JSON.parse(draft));
                      setImagePreview(JSON.parse(draft).image || null);
                      alert("Draft recovered successfully!");
                    } else {
                      alert("No draft found in storage.");
                    }
                  }}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-600 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                  title="Check autosaved version"
                >
                  <FontAwesomeIcon icon={faClipboardList} className="text-xs" />
                  <span>Restore Draft</span>
                </button>
              </div>
            </div>

            {/* AI Writeup Generator Card */}
            {formMode === 'add' && (
              <div className="p-6 border border-amber-200/80 bg-gradient-to-br from-amber-50/40 to-orange-50/10 rounded-2xl shadow-3xs relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-200/10 to-transparent rounded-bl-full pointer-events-none"></div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-[#B8860B] text-xs font-bold animate-pulse">✨</span>
                    <div>
                      <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider">
                        AI Writeup Auto-Generator (ChatGPT)
                      </h3>
                      <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed normal-case">
                        Paste the raw writeup or primary keyword below. ChatGPT will automatically draft the title, subtitle, slug, detailed rich blog post, 10+ FAQ schemas, and 5+ client reviews.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <textarea
                    value={primaryKeyword}
                    onChange={(e) => setPrimaryKeyword(e.target.value)}
                    rows={5}
                    placeholder="Enter primary keyword, draft notes, or transcripts for the legal blog here..."
                    className="w-full p-4 bg-white border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-50 rounded-xl text-xs text-slate-800 focus:outline-none placeholder-slate-400 shadow-3xs transition-all"
                    disabled={isGenerating}
                  />

                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider">Select AI Prompt Profile</label>
                    <select
                      value={selectedPromptId}
                      onChange={(e) => setSelectedPromptId(e.target.value)}
                      disabled={isGenerating || promptsList.length === 0}
                      className="w-full p-3 bg-white border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-50 rounded-xl text-xs text-slate-800 focus:outline-none shadow-3xs transition-all"
                    >
                      {promptsList.length === 0 ? (
                        <option value="">No profiles found (Please create one in AI Prompts)</option>
                      ) : (
                        promptsList.map(prompt => (
                          <option key={prompt.id} value={prompt.id}>
                            {prompt.name} {prompt.isDefault ? '(Default)' : ''}
                          </option>
                        ))
                      )}
                    </select>
                  </div>

                  <div className="flex items-center justify-between mt-1.5">
                    <div className="flex items-center gap-2.5">
                      {isGenerating && (
                        <div className="flex items-center gap-2">
                          <span className="animate-spin text-amber-500 text-sm">💫</span>
                          <span className="text-[11px] font-bold text-slate-650 animate-pulse">
                            Generating Content...
                          </span>
                        </div>
                      )}
                    </div>

                    <motion.button
                      type="button"
                      onClick={handleGenerate}
                      disabled={isGenerating || !primaryKeyword.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-[#B8860B] hover:from-amber-600 hover:to-[#9E7307] text-white disabled:opacity-40 rounded-xl font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      {isGenerating ? (
                        <>
                          <span className="animate-spin text-xs">💫</span>
                          <span>Generating Content...</span>
                        </>
                      ) : (
                        <>
                          <span>✨ Generate Blog with AI</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            )}

            {/* Main Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Blog Title *</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={newBlog.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Defeating Bank Harassment & Debt Settlement"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Subtitle */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Subtitle Block</label>
                <input
                  type="text"
                  name="subtitle"
                  value={newBlog.subtitle}
                  onChange={handleInputChange}
                  placeholder="e.g. A comprehensive guide on debtor legal rights and RBI OTS principles"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Slug */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <span>URL Slug *</span>
                  <span className="text-[10px] text-slate-400 italic lowercase font-normal">(only letters, numbers, hyphens)</span>
                </label>
                <input
                  type="text"
                  name="slug"
                  required
                  value={newBlog.slug}
                  onChange={handleInputChange}
                  placeholder="e.g. defeating-bank-harassment"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white font-mono"
                />
              </div>

              {/* Meta Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Custom Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={newBlog.metaTitle}
                  onChange={handleInputChange}
                  placeholder="Defaults to post title if left blank"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Meta Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Custom Meta Description</label>
                <input
                  type="text"
                  name="metaDescription"
                  value={newBlog.metaDescription}
                  onChange={handleInputChange}
                  placeholder="Short description for Google snippet"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Publication Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={newBlog.date}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Author */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Featured Author Profile</label>
                <select
                  name="author"
                  value={newBlog.author}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                >
                  <option value="Anuj Anand Malik">Anuj Anand Malik</option>
                  <option value="Shrey Arora">Shrey Arora</option>
                  <option value="Adv. Ashish Bhay">Adv. Ashish Bhay</option>
                </select>
              </div>

              {/* Image Input */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Cover Image Prompt (AI Generation)</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    placeholder="e.g. A professional legal illustration..."
                    className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white flex-1"
                  />
                  <button
                    type="button"
                    onClick={handleGenerateImage}
                    disabled={isGeneratingImage || !imagePrompt.trim()}
                    className="px-4 py-3 bg-amber-50 hover:bg-amber-100 border border-[#D4AF37]/35 text-[#B8860B] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isGeneratingImage ? '💫 Generating...' : '✨ Generate AI'}</span>
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Cover Image URL *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="image"
                    required
                    value={newBlog.image}
                    onChange={handleInputChange}
                    placeholder="URL of the uploaded image..."
                    className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white flex-1"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    <span>{uploading ? '...' : 'Upload Local'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Generated Image Preview Block */}
            {generatedImageUrl && (
              <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-200 flex flex-col items-center gap-3">
                <span className="text-[10px] text-[#B8860B] font-bold uppercase tracking-wider">AI Generated Image</span>
                <img
                  src={generatedImageUrl}
                  alt="generated preview"
                  className="w-full max-w-sm h-40 object-cover rounded-xl border border-amber-200 shadow-sm"
                />
                <button
                  type="button"
                  onClick={handleUploadGeneratedImage}
                  disabled={isUploadingGenerated}
                  className="px-4 py-2 bg-[#B8860B] text-white rounded-lg text-xs font-bold hover:bg-[#9E7307] transition-colors disabled:opacity-50"
                >
                  {isUploadingGenerated ? 'Uploading to Firebase...' : 'Upload this to Firebase & Use as Cover'}
                </button>
              </div>
            )}

            {/* Image Preview Block */}
            {imagePreview && !generatedImageUrl && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150 flex flex-col items-center gap-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cover Image Preview</span>
                <img
                  src={imagePreview}
                  alt="cover preview"
                  className="w-full max-w-sm h-40 object-cover rounded-xl border border-slate-200 shadow-3xs"
                />
              </div>
            )}

            {/* Tiptap Rich Description Editor */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Detailed Blog Content Body</label>
              <TiptapEditor
                content={newBlog.description}
                onChange={handleEditorChange}
              />
            </div>


            {/* FAQ Subcollection Section */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faFileAlt} className="text-blue-700" />
                  <span>Crawlable Q&A (FAQ Schema)</span>
                </h3>
                <button
                  type="button"
                  onClick={addFaq}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add FAQ Item</span>
                </button>
              </div>

              {(newBlog.faqs || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No FAQ cards configured. Add items to support Google Q&A Rich snippets.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {(newBlog.faqs || []).map((faq, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 flex flex-col gap-3 relative shadow-3xs">
                      <button
                        type="button"
                        onClick={() => removeFaq(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="grid grid-cols-1 gap-2.5 pr-8">
                        <input
                          type="text"
                          placeholder="Question (e.g. Can I settle a bank loan without court?)"
                          required
                          value={faq.question}
                          onChange={(e) => handleFaqChange(idx, 'question', e.target.value)}
                          className="p-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-xs font-bold text-slate-800 bg-slate-50/50"
                        />
                        <textarea
                          placeholder="Detailed Answer..."
                          required
                          rows={2}
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(idx, 'answer', e.target.value)}
                          className="p-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-xs text-slate-600 bg-slate-50/50"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Review Subcollection Section */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faStar} className="text-amber-500" />
                  <span>Client Testimonials (Review Schema)</span>
                </h3>
                <button
                  type="button"
                  onClick={addReview}
                  className="text-xs font-bold text-amber-600 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add Review</span>
                </button>
              </div>

              {(newBlog.reviews || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No reviews added yet.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {(newBlog.reviews || []).map((review, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 flex flex-col gap-3 relative shadow-3xs">
                      <button
                        type="button"
                        onClick={() => removeReview(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pr-8">
                        <input
                          type="text"
                          placeholder="Client Name"
                          required
                          value={review.name}
                          onChange={(e) => handleReviewChange(idx, 'name', e.target.value)}
                          className="p-3 border border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-xs font-bold text-slate-800 bg-slate-50/50"
                        />
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500">Rating:</span>
                          <input
                            type="number"
                            min="1"
                            max="5"
                            required
                            value={review.rating}
                            onChange={(e) => handleReviewChange(idx, 'rating', parseInt(e.target.value))}
                            className="p-2 border border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-xs text-slate-800 bg-slate-50/50 w-20"
                          />
                        </div>
                        <textarea
                          placeholder="Client Review..."
                          required
                          rows={2}
                          value={review.review}
                          onChange={(e) => handleReviewChange(idx, 'review', e.target.value)}
                          className="p-3 border border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-xs text-slate-600 bg-slate-50/50 md:col-span-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                    <span>{formMode === 'add' ? 'Publish Blog Post' : 'Update Blog Post'}</span>
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

export default BlogsDashboard;