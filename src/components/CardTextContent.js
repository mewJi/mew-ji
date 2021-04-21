import React from 'react';

export default function CardTextContent({
  description,
  title,
  subtitle,
  imageUrl,
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
              <a href="http://localhost:3000/CaseStudyDetail">
                <button
                  className="bg-gray-800 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
