import React from 'react';

export default function CardSumaryWithBorder({ title, subtitle, description }) {
  return (
    <div className="text-left px-8 py-8 border-gray-200 border rounded-md my-4 mx-8 bg-white">
      <div>
        <h2 className=" text-xl font-semibold text-yellow-500 mb-2">{title}</h2>
      </div>
      <div>
        <h2 className=" text-2xl font-semibold text-gray-800 mb-8">
          {subtitle}
        </h2>
      </div>
      <p className="mt-4 text-lg leading-relaxed text-gray-500">
        {description}
      </p>
    </div>
  );
}
