import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  quality?: number;
  sizes?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  title?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading = 'lazy',
  quality = 85,
  sizes,
  onError,
  title,
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // Process Firebase Storage URLs
  const processFirebaseUrl = (url: string): string => {
    if (url.includes('firebasestorage.googleapis.com') || url.includes('firebasestorage.app')) {
      try {
        const urlObj = new URL(url);
        
        // Ensure alt=media parameter exists
        if (!urlObj.searchParams.has('alt')) {
          urlObj.searchParams.set('alt', 'media');
        }
        
        // Add cache busting for production token refresh issues
        urlObj.searchParams.set('_cb', Date.now().toString());
        
        return urlObj.toString();
      } catch (error) {
        console.error('Error processing Firebase URL:', error);
        return url;
      }
    }
    return url;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageError(true);
    if (onError) {
      onError(e);
    }
    
    // Retry logic for Firebase Storage URLs
    if (retryCount < 2 && (src.includes('firebasestorage.googleapis.com') || src.includes('firebasestorage.app'))) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setImageError(false);
      }, 1000 * (retryCount + 1)); // Exponential backoff
    }
  };

  // If image failed to load and we've exhausted retries, show placeholder
  if (imageError && retryCount >= 2) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className || ''}`}
        style={{ width, height }}
      >
        <div className="text-center">
          <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-400 text-xs">Image unavailable</p>
        </div>
      </div>
    );
  }

  const processedSrc = processFirebaseUrl(src);

  return (
    <Image
      src={processedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={loading}
      quality={quality}
      sizes={sizes}
      onError={handleImageError}
      title={title}
      {...props}
    />
  );
}
