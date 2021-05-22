import React from 'react';

export default function ImageWithCaption({
  imageUrl,
  caption,
  className = 'container',
}) {
  return (
    <div className="text-center my-4">
      <img
        alt="..."
        src={imageUrl}
        className="w-full align-middle rounded-lg"
      />
      <p className="italic text-xs font-light text-gray-400 mt-2 text-center">
        {caption}
      </p>
    </div>
  );
}
