'use client'
import React from 'react';

const Yt = () => {
  const videoRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }} ref={containerRef}>
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        autoPlay={isVisible}
        muted
        loop
        playsInline
        style={{ objectFit: 'cover' }}
      >
        <source src="/about.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Yt;
