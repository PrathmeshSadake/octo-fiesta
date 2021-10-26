import React from "react";

const Contact = () => {
  return (
    <section class="">
      <div class="container px-4 mx-auto mb-12 md:mb-24"></div>
      <div class="container px-4 mx-auto">
        <div class="max-w-3xl -mt-64 lg:-mt-32 mx-auto p-6 lg:py-20 lg:px-20 bg-white rounded-xl text-center">
          <h2
            class="mt-8 mb-14 text-3xl font-semibold font-heading"
            data-config-id="header"
          >
            Take a big step forward in planning your trips with us.
          </h2>
          <form action="#">
            <div class="relative flex flex-wrap mb-6">
              <input
                class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                type="text"
                placeholder="Prathmesh Sadake"
              />
              <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                Name
              </span>
            </div>
            <div class="relative flex flex-wrap mb-6">
              <input
                class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                type="email"
                placeholder="e.g you@domain.com"
              />
              <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                Your email address
              </span>
            </div>
            <div class="relative flex flex-wrap mb-6">
              <textarea
                class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded resize-none"
                id="1"
                type="message"
                cols="30"
                rows="5"
                placeholder="Message..."
              ></textarea>
              <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                Your message
              </span>
            </div>
            <button
              class="w-full inline-block px-6 py-4 text-sm text-white bg-red-400 hover:bg-red-300 rounded transition duration-200"
              data-config-id="primary-action"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
