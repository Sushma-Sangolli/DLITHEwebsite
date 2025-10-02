import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const pages = [
  {
    title: "Learning and Development",
    content:
      "Transforming organizations and people through strategic learning and development.",
    imageUrl: "/landing_page/IMG_0061.jpg",
  },
  {
    title: "Vision and Mission",
    content:
      "To support business functions to achieve Cx and Ox, building an agile workforce.",
    imageUrl: "/landing_page/IMG_0062.jpg",
  },
  {
    title: "Methodology",
    content:
      "Discovery, need assessment, customized program design, delivery, impact measurement.",
    imageUrl: "/landing_page/IMG_64.jpg",
  },
  {
    title: "Learning and development domains",
    content:
      "Behavioral, Domain, Process, Technology, Functional, Softskills, Leadership.",
    imageUrl: "/landing_page/IMG_0065.jpg",
  },
  {
    title: "Flagship programs",
    content:
      "Design thinking, Leadership program, Personal effectiveness, Financial acumen.",
    imageUrl: "/landing_page/IMG_0067.jpg",
  },
];

const Section1 = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const total = pages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const moveSlide = (step) => {
    const newIndex = (index + step + total) % total;
    setIndex(newIndex);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${newIndex * 100}vw)`;
    }
  };

  return (
    <>
      <div className="relative mt-17">
        <div className="overflow-hidden bg-black">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out h-full mb-[2%]"
          >
            {pages.map((page, i) => (
              <div
                key={i}
                className="w-screen h-[90vh] flex-shrink-0 flex flex-col md:flex-row items-center justify-start bg-black overflow-hidden"
              >
                {/* Image */}
                <div className="relative flex-[0.7] h-[90vh] w-full flex items-center justify-start bg-black">
                  <img
                    src={page.imageUrl}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-full object-cover border-t-r-[300px] border-b-r-[350px] rounded-tr-[300px] rounded-br-[350px]"
                  />
                  {/* Watermark (optional) */}
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white/15 whitespace-nowrap pointer-events-none">
                    {/* watermark text */}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-[0.6] w-full md:w-[40%] p-4 md:p-12 flex flex-col text-white text-center md:text-left">
                  <h1 className="text-2xl md:text-5xl font-bold mb-4">
                    {page.title}
                  </h1>
                  <h3 className="text-base md:text-2xl leading-relaxed">
                    {page.content}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          {/* <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 text-2xl hover:bg-black/60"
            onClick={() => moveSlide(-1)}
          >
            ‹
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 text-2xl hover:bg-black/60"
            onClick={() => moveSlide(1)}
          >
            ›
          </Button> */}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Section1;
