import React from 'react';
import Button from 'components/Button';

export default function CardTextContent({
  description,
  title,
  subtitle,
  imageUrl,
  targetUrl,
  buttonText,
  className = 'container',
}) {
  return (
    <div className={className}>
      <div class=" bg-white rounded-2xl shadow-sm ">
        <div class=" flex flex-wrap justify-around items-center ">
          <div class="w-full md:w-6/12 py-8 px-8 md:py-8 md:px-10">
            <img
              alt="Home Hero"
              class="max-w-full image-center"
              src={imageUrl}
            />
          </div>
          <div class="w-full md:w-6/12 px-10 pt-2 pb-10 md:px-10 md:py-10 text-left ">
            <div>
              <p class="mb-2 text-md leading-relaxed font-normal text-gray-400">
                {subtitle}
              </p>
              <h3 class="text-4xl font-semibold text-gray-800 ">{title}</h3>
              <p class="mt-8 text-lg leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
            <div className="mt-6">
              <Button
                iconClassName="far fa-eye"
                buttonText={buttonText}
                targetUrl={targetUrl}
                buttontype="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
