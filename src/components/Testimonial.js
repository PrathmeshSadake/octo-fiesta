import React from "react";

const Testimonial = () => {
  return (
    <section class="relative py-20">
      <div class="container px-4 mx-auto">
        <div class="flex items-center justify-between">
          <button class="hidden lg:block w-14 h-14 mr-5 rounded-full border hover:bg-gray-50">
            <svg
              class="mx-auto"
              width="19"
              height="13"
              viewbox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.30018 6.25122L18.2502 6.25122"
                stroke="#838EA4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.30017 1.25024L1.36317 6.25124L9.30017 11.2522L9.30017 1.25024Z"
                stroke="#838EA4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <div class="max-w-3xl mx-auto text-center">
            <span
              class="text-xs text-blue-400 font-semibold"
              data-config-id="label"
            >
              What&apos;s new at Shuffle
            </span>
            <h2
              class="mt-8 mb-10 text-4xl font-semibold font-heading"
              data-config-id="header"
            >
              Lorem ipsum dolor sit amet consectutar domor at elis
            </h2>
            <p class="mb-12 text-xl text-gray-500" data-config-id="desc">
              We always make our customer happy by providing as many as choises
              possible. With our experience we will serve you.
            </p>
            <img
              class="mb-8 mx-auto h-20 w-20 object-cover object-top rounded-full"
              src="https://avatars.githubusercontent.com/u/62653601?v=4"
              alt=""
              data-config-id="avatar"
            />
            <p
              class="mb-2 text-2xl font-semibold font-heading"
              data-config-id="name"
            >
              Prathmesh Sadake
            </p>
            <p class="text-gray-500" data-config-id="title">
              Software Engineer
            </p>
            <div class="lg:hidden mt-8">
              <button class="w-14 h-14 mr-5 rounded-full border hover:bg-gray-50">
                <svg
                  class="mx-auto"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12L5 12"
                    stroke="#556B7A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 19L5 12L12 5"
                    stroke="#556B7A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <button class="w-14 h-14 rounded-full border hover:bg-gray-50">
                <svg
                  class="mx-auto"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L19 12"
                    stroke="#556B7A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="#556B7A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <button class="hidden lg:block w-14 h-14 rounded-full border hover:bg-gray-50">
            <svg
              class="mx-auto"
              width="19"
              height="13"
              viewbox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.69979 6.74878L0.749786 6.74878"
                stroke="#838EA4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.6998 11.7498L17.6368 6.74876L9.6998 1.74776V11.7498Z"
                stroke="#838EA4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
