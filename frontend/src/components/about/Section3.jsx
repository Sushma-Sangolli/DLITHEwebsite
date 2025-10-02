import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Section3 = () => {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Why Choose Us
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
          We combine <span className="text-orange-400 font-semibold">expertise</span>, innovation, 
          and collaboration to help you thrive in a rapidly changing tech world.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <Card className="bg-zinc-900/80 text-white border border-zinc-800 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 text-justify space-y-6 leading-relaxed">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                Niche Expertise
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-justify text-zinc-300">
                IT services, training, and consulting, offering unparalleled
                expertise and tailored solutions that others can't match. This
                focus allows us to deeply understand your unique challenges and
                deliver highly effective results.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-justify text-zinc-300">
                We understand the importance of maximizing your budget. Our
                services are designed to be cost-effective, delivering
                exceptional value without compromising on quality.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-justify text-zinc-300">
                Our unique approach integrates domain knowledge, process
                expertise, and cutting-edge technology to create well-rounded
                professionals and solutions.
              </p>
            </CardContent>
          </Card>

          {/* Right Column */}
          <Card className="bg-zinc-900/80 text-white border border-zinc-800 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8">
              <ul className="space-y-5">
                {[
                  "Cost-Effective Solutions",
                  "Accessibility & Partnership",
                  "Holistic Approach",
                  "Vision for an Agile Workforce",
                  "Focus on Customer Experience & Operational Excellence",
                  "Research and Development Mindset",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-base md:text-lg leading-relaxed text-justify text-zinc-300 flex items-center gap-4 text-lg leading-snug group hover:text-orange-400 transition "
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500/20 group-hover:bg-orange-500/30 transition">
                      <Check className="w-6 h-6 stroke-orange-400" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Section3;
