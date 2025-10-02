import React from "react";
import { Button } from "@/components/ui/button";

const Section3 = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 mt-16 mb-20 w-full">
      <div
        className="relative w-full max-w-[1800px] h-[600px] rounded-2xl overflow-hidden flex items-center justify-center p-10 
        animate-[float_4s_ease-in-out_infinite]"
      >
        {/* Background with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/landing_page/image.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#080314]/90"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white w-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
            Cultivating Excellence
          </h1>
          <h2 className="text-2xl md:text-3xl font-light leading-snug mb-6 drop-shadow-md">
            Learning & Development for Every Enterprise, Transformative L&D for the Modern World.
          </h2>

          <p className="text-base md:text-lg text-justify leading-relaxed mb-8 w-full px-4 md:px-12 lg:px-24 brightness-800">
            Igniting Potential Across Corporate & Academic Spheres. With a rich tapestry of
            experience, proven abilities, and unwavering strength, we stand as your dedicated
            partner in Learning & Development. For corporations, we craft bespoke programs that
            sharpen skills, foster innovation, and cultivate leadership, ensuring your workforce is
            agile and future-ready.<br/><br/>In the academic realm, we empower institutions to build robust
            curricula, enhance faculty capabilities, and prepare students with the practical
            competencies demanded by tomorrow's industries.Our agnostic approach means we
            seamlessly adapt our insights and methodologies to unlock the full potential within any
            organization, driving continuous improvement and measurable success.
          </p>

          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg shadow-lg transition-transform transform hover:scale-105"
            onClick={() => (window.location.href = "/contact")}
          >
            Get Started
          </Button>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
};

export default Section3;
