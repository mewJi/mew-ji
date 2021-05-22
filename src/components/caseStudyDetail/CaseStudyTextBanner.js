import React from 'react';

export default function CaseStudyTextBanner({
  className,
  isAbsolute,
  textCss,
}) {
  const cssInner =
    isAbsolute !== true
      ? 'flex flex-col inline md:top-12 md:right-12 lg:top-32 lg:right-24'
      : 'flex flex-col absolute inline md:top-12 md:right-12 lg:top-32 lg:right-24';

  return (
    <div className={className}>
      <div className="w-full h-full">
        <div className={`${cssInner} ${textCss}`}>
          <h3 className="text-gray-300">UX Case Study</h3>
          <br />
          <h1 className="md:text-4xl lg:text-6xl text-indigo-600">
            HOME <span className="text-yellow-400">H</span>ERO
          </h1>
          <br />
          <p className="italic text-left">
            The technicians are everywhere,
            <br />
            but you couldn't find the RIGHT technicians
            <br />
            everywhere
          </p>
        </div>
      </div>
    </div>
  );
}
