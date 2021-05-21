import React from 'react';

import Navbar from 'components/Navbar.js';
import Footer from 'components/Footer.js';
import CardTextContent from 'components/CardTextContent';
import Carousel from 'components/Carousel';

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <div
          className="relative pt-32 pb-32 flex content-center items-center justify-center bg-gray-700"
          style={{
            minHeight: '20vh',
          }}
        >
          <div className="container relative mx-auto">
            <div className="items-center justify-center flex flex-wrap md:w-4/5">
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
                  Because UX brings people's lives better. This is the reason
                  why I am passionate about UX
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
            <div className="flex flex-wrap justify-center text-center mb-8 mx-10">
              <CardTextContent
                className="md:w-3/4"
                title="HOME HERO"
                subtitle="Mobile Application Design"
                description="Technicians hub for better home maintenance experience."
                imageUrl={require('assets/img/cover-case1.png').default}
                targetUrl="http://localhost:3000/CaseStudyDetail"
                buttonText="View Project"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
