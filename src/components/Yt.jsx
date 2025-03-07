'use client'
import React from 'react';

const Yt = () => {
  const videoRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const videoUrl = `https://www.youtube.com/embed/YM8ePJEKoFo?si=isNf0UwUtKZjGEeh&autoplay=${
    isVisible ? 1 : 0
  }&mute=1&controls=0&showinfo=0&modestbranding=1`;

  return (
    <div style={{ width: '100%', height: '70vh' }} ref={videoRef}>
      <iframe
        width="100%"
        height="100%"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Yt;
