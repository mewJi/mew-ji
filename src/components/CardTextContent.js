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
      <div class=" bg-gray-100 rounded-2xl shadow-lg">
        <div class=" flex flex-wrap justify-around items-center ">
          <div class="w-full md:w-6/12 p-8">
            <img
              alt="Home Hero"
              class="max-w-full image-center"
              src={imageUrl}
            />
          </div>
          <div class="w-full md:w-4/12 p-10 text-left ">
            <div>
              <p class="mb-2 text-sm leading-relaxed text-gray-400">
                {subtitle}
              </p>
              <h3 class="text-3xl font-semibold text-gray-800 ">{title}</h3>
              <p class="mt-8 text-m leading-relaxed text-gray-700">
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
