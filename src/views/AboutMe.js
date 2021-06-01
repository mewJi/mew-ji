import React from 'react';

import Navbar from 'components/Navbar.js';
import Footer from 'components/Footer.js';
import ButtonSmall from 'components/ButtonSmall.js';
import CardHobbiesWithBorder from 'components/CardHobbiesWithBorder.js';

export default function AboutMe() {
  return (
    <>
      <Navbar />
      <main>
        <div
          className="relative pt-16 pb-16 px-4 flex content-center items-center justify-center bg-gray-100"
          style={{
            minHeight: '20vh',
          }}
        >
          <div className="container  relative mx-auto px-4">
            <div className="items-center justify-center mx-auto flex flex-wrap md:w-4/6 ">
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  src={require('assets/img/me.png').default}
                  className="max-w-full pl-4 "
                  style={{}}
                />
              </div>
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <h3 className="font-semibold text-5xl text-gray-800">
                  Hi, I am Mewji
                </h3>
                <p className="mt-8 text-lg text-gray-800">
                  Eight years of experience in supporting clients in an IT
                  consulting company gave me a very big and long chance to
                  understand people and client’s core business. This makes me
                  realize that empathy can improve people’s lives and bring
                  success to the business.
                  <br></br>
                  <br></br>
                  This is why I intend to learn about UX and willing to be a
                  part of the big success.
                  <br></br>
                  <br></br>
                  Seeing people’s lives better while the business meets their
                  goals is the reason why I am passionate to come into the User
                  Experience Design career.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative pt-16 pb-16 px-4 flex content-center items-center justify-center bg-white"
          style={{
            minHeight: '20vh',
          }}
        >
          <div className="container  relative mx-auto px-4">
            <h2 className="text-center text-3xl text-gray-800 font-semibold mb-4">
              Hobbies
            </h2>
            <div className="items-center justify-center mx-auto flex flex-wrap md:w-4/6 ">
              <div className="w-full md:w-1/4">
                <CardHobbiesWithBorder
                  title="Drawing"
                  description="Drawing drawing drawing drawing drawing drawing drawing"
                  imageUrl={require('assets/img/lackofskill.png').default}
                  object={
                    <ButtonSmall
                      iconClassName="far fa-eye"
                      targetUrl="https://www.facebook.com/areyousurecomic"
                      buttonText="My Facebook Page"
                      buttontype="secondary"
                    />
                  }
                ></CardHobbiesWithBorder>
              </div>
              <div className="w-full md:w-1/4">
                <CardHobbiesWithBorder
                  title="Drawing"
                  description="Drawing drawing drawing drawing drawing drawing drawing"
                  imageUrl={require('assets/img/lackofskill.png').default}
                  object={
                    <ButtonSmall
                      iconClassName="far fa-eye"
                      targetUrl="https://youtu.be/XA1IcShoGd8"
                      buttonText="My Last Cover"
                      buttontype="secondary"
                    />
                  }
                ></CardHobbiesWithBorder>
              </div>
              <div className="w-full md:w-1/4">
                <CardHobbiesWithBorder
                  title="Drawing"
                  description="Drawing drawing drawing drawing drawing drawing drawing"
                  imageUrl={require('assets/img/lackofskill.png').default}
                  object={
                    <ButtonSmall
                      iconClassName="far fa-eye"
                      targetUrl="https://youtu.be/XA1IcShoGd8"
                      buttonText="My Gallery"
                      buttontype="secondary"
                    />
                  }
                ></CardHobbiesWithBorder>
              </div>
              <div className="w-full md:w-1/4">
                <CardHobbiesWithBorder
                  title="Drawing"
                  description="Drawing drawing drawing drawing drawing drawing drawing"
                  imageUrl={require('assets/img/lackofskill.png').default}
                ></CardHobbiesWithBorder>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative  pb-16 px-4 flex content-center items-center justify-center bg-white"
          style={{
            minHeight: '20vh',
          }}
        >
          <div className="container  relative mx-auto px-4">
            <h2 className="text-center text-3xl text-gray-800 font-semibold mb-4">
              Current Reading
            </h2>
            <div className="items-center justify-center mx-auto flex flex-wrap md:w-4/6 ">
              <div className="w-full md:w-1/3">
                <CardHobbiesWithBorder
                  title="Drawing"
                  description="Drawing drawing drawing drawing drawing drawing drawing"
                  imageUrl={require('assets/img/lackofskill.png').default}
                ></CardHobbiesWithBorder>
              </div>
              <div className="w-full md:w-1/3">
                <CardHobbiesWithBorder
                  title="Drawing"
                  description="Drawing drawing drawing drawing drawing drawing drawing"
                  imageUrl={require('assets/img/lackofskill.png').default}
                ></CardHobbiesWithBorder>
              </div>
              <div className="w-full md:w-1/3">
                <CardHobbiesWithBorder
                  title="Drawing"
                  description="Drawing drawing drawing drawing drawing drawing drawing"
                  imageUrl={require('assets/img/lackofskill.png').default}
                ></CardHobbiesWithBorder>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
