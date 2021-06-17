import React from 'react';

export default function CaseStudyTextBanner({
  className,
  isAbsolute,
  textCss,
  caption,
  title,
  description,
  titleColor,
}) {
  const cssInner =
    isAbsolute !== true
      ? 'flex flex-col inline px-4 md:w-1/3 d:top-12 md:right-12 lg:top-32 lg:right-32'
      : 'flex flex-col absolute px-4 md:w-1/3 inline md:top-12 md:right-12 lg:top-32 lg:right-32';

  return (
    <div className={className}>
      <div className="w-full h-full">
        <div className={`${cssInner} ${textCss}`}>
          <h3 className="text-lg font-light md:text-xl lg:text-2xl text-gray-400">
            {caption}
          </h3>
          <br />
          <h1 className={`text-4xl lg:text-5xl ${titleColor}`}>{title}</h1>
          <br />
          <p className="text-center md:text-left text-xl md:text-xl lg:text-2xl italic text-left font-normal text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
