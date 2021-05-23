import React from 'react';

export default function TitleWithCaption({
  title,
  caption,
  className = 'container',
}) {
  return (
    <div className="text-center my-8">
      <span className=" text-xl text-center inline-block py-1 px-8 bg-blue-100 text-blue-500 bg rounded-full">
        <p className=" font-medium text-white-400">{caption}</p>
      </span>
      <h3 className="text-4xl font-mudium text-gray-800 mt-4">{title}</h3>
    </div>
  );
}
