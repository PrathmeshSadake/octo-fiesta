import React from "react";
import backgroundTravelVideo from "../assets/travel-video.mp4";
const Header = () => {
  return (
    <section class="relative min-h-screen pb-20">
      <nav class="flex justify-between items-center py-8 px-4 xl:px-10">
        <a
          class="text-lg font-bold tracking-wider"
          href="/"
          data-config-id="brand"
        >
          OCTO FIESTA
        </a>
        <div class="lg:hidden">
          <button class="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
            <svg
              class="block h-4 w-4"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12">
          <li className="relative">
            <a
              class="nav-link text-md font-medium tracking-wider"
              href="/"
              data-config-id="link1"
            >
              Explore Destinations
            </a>
          </li>
          <li className="relative">
            <a
              class="nav-link text-md font-medium tracking-wider"
              href="/"
              data-config-id="link2"
            >
              About Us
            </a>
          </li>
          <li className="relative">
            <a
              class="nav-link text-md font-medium tracking-wider"
              href="/"
              data-config-id="link3"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <div class="hidden lg:block">
          <a
            class="inline-block py-3 px-8 text-md leading-normal font-medium bg-red-50 hover:bg-red-100 text-red-500 rounded transition duration-200"
            href="/"
            data-config-id="primary-action"
          >
            Sign In
          </a>
        </div>
      </nav>
      <div class="relative container pt-24 px-4 mx-auto text-center">
        {/* <span class="text-purple-700 font-medium" data-config-id="label">
          Explore the World 🌏
        </span> */}
        <h2
          class="text-gray-800 mt-8 mb-8 lg:mb-12 text-4xl lg:text-5xl font-medium lg:font-semibold xl:font-bold"
          data-config-id="header"
        >
          It's a Big World Out There,
          <br /> Go Explore 🚀
        </h2>
        <a
          class="inline-block w-full md:w-auto mb-2 md:mb-0 px-8 py-4 mr-4 text-sm font-medium leading-normal bg-red-400 hover:bg-red-300 text-white rounded transition duration-200"
          href="/"
          data-config-id="hero-primary-action"
        >
          Explore Top Destinations
        </a>
      </div>
      <div class="hidden navbar-menu relative z-50">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <a
              class="mr-auto text-lg font-bold tracking-wider"
              href="/"
              data-config-id="brand"
            >
              OCTO FIESTA
            </a>
            <button class="navbar-close">
              <svg
                class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="/"
                  data-config-id="link1"
                >
                  Explore Destinations
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="/"
                  data-config-id="link2"
                >
                  About Us
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="/"
                  data-config-id="link4"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <div class="pt-6">
              <a
                class="block py-3 text-center text-sm leading-normal bg-red-50 hover:bg-red-100 text-red-300 font-semibold rounded transition duration-200"
                href="/"
                data-config-id="primary-action"
              >
                Contact Us
              </a>
            </div>
            <p class="mt-6 mb-4 text-sm text-center text-gray-500">
              <span data-config-id="copy">
                &copy; 2021 All rights reserved.
              </span>
            </p>
          </div>
        </nav>
      </div>

      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 -z-1 w-full h-screen object-cover opacity-30"
      >
        <source src={backgroundTravelVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default Header;
