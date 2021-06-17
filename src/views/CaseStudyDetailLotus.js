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

export default function CaseStudyDetail() {
  const {
    actions: { setImages },
  } = useContext(ImageLightboxContext);

  const pushImageMainPrototypeOnLightBox = () =>
    setImages([require('assets/img/SearchAndFilter.gif').default]);

  const pushImageStyleGuideOnLightBox = () =>
    setImages([require('assets/img/StyleGuide.png').default]);

  const pushImageComponentsOnLightBox = () =>
    setImages(
      [require('assets/img/Components_1.png').default],
      [require('assets/img/Components_2.png').default],
      [require('assets/img/Components_3.png').default],
    );

  const pushImageAffinityMapOnLightBox = () =>
    setImages([require('assets/img/affinity_map.jpg').default]);
  const pushImageStoryBoardOnLightBox = () =>
    setImages([require('assets/img/Storyboard.jpg').default]);
  const pushImageUserJourneyOnLightBox = () =>
    setImages([require('assets/img/User_Journey1.png').default]);
  const pushImageDefineProblemOnLightBox = () =>
    setImages([require('assets/img/Define_Problem.jpg').default]);
  const pushImageIdeateSolutionOnLightBox = () =>
    setImages([require('assets/img/IdeateSolution.jpg').default]);
  const pushImageUserStoryMappingOnLightBox = () =>
    setImages([require('assets/img/userstory_map.jpg').default]);
  const pushImageSiteMapOnLightBox = () =>
    setImages([require('assets/img/sitemap.jpg').default]);
  const pushImageLowFiWireOnLightBox = () =>
    setImages([require('assets/img/Low-Fidelity-Wireframe.jpg').default]);
  const pushImageHighFiWireOnLightBox = () =>
    setImages([require('assets/img/High-Fidelity-Wireframe.png').default]);
  const pushImageProblem1OnLightBox = () =>
    setImages([require('assets/img/Problem1-2.png').default]);
  const pushImageProblem2OnLightBox = () =>
    setImages([require('assets/img/Icon_Meaning.png').default]);
  const pushImageProblem3OnLightBox = () =>
    setImages([require('assets/img/Button_Position.png').default]);

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
            src={require('assets/img/Lotus/Cover_Final_Large1.png').default}
            className="max-w-full"
            style={{}}
          />
        </div>
        <section className="px-4 bg-white pt-8">
          <div className="w-full h-full  md:flex flex-wrap justify-center text-center">
            <div className="w-full h-full">
              <h3 className="text-lg font-light md:text-lg text-gray-400 ">
                UI Redesign Assignment
              </h3>
              <br />
              <h1 className={`text-2xl font-bold lg:text-4xl text-green-500`}>
                Lotus's Shopping Online Application - Redesign
              </h1>
              <br />
            </div>
          </div>
        </section>

        <section className="px-4 bg-white pt-8">
          <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
            <div className="md:w-6/12 md:px-8">
              <img
                alt="..."
                src={require('assets/img/Lotus/before.png').default}
                className="max-w-full my-4"
                style={{}}
              />
            </div>
            <div className="md:w-6/12 md:px-8">
              <img
                alt="..."
                src={require('assets/img/Lotus/after.png').default}
                className="max-w-full my-4"
                style={{}}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-2 md:my-6 justify-center md:justify-center">
            <div className="md:text-left">
              <Button
                buttonText="Try prototype"
                targetUrl="https://www.figma.com/proto/sTSrzLSYiB0YRRRQGQHVk6/Redesign-Tesco-Lotus?node-id=14%3A2&scaling=scale-down&page-id=0%3A1"
                buttontype="primary"
              />
            </div>
          </div>
        </section>

        <section className="px-4 bg-white pb-16">
          <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
            <div className="flex flex-wrap justify-center mx-auto mb-2 mt-4 md:mb-4 md:w-3/5">
              <p className="text-lg leading-relaxed my-4">
                Below is the design process I followed
              </p>

              <img
                alt="..."
                src={require('assets/img/Lotus/DesignProcess.png').default}
                className="max-w-full"
                style={{}}
              />
            </div>
          </div>
        </section>

        {/* All Design Process*/}
        <div name="design-processes" className="bg-gray-800 py-16 text-white">
          <h1 className="text-xl text-center"> step by step </h1>
          <h3 className="text-4xl text-center"> Design Process </h3>
        </div>
        {/* Empathy */}
        <section className="relative py-16 bg-gray-50 px-4">
          <div className="flex flex-wrap w-full bg-gray-50  items-center justify-center sticky top-0 z-50">
            <TitleWithCaption
              title="Discovering redesign opportunities"
              caption="UNDERSTAND"
            />
          </div>
          <section className="px-4 bg-gray-50  pb-16 pt-16">
            <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
              <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
                <CardContentPrototype
                  title="Desk Research"
                  subtitle="What is lotus's current state?
                  "
                  description="I started with the question What customer said about lotus's? and started to conduct online research on google. Finally I found that Lotus's is the most popular grocery retailer in Thailand. They ranked highest based on achieving the greatest spend share and is significantly ahead of Big C on emotional connection. (Revealed by Dunnhumby, the global leader in Customer Data Science)"
                />
                <p className="text-left mt-2 my-4">
                  <a
                    href="https://www.newswit.com/en/L2ln"
                    className="text-green-500"
                  >
                    see reference article
                  </a>
                </p>
              </div>
              <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
                <img
                  alt="..."
                  src={require('assets/img/Lotus/DeskResearch.png').default}
                  className="max-w-full"
                  style={{}}
                />
              </div>
            </div>
          </section>
          <section className="px-4 bg-gray-50  pb-8 pt-8">
            <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
              <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
                <CardContentPrototype
                  title="User Interview"
                  subtitle="What do people say about the grocery retailer they experience?
                  "
                  description="I talked with my friends one by one and ask them about their online shopping experience both Lotus's and others. Let's see some insights I have got below."
                />
              </div>
              <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
                <img
                  alt="..."
                  src={require('assets/img/Lotus/UserInterview.png').default}
                  className="max-w-full my-4"
                  style={{}}
                />
              </div>
            </div>
          </section>

          <section className="px-4 bg-gray-50  pb-8 pt-8">
            <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
              <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
                <CardContentPrototype
                  title="Usability Test"
                  subtitle="How users use Lotus's apps?, What is their pain point?
                  "
                  description="Two questions made me decide to do a usability test; firstly, What is the user's reaction if the login section was shown on the home screen and doesn't allow the user to add the product to the cart without login? and secondly, Are there any problem using the search function?"
                />
              </div>
              <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
                <div className="md:w-6/12 md:pr-8">
                  <img
                    alt="..."
                    src={require('assets/img/Lotus/UsabilityTest1.png').default}
                    className="max-w-full my-4"
                    style={{}}
                  />
                </div>
                <div className="md:w-6/12 md:pr-8">
                  <img
                    alt="..."
                    src={require('assets/img/Lotus/UsabilityTest2.png').default}
                    className="max-w-full my-4"
                    style={{}}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* Define */}

        <section>
          <div className="flex flex-wrap w-full bg-white items-center justify-center sticky top-0 z-50">
            <TitleWithCaption
              title="Turn them into Hypotheses"
              caption="HYPOTHESIZE"
            />
          </div>
          <div>
            <section className="px-4 bg-white  pb-8 pt-8">
              <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
                <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
                  <CardContentPrototype
                    title="Business Goal and Strategy"
                    subtitle="Hypothesizing Business Goal and Strategy
                  "
                    description="After understanding business and user's pain points, It's time to turn information and insight into hypotheses. For me, this is a very challenge process"
                  />
                </div>
                <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
                  <div className="md:w-full md:pr-8">
                    <img
                      alt="..."
                      src={require('assets/img/Lotus/BusinessGoal.png').default}
                      className="max-w-full my-4"
                      style={{}}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* Ideate */}
        <section>
          <div className="relative flex flex-wrap w-full mx-auto justify-center px-4 bg-gray-50 sticky top-0 z-50">
            <TitleWithCaption
              title="Ideate solution and make it happens"
              caption="DESIGN"
            />
          </div>
          <section className="px-4 bg-gray-50  pb-8 pt-8">
            <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
              <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
                <CardContentPrototype
                  title=""
                  subtitle="
                  "
                  description="According to the research, usability test result and business strategy I created, I did some changes to provide a better user experience and meet business goal. There are..."
                />
              </div>
              <img
                alt="..."
                src={require('assets/img/Lotus/PainPoint1.png').default}
                className="max-w-full"
                style={{}}
              />
              <div className="relative flex flex-wrap md:w-4/5 mx-auto md:mb-20 justify-center items-center items-stretch">
                <div className="md:w-4/12 mx-auto md:px-4 mb-4">
                  <CardContentPrototype
                    title="#1"
                    subtitle="Remove log-in section from home screen
                  "
                    description="Remove log-in section and allow the user to add item into the cart without logging in (However, we might request the user's delivery place before the item was added to check branch available stock)"
                  />
                </div>
                <div className="md:w-4/12 mx-auto md:px-4 mb-4">
                  <CardContentPrototype
                    title="#2"
                    subtitle="New version of product category
                  "
                    description="Bring out the variety of product to user's eyes quickly by replacing old category button with category card"
                  />
                </div>
                <div className="md:w-4/12 mx-auto md:px-4 mb-4">
                  <CardContentPrototype
                    title="#3"
                    subtitle="Transform search navigation into search button
                  "
                    description="Transform search navigation into search button by leaving it's at the top of the screen, to catch customer's eye once they come"
                  />
                </div>
              </div>

              <img
                alt="..."
                src={require('assets/img/Lotus/PainPoint2.png').default}
                className="max-w-full"
                style={{}}
              />
              <div className="relative flex flex-wrap md:w-4/5 mx-auto md:mb-20 justify-center items-center items-stretch">
                <div className="md:w-4/12 mx-auto md:px-4 mb-4">
                  <CardContentPrototype
                    title="#4"
                    subtitle="Announced campaigns and promotion using banner
                  "
                    description="Banner is simply eye-catching and is the good Call-To-Action(CTA), So changing this can increase the conversion rate"
                  />
                </div>
                <div className="md:w-4/12 mx-auto md:px-4 mb-4">
                  <CardContentPrototype
                    title="#5"
                    subtitle="Show products seperated by promotion
                  "
                    description="To keep customer's satisfaction, showing many products with the special price can increase conversion rate"
                  />
                </div>
                <div className="md:w-4/12 mx-auto md:px-4 mb-4">
                  <CardContentPrototype
                    title="#6"
                    subtitle="Prioritize menu on button navigation 
                  "
                    description="Cart menu was moved to top right corner for eye-catching, the privilege was placed at second rank because users will be reminded that the brand gives them a priority and benefit"
                  />
                </div>
              </div>

              <img
                alt="..."
                src={require('assets/img/Lotus/PainPoint3.png').default}
                className="max-w-full"
                style={{}}
              />
              <div className="relative flex flex-wrap md:w-4/5 mx-auto md:mb-20 justify-center items-center items-stretch">
                <div className="md:w-4/12 mx-auto md:px-4 mb-4">
                  <CardContentPrototype
                    title="#7"
                    subtitle="Redesign filter section
                  "
                    description="Redesign filter section by adding specific condition such as promotion to help the user easily find the target product"
                  />
                </div>
                <div className="md:w-4/12 mx-auto md:px-4 mb-4">
                  <CardContentPrototype
                    title="#8"
                    subtitle="Redesign product item card 
                  "
                    description="If product is on promotion, the original price should be displayed to rush the customer's decision "
                  />
                </div>
                <div className="md:w-4/12 mx-auto md:px-4 mb-4">
                  <CardContentPrototype
                    title="#9"
                    subtitle="Redeisgn product search result
                  "
                    description="Displaying two column product result can increase the number of product item more than one column"
                  />
                </div>
              </div>
              <div className="relative flex flex-wrap items-stretch justify-center mx-auto md:w-3/5">
                <CardContentPrototype
                  title=""
                  subtitle="Engage younger generation whereas retaining an older and loyal customer"
                  description="Clean design concept, white, teal, and yellow pastel color can make it easy on the eye. Web Content Accessibility Guidelines (WCAG) was considered and applied to the design "
                />
              </div>
              <img
                alt="..."
                src={require('assets/img/Lotus/PainPoint4.png').default}
                className="max-w-full"
                style={{}}
              />
            </div>
          </section>
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
                      <p className="text- leading-normal">User Research</p>
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
                <p className="text- leading-normal text-gray-600">
                  Mobile Application
                </p>
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
                  June 11, 2021 - June 18, 2021
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center py-8 md:py-16">
          <a onClick={goto('/Landing')} className="cursor-pointer">
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
