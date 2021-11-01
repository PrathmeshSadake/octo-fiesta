import React from "react";

const About = () => {
  return (
    <section class="relative py-20 overflow-x-hidden">
      <div class="container px-4 mx-auto">
        <div class="relative flex flex-wrap items-center -mx-4">
         
          <div class="relative w-full lg:w-1/2 px-4 pb-12 lg:pb-0">
            <div class="max-w-md">
              <h2
                class="mb-6 text-3xl font-semibold font-heading"
                data-config-id="header"
              >
                Welcome to Octo Fiesta
              </h2>
              <p
                class="mb-6 lg:mb-10 text-xl text-gray-500"
                data-config-id="desc"
              >
                If you have ever wondered how to plan your next trip, this is
                the place for you. Take a big step forward in planning your
                international trips with us. We always make our customer happy
                by providing as many as choises possible. With our experience we
                will serve you.
              </p>
            </div>
            <button
              class="inline-block ml-auto w-full md:w-auto px-12 py-4 text-center text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
              data-config-id="primary-action"
            >
              Contact us
            </button>
          </div>
          <div class="w-full lg:w-1/2 px-4">
            <img
              class="w-full h-112 mx-auto mb-6 md:mb-0 rounded-sm object-cover"
              src="https://source.unsplash.com/Dh1IkjC9vj4"
              alt=""
              data-config-id="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
