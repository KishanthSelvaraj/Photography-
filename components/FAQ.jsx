"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
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
  const [accordion, setAccordion] = useState({
    1: false,
    2: false,
    3: false,
  });

  const toggleAccordion = (index) => {
    setAccordion((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full lg:w-1/2 p-16 ">
            <div className="flex flex-col justify-between h-full">
              <div className="md:max-w-md block animated">
                <h2 className="mb-4 text-4xl md:text-6xl font-bold font-heading tracking-px-n leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7CC9B1] to-[#069376]">
                  Frequently Asked Questions
                </h2>
                <p className="mb-12 text-gray-600 font-medium leading-relaxed">
                  Got questions? We have got answers. Check out our frequently
                  asked questions below.
                </p>
              </div>

              <div className="block">
                {[
                  {
                    question: "How can I contact you?",
                    answer:
                      "You can contact us via email at akphotographypollachi.in or call us at +91 77083 18804 We are also available on social media platforms like Facebook and Instagram.",
                    index: 1,
                  },
                  {
                    question: "Do you work both night and day shifts?",
                    answer:
                      "Yes, our support team is available 24/7 to assist you with any queries or issues you may have.",
                    index: 2,
                  },
                  {
                    question:
                      "What types of photography services do you offer?",
                    answer:
                      "We offer a wide range of photography services including portrait, landscape, wedding, and event photography. We also provide photo editing and retouching services.",
                    index: 3,
                  },
                ].map((faq) => (
                  <div key={faq.index} className="w-full">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleAccordion(faq.index);
                      }}
                      className="block border-b border-gray-300"
                    >
                      <div className="flex flex-wrap justify-between py-7 -m-1.5 animated">
                        <div className="flex-1 p-1.5">
                          <h3 className="text-lg font-bold font-heading leading-normal">
                            {faq.question}
                          </h3>
                          <div
                            ref={(el) =>
                              el &&
                              (el.style.height = accordion[faq.index]
                                ? `${el.scrollHeight}px`
                                : "0px")
                            }
                            className="overflow-hidden duration-500"
                          >
                            <p className="mt-5 text-gray-600 font-medium leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                        <div className="w-auto p-1.5">
                          {accordion[faq.index] ? (
                            <svg
                              className="relative top-1.5"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="9"
                                cy="9"
                                r="9"
                                fill="#2563EB"
                              ></circle>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 9.00002C6 8.66865 6.26863 8.40002 6.6 8.40002L11.4 8.40002C11.7314 8.40002 12 8.66865 12 9.00002C12 9.3314 11.7314 9.60002 11.4 9.60002L6.6 9.60002C6.26863 9.60002 6 9.3314 6 9.00002Z"
                                fill="white"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              className="relative top-1.5"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="9"
                                cy="9"
                                r="9"
                                fill="#2563EB"
                              ></circle>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.00078 4.79999C9.33215 4.79999 9.60078 5.06862 9.60078 5.39999V8.39999H12.6008C12.9322 8.39999 13.2008 8.66862 13.2008 8.99999C13.2008 9.33136 12.9322 9.59999 12.6008 9.59999H9.60078V12.6C9.60078 12.9314 9.33215 13.2 9.00078 13.2C8.66941 13.2 8.40078 12.9314 8.40078 12.6V9.59999H5.40078C5.06941 9.59999 4.80078 9.33136 4.80078 8.99999C4.80078 8.66862 5.06941 8.39999 5.40078 8.39999L8.40078 8.39999V5.39999C8.40078 5.06862 8.66941 4.79999 9.00078 4.79999Z"
                                fill="white"
                              ></path>
                            </svg>
                          )}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <p className="font-medium text-gray-600">
                  <span>Still have any questions?</span>
                  <a className="text-[#069376] font-semibold" href="#">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 animated">
            <img
              className="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000"
              src="https://static.shuffle.dev/components/preview/cb300428-eada-4b45-aa61-38d535338608/assets/public/flaro-assets/images/faqs/woman.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
