import React from "react";
import { cn } from "@/lib/utils"; // shadcn utility for conditional classes

// Generate image paths from 1 to 20 dynamically
const images = Array.from({ length: 20 }, (_, i) => `/Dlithe-life/${i + 1}.jpg`);

const Section6 = () => {
  return (
    <div id="Section6">
      <div className="relative text-center px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Life at DLithe</h2>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-lg text-gray-300 text-justify leading-relaxed mb-12">
          Our goal at DLithe is to create an environment where everyone can
          succeed. Our culture emphasizes inclusion, collaboration, high
          performance, and opportunities for growth, making it a rewarding place
          to work.
        </p>

        {/* Image Slider */}
        <div className="relative overflow-hidden w-full">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className={cn("flex gap-6 w-max animate-scrollSlider")}>
            {images.concat(images).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-62 h-62 lg:w-66 lg:h-66 rounded-xl object-cover flex-shrink-0 
                           transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
              />
            ))}
          </div>
        </div>

        {/* Link */}
        <a
          href="#"
          className="inline-block mt-10 text-lg font-semibold text-orange-400 hover:text-orange-400 transition-colors"
        >
          See more awards ➔
        </a>
      </div>
    </div>
  );
};

export default Section6;
