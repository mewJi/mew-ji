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
                  Hi, I am Mew
                </h3>
                <p className="mt-8 text-lg text-gray-800">
                  Eget enim neque, risus, nibh sagittis placerat est. Aliquam
                  pellentesque eget erat sed quis malesuada vitae posuere
                  mauris. Placerat sit sem libero risus, faucibus facilisi.
                  <br></br>
                  <br></br>
                  Scelerisque a pellentesque mattis mi. Elementum leo ultricies
                  dolor commodo, dui, nam cursus montes. A aliquam ullamcorper
                  gravida amet, quis nulla semper tortor. Tincidunt elit at
                  <br></br>
                  <br></br>
                  scelerisque nunc nullam in ultrices. Elementum sed cursus
                  ipsum vel
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
