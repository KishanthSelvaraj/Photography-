"use client"
import React from 'react'
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
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
       <section class=" bg-white relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent  pt-20  sm:pt-32 xl:pt-40">
         <div class="relative z-10">
        <div
            class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg class="h-[60rem] w-[100rem] flex-none stroke-[#069376] opacity-20" aria-hidden="true">
                <defs>
                    <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                        patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
                    <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                </rect>
            </svg>
        </div>
    </div>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
            <p
                class=" animated max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7CC9B1] to-[#069376]
sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight ">
              Capture moments, Create memories.
            </p>
            <h1 class=" animated max-w-2xl mx-auto px-6 text-lg text-black font-inter">
          Capture moments, create memories encapsulates the essence of photography, preserving life fleeting beauty for eternity.
            </h1>
            <div class="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <a href="#" title=""
                    class="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white hover:text-black hover:bg-white bg-[#069376]  transition-all duration-200  border-2 border-transparent sm:w-auto rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">
                   Gallery
                </a>
              
            </div>
        </div>
    </div>
    <div class="bg-white animated">
        <div class="relative mx-auto mt-4 md:mt-8">
            <div class="lg:max-w-4xl lg:mx-auto">
                <img class="px-4 md:mpx-8" src="photodemo.jpg" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Hero
