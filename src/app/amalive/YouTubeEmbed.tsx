import { memo } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
}

// Memoized YouTube embed component to prevent unnecessary re-renders
const YouTubeEmbed = ({ videoId }: YouTubeEmbedProps) => {
  return (
    <iframe
      width="100%"
      height="200"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-t-xl"
      loading="lazy" // Lazy load iframes
    ></iframe>
  );
};

// Memo to prevent re-rendering when props don't change
export default memo(YouTubeEmbed);