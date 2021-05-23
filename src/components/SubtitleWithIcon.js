import React from 'react';

export default function SubtitleWithIcon({
  title,
  icon,
  className = 'container',
}) {
  return (
    <div className="inline-flex w-full mx-auto items-center mb-8">
      {/* <i className={icon + ' text-3xl text-blue-500'}></i> */}
      {/* <i className="fas fa-grip-lines-vertical  mr-4 text-3xl text-blue-400"></i> */}
      <i className="fas fa-play mr-4 text-3xl text-blue-400"></i>

      <h3 className="text-3xl font-semibold ">{title}</h3>
    </div>
  );
}
