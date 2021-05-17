import React from 'react';

export default function CardArticleWithObject({
  subtitle,
  description,
  object,
  textalign,
  className = 'container',
}) {
  const leftClassText = 'text-left';
  const centerClassText = 'text-center';

  const textAlignClass =
    {
      left: leftClassText,
      center: centerClassText,
    }[textalign] || leftClassText;

  return (
    <div className={textAlignClass}>
      <div>
        <h2 className=" text-2xl font-semibold text-blue-600">{subtitle}</h2>
      </div>
      <p className="mt-4 text-lg leading-relaxed text-gray-600">
        {description}
      </p>
      {object}
    </div>
  );
}
