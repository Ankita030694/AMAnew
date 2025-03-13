'use client'
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import toast from 'react-hot-toast'; // You'll need to install this: npm install react-hot-toast

export const usePermissions = (requiredPermission: 'admin' | 'advocate' | 'any') => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/login');
        return;
      }

      try {
        // Get the user's role from Firestore
        const q = query(collection(db, 'users'), where('email', '==', user.email));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          setUserRole(null);
          setIsAuthorized(false);
          setIsLoading(false);
          return;
        }
        
        const userData = querySnapshot.docs[0].data();
        const role = userData.role || null;
        setUserRole(role);
        
        // Check if user has permission
        if (requiredPermission === 'any' || role === 'admin' || 
            (role === 'advocate' && requiredPermission === 'advocate')) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          // Show toast message
          toast.error('Oops, seems like you do not have permissions to access this page.');
          // Redirect advocate users to articles page
          if (role === 'advocate') {
            router.push('/admin/articles');
          } else {
            router.push('/login');
          }
        }
      } catch (error) {
        console.error('Error checking permissions:', error);
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router, requiredPermission]);

  return { isAuthorized, isLoading, userRole };
}; 