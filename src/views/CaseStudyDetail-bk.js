import React from 'react';

import Navbar from 'components/Navbar.js';
import Footer from 'components/Footer.js';
import CardTextContent from 'components/CardTextContent';

import './CaseStudyDetail.css';
import CardArticleWithObject from 'components/CardArticleWithObject';
import ImageWithCaption from 'components/ImageWithCaption';
import TitleWithIcon from 'components/TitleWithIcon';
import TextWithBG from 'components/TextWithBG';
import Button from 'components/Button';

export default function CaseStudyDetail() {
  return (
    <>
      {' '}
      {/* <!-- NavBar --> */}
      <Navbar />
      {/* <!-- NavBar --> */}
      <main>
        <div className="lg:w-4/5 mx-auto text-gray-800">
          <section className="container flex flex-col items-center mx-auto text-center py-8">
            <img
              className="w-full text-center "
              src={require('assets/img/banner-case1.png').default}
            />
            <div className="relative flex flex-wrap items-stretch justify-around w-full text-xl bg-white">
              <div className="w-1/3 lg:shadow-sm py-4">
                <h3 className="hover:text-gray-400">Overview & Challenge</h3>
              </div>
              <div className="w-1/3 lg:shadow-sm py-4">
                <h3 className="hover:text-gray-400">Design Process</h3>
              </div>
              <div className="w-1/3 lg:shadow-sm py-4">
                <h3 className="hover:text-gray-400">Learning & Reflection</h3>
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

            <div className="flex flex-wrap items-stretch items-center w-3/4 my-16 text-center mx-auto">
              <div className="w-full lg:w-3/12 mx-auto py-8 bg-white">
                <div className="mb-4">
                  <i className="fas fa-suitcase text-2xl text-yellow-500"></i>
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
                  <i className="fas fa-clock text-2xl text-yellow-500"></i>
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
              <div className="w-full lg:w-3/12 mx-auto py-8 bg-white">
                <div className="mb-4">
                  <i className="fas fa-tools text-2xl text-yellow-500"></i>
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
                  <i className="fas fa-mobile text-2xl text-yellow-500"></i>
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

            <div className="flex flex-wrap text-center mx-auto w-full">
              <div className="flex flex-wrap w-2/4 mx-auto justify-center ">
                <h2 className="text-xl font-semibold ">Problem</h2>

                <p className="text-lg leading-relaxed mb-4 mt-4">
                  Designed a mobile application to help people easily find a
                  technician for home maintenance and easily find an expert to
                  get consulting about the home solution they need
                </p>
              </div>
            </div>

            <div className="flex felx-wrap justify-center items-center w-4/5 mx-auto mb-16">
              <div className="w-1/3 mx-2">
                {' '}
                <img
                  alt="..."
                  src={require('assets/img/problem1.png').default}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
              <div className="w-1/3 mx-2">
                {' '}
                <img
                  alt="..."
                  src={require('assets/img/problem2.png').default}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center mb-16 text-center">
              <div className="w-full lg:w-2/4 mx-auto">
                <div>
                  <div>
                    <h2 className="text-xl font-semibold">Challege</h2>
                  </div>
                  <div className="mb-8">
                    <p className="text-lg leading-relaxed m-3 ">
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
                  <div className="">
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

        {/* Design Process*/}
        <div className="flex flex-wrap text-center w-2/4 justify-center item-center mx-auto">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-center">
              Design Process
            </h2>
          </div>
          <div className="mb-20">
            <img
              alt="..."
              src={require('assets/img/DesignProcess.png').default}
              className="w-full align-middle rounded-t-lg"
            />
          </div>
        </div>

        {/* Empathy */}
        <section className="relative py-20 bg-gray-100 ">
          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap lg:w-4/5 mx-auto ">
              <div className="flex flex-wrap w-full items-center justify-center">
                <TitleWithIcon
                  title="Discovering design opportunities"
                  icon="fas fa-search"
                />
              </div>
              <div className="w-full md:w-6/12 mr-auto ml-auto ">
                <CardArticleWithObject
                  subtiltle="Start with empathy by conducting online user interview"
                  description={
                    <div>
                      {' '}
                      Understand users by conducting{' '}
                      <b>online user interview</b> to learn user behavior and
                      thier activities from start to end of getting service from
                      a home service provider.
                    </div>
                  }
                />

                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700 px-4">
                  Here are some questions I asked
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                    className="font-bold text-red-500 ml-8"
                  >
                    Click
                  </a>
                </p>
                <div className="w-full mx-4">
                  <h4 className="text-xl mt-20 font-semibold leading-normal  text-blue-500">
                    Key Finding I found
                  </h4>
                  <ul className="list-none mt-6 w-2/3">
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
                            made people feel anxious and many time made them
                            lost a lot of money
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
              </div>

              <div className="w-full md:w-6/12 mr-auto">
                <div className="">
                  <CardArticleWithObject
                    subtiltle="Organize research study with Affinity Mapping"
                    description="Affinity Mapping helps me organize research study and allowed me to find some theme and focus point"
                    object={
                      <ImageWithCaption
                        imageUrl={
                          require('assets/img/affinity_map.jpg').default
                        }
                        caption="Affinity Map"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Define */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto">
              <div className="relative flex flex-wrap w-full mx-auto">
                {' '}
                <TitleWithIcon
                  title="Define the right problem"
                  icon="fas fa-crosshairs"
                />
              </div>
              <div className="lg:w-1/3 mx-auto pr-10">
                <CardArticleWithObject
                  subtiltle="More understand user with Empathy Map"
                  description={
                    <div>
                      {' '}
                      According to my research study, I have two differences
                      type of user seperated by service that they got. So I
                      created two empathy map to understand user{' '}
                      <b>attitudes and behaviors</b> of each user type.
                    </div>
                  }
                  object={
                    <Button
                      iconClassName="far fa-eye"
                      targetUrl="http://localhost:3000/CaseStudyDetail"
                      buttonText="SEE PICTURE"
                      buttontype="secondary"
                    />
                  }
                />
              </div>
              <div className="lg:w-1/3 mx-auto pr-10">
                <CardArticleWithObject
                  subtiltle="Follow user-centered design (UCD) with Personas"
                  description={
                    <div>
                      This can help me indentify who is target user, so that I
                      can design <b>the right things to the right person</b>
                    </div>
                  }
                  object={
                    <Button
                      iconClassName="far fa-eye"
                      targetUrl="http://localhost:3000/CaseStudyDetail"
                      buttonText="SEE PICTURE"
                      buttontype="secondary"
                    />
                  }
                />
              </div>
              <div className="lg:w-1/3 mx-auto pr-10">
                <CardArticleWithObject
                  subtiltle="See the whole story with Storyboard"
                  description={
                    <div>
                      I created storyboard to understand a sequence and capture
                      at attention point of user’s story. It’s good way to
                      understand whole story by seeing image
                    </div>
                  }
                  object={
                    <Button
                      iconClassName="far fa-eye"
                      targetUrl="http://localhost:3000/CaseStudyDetail"
                      buttonText="SEE PICTURE"
                      buttontype="secondary"
                    />
                  }
                />
              </div>
              <div className="lg:w-full mx-auto pr-10 my-14">
                <CardArticleWithObject
                  subtiltle="Analyze User’s Journey"
                  description={
                    <div>
                      To understand user’s problems, I created user journey map
                      to visualize the current home service process. This help
                      me see what/where/when/why those problem occur in the
                      user’s journey.
                    </div>
                  }
                  object={
                    <ImageWithCaption
                      imageUrl={require('assets/img/User_Journey1.png').default}
                      caption="User's Story"
                    />
                  }
                />
              </div>

              <div className="relative flex flex-wrap lg:w-full mx-auto pr-10">
                <CardArticleWithObject
                  subtiltle="Define main problem with How Might We Question"
                  description={
                    <div>
                      Mapping user’s problem with its HMW questions to find out
                      what is the most impact problem for them. After mapping, I
                      found common HMW that reflect user’s main problems.
                    </div>
                  }
                  object={
                    <ImageWithCaption
                      imageUrl={
                        require('assets/img/Define_Problem.jpg').default
                      }
                      caption="User's Story"
                    />
                  }
                />
              </div>

              <div className="relative flex flex-wrap w-full mx-auto justify-center">
                <div className="lg:w-1/2 mx-auto mx-10">
                  <TextWithBG
                    title="FROM : User’s main problems"
                    description="
                  lacking of technical knowledge

                      have no time to learn technical skill

                      Seeking a satisfied technician from 
                      multiple sources is very time-consuming "
                  ></TextWithBG>
                </div>
                <div className="lg:w-1/2 mx-auto mx-10">
                  {' '}
                  <TextWithBG
                    title="TO : How Might We"
                    description="
                    “Getting home service by just find a satisfied 
                    technician in one source and able to get 
                    some technical knowledge or advices from 
                    an expert”"
                  ></TextWithBG>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideate */}

        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto">
              <div className="relative flex flex-wrap w-full mx-auto">
                {' '}
                <TitleWithIcon
                  title="Get into the solution"
                  icon="fas fa-lightbulb"
                />
              </div>
              <CardArticleWithObject subtiltle="Ideate solutions from HMW" />
              <div className="relative flex flex-wrap w-full mx-auto mt-20">
                <div>
                  <img
                    alt="..."
                    src={require('assets/img/findsolution_map2.png').default}
                    className="max-w-full mx-auto"
                    style={{}}
                  />
                </div>
                <div>
                  <img
                    alt="..."
                    src={require('assets/img/IdeateSolution.png').default}
                    className="max-w-full mx-auto"
                    style={{}}
                  />
                </div>
              </div>
              <div className="relative flex flex-wrap lg:w-full mx-auto my-12">
                <CardArticleWithObject
                  subtiltle="Design user experience with User Story Mapping"
                  description={
                    <div>
                      Mapping out user’s activity, user’s task, and subtask to
                      visualize the main user’s flow and user interaction while
                      users are trying to complete their main goal
                    </div>
                  }
                  object={
                    <ImageWithCaption
                      imageUrl={require('assets/img/userstory_map.jpg').default}
                      caption="User's Story Map"
                    />
                  }
                />
              </div>
              <div className="relative flex flex-wrap lg:w-full mx-auto">
                <div className="lg:w-1/3 mx-auto pr-10">
                  <CardArticleWithObject
                    subtiltle="Minimum-Viable-Product approach"
                    description={
                      <div>
                        I sliced a story map into first and second release in
                        order to{' '}
                        <b>prioritize which features should be in prototype </b>{' '}
                        to learn if users understand the process and can
                        successfully reach the goal
                      </div>
                    }
                  />
                </div>
                <div className="lg:w-1/3 mx-auto pr-10">
                  <CardArticleWithObject
                    subtiltle="Effective IA with Card Sorting"
                    description={
                      <div>
                        I conducted <b>open-card sorting </b>using online tool
                        (Optimal Workshop) with users and analyzed the result
                      </div>
                    }
                    object={
                      <Button
                        iconClassName="far fa-eye"
                        targetUrl="http://localhost:3000/CaseStudyDetail"
                        buttonText="SEE PICTURE"
                        buttontype="secondary"
                      />
                    }
                  />
                </div>
                <div className="lg:w-1/3 mx-auto pr-10">
                  <CardArticleWithObject
                    subtiltle="Structure the site with Information Architecture"
                    description={
                      <div>
                        After I maped out user’s story and conducted card
                        sorting, I can identify content and fuctionality that
                        should be in platform by creating sitemap.
                      </div>
                    }
                    object={
                      <Button
                        iconClassName="far fa-eye"
                        targetUrl="http://localhost:3000/CaseStudyDetail"
                        buttonText="SEE PICTURE"
                        buttontype="secondary"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* { Prototype} */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto">
              <div className="relative flex flex-wrap w-full mx-auto">
                {' '}
                <TitleWithIcon
                  title="Turn ideas into prototype"
                  icon="fas fa-pencil-ruler"
                />
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
