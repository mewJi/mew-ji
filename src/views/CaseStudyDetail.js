import React from 'react';

import Navbar from 'components/Navbar.js';
import Footer from 'components/Footer.js';
import CardTextContent from 'components/CardTextContent';
import Carousel from 'components/Carousel';

export default function CaseStudyDetail() {
  return (
    <>
      <Navbar />
      <main>
        <div className="lg:w-4/5 mx-auto text-gray-800">
          <section className="container flex flex-col items-center mx-auto text-center py-8">
            <img
              className="w-full text-center"
              src={require('assets/img/banner-case1.png').default}
            />
            <div className="flex flex-wrap items-center justify-around w-full bg-blue-100 py-8">
              <div>
                <h3>Overview & Challenge</h3>
              </div>
              <div>
                <h3>Design Process</h3>
              </div>
              <div>
                <h3>Learning & Reflection</h3>
              </div>
            </div>
          </section>

          <section className="py-30">
            <div className="container mx-auto text-center">
              <div className="w-full lg:w-6/12 mx-auto">
                <h2 className="text-4xl font-semibold my-10">HOME HERO</h2>
                <div className=" mb-12">
                  <p className="text-lg italic leading-relaxed text-gray-600 ">
                    Finding technicains is easier than ever,
                  </p>
                  <p className="text-lg italic leading-relaxed text-gray-600 ">
                    Better experience for your better life.
                  </p>
                </div>
                <div className="mb-8">
                  <div>
                    <h2 className="text-xl font-semibold">Overview</h2>
                  </div>
                  <div className="mb-12">
                    <p className="text-lg leading-relaxed m-4 ">
                      Home Hero is a mobile application that help people easily
                      find a technician for home maintenance and easily find an
                      expert to get consulting about the home solution they need
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-stretch items-center my-28 text-center mx-10">
              <div className="w-full lg:w-3/12 mx-auto py-8 bg-gray-100">
                <div className="mb-4">
                  <i className="fas fa-hand-holding-heart text-xl text-blue-500"></i>
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

              <div className="w-full lg:w-3/12 mx-auto py-8 bg-white">
                <div className="mb-4">
                  <i className="fas fa-clock text-xl text-blue-500"></i>
                </div>
                <div className="mb-8">
                  <h1 className="text-xl font-semibold leading-normal">
                    DURATION
                  </h1>
                </div>
                <div>
                  <p className="text- leading-normal">
                    March 2021 - April 2021
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-3/12 mx-auto py-8 bg-gray-100">
                <div className="mb-4">
                  <i className="fas fa-tools text-xl text-blue-500"></i>
                </div>
                <div className="mb-8">
                  <h1 className="text-xl font-semibold leading-normal">
                    TOOLS
                  </h1>
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
                    <li className="py-1">
                      <p className="text- leading-normal">Zoom</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-3/12 mx-auto py-8 bg-white">
                <div className="mb-4">
                  <i className="fas fa-mobile text-xl text-blue-500"></i>
                </div>
                <div className="mb-8">
                  <h1 className="text-xl font-semibold leading-normal">
                    PLATFORM
                  </h1>
                </div>
                <div>
                  <p className="text- leading-normal">Mobile Application</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mb-32 text-center">
              <div className="w-full lg:w-2/4 mx-auto">
                <div className="mb-8">
                  <div>
                    <h2 className="text-xl font-semibold">Challege</h2>
                  </div>
                  <div className="mb-8">
                    <p className="text-lg leading-relaxed m-4 ">
                      ปัจจุบันผู้ให้บริการช่างซ่อมแซม ปรับปรุง หรือ
                      ต่อเติมบ้านมีอยู่มากมาย
                      ผู้คนที่ต้องการใช้บริการจึงต้องใช้เวลาในการค้นหา รวบรวม
                      และเปรียบเทียบข้อมูลของผู้ให้บริการจากหลากแหล่งที่มา
                      ก่อนตัดสินใจเลือกใช้บริการ เพื่อให้มั่นใจได้ว่าบ้าน
                      อันเป็นที่พักอาศัยและเป็นศูนย์รวมของครอบครัวของเขาจะถูกซ่อมแซม
                      ปรับปรุง หรือ ต่อเติมอย่างมีคุณภาพ
                      และไม่เกิดความเสียหายภายหลัง จึงเป็นที่มาของ Case Study
                      นี้ กับคำถามที่ว่า
                    </p>
                  </div>
                  <div className="mb-12">
                    <h1 className="text-lg text-red-300">
                      “จะทำอย่างไร
                      ที่จะทำให้ผู้คนสามารถเข้าถึงข้อมูลการให้บริการช่างได้ง่ายขึ้น
                      และมีส่วนช่วยในการตัดสินใจเลือกใช้บริการ
                      เพื่อให้ได้รับบริการที่พึงพอใจกลับไป”
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="relative py-20 bg-gray-100 ">
          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap items-center lg:w-3/4 mx-auto justify-center">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-hand-holding-heart text-xl text-blue-500"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Start with empathy
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Understand user by conducting online user interview to learn
                  user behavior and thier activities from start to end of
                  getting service from a home service provider.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Here are some questions I asked
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                    className="font-bold text-red-500 ml-8"
                  >
                    Click
                  </a>
                </p>

                <h4 className="text-xl mt-24 mb-6 font-semibold leading-normal">
                  Key Finding I found
                </h4>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 mr-5">
                          <i className="fas fa-clock"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-800 text-lg font-semibold">
                          It’s very time-consuming{' '}
                        </h4>
                        <p className="text-gray-600 text-lg font-light leading-relaxed">
                          in collecting service information from many sources
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 mr-5">
                          <i className="fas fa-book"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-800 text-lg font-semibold">
                          Lacking of specialized knowledge and skill{' '}
                        </h4>
                        <p className="text-gray-600 text-lg font-light leading-relaxed">
                          made people feel anxious and many time made them lost
                          a lot of money
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 mr-5">
                          <i className="fas fa-search-dollar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-800 text-lg font-semibold">
                          “How trust” is more important than “How much”{' '}
                        </h4>
                        <p className="text-gray-600 text-lg font-light leading-relaxed">
                          people pay more If the result is worth it
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100 mr-5">
                          <i className="fas fa-wrench"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-800 text-lg font-semibold">
                          “How can I do it by myself?”{' '}
                        </h4>
                        <p className="text-gray-600 text-lg font-light leading-relaxed">
                          is the question they usually ask in case of minor
                          problem
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-yellow-600">
                  <img
                    alt="..."
                    src={require('assets/img/affinity_map.jpg').default}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: '95px',
                        top: '-94px',
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-yellow-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Organize research study with Affinity Mapping
                    </h4>
                    <p className="text-lg font-light mt-2 text-white">
                      Affinity Mapping helps me organize research study and
                      allowed me to find some theme and focus point.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center lg:w-3/4 mx-auto justify-center">
              <div>
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-crosshairs text-xl text-blue-500"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Define the right problem
                </h3>
                <h2 className="mt-6 text-2xl font-semibold">
                  More understand user with Empathy Map
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  According to my research study, I have two differences type of
                  user seperated by service that they got. So I created two
                  empathy map to understand user attitudes and behaviors of each
                  user type.
                </p>
              </div>
              <div>
                <img
                  alt="..."
                  src={require('assets/img/EmpathyMap_no1.png').default}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
              <p className="italic text-s font-light text-gray-400">
                Empathy map of user who got air conditioner cleaning service
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Carousel --> */}
        <Carousel />
        {/*<!-- Carousel --> */}

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: '80px' }}
          ></div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-crosshairsc text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Define the right problem
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require('assets/img/team-1-800x800.jpg').default}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '120px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require('assets/img/team-2-800x800.jpg').default}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '120px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require('assets/img/team-3-800x800.jpg').default}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '120px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require('assets/img/team-4-470x470.png').default}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '120px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: '80px' }}
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
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
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
