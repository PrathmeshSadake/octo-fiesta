import React from "react";
import backgroundTravelVideo from "../assets/travel-video.mp4";

const Header = () => {
  return (
    <section class="relative min-h-screen flex justify-center items-center">
      <div class="container px-4 mx-auto text-center">
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
