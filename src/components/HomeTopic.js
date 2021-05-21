import React from 'react';

export default function HomeTopic({ caption, title, className = 'container' }) {
  return (
    <div className="flex flex-wrap md:w-3/5 mx-auto justify-center items-center mb-8 mt-16 text-center">
      <div>
        {' '}
        <p className="text-xl font-light text-gray-400 ">{caption}</p>
      </div>
      <div>
        <h3 className="text-3xl font-normal text-gray-800">{title}</h3>
      </div>
    </div>
  );
}
