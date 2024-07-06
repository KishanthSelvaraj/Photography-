"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Carousel, initTE } from "tw-elements";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/564x/65/3e/42/653e422c9428e47ceda880bc6f804078.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/564x/f6/65/d1/f665d1b51da6db1359154f91ec59e2ff.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/564x/1a/7b/18/1a7b188b72de3c1fddb3734f68fec3c8.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/564x/a3/7f/6c/a37f6cb1ceae816eb2a2681d7ba18422.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/564x/28/29/ee/2829ee86bc0cf6688252d5cebda4006c.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/564x/c0/85/c5/c085c5318f07bbb7700b8e4b4bc47c25.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/564x/3b/57/f4/3b57f4ce950aefa0a856139b8d521a4d.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/564x/b2/21/83/b2218334e9df5f065706909bf4a88f9d.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/736x/eb/87/3f/eb873f2bd191cafeb37f5aef0078c4df.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/564x/5f/06/61/5f06618a1a57189501fc99460d404feb.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/736x/9d/93/7a/9d937a43d6116204b814063e79954a83.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg animated"
            src="https://i.pinimg.com/564x/06/c3/ec/06c3ec07628a7523891dca9fcb14c601.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
