import React from 'react';

export default function CardSumaryWithBorder({
  title,
  subtitle,
  description,
  imageUrl,
}) {
  return (
    <div className="text-left px-8 py-10 border-gray-200 border rounded-md my-4 md:mx-4 bg-white">
      <div>
        <h2 className=" text-xl font-semibold text-yellow-500 mb-2">{title}</h2>
      </div>
      <div>
        <h2 className=" text-2xl font-semibold text-gray-800 mb-8">
          {subtitle}
        </h2>
      </div>
      <p className="mt-4 text-lg leading-relaxed text-gray-500 mb-8">
        {description}
      </p>
      <img
        alt="..."
        src={imageUrl}
        className="w-full rounded-sm px-8 py-4 align-left"
      />
    </div>
  );
}
