import React from 'react';

export default function Button({
  iconClassName,
  buttonText,
  targetUrl,
  buttontype,
  className = 'container',
}) {
  const primaryClassButton = 'bg-blue-500 text-white';
  const secondaryClassButton =
    'bg-white border-blue-500 border-2 solid text-blue-500';

  const btnClassName =
    {
      primary: primaryClassButton,
      secondary: secondaryClassButton,
    }[buttontype] || primaryClassButton;

  return (
    <div className="text-left">
      <a href={targetUrl}>
        <button
          className={`active:bg-orange-500 text-xl font-bold px-10 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 my-4 ${btnClassName}`}
          type="button"
          style={{ transition: 'all .15s ease' }}
        >
          {buttonText}
        </button>
      </a>
    </div>
  );
}
