import React from 'react';

export default function Button({
  iconClassName,
  buttonText,
  targetUrl,
  buttontype,
  className = 'container',
}) {
  const primaryClassButton = 'bg-gray-800 text-white';
  const secondaryClassButton =
    'bg-white border-gray-800 border-2 solid text-gray-800';

  const btnClassName =
    {
      primary: primaryClassButton,
      secondary: secondaryClassButton,
    }[buttontype] || primaryClassButton;

  return (
    <div className="text-left">
      <a href={targetUrl}>
        <button
          className={`active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 my-4 ${btnClassName}`}
          type="button"
          style={{ transition: 'all .15s ease' }}
        >
          {iconClassName && <i className={iconClassName} />}
          &nbsp;&nbsp;&nbsp;
          {buttonText}
        </button>
      </a>
    </div>
  );
}
