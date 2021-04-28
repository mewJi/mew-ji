import React from 'react';

export default function TitleWithIcon({
  title,
  icon,
  className = 'container',
}) {
  return (
    <div className="px-4 text-center">
      <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-8 shadow-lg rounded-full bg-white  text-center">
        <i className={icon + ' text-4xl text-blue-500'}></i>
      </div>
      <h3 className="text-4xl font-semibold mb-16">{title}</h3>
    </div>
  );
}
