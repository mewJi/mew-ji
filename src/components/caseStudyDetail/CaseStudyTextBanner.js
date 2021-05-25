import React from 'react';

export default function CaseStudyTextBanner({
  className,
  isAbsolute,
  textCss,
}) {
  const cssInner =
    isAbsolute !== true
      ? 'flex flex-col inline md:top-12 md:right-12 lg:top-32 lg:right-32'
      : 'flex flex-col absolute inline md:top-12 md:right-12 lg:top-32 lg:right-32';

  return (
    <div className={className}>
      <div className="w-full h-full">
        <div className={`${cssInner} ${textCss}`}>
          <h3 className="text-lg md:text-xl lg:text-2xl text-gray-400">
            UX Case Study
          </h3>
          <br />
          <h1 className="text-4xl md:text-4xl lg:text-7xl text-blue-500">
            HOME <span className="text-yellow-500">H</span>ERO
          </h1>
          <br />
          <p className="text-xl md:text-xl lg:text-2xl italic text-left font-mudium text-gray-800">
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
