import React from 'react';

export default function CardHobbiesWithBorder({
  title,
  description,
  imageUrl,
  object,
}) {
  return (
    <div className="text-left px-8 md:py-8 border-gray-200 my-4 md:mx-4 bg-white">
      <img
        alt="..."
        src={imageUrl}
        className="w-full rounded-sm  pb-6"
        style={{ maxWidth: '150px' }}
      />
      <div>
        <h2 className=" text-xl font-semibold text-gray-700 mb-2">{title}</h2>
      </div>
      <p className="mt-4 text-md leading-relaxed text-gray-400">
        {description}
      </p>
      {object}
    </div>
  );
}
