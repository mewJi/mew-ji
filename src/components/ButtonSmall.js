import React from 'react';

export default function ButtonSmall({
  iconClassName,
  buttonText,
  targetUrl,
  buttontype,
  className = 'container',
  openWithNewTab,
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
      <a
        {...(targetUrl ? { href: targetUrl } : {})}
        {...(typeof onClick === 'function' ? { onClick } : {})}
        target={openWithNewTab === true ? '_blank' : undefined}
      >
        <button
          className={`active:bg-orange-500 text-sm font-medium px-4 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-6  ${btnClassName}`}
          type="button"
          style={{ transition: 'all .15s ease' }}
        >
          {buttonText}
        </button>
      </a>
    </div>
  );
}
