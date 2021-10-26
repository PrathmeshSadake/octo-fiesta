import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section class="bg-red-50 py-20 container px-12 mx-auto">
      <h2
        class="mb-8 text-4xl lg:text-5xl font-semibold font-heading text-gray-800"
        data-config-id="big-header"
      >
        Life is Short and World is Wide.
      </h2>
      <div class="flex flex-wrap items-center">
        <div class="inline-block max-w-xl mb-6 md:mb-0">
          <p class="text-xl text-gray-600" data-config-id="desc1">
            Don't wait until tomorrow, discover your adventure now. To get best
            of adventure you just need to leave and go where you like. We are
            waiting for you.
          </p>
        </div>
        <Link
          class="inline-block ml-auto w-full md:w-auto px-12 py-4 text-center text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
          to="/about-us"
          data-config-id="primary-action"
        >
          Plan a Trip
        </Link>
      </div>
    </section>
  );
};

export default CTA;
