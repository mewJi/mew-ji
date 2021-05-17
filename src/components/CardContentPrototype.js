import React from 'react';

export default function CardContentPrototype({ title, subtitle, description }) {
  return (
    <div className="text-left">
      <div>
        <h2 className=" text-xl font-semibold text-blue-600 mb-4">{title}</h2>
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
