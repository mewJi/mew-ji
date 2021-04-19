import React from 'react';

export default function CardTextContent({
  description,
  title,
  subtitle,
  imageUrl,
}) {
  return (
    <div class="container ml-40 mr-40 ">
      <div class="ml-10 mr-10 bg-white rounded-2xl shadow-lg">
        <div class="items-center flex flex-wrap items-center justify-center ">
          <div class="w-full md:w-8/12 ">
            <a href="http://localhost:3000/CaseStudyDetail">
              <img alt="Home Hero" class="max-w-full " src={imageUrl} />
            </a>
          </div>
          <div class="w-full md:w-4/12 pl-10 mx-auto pt-10 pb-10 text-left bg-red-100 rounded-l-none rounded-r-2xl ">
            <div class="md:pr-12">
              <p class="mb-2 text-sm leading-relaxed text-gray-400">
                {subtitle}
              </p>
              <h3 class="text-3xl font-semibold text-gray-800 ">{title}</h3>
              <p class="mt-8 text-m leading-relaxed text-gray-700">
                {description}
              </p>
            </div>
            <div className="text-left mt-6">
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
