import React from 'react';

import Navbar from 'components/Navbar.js';
import Footer from 'components/Footer.js';
import CardTextContent from 'components/CardTextContent';
import useGoto from 'hooks/useGoto';
// import Carousel from 'components/Carousel';

export default function Landing() {
  const goto = useGoto();

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
            <div className="items-center justify-center text-center md:text-left mx-auto flex flex-wrap md:w-4/5">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4 ">
                <div className="lg:w-full flex flex-wrap justify-center">
                  <img
                    alt="..."
                    src={require('assets/img/mew-charactor-white.png').default}
                    className="max-w-full lg:pl-4 pb-8"
                    style={{}}
                  />
                </div>
              </div>
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <h1 className="text-white font-semibold text-5xl md:text-6xl ">
                  Hi, I am Mewji
                </h1>

                <p className="mt-8 text-2xl md:text-3xl text-white ">
                  " I believe that empathy and creativity can bring people's
                  lives better "
                </p>
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
                onLinkButtonClick={goto('/CaseStudyDetail')}
                buttonText="View Details"
              />
            </div>
            <div className="flex flex-wrap justify-center text-center mb-8 mx-8">
              <CardTextContent
                className="lg:w-3/5"
                title="Lotus's Apps - UI Redesign"
                subtitle="UI Redesign | Mobile App Design"
                description=""
                imageUrl={
                  require('assets/img/Lotus/Cover-Case-Lotus.png').default
                }
                onLinkButtonClick={goto('/CaseStudyDetailLotus')}
                buttonText="View Details"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
