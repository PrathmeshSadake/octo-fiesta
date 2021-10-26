import React from "react";
import { Link } from "react-router-dom";

const Places = () => {
  return (
    <section class="relative py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
          <h2 class="my-8 text-4xl font-semibold" data-config-id="header">
            Don't wait until tomorrow, discover your adventure now🌎
          </h2>
          <p className="mb-16 text-xl text-gray-500">
            To get best of adventure you just need to leave and go where you
            like. We are waiting for you.
          </p>
        </div>
        <div class="flex flex-wrap -mx-4 -mb-16">
          <div class="w-full lg:w-2/3 px-2 mb-4">
            <div class="flex h-96">
              <img
                class="w-full h-full object-cover rounded-sm"
                src="https://source.unsplash.com/pAmPXz90OW4"
                alt=""
                data-config-id="image1"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-2 mb-4">
            <div class="flex h-96">
              <img
                class="w-full h-full object-cover rounded-sm"
                src="https://source.unsplash.com/Y6tBl0pTe-g"
                alt=""
                data-config-id="image2"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-2 mb-4">
            <div class="flex h-96">
              <img
                class="w-full h-full object-cover rounded-sm"
                src="https://source.unsplash.com/gClUdvuoJeA"
                alt=""
                data-config-id="image3"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-2 mb-4">
            <div class="flex h-96">
              <img
                class="w-full h-full object-cover rounded-sm"
                src="https://source.unsplash.com/U2An_puhb8w"
                alt=""
                data-config-id="image4"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-2 mb-4">
            <div class="flex h-96">
              <img
                class="w-full h-full object-cover rounded-sm"
                src="https://source.unsplash.com/HC338Uz4zGc"
                alt=""
                data-config-id="image5"
              />
            </div>
          </div>
        </div>
        <div class="mt-24 text-center">
          <Link
            class="px-8 py-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
            to="/destinations"
          >
            See all destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Places;
