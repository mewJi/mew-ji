import React from 'react';

export default function TextWithBG({
  title,
  description,
  className = 'container',
}) {
  return (
    <div className="text-center bg-white rounded-xl py-8 px-8 m-8">
      <h2 className="mb-10 text-xl font-semibold">{title}</h2>
      <p className="text-lg leading-relaxed text-gray-700">{description}</p>
    </div>
  );
}
