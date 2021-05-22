import React from 'react';

import Navbar from 'components/Navbar.js';
import Footer from 'components/Footer.js';
import CardTextContent from 'components/CardTextContent';

import './CaseStudyDetail.css';
import CardArticleWithObject from 'components/CardArticleWithObject';
import ImageWithCaption from 'components/ImageWithCaption';
import TitleWithIcon from 'components/TitleWithIcon';
import SubtitleWithIcon from 'components/SubtitleWithIcon';
import TextWithBG from 'components/TextWithBG';
import Button from 'components/Button';
import Carousel from 'components/Carousel';
import CardContentPrototype from 'components/CardContentPrototype';
import CardSumaryWithBorder from 'components/CardSumaryWithBorder';
import HomeTopic from 'components/HomeTopic';
import CardArticleWithTopImg from 'components/CardArticleWithTopImg';
import CaseStudyTextBanner from 'components/caseStudyDetail/CaseStudyTextBanner';

export default function CaseStudyDetail() {
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
            src={require('assets/img/Cover_Final_Large.jpg').default}
            className="max-w-full"
            style={{}}
          />
          <CaseStudyTextBanner />
        </div>

        {/* {show case section 1} */}
        <section className="px-4 bg-white pb-16">
          <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
            <HomeTopic
              caption="start with WHY"
              title="Why people so upset 
when home maintenance time is coming?"
            ></HomeTopic>

            <div className="flex flex-wrap justify-center mx-auto">
              <div className="md:w-1/3 px-8">
                <CardArticleWithTopImg
                  imageUrl={require('assets/img/logo.svg').default}
                  title="Lack of Skill"
                  description="Home maintenance skill
is so wide, meanwhile, it is specific. Studying and practicing was a need"
                ></CardArticleWithTopImg>
              </div>
              <div className="md:w-1/3 px-8">
                <CardArticleWithTopImg
                  imageUrl={require('assets/img/logo.svg').default}
                  title="Distrust Technician "
                  description="Not every technician have a strong skill, they could be wrong at diagnosis and sometimes they take advantage of a customer"
                ></CardArticleWithTopImg>
              </div>
              <div className="md:w-1/3 px-8">
                <CardArticleWithTopImg
                  imageUrl={require('assets/img/logo.svg').default}
                  title="Time-Consuming
                  Research"
                  description="People spend a lot of time looking a lot of technician from several sources to find the trustworthy technician"
                ></CardArticleWithTopImg>
              </div>
            </div>
          </div>
        </section>

        {/* {show case section 2} */}
        <section className="px-4 bg-blue-50 pb-16">
          <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
            <HomeTopic
              caption="challenge"
              title="How can we help people to get out of 
              this trouble?   "
            ></HomeTopic>
            <div className="flex flex-wrap justify-center mx-auto">
              <div className="md:w-1/4">
                <img
                  alt="..."
                  src={require('assets/img/SearchAndFilter.gif').default}
                  className="max-w-full rounded-xl"
                  style={{}}
                />
              </div>
              <div className="md:w-2/4 px-16 py-8">
                <div className="flex flex-wrap">
                  <p className="text-xl font-light text-gray-400 text-left mb-4">
                    solution
                  </p>
                </div>
                <div className="flex flex-wrap mb-4 md:mb-10">
                  <i className="fas fa-play text-3xl text-blue-500 mr-6 mb-4"></i>
                  <h3 className="text-4xl font-normal text-blue-500">
                    What is Home Hero?
                  </h3>
                </div>
                <div className="flex flex-wrap">
                  <h3 className="text-lg leading-relaxed text-gray-600 mb-4 md:mb-1">
                    Home Hero is a mobile application that help people easily
                    find a trustworthy home service technician and easily find
                    an expert to get consulting about the home solution they
                    need
                  </h3>
                </div>
                <div className="flex flex-wrap mt-6 md:mt-12 mb-4">
                  <p className="text-xl font-light text-gray-400 text-left mb-4">
                    experience in here
                  </p>
                </div>

                <div className="flex flex-wrap justify-center">
                  <div className="w-2/4 md:w-1/4 text-center md:text-left">
                    <div>
                      <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 ">
                        <i className="fas fa-clock"></i>
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md leading-relaxed my-5">
                        <b>Searching</b>
                      </p>
                    </div>
                  </div>
                  <div className="w-2/4 md:w-1/4 text-center md:text-left">
                    <div>
                      <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 ">
                        <i className="fas fa-clock"></i>
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md leading-relaxed my-5">
                        <b> Booking</b>
                      </p>
                    </div>
                  </div>
                  <div className="w-2/4 md:w-1/4 text-center md:text-left">
                    <div>
                      <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 ">
                        <i className="fas fa-clock"></i>
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md leading-relaxed my-5">
                        <b> Calling</b>
                      </p>
                    </div>
                  </div>
                  <div className="w-2/4 md:w-1/4 text-center md:text-left">
                    <div>
                      <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 ">
                        <i className="fas fa-clock"></i>
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md leading-relaxed my-5">
                        <b> Rating</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <Button
                    buttonText="Try prototype"
                    targetUrl="http://localhost:3000/CaseStudyDetail"
                    buttontype="primary"
                  />
                  <Button
                    buttonText="See [rototype in shot"
                    targetUrl="http://localhost:3000/CaseStudyDetail"
                    buttontype="secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 bg-white pb-16">
          <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
            <HomeTopic
              caption="design process"
              title="How does Home Hero comes?"
            ></HomeTopic>
            <div className="flex flex-wrap justify-center mx-auto mb-4 md:mb-10 md:w-3/5">
              <p className="text-lg leading-relaxed my-4">
                <b>Design Think Process</b> lead me to discover several
                solutions to the above problem and this is how the prototype
                comes
              </p>
            </div>
            <div className="flex flex-wrap md:w-2/3">
              <img
                alt="..."
                src={require('assets/img/DesignProcess.png').default}
                className="max-w-full"
                style={{}}
              />
            </div>
          </div>
          <div className="flex flex-wrap items-stretch items-center md:w-3/5 my-8 text-center mx-auto">
            <div className="w-full md:w-3/12 mx-auto py-2 bg-white">
              <div className="mb-4">
                <i className="fas fa-suitcase text-2xl text-blue-500"></i>
              </div>
              <div className="mb-8">
                <h1 className="text-xl font-semibold leading-normal">
                  MY ROLE
                </h1>
              </div>
              <div>
                <p className="text- leading-normal">UX/UI Designer</p>
              </div>
            </div>

            <div className="w-full md:w-3/12 mx-auto py-2 bg-white">
              <div className="mb-4">
                <i className="fas fa-clock text-2xl text-blue-500"></i>
              </div>
              <div className="mb-8">
                <h1 className="text-xl font-semibold leading-normal">
                  DURATION
                </h1>
              </div>
              <div>
                <p className="text- leading-normal">March 2021 - April 2021</p>
              </div>
            </div>
            <div className="w-full md:w-3/12 mx-auto py-2 bg-white">
              <div className="mb-4">
                <i className="fas fa-tools text-2xl text-blue-500"></i>
              </div>
              <div className="mb-8">
                <h1 className="text-xl font-semibold leading-normal">TOOLS</h1>
              </div>
              <div>
                <ul className="list-none mt-6">
                  <li className="py-1">
                    <p className="text- leading-normal">Figma</p>
                  </li>
                  <li className="py-1">
                    <p className="text- leading-normal">Draw.io</p>
                  </li>
                  <li className="py-1">
                    <p className="text- leading-normal">Miro</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-3/12 mx-auto py-2 bg-white">
              <div className="mb-4">
                <i className="fas fa-mobile text-2xl text-blue-500"></i>
              </div>
              <div className="mb-8">
                <h1 className="text-2xl font-semibold leading-normal">
                  PLATFORM
                </h1>
              </div>
              <div>
                <p className="text- leading-normal">Mobile Application</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center my-4 md:my-8">
            <Button
              buttonText="See all process"
              targetUrl="http://localhost:3000/CaseStudyDetail"
              buttontype="primary"
            />
          </div>
        </section>

        {/* {show case section 4} */}
        <section className="px-4 bg-blue-50 pb-16">
          <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
            <HomeTopic
              caption="feedback"
              title="Does it actually work for user?, 
              Any Problem were found?"
            ></HomeTopic>
            <div className="flex flex-wrap justify-center mx-auto mb-4 md:mb-10 md:w-3/5">
              <p className="text-lg leading-relaxed my-4">
                The <b>usability testing</b> result told me several problems
                need to be fixed in the next itinerary, but on my honest, it
                still needs more test with more users to uncover improvement
                opportunity
              </p>
            </div>
            <div className="flex flex-wrap justify-center mx-auto">
              <div className="md:w-1/3 px-8">
                <CardArticleWithTopImg
                  imageUrl={require('assets/img/logo.svg').default}
                  title="Missing Information"
                  description="Home maintenance skill
is so wide, meanwhile, it is specific. Studying and practicing was a need"
                ></CardArticleWithTopImg>
              </div>
              <div className="md:w-1/3 px-8">
                <CardArticleWithTopImg
                  imageUrl={require('assets/img/logo.svg').default}
                  title="Unclear Icon 
                  Meaning"
                  description="Not every technician have a strong skill, they could be wrong at diagnosis and sometimes they take advantage of a customer"
                ></CardArticleWithTopImg>
              </div>
              <div className="md:w-1/3 px-8">
                <CardArticleWithTopImg
                  imageUrl={require('assets/img/logo.svg').default}
                  title="Confusing Button 
                  Position"
                  description="People spend a lot of time looking a lot of technician from several sources to find the trustworthy technician"
                ></CardArticleWithTopImg>
              </div>
            </div>
          </div>
        </section>

        {/* {show case section 5} */}
        <section className="px-4 bg-white pb-16">
          <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
            <HomeTopic
              caption="strategy"
              title="It’s not only about user experience, but ?"
            ></HomeTopic>

            <div className="flex flex-wrap justify-center mx-auto">
              <div className="md:w-1/3 px-8">
                <CardArticleWithTopImg
                  imageUrl={require('assets/img/logo.svg').default}
                  title="Business Growth"
                  description="Not every technician have a strong skill, they could be wrong at diagnosis and sometimes they take advantage of a customer"
                ></CardArticleWithTopImg>
              </div>
              <div className="md:w-1/3 px-8">
                <CardArticleWithTopImg
                  imageUrl={require('assets/img/logo.svg').default}
                  title="Techinician Opportunity"
                  description="People spend a lot of time looking a lot of technician from several sources to find the trustworthy technician"
                ></CardArticleWithTopImg>
              </div>
            </div>
          </div>
        </section>

        {/* {show case section 6} */}
        <section className="px-4 bg-blue-50 pb-16">
          <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
            <HomeTopic
              caption="Brand Identity"
              title="What make Home Hero memorable?"
            ></HomeTopic>
            <div className="flex flex-wrap justify-center mx-auto mb-4 md:mb-10 md:w-3/4">
              <p className="text-lg leading-relaxed my-4">
                Defining brand identity with a logo and color
              </p>
            </div>
            <div className="flex flex-wrap justify-center mx-auto">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Logo
                </h2>
              </div>
              <img
                alt="..."
                src={require('assets/img/logo.svg').default}
                className=" max-w-full mx-auto"
                style={{ maxWidth: '300px' }}
              />
            </div>

            <div className="flex flex-wrap justify-center mx-auto md:mb-10">
              <div className="w-full md:w-1/2 ">
                <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
                  Idea
                </h2>
                <div className="flex flex-wrap justify-center items-center">
                  <div className="w-full sm:w-1/2 px-6 mb-4">
                    <img
                      alt="..."
                      src={require('assets/img/green-house.png').default}
                      className="shadow-lg max-w-full mx-auto"
                      style={{ maxWidth: '120px' }}
                    />
                    <div className="pt-4 text-center">
                      <p className="mt-1 text-sm text-gray-500  ">
                        Home <br /> Living Place
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 px-6 mb-4">
                    <img
                      alt="..."
                      src={require('assets/img/two-businessmen.png').default}
                      className="shadow-lg max-w-full mx-auto"
                      style={{ maxWidth: '120px' }}
                    />
                    <div className="pt-4 text-center">
                      <p className="mt-1 text-sm text-gray-500  ">
                        Freindly <br /> Buddy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mb-4 mx-auto px-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
                  Color
                </h2>
                <div className="flex flex-wrap justify-center items-center">
                  <div className="w-full md:w-6/12 px-6">
                    <img
                      alt="..."
                      src={require('assets/img/blue.png').default}
                      className="shadow-lg  max-w-full mx-auto rounded-full"
                      style={{ maxWidth: '120px' }}
                    />
                    <div className="pt-4 text-center">
                      <p className="mt-1 text-sm text-gray-500  ">
                        Trustworthly <br /> Reliable
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-6">
                    <img
                      alt="..."
                      src={require('assets/img/orange.png').default}
                      className="shadow-lg max-w-full mx-auto rounded-full"
                      style={{ maxWidth: '120px' }}
                    />
                    <div className="pt-4 text-center">
                      <p className="mt-1 text-sm text-gray-500 ">
                        Communication <br />
                        Encouragement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* {show case section 7} */}
        <section className="px-4 bg-white pb-16">
          <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
            <HomeTopic
              caption="visual Design"
              title="How visual design impact people?"
            ></HomeTopic>
            <div className="flex flex-wrap justify-center mx-auto">
              <div className="relative flex flex-wrap md:w-4/5 mx-auto md:mb-20 justify-center items-center">
                <div className="md:w-4/12 mx-auto md:pr-2 mb-4">
                  <CardContentPrototype
                    title="Style Guide"
                    subtitle="Create UI style guide to 
                  maintain design’s consistancy"
                    description="Educate the user about the functions and benefits of the app and encourage them to learn through exploring the app."
                  />
                </div>

                <div className="md:w-6/12 mx-auto mb-4 ">
                  <ImageWithCaption
                    imageUrl={require('assets/img/StyleGuide.png').default}
                  />
                </div>
              </div>
              <div className="relative flex flex-wrap md:w-4/5 mx-auto md:mb-20 justify-center items-center">
                <div className="md:w-6/12 mx-auto mb-4">
                  <ImageWithCaption
                    imageUrl={require('assets/img/Components_1.png').default}
                  />
                </div>
                <div className="md:w-4/12 mx-auto mb-4">
                  <CardContentPrototype
                    title="Component Library"
                    subtitle="Create a component library to save time in the development"
                    description="Educate the user about the functions and benefits of the app and encourage them to learn through exploring the app."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* {Learning} */}
        <section className="px-4 bg-blue-50 pb-16">
          <div className="flex flex-wrap justify-center mx-auto md:w-4/5">
            <HomeTopic caption="learning" title="What I learning?"></HomeTopic>
            <div className="flex flex-wrap justify-center mx-auto">
              <div className="md:w-1/3 px-8">
                <CardArticleWithTopImg
                  imageUrl={require('assets/img/logo.svg').default}
                  title="Business Growth"
                  description="Not every technician have a strong skill, they could be wrong at diagnosis and sometimes they take advantage of a customer"
                ></CardArticleWithTopImg>
              </div>
              <div className="md:w-1/3 px-8">
                <CardArticleWithTopImg
                  imageUrl={require('assets/img/logo.svg').default}
                  title="Time-Consuming
                  Research"
                  description="People spend a lot of time looking a lot of technician from several sources to find the trustworthy technician"
                ></CardArticleWithTopImg>
              </div>
            </div>
          </div>
        </section>

        {/* All Design Process*/}
        {/* Empathy */}
        <section className="relative py-16 bg-gray-50 px-4">
          <HomeTopic title="Design Process Indeep"></HomeTopic>
          <div className="container mx-auto ">
            <div className="flex flex-wrap md:w-4/5 mx-auto ">
              <div className="flex flex-wrap w-full items-center justify-center">
                <TitleWithIcon
                  title="Discovering design opportunities"
                  icon="fas fa-search"
                />
              </div>

              <div className="flex flex-wrap w-full mx-auto items-center ">
                <div className="w-full md:w-6/12 mx-auto">
                  <div className="flex flex-wrap w-full items-center justify-center">
                    <SubtitleWithIcon title="Start with empathy" />
                  </div>
                  <div className="my-5">
                    <CardArticleWithObject
                      subtitle="Understand user with Qualitative Research"
                      description={
                        <div>
                          In the initial state, I decided to explore people’s
                          home service experience by setting an interview
                          questions and conducting <b>online user interview</b>{' '}
                          to learn user behavior and thier activities from start
                          to end. You can see my some questions in the link
                        </div>
                      }
                      object={
                        <Button
                          iconClassName="far fa-eye"
                          targetUrl="http://localhost:3000/CaseStudyDetail"
                          buttonText="SEE QUESTIONS"
                          buttontype="secondary"
                        />
                      }
                    />

                    <div className="mt-8">
                      <CardArticleWithObject
                        subtitle="Organize research study with Affinity Mapping"
                        description={
                          <div>
                            Affinity Mapping helps me organize research study
                            and allowed me to find some theme and focus point
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/3">
                  <ImageWithCaption
                    imageUrl={require('assets/img/affinity_map.jpg').default}
                    caption="Affinity Map"
                  />
                </div>
              </div>

              <div className="w-full ">
                <h4 className="text-2xl text-center mt-14 font-semibold leading-normal  text-blue-500">
                  Key Finding
                </h4>
                <div className="flex flex-wrap mt-6 md:w-full mx-auto text-center mx-auto">
                  <div className="py-2 md:w-1/4 px-5">
                    <div className="flex flex-wrap justify-center px-5">
                      <div>
                        <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 ">
                          <i className="fas fa-clock"></i>
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-600 text-md leading-relaxed my-5">
                          <b> It’s very time-consuming</b> in collecting service
                          information from many sources
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 md:w-1/4 px-5">
                    <div className="flex flex-wrap justify-center">
                      <div>
                        <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100">
                          <i className="fas fa-book"></i>
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-600 text-md  leading-relaxed my-5">
                          <b> Lacking of specialized knowledge and skill</b>{' '}
                          made people feel anxious and many time made them lost
                          a lot of money
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 md:w-1/4 px-5">
                    <div className="flex flex-wrap justify-center">
                      <div>
                        <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 ">
                          <i className="fas fa-search-dollar"></i>
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-600 text-md  leading-relaxed my-5">
                          <b> “How trust” is more important than “How much”</b>
                          people pay more If the result is worth it
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 md:w-1/4 px-5">
                    <div className="flex flex-wrap justify-center">
                      <div>
                        <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 ">
                          <i className="fas fa-wrench"></i>
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-600 text-md leading-relaxed my-5">
                          <b>“How can I do it by myself?” </b>is the question
                          they usually ask in case of minor problem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Define */}

        <section className="relative py-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap md:w-4/5 mx-auto">
              <div className="flex flex-wrap w-full items-center justify-center">
                <TitleWithIcon
                  title="Discovering design opportunities"
                  icon="fas fa-search"
                />
              </div>
              <div className="flex flex-wrap w-full items-center justify-center md:mb-12">
                <div className="md:w-6/12">
                  <div className="flex flex-wrap w-full items-center justify-center">
                    <SubtitleWithIcon title="Know users, then know problems" />
                  </div>
                  {/* Empathy Map */}
                  <div className="my-5">
                    <CardArticleWithObject
                      subtitle="Learn more about users"
                      description={
                        <div>
                          {' '}
                          According to my research study, I have two differences
                          type of users seperated by service that they got. So
                          that I created two empathy map to understand user
                          attitudes and behaviors of each user type.
                        </div>
                      }
                      textalign={'left'}
                    />
                  </div>
                </div>

                <div className="md:w-6/12">
                  <div className="md:px-16">
                    <Carousel
                      first={require('assets/img/EmpathyMap_no1.png').default}
                      second={require('assets/img/EmpathyMap_no2.png').default}
                    />
                    <p className="italic text-xs font-light text-gray-400 mt-2 ">
                      Empathy Mapp
                    </p>
                  </div>
                </div>
              </div>

              {/* Personas */}
              <div className="flex flex-wrap w-full items-center justify-center mt-5 mb-16">
                <div className="md:w-6/12">
                  <div className="my-5">
                    <CardArticleWithObject
                      subtitle="Define target users"
                      description={
                        <div>
                          {' '}
                          To follow user-centered design(UCD), I used personas
                          to help me indentify who are my target users, so that
                          I can design the right things to the right person.
                        </div>
                      }
                      textalign={'left'}
                    />
                  </div>
                </div>
                <div className="md:w-6/12 md:px-16">
                  <img
                    alt="..."
                    src={require('assets/img/Persona_1.png').default}
                    className="max-w-full mx-auto mb-3"
                    style={{}}
                  />

                  <p className="italic text-xs font-light text-gray-400 mt-2 ">
                    Personas
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap w-full items-center justify-center">
                <div className="flex flex-wrap w-full items-center justify-center">
                  <SubtitleWithIcon title="Addressing problems and needs"></SubtitleWithIcon>
                </div>
                <div className="flex flex-wrap w-full justify-center">
                  <div className="md:w-6/12 md:pr-8">
                    <div className="my-5">
                      <CardArticleWithObject
                        subtitle="See the whole story and capture the problems
                      "
                        description={
                          <div>
                            {' '}
                            I created storyboard to understand a sequence and
                            capture at attention point of user’s story. It’s
                            good way to understand whole story by seeing image.
                          </div>
                        }
                        textalign={'left'}
                        object={
                          <ImageWithCaption
                            imageUrl={
                              require('assets/img/Storyboard.jpg').default
                            }
                            caption="Storyboard"
                          />
                        }
                      />
                    </div>
                  </div>
                  <div className="md:w-6/12 md:pl-8">
                    <div className="my-5">
                      <CardArticleWithObject
                        subtitle="Analyze User’s Journey
                      "
                        description={
                          <div>
                            {' '}
                            To understand user’s problems, I created user
                            journey map to visualize the home service
                            experience. This help me see what/where/when/why
                            those problem occur in the user’s journey.
                          </div>
                        }
                        textalign={'left'}
                        object={
                          <ImageWithCaption
                            imageUrl={
                              require('assets/img/User_Journey1.png').default
                            }
                            caption="User’s Journey"
                          />
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative flex flex-wrap lg:w-full mx-auto bg-white pt-9 pb-16">
            <div className="px-4 md:w-4/5 mx-auto">
              <div className="md:w-3/5 mx-auto mb-4 text-center">
                <h2 className=" text-2xl font-semibold text-blue-600">
                  Define main problem with HMW
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-gray-600 text-left">
                  Mapping user’s problem with its HMW questions to find out what
                  is the most impact problem for them. After mapping, I found
                  common HMW that reflect user’s main problems
                </p>
              </div>

              <div className="w-full md:px-12 mx-auto">
                <ImageWithCaption
                  imageUrl={require('assets/img/Define_Problem.jpg').default}
                  caption="Define Problem Process"
                />
              </div>
              <div className="w-full ">
                <h4 className="text-xl text-center italic mt-12 font-semibold leading-normal  text-gray-700">
                  User’s Main Problems
                </h4>
                <div className="flex flex-wrap mt-6 md:w-3/5 mx-auto text-center mx-auto">
                  <div className="py-2 md:w-1/3 px-4">
                    <div>
                      <div className="flex flex-wrap mx-auto justify-center">
                        <span className="text-3xl text-center font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 ">
                          <i className="fas fa-book"></i>
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-600 text-md leading-relaxed my-5">
                          lacking of technical knowledge
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 md:w-1/3 px-4">
                    <div>
                      <div className="flex flex-wrap mx-auto justify-center">
                        <span className="text-3xl text-center font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 ">
                          <i className="fas fa-book"></i>
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-600 text-md leading-relaxed my-5">
                          have no time to learn technical skill
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 md:w-1/3 px-4">
                    <div className="flex flex-wrap mx-auto justify-center">
                      <div>
                        <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100">
                          <i className="fas fa-clock"></i>
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-600 text-md  leading-relaxed my-5">
                          Seeking a satisfied technician from multiple sources
                          is very time-consuming
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-3/5 mx-auto">
                  <div className="text-center bg-white rounded-xl py-4 px-8 mt-8 border-2 shadow-lg ">
                    <h4 className="text-xl text-center my-4 font-semibold leading-normal  text-gray-800">
                      How Might We
                    </h4>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Getting home service by just find a satisfied technician
                      in one source and able to get advices or technical
                      knowledge from an expert
                    </p>
                    <p className="text-4xl">?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideate */}

        <section>
          <div className="relative flex flex-wrap lg:w-full mx-auto bg-gray-50">
            <div className="relative flex flex-wrap w-full mx-auto justify-center pt-12 px-4">
              {' '}
              <TitleWithIcon
                title="Get into Solution"
                icon="fas fa-lightbulb"
              />
            </div>
            <div className="px-4 md:w-4/5 mx-auto">
              <div className="md:w-3/5 mx-auto mb-4 text-center">
                <h2 className=" text-2xl font-semibold text-blue-600">
                  HMW will come up with Solution
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-gray-600 text-left">
                  With all problem defination and how might we I got, I started
                  to generate several solutions and pick the most impact
                  solution by concidering their pros and cons
                </p>
              </div>

              <div className="w-full md:px-12 mx-auto ">
                <ImageWithCaption
                  imageUrl={require('assets/img/IdeateSolution.jpg').default}
                  caption="Ideation Solution Process"
                />
              </div>

              <div className="md:w-3/5 mx-auto">
                <div className="text-center bg-white rounded-xl py-4 px-8 mt-8 border-2 shadow-lg ">
                  <h4 className="text-xl text-center my-4 font-semibold leading-normal  text-gray-800">
                    Solution
                  </h4>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Get home service by using online platform which a huge of
                    technician information to find a satisfied technician and
                    get technical advice from an expert
                  </p>
                  <p className="text-4xl">?</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto justify-center items-center">
              <div className="w-full md:w-6/12 mx-auto md:pr-10">
                <div className="flex flex-wrap w-full items-center justify-center">
                  <SubtitleWithIcon title="Designing an Experience" />
                </div>
                <CardArticleWithObject
                  subtitle="Design user experience with User Story Mapping"
                  description={
                    <div>
                      I mapped out user’s activity, user’s task, and subtask to
                      visualize the main user’s flow and user interaction that I
                      expected them to go through to complete their goal
                    </div>
                  }
                  textalign="left"
                />
                <div className="my-5">
                  <CardArticleWithObject
                    subtitle="Minimum-Viable-Product approach"
                    description={
                      <div>
                        I sliced a story map into first and second release in
                        order to{' '}
                        <b>prioritize which features should be in prototype</b>{' '}
                        to learn if users understand the process and can
                        successfully reach the goal
                      </div>
                    }
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 md:px-16 mx-auto ">
                <ImageWithCaption
                  imageUrl={require('assets/img/userstory_map.jpg').default}
                  caption="User Story Mapping"
                />
              </div>
            </div>
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto justify-center items-center">
              <div className="w-full md:w-6/12 mx-auto md:pr-10">
                <div className="flex flex-wrap w-full  ">
                  <SubtitleWithIcon title="Structure the Site" />
                </div>
                <div className="my-5">
                  <CardArticleWithObject
                    subtitle="Structure the site with Information Architecture (IA)"
                    description={
                      <div>
                        After I maped out user’s story and conducted open-card
                        sorting using online tool (Optimal Workshop), I can
                        identify content and fuctionality that should be placed
                        in platform by creating sitemap.
                      </div>
                    }
                    textalign="left"
                  />
                </div>
              </div>
              <div className="w-full md:w-6/12 md:px-20 mx-auto md:pt-5">
                <ImageWithCaption
                  imageUrl={require('assets/img/sitemap.jpg').default}
                  caption="Sitemap"
                />
              </div>
            </div>
          </div>
        </section>

        {/* { Prototype} */}
        <section className="relative py-12 bg-white">
          <div className="container mx-auto ">
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto">
              <div className="relative flex flex-wrap w-full mx-auto justify-center">
                {' '}
                <TitleWithIcon
                  title="Turn ideas into prototype"
                  icon="fas fa-pencil-ruler"
                />
              </div>
              <div className="md:w-3/5 mx-auto mb-4">
                <CardArticleWithObject
                  description={
                    <div>
                      I started with some rough sketch on my iPad with the main
                      user’s flow screen and turn them into a high-fidelity
                      wireframe on Figma
                    </div>
                  }
                  textalign="left"
                />
              </div>
            </div>
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto justify-center items-center">
              <div className="w-full md:w-6/12 mx-auto md:px-10">
                <h2 className=" text-xl font-semibold text-gray-800 my-8 text-center">
                  Low Fidelity Wideframe
                </h2>
                <div className="text-center">
                  <ImageWithCaption
                    imageUrl={require('assets/img/affinity_map.jpg').default}
                    caption="Affinity Map"
                  />
                </div>
              </div>
              <div className="w-full md:w-6/12 mx-auto md:px-10">
                <h2 className=" text-xl font-semibold text-gray-800 my-8 text-center">
                  High Fidelity Wideframe
                </h2>
                <ImageWithCaption
                  imageUrl={require('assets/img/affinity_map.jpg').default}
                  caption="Affinity Map"
                />
              </div>
            </div>
          </div>
        </section>

        {/* { Prototype} */}
        <section>
          <div className="relative flex flex-wrap lg:w-full mx-auto bg-white-100 py-12">
            <div className="px-4 md:w-4/5 mx-auto">
              <h2 className=" text-4xl font-semibold text-gray-800 my-8 text-center">
                Prototype
              </h2>

              <div className="relative flex md:w-full md:px-12 mx-auto justify-center items-center">
                <div className="md:w-6/12 mx-auto mb-4">
                  <CardContentPrototype
                    title="Onboarding & Login"
                    subtitle="Provide user a key feature and 
                  alternative social media login method"
                    description="Educate the user about the functions and benefits of the app and encourage them to learn through exploring the app."
                  />
                </div>

                <div className="md:w-6/12 mx-auto mb-4 px-20">
                  <ImageWithCaption
                    imageUrl={require('assets/img/OnboardAndLogin.gif').default}
                  />
                </div>
              </div>

              <div className="relative flex md:w-full md:px-12 mx-auto justify-center items-center">
                <div className="md:w-6/12 mx-auto mb-4 px-20">
                  <ImageWithCaption
                    imageUrl={require('assets/img/SearchAndFilter.gif').default}
                  />
                </div>
                <div className="md:w-6/12 mx-auto mb-4">
                  <CardContentPrototype
                    title="Searching & Filtering"
                    subtitle="Provide user a key feature and 
                  alternative social media login method"
                    description="Educate the user about the functions and benefits of the app and encourage them to learn through exploring the app."
                  />
                </div>
              </div>

              <div className="relative flex md:w-full md:px-12 mx-auto justify-center items-center">
                <div className="md:w-6/12 mx-auto mb-4">
                  <CardContentPrototype
                    title="Booking and Scheduling"
                    subtitle="Provide user a key feature and 
                  alternative social media login method"
                    description="Educate the user about the functions and benefits of the app and encourage them to learn through exploring the app."
                  />
                </div>
                <div className="md:w-6/12 mx-auto mb-4 px-20">
                  <ImageWithCaption
                    imageUrl={
                      require('assets/img/BookingAndScheduling.gif').default
                    }
                  />
                </div>
              </div>

              <div className="relative flex md:w-full md:px-12 mx-auto justify-center items-center">
                <div className="md:w-6/12 mx-auto mb-4 px-20">
                  <ImageWithCaption
                    imageUrl={require('assets/img/Calling.gif').default}
                  />
                </div>
                <div className="md:w-6/12 mx-auto mb-4">
                  <CardContentPrototype
                    title="Video Calling"
                    subtitle="Provide user a key feature and 
                  alternative social media login method"
                    description="Educate the user about the functions and benefits of the app and encourage them to learn through exploring the app."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section className="relative py-12 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto">
              <div className="relative flex flex-wrap w-full mx-auto justify-center">
                {' '}
                <TitleWithIcon
                  title="Testing Prototype
                  "
                  icon="fas fa-pencil-ruler"
                />
              </div>
              <div className="md:w-3/5 mx-auto mb-4">
                <CardArticleWithObject
                  description={
                    <div>
                      After conducting the{' '}
                      <b className="text-blue-700">online usability testing</b>{' '}
                      with a clickable prototype by using think aloud method, I
                      found some usability problems and also discovered some
                      opportunities to improve the design for the for the{' '}
                      <b className="text-blue-700">next iteration</b>
                    </div>
                  }
                  textalign="left"
                />
              </div>
            </div>
            <div className="relative flex flex-wrap items-stretch md:w-full lg:px-12 mx-auto ">
              <div className="flex lg:w-1/3">
                <CardSumaryWithBorder
                  title="Problem #1"
                  subtitle="Missing Information"
                  description="Users were asking for more technician’s information such as technician work history, contact number, email, personal website those can gain more trust

                Users need to see the service detail such as service name and technician’s name during scheduling and additional information process "
                />
              </div>
              <div className="flex lg:w-1/3">
                <CardSumaryWithBorder
                  title="Problem #2"
                  subtitle="Unclear Icon Meaningtest"
                  description="Users did not understand the meaning of the icon such as the calendar icon(following with date and time) on the order summary card. because they did not know if it's an order create date or an appointment date
                "
                />
              </div>
              <div className="flex lg:w-1/3">
                <CardSumaryWithBorder
                  title="Problem #3"
                  subtitle="Confusing Button Position"
                  description="Service selecting button made them confused because this button contains the smaller one text button in there, which means they will get an unexpected response after tap the bigger button"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
