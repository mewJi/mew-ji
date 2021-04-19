import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 pt-8 pb-6">
      {/* <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
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
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <h4 className="text-2xl font-semibold text-center text-blue-500 py-4">
              Nice to see you here :)
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blue-500 text-center">
              Let's connect!
            </h5>
            <div className="mt-6 text-center">
              <a href="https://www.facebook.com/imNichaphat" target="_blank">
                <button
                  className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-facebook"></i>
                </button>
              </a>

              <a href="https://www.instagram.com/mew.nichaphat" target="_blank">
                <button
                  className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-instagram"></i>
                </button>
              </a>

              <a href="https://dribbble.com/mewji" target="_blank">
                <button
                  className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-dribbble"></i>
                </button>
              </a>

              <a href="https://line.me/ti/p/ujMym0Xec4" target="_blank">
                <button
                  className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-line"></i>
                </button>
              </a>
            </div>
          </div>
          {/* <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation">About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com">Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial">Github
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free">Free Products
                    </a>
                  </li>

                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">MIT License
                  </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms">Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy">Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us">Contact Us
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div> */}
        </div>
        <hr className="my-6 border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blue-500 font-semibold py-1">
              Made with <i className="fas fa-heart"></i> by Mewji
            </div>
            <div className="text-sm text-blue-500 font-semibold py-1">
              © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
