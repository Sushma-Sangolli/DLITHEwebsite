import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Section1 = () => {
  return (
    <section className="w-full  text-white px-6 md:px-12 py-16">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          IT Services About
        </h1>
        <p className="mt-4 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
          Delivering innovative solutions, driving digital transformation since 2018.
        </p>
      </header>

      {/* Main Content */}
      <main>
        <Card className="bg-zinc-900/80 border border-zinc-800 shadow-lg rounded-2xl hover:border-orange-400 hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-8 md:p-12 space-y-6">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-400">
              IT Services, Learning & Development 
            </h2>

            {/* Paragraphs */}
            <p className="text-base md:text-lg leading-relaxed text-justify text-zinc-300">
              We have empowered IT companies with comprehensive services
              designed for today's dynamic landscape. Our expertise spans web
              and mobile application development, crafting user-centric
              experiences that drive engagement. We delve into the intricacies
              of embedded systems and IoT development, connecting devices and
              unlocking new possibilities. Seamless migration services ensure
              smooth transitions and minimal disruption. Rigorous testing
              services guarantee quality and reliability, bolstering your
              brand reputation. Throughout our process, we have prioritized
              customer experience and operational excellence, ensuring your
              solutions are not only innovative but also efficient and
              cost-effective.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-justify text-zinc-300">
              We are providing services to leading IT companies to help them
              achieve their business goals, delivering tailored solutions that
              maximize the ROI and drive sustainable growth. Our commitment to
              quality and innovation makes us a trusted technology partner.
              Experience the difference with our customer-centric approach and
              achieve operational excellence.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-justify text-zinc-300">
              We have partnered with IT companies and academic institutions to
              develop future-ready resources. Our competency development
              programs enhance human resource quality, bridging skill gaps and
              boosting employability. We foster a thriving start-up culture
              through incubation support and mentorship. Our continuous
              follow-ups and personalized guidance have ensured sustained
              growth and success.
            </p>
          </CardContent>
        </Card>
      </main>
    </section>
  );
};

export default Section1;
