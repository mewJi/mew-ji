import React from 'react';

export default function CardHobbiesWithBorder({
  title,
  description,
  imageUrl,
  object,
}) {
  return (
    <div className="text-left px-8 py-10 border-gray-200 border rounded-md my-4 md:mx-4 bg-white">
      <img alt="..." src={imageUrl} className="w-full rounded-sm  align-left" />
      <div>
        <h2 className=" text-xl font-semibold text-blue-500 mb-2">{title}</h2>
      </div>
      <p className="mt-4 text-lg leading-relaxed text-gray-500">
        {description}
      </p>
      {object}
    </div>
  );
}
