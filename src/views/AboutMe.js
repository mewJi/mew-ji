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
                  className="max-w-full "
                  style={{}}
                />
              </div>
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4 py-8">
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
              Lifestyle
            </h2>
            <div className="items-center items-stretch justify-center mx-auto flex flex-wrap md:w-4/5 ">
              <div className="w-full md:w-1/4">
                <CardHobbiesWithBorder
                  title="I love drawing"
                  description="Because drawing help me develop my creative muscle, improve my concentration. And yes!, it's my best therapy"
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
                  title="I love playing guitar and Signing"
                  description="When I was young I had a dream to be a singer. Unfortunately, my life isn't what I expected.  So I taught myself to play guitar and cover the song when I have free time"
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
                  title="I love photography"
                  description=" 
                  I am the one who loves nature and minimalism, so I usually capture their moment and keep it in the photograph"
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
                  title="I love DIY"
                  description="Making something new out of something old is my favorite activity, It is the way to live sustainably and keep the world away from global warming"
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
            <div className="items-center justify-center items-stretch mx-auto flex flex-wrap md:w-4/6 ">
              <div className="w-full md:w-1/3">
                <CardHobbiesWithBorder
                  title="100 Things Every Designer Needs To Know About People"
                  description="by Susan M. Weinschenk"
                  imageUrl={require('assets/img/lackofskill.png').default}
                ></CardHobbiesWithBorder>
              </div>
              <div className="w-full md:w-1/3">
                <CardHobbiesWithBorder
                  title="The Small Big"
                  description="by Steve J. Martin, Noah J. Goldstein, Robert B. Cialdini"
                  imageUrl={require('assets/img/lackofskill.png').default}
                ></CardHobbiesWithBorder>
              </div>
              <div className="w-full md:w-1/3">
                <CardHobbiesWithBorder
                  title="The Outward Mindset"
                  description="by The Arbinger Institute"
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
