'use client';

import React from 'react';

type Props = {
  videoId: string; // YouTube video ID (e.g. "dQw4w9WgXcQ")
  title?: string;
  className?: string;
};

export default function YouTubeEmbed({ videoId, title = "YouTube video", className = "" }: Props) {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl shadow-lg ${className}`} style={{ paddingTop: "56.25%" }}>
      <iframe
        className="absolute left-0 top-0 h-full w-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
