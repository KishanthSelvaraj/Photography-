"use client";
import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { TbPigMoney ,TbTruckDelivery } from "react-icons/tb";
import { BsCameraReels } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { LuFileSignature } from "react-icons/lu";
import { FaRegHandshake } from "react-icons/fa6";
const Service = () => {
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
    <div  class="bg-white my-5 md:my-10 lg:my-10" id="Services">
    <div class="container mx-auto px-4 md:px-20 lg:px-30 xl:px-30 py-10 md:pb-20 md:pt-5 lg:pb-20 lg:pt-5 xl:pb-20 xl:pt-5 xxl:pb-20 xxl:pt-5">
        <h3 class="text-black text-center text-4xl font-bold tracking-tight my-4 ">
           Our Services
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
            <div class="col py-3 animated">
                <div class="bg-[#e0faf3] rounded-md shadow p-4 text-center flex flex-col justify-center items-center">
                    <TbPigMoney class="w-16 h-16 mb-2 text-[#209f86]" />
                    <p class="text-md font-bold mb-0">Low Cost</p>
                </div>
            </div>
            <div class="col py-3 animated">
                <div class="bg-[#e0faf3] rounded-md shadow p-4 text-center flex flex-col justify-center items-center">
                    <TbTruckDelivery class="w-16 h-16 mb-2 text-[#209f86]" />
                    <p class="text-md mb-0 font-bold">Quick Delivery</p>
                </div>
            </div>
            <div class="col py-3 animated">
                <div class="bg-[#e0faf3] rounded-md shadow p-4 text-center flex flex-col justify-center items-center">
                    <BsCameraReels class="w-16 h-16 mb-2 text-[#209f86]" />
                    <p class="text-md mb-0 font-bold">Creative Shots</p>
                </div>
            </div>
            <div class="col py-3 animated">
                <div class="bg-[#e0faf3] rounded-md shadow p-4 text-center flex flex-col justify-center items-center">
                    <MdEventAvailable class="w-16 h-16 mb-2 text-[#209f86]" />
                    <p class="text-md mb-0 font-bold">Event Coverage</p>
                </div>
            </div>
            <div class="col py-3 animated">
                <div class="bg-[#e0faf3] rounded-md shadow p-4 text-center flex flex-col justify-center items-center">
                    <LuFileSignature class="w-16 h-16 mb-2 text-[#209f86]" />
                    <p class="text-md mb-0 font-bold">Custom Packages</p>
                </div>
            </div>
            <div class="col py-3 animated">
                <div class="bg-[#e0faf3] rounded-md shadow p-4 text-center flex flex-col justify-center items-center">
                    <FaRegHandshake class="w-16 h-16 mb-2 text-[#209f86]" />
                    <p class="text-md mb-0 font-bold">Friendly Service</p>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Service
