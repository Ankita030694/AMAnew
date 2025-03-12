'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase'; // adjust the path as needed
import { FirebaseError } from "firebase/app";
const LoginPage = () => {
  const [animationState, setAnimationState] = useState('initial'); // initial, welcome, form
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Handle animation sequence
  useEffect(() => {
    // Start with a black screen
    const welcomeTimer = setTimeout(() => {
      setAnimationState('welcome'); // Show "Hello There"
      // After showing welcome, transition to form
      const formTimer = setTimeout(() => {
        setAnimationState('form');
      }, 3000);
      return () => clearTimeout(formTimer);
    }, 500);
    return () => clearTimeout(welcomeTimer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    // Clear any previous error when the user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Use Firebase Authentication to sign in the user
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      // Redirect to the admin dashboard on successful login
      router.push('/admin/dashboard');
    } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          if (err.code === 'auth/invalid-email' || err.code === 'auth/user-not-found') {
            setError('Invalid email address');
          } else if (err.code === 'auth/wrong-password') {
            setError('Incorrect password');
          } else {
            setError('Login failed. Please try again.');
          }
        } else {
          setError('An unknown error occurred.');
        }
      
        console.error("Login error:", err);
      } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Black background that fades out */}
      <AnimatePresence>
        {animationState === 'initial' && (
          <motion.div
            key="black-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-black z-50"
          />
        )}
      </AnimatePresence>

      {/* Main background that fades in */}
      <motion.div 
        className="min-h-screen bg-[#F8F5EC] relative overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animated background elements */}
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

        <div className="relative z-10 w-full max-w-md px-4">
          <AnimatePresence mode="wait">
            {animationState === 'welcome' && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <motion.h1 
                  className="text-5xl font-bold text-[#5A4C33]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  Hello There
                </motion.h1>
                <motion.div 
                  className="w-32 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: "8rem" }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                />
              </motion.div>
            )}

            {animationState === 'form' && (
              <motion.div
                key="loginForm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-lg p-8 shadow-xl border-l-4 border-[#D2A02A]"
              >
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-[#5A4C33]">Login</h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mt-2"></div>
                  <p className="text-[#5A4C33]/70 mt-4">
                    Please enter your credentials to access the admin dashboard
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-[#D2A02A]">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleChange}
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-[#F8F5EC] text-[#5A4C33] pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                      placeholder="Email Address"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-[#D2A02A]"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-3 text-[#D2A02A]">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleChange}
                      required
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-[#F8F5EC] text-[#5A4C33] pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                      placeholder="Password"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-[#D2A02A]"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'password' ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
                    >
                      {error}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] text-white py-3 rounded-md font-semibold relative overflow-hidden group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing In...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center cursor-pointer">
                        <span>Sign In</span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </span>
                    )}
                  </motion.button>

                  <div className="text-center mt-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="text-[#D2A02A] hover:underline text-sm"
                    >
                      Forgot Password?
                    </motion.a>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
