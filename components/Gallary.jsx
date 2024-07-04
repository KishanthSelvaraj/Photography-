"use client";
import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Carousel, initTE } from "tw-elements";

gsap.registerPlugin(ScrollTrigger);
const Gallary = () => {
  // useEffect(() => {
  //   initTE({ Carousel });
  // }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for each div
    gsap.utils.toArray(".animated").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);
  return (
    <section class="bg-white mb-2" id="Gallery">
      <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
      <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div class="flex items-center gap-12">
                <h2 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7CC9B1] to-[#069376] lg:text-3xl ">Gallery</h2>
            </div>

            <div class="mt-10 flex items-center justify-center gap-x-6">
                <a class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl  bg-gradient-to-r from-[#7CC9B1] to-[#069376] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="/gallery">View More
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-white h-auto md:h-full flex flex-col animated">
            <a
              href=""
              class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/10/Pre-Wedding-Photoshoot-Destinations-in-India.jpg"
                alt=""
                class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Wedding
              </h3>
            </a>
          </div>
          <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-white animated">
            <a
              href=""
              class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
            >
              <img
                src="https://www.blind-magazine.com/wp-content/uploads/2021/12/portrait-or-landscape-format-which-to-choose-en.jpg"
                alt=""
                class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Portrait
              </h3>
            </a>
            <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 animated">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Engagement
                </h3>
              </a>
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Family
                </h3>
              </a>
            </div>
          </div>
          <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-white h-auto md:h-full flex flex-col animated">
            <a
              href=""
              class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8euXf7Xty_gTtiXyCDMzB-NmBIuZyl_KREXc1BDIJqN-wrUK6SKRlEbikX81fOoHzf4&usqp=CAU"
                alt=""
                class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Modeling
              </h3>
            </a>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Gallary;
