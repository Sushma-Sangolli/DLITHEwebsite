import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Learning and Development",
    content:
      "We design and deliver customized learning and development programs that enhance both technical and non-technical skills, ensuring that students and professionals are equipped to handle modern industry challenges effectively.",
  },
  {
    title: "Domain",
    content:
      "Our domain-focused training ensures specialized knowledge across various sectors such as healthcare, finance, manufacturing, and IT services, enabling students and professionals to build niche expertise and drive industry-specific solutions.",
  },
  {
    title: "Process",
    content:
      "We emphasize understanding and optimizing business processes through training programs that focus on methodologies like Agile, Six Sigma, and Design Thinking, preparing participants to streamline operations and drive efficiency.",
  },
  {
    title: "Technology",
    content:
      "We provide in-depth exposure and hands-on experience in cutting-edge technologies including Artificial Intelligence, Internet of Things (IoT), Cloud Computing, Full Stack Development, Cybersecurity, and Robotics.",
  },
  {
    title: "Behavioural and Leadership",
    content:
      "Our behavioral and leadership training programs are crafted to develop essential soft skills, emotional intelligence, and leadership qualities, fostering a well-rounded, competent, and confident workforce ready for managerial and collaborative roles.",
  },
  {
    title: "Compliance",
    content:
      "We offer comprehensive compliance training that equips participants with knowledge about legal, ethical, and regulatory standards critical to various industries, ensuring readiness to operate within governance frameworks and industry best practices.",
  },
];

const Section4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative min-h-screen mt-12 px-4 lg:px-20 mb-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/7972535/pexels-photo-7972535.jpeg"
            alt="Academics"
            className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl text-white">
            Academics
          </h1>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            The academics institutions be it degree, diploma, engineering or
            universities, keeping the pace with the industry transformation. The
            supply of human resources from the campus is definitely need to be an
            agile workforce to meet the global industry needs. We are engaged as
            specialist to join hands to develop required skill and competence at
            the academics. These engagements have enabled us to implement skill
            development programs, conduct workshops, faculty development
            programs, start-up incubation support for upcoming generation.
            Collaborating with DLithe have ensured access to cutting-edge
            expertise and cost-effective solutions across the technology areas.
          </p>

          {/* Accordion */}
          <div className="w-full space-y-3">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-center px-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-gray-900 dark:text-white"
                  >
                    ▼
                  </motion.span>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-gray-800 dark:text-gray-200 text-justify"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
