"use client";
import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Stats = () => {
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
    <div class="bg-white  sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl animated">Our Works</h2>
        <p class="text-lg leading-8 text-gray-800 animated">Capturing your most precious moments with creativity and passion, one photo at a time.</p>
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col bg-[#e0faf3] p-8 animated">
          <dt class="text-sm font-semibold leading-6 text-gray-800">Wedding shoots</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-black">50+</dd>
        </div>
        <div class="flex flex-col bg-[#e0faf3] p-8 animated">
          <dt class="text-sm font-semibold leading-6 text-gray-800">Family functions shoots</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-black">30+</dd>
        </div>
        <div class="flex flex-col bg-[#e0faf3] p-8 animated">
          <dt class="text-sm font-semibold leading-6 text-gray-800">Modelling shoots</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-black">10+</dd>
        </div>
        <div class="flex flex-col bg-[#e0faf3] p-8 animated">
          <dt class="text-sm font-semibold leading-6 text-gray-800">Engagement shoots</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-black">45+</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
  )
}

export default Stats
