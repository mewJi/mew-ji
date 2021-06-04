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
          className="relative pt-16 pb-16 flex content-center items-center justify-center bg-gray-700"
          style={{
            minHeight: '20vh',
          }}
        >
          <div className="container relative mx-auto px-4">
            <div className="items-center justify-center mx-auto flex flex-wrap md:w-4/5">
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <h1 className="text-white font-semibold text-5xl lg:hover:text-red-300">
                  Hi, I am Mewji
                </h1>

                <p className="mt-8 text-lg text-white lg:hover:text-red-300">
                  Because UX brings people's lives better. This is the reason
                  why I am passionate about UX
                </p>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4 ">
                <div className="md:w-full">
                  <img
                    alt="..."
                    src={require('assets/img/gift.png').default}
                    className="max-w-full pl-4 "
                    style={{}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pb-20 bg-white pt-20">
          <div className="container relative mx-auto">
            <h1 className="text-gray-800 font-semibold text-3xl text-center mb-8 ">
              Case Study
            </h1>
            <div className="flex flex-wrap justify-center text-center mb-8 mx-10">
              <CardTextContent
                className="lg:w-3/5"
                title="HOME HERO"
                subtitle="UX Case Study | Mobile App Design"
                description="Easily find the technician in one app, Your home fixed with the best technician"
                imageUrl={require('assets/img/cover_case1.png').default}
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
