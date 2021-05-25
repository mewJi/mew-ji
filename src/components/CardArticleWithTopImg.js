import React from 'react';

export default function CardArticleWithTopImg({
  title,
  description,
  imageUrl,
}) {
  return (
    <div>
      <img alt="..." src={imageUrl} className="w-full rounded-lg p-10" />
      <h2 className=" text-2xl font-semibold text-blue-600">{title}</h2>

      <p className="mt-4 text-lg leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}
