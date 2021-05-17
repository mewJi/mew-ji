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

export default function CaseStudyDetail() {
  return (
    <>
      {' '}
      {/* <!-- NavBar --> */}
      <Navbar />
      {/* <!-- NavBar --> */}
      <main>
        <div className="lg:w-4/5 mx-auto text-gray-800 px-4">
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
                <h2 className="text-4xl font-semibold mt-8 mb-4">HOME HERO</h2>
                <div className=" mb-12">
                  <p className="text-lg font-semibold leading-relaxed text-blue-700 ">
                    Finding technicains is easier than ever,
                  </p>
                  <p className="text-lg font-semibold leading-relaxed text-blue-700 ">
                    Better experience for your better life.
                  </p>
                </div>
                <div className="mb-8">
                  <div>
                    <h2 className="text-2xl font-semibold">Overview</h2>
                  </div>
                  <div className="mb-12">
                    <p className="text-lg leading-relaxed my-4">
                      Home Hero is a mobile application that help people easily
                      find a technician for home maintenance and easily find an
                      expert to get consulting about the home solution they need
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-stretch items-center md:w-4/ my-16 text-center mx-auto">
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
                  <p className="text- leading-normal">
                    March 2021 - April 2021
                  </p>
                </div>
              </div>
              <div className="w-full md:w-3/12 mx-auto py-2 bg-white">
                <div className="mb-4">
                  <i className="fas fa-tools text-2xl text-blue-500"></i>
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

            <div className="flex flex-wrap text-center mx-auto w-full">
              <div className="flex flex-wrap md:w-4/5 mx-auto justify-center ">
                <h2 className="text-2xl font-semibold mb-4">Problem</h2>

                <p className="text-lg leading-relaxed mb-8">
                  Designed a mobile application to help people easily find a
                  technician for home maintenance and easily find an expert to
                  get consulting about the home solution they need
                </p>
              </div>
            </div>

            <div className="flex flex-wrap pb-16 md:w-full mx-auto items-center justify-center">
              <div className="flex flex-wrap justify-center items-center">
                <div className="md:w-6/12 lg:w-3/12 mx-auto">
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
                <div className="md:w-6/12 lg:w-3/12 mx-auto">
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

                <div className="md:w-6/12 lg:w-3/12 mx-auto">
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
                <div className="md:w-6/12 lg:w-3/12 mx-auto">
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

            <div className="flex flex-wrap items-center mb-16 text-center">
              <div className="w-full md:w-2/4 mx-auto">
                <div>
                  <div>
                    <h2 className="text-2xl font-semibold">Challege</h2>
                  </div>
                  <div className="mb-8">
                    <p className="text-lg leading-relaxed my-4">
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
        <div className="text-center md:w-3/4 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-center">
                Design Process
              </h2>
            </div>
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
        <section className="relative py-12 bg-gray-100 px-4">
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
          <div className="relative flex flex-wrap lg:w-full mx-auto bg-gray-100 py-12">
            <div className="px-4 md:w-4/5 mx-auto">
              <div className="md:w-3/5 mx-auto mb-4 text-center">
                <h2 className=" text-2xl font-semibold text-blue-600">
                  Define main problem with HMW
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-gray-600">
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
                <div className="flex flex-wrap mt-6 md:w-4/5 mx-auto text-center mx-auto">
                  <div className="py-2 md:w-1/3 px-8">
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
                  <div className="py-2 md:w-1/3 px-8">
                    <div className="flex flex-wrap justify-center">
                      <div>
                        <span className="text-3xl font-semibold inline-block py-2 px-3 uppercase rounded-full text-blue-500 bg-blue-100">
                          <i className="fas fa-book"></i>
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-600 text-md  leading-relaxed my-5">
                          have no time to learn technical skill
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 md:w-1/3 px-8">
                    <div className="flex flex-wrap justify-center">
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
                <h4 className="text-xl text-center mt-4 italic font-semibold leading-normal  text-gray-700">
                  How Might We
                </h4>
                <div className="md:w-3/5 mx-auto">
                  <div className="text-center bg-white rounded-xl py-8 px-8 m-8">
                    <p className="text-lg leading-relaxed text-gray-700">
                      Getting home service by just find a satisfied technician
                      in one source and able to get advices or technical
                      knowledge from an expert
                    </p>
                    <p className="text-xl">?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideate */}
        <div className="relative flex flex-wrap w-full mx-auto justify-center pt-12 px-4">
          {' '}
          <TitleWithIcon title="Get into Solution" icon="fas fa-lightbulb" />
        </div>
        <section>
          <div className="relative flex flex-wrap lg:w-full mx-auto bg-gray-100 py-12">
            <div className="px-4 md:w-4/5 mx-auto">
              <div className="md:w-3/5 mx-auto mb-4">
                <CardArticleWithObject
                  subtitle="HMW will come up with Solution"
                  description={
                    <div>
                      With all problem defination and how might we I got, I
                      started to generate several solutions and pick the most
                      impact solution by concidering their pros and cons.
                    </div>
                  }
                  textalign="center"
                />
              </div>
              <div className="w-full md:px-12 mx-auto ">
                <ImageWithCaption
                  imageUrl={require('assets/img/IdeateSolution.jpg').default}
                  caption="Ideation Solution Process"
                />
              </div>
              <div className="w-full ">
                <h4 className="text-xl text-center mt-12 italic font-semibold leading-normal  text-gray-700">
                  Solution
                </h4>
                <div className="md:w-3/5 mx-auto">
                  <div className="text-center bg-white rounded-xl py-8 px-8 m-8">
                    <p className="text-lg leading-relaxed text-gray-700">
                      Get home service by using online platform which a huge of
                      technician information to find a satisfied technician and
                      get technical advice from an expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 px-4">
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
        <section className="relative py-12 bg-gray-100">
          <div className="container mx-auto ">
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto">
              <div className="relative flex flex-wrap w-full mx-auto justify-center">
                {' '}
                <TitleWithIcon
                  title="Turn ideas into prototype"
                  icon="fas fa-pencil-ruler"
                />
              </div>
              <div className="md:w-4/5 mx-auto mb-4">
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
                    imageUrl={require('assets/img/OnboardAndLogin.gif').default}
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
        <section className="relative py-12 px-4 bg-gray-100">
          <div className="container mx-auto">
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto">
              <div className="relative flex flex-wrap w-full mx-auto justify-center">
                {' '}
                <TitleWithIcon
                  title="Testing prototype
                  to uncover improvement opportunities "
                  icon="fas fa-pencil-ruler"
                />
              </div>
              <div className="md:w-4/5 mx-auto mb-4">
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

        {/* Brand and UI */}

        <section className="relative pt-16 px-4">
          <div className="container mx-auto">
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto">
              <div className="relative flex flex-wrap w-full mx-auto justify-center">
                {' '}
                <TitleWithIcon
                  title="Brand identity and Handover Preparation"
                  icon="fas fa-pencil-ruler"
                />
              </div>
              <img imageUrl={require('assets/img/affinity_map.jpg').default} />
              <div className="relative flex flex-wrap w-full mx-auto justify-center"></div>
            </div>
          </div>
        </section>

        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-wrap md:w-4/5 mx-auto items-center justify-center">
              <div className="md:w-6/12 mx-auto md:pr-2 mb-4">
                <CardContentPrototype
                  title="Brand Identity"
                  subtitle="Defining brand identity with a logo and color"
                  description="Educate the user about the functions and benefits of the app and encourage them to learn through exploring the app."
                />
              </div>
              <div className="md:w-4/12 mx-auto mb-4 ">
                <ImageWithCaption
                  imageUrl={require('assets/img/logo.svg').default}
                />
              </div>
            </div>

            <div className="flex flex-wrap pb-16 md:w-4/5 mx-auto items-center justify-center">
              <div className="w-full lg:w-5/12 mb-4 px-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
                  The Idea
                </h2>
                <div className="flex flex-wrap justify-center items-center">
                  <div className="md:w-6/12 px-6">
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
                  <div className="md:w-6/12 px-6">
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
              <div className="w-full lg:w-2/12 mb-12"></div>

              <div className="w-full lg:w-5/12 mb-4 mx-auto px-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
                  The Color
                </h2>
                <div className="flex flex-wrap justify-center items-center">
                  <div className="md:w-6/12 px-6">
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
                  <div className="md:w-6/12 px-6">
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
        </section>

        {/* Brand and UI */}
        <section className="pb-32">
          <div className="container mx-auto">
            <div className="relative flex flex-wrap lg:w-4/5 mx-auto">
              <div className="relative flex flex-wrap w-full mx-auto justify-center">
                {' '}
                <TitleWithIcon title="My Learning" icon="fas fa-pencil-ruler" />
              </div>

              <div className="relative flex flex-wrap w-full mx-auto justify-center">
                <div className="md:w-1/4 px-5 py-5">
                  <div className="bg-gray-100 rounded-xl shadow-md px-5 py-5 text-xl text-blue-500">
                    <h2>
                      Educate the user about the functions and benefits of the
                      app and encourage them to learn through exploring the app.
                    </h2>
                  </div>
                </div>
                <div className="md:w-1/4 px-5 py-5">
                  <div className="bg-gray-100 rounded-xl shadow-md px-5 py-5 text-xl text-blue-500">
                    <h2>
                      Educate the user about the functions and benefits of the
                      app and encourage them to learn through exploring the app.
                    </h2>
                  </div>
                </div>
                <div className="md:w-1/4 px-5 py-5">
                  <div className="bg-gray-100 rounded-xl shadow-md px-5 py-5 text-xl text-blue-500">
                    <h2>
                      Educate the user about the functions and benefits of the
                      app and encourage them to learn through exploring the app.
                    </h2>
                  </div>
                </div>
                <div className="md:w-1/4 px-5 py-5">
                  <div className="bg-gray-100 rounded-xl shadow-md px-5 py-5 text-xl text-blue-500">
                    <h2>
                      Educate the user about the functions and benefits of the
                      app and encourage them to learn through exploring the app.
                    </h2>
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
