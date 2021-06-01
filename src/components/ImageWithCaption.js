import React from 'react';
const pushImageStoryBoardOnLightBox = () =>
  setImages([require('assets/img/Storyboard.jpg').default]);

export default function ImageWithCaption({
  imageUrl,
  caption,
  className = 'container',
  jvscript,
}) {
  return (
    <div className="text-center my-4" onClick={jvscript}>
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
