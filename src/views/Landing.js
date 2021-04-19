import React from 'react';

import Navbar from 'components/Navbar.js';
import Footer from 'components/Footer.js';
import CardTextContent from 'components/CardTextContent';

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <div
          className="relative pt-32 pb-32 flex content-center items-center justify-center bg-blue-500"
          style={{
            minHeight: '20vh',
          }}
        >
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <h1 className="text-white font-semibold text-5xl lg:hover:text-red-300">
                  Hi.
                </h1>
                <h1 className="text-white font-semibold text-5xl lg:hover:text-red-300">
                  I'm Mewji :)
                </h1>
              </div>
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <p className="mt-4 text-lg text-white">
                  Designing solutions to improve people's lives is why I am
                  passionate about UX
                </p>
              </div>
            </div>
          </div>
          {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div> */}
        </div>
        <section className="pb-20 bg-white pt-20">
          <div className="container relative mx-auto">
            <div className="flex flex-wrap justify-center text-center mb-8">
              {/* <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-2xl font-semibold text-gray-700">
                  Case Study
                </h2>
              </div> */}

              <div className="flex flex-wrap">
                <div className="flex flex-wrap">
                  <CardTextContent
                    icon="fas fa-award"
                    title="HOME HERO"
                    subtitle="Mobile Application Design"
                    description="Technicians hub for better home maintenance experience."
                    imageUrl={require('assets/img/cover-case1.png').default}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
