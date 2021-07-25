import React, { useContext } from 'react';
import { Link } from 'react-scroll';

import Navbar from 'components/Navbar.js';
import Footer from 'components/Footer.js';
import CardTextContent from 'components/CardTextContent';

import './CaseStudyDetail.css';
import CardArticleWithObject from 'components/CardArticleWithObject';
import ImageWithCaption from 'components/ImageWithCaption';
import TitleWithCaption from 'components/TitleWithCaption';
import SubtitleWithIcon from 'components/SubtitleWithIcon';
import TextWithBG from 'components/TextWithBG';
import Button from 'components/Button';
import Carousel from 'components/Carousel';
import CardContentPrototype from 'components/CardContentPrototype';
import CardSumaryWithBorder from 'components/CardSumaryWithBorder';
import HomeTopic from 'components/HomeTopic';
import CardArticleWithTopImg from 'components/CardArticleWithTopImg';
import CaseStudyTextBanner from 'components/caseStudyDetail/CaseStudyTextBanner';
import { ImageLightboxContext } from 'contexts/ImageLightboxContext';
import useGoto from 'hooks/useGoto';

export default function SmartHome() {
  const goto = useGoto();

  return (
    <>
      {' '}
      {/* <!-- NavBar --> */}
      <Navbar />
      {/* <!-- NavBar --> */}
      <main>
        <div className="flex-col items-stretch w-full relative text-center">
          <img
            alt="..."
            src={require('assets/img/SmartHome/SmartHome-Cover.png').default}
            className="max-w-full"
            style={{}}
          />
        </div>
        <section className="px-4 bg-white pt-8">
          <div className="w-full h-full  md:flex flex-wrap justify-center text-center">
            <div className="w-full h-full">
              <h3 className="text-lg font-semibold md:text-lg text-gray-400 ">
                Mobile App Design
              </h3>
              <br />
              <h1 className={`text-2xl font-bold lg:text-4xl text-gray-800`}>
                Smart Home - Smart | Save | Sustain
              </h1>
              <br />
            </div>
          </div>
        </section>

        <section className="px-4 bg-white  pb-8 pt-8">
          <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
            <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
              <CardContentPrototype
                subtitle="About Project"
                description="Coming Soon..."
              />
            </div>
          </div>
        </section>

        <section className="px-4 bg-white pt-8">
          {/* <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
            <div className="md:w-full md:px-8">
              <img
                alt="..."
                src={
                  require('assets/img/SmartHome/SmartHome-Cover.png').default
                }
                className="max-w-full my-4"
                style={{}}
              />
            </div>
          </div> */}
          <div className="flex flex-wrap mt-2 md:mt-6 md:mb-16 justify-center md:justify-center">
            <div className="md:text-left">
              <Button
                buttonText="Try Prototype"
                targetUrl="https://www.figma.com/proto/tr894ySMeBdA67FXiI7v6T/Smart-Home?node-id=105%3A230&scaling=min-zoom&page-id=105%3A51&starting-point-node-id=105%3A230&show-proto-sidebar=1"
                buttontype="primary"
                openWithNewTab
              />
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="relative flex flex-wrap w-full mx-auto justify-center bg-white sticky top-0 z-50 ">
            {' '}
            <TitleWithCaption
              title="Role | Tools | Platform | Duration"
              caption="About"
            />
          </div>
          <div className="flex flex-wrap items-stretch items-center md:w-3/5 my-12  text-center mx-auto bg-white  border rounded-2xl py-8">
            <div className="w-full md:w-1/4 mx-auto py-2">
              <div className="mb-4">
                <i className="fas fa-suitcase text-2xl text-blue-400"></i>
              </div>
              <div className="mb-8">
                <h1 className="text-xl font-semibold leading-normal text-gray-800">
                  My Role
                </h1>
              </div>
              <div>
                <div>
                  <ul className="list-none mt-6 text-gray-600">
                    <li className="py-1">
                      <p className="text- leading-normal">Research</p>
                    </li>

                    <li className="py-1">
                      <p className="text- leading-normal">Wireframing</p>
                    </li>
                    <li className="py-1">
                      <p className="text- leading-normal">Prototyping</p>
                    </li>
                    <li className="py-1">
                      <p className="text- leading-normal">Visual Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/4 mx-auto py-2 ">
              <div className="mb-4">
                <i className="fas fa-tools text-2xl text-blue-400"></i>
              </div>
              <div className="mb-8">
                <h1 className="text-xl font-semibold leading-normal text-gray-800">
                  Tools
                </h1>
              </div>
              <div>
                <ul className="list-none mt-6 text-gray-600">
                  <li className="py-1">
                    <p className="text- leading-normal">Figma</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/4 mx-auto py-2 ">
              <div className="mb-4">
                <i className="fas fa-mobile text-2xl text-blue-400"></i>
              </div>
              <div className="mb-8">
                <h1 className="text-xl font-semibold leading-normal text-gray-800">
                  Platform
                </h1>
              </div>
              <div>
                <p className="text- leading-normal text-gray-600">Website</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 mx-auto py-2 ">
              <div className="mb-4">
                <i className="fas fa-clock text-2xl text-blue-400"></i>
              </div>
              <div className="mb-8">
                <h1 className="text-xl font-semibold leading-normal text-gray-800">
                  Duration
                </h1>
              </div>
              <div>
                <p className="text- leading-normal text-gray-600">
                  July 3-5, 2021
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center py-8 md:pt-4 md:pb-16">
          <a onClick={goto('/')} className="cursor-pointer">
            <p text-xl font-normal text-gray-600 mb-8>
              BACK TO HOME
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
