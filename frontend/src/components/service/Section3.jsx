import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "IT Application Development",
    content:
      "We craft custom IT applications using diverse technology stacks, from front-end frameworks to robust back-end systems. Our expertise includes full stack development, mobile application development, automation testing, embedded systems, IoT, cybersecurity, AI, and more. We build scalable, secure, and user-friendly applications tailored to your business needs.",
  },
  {
    title: "Learning & Development",
    content:
      "Our Learning & Development services cater to all levels, from freshers to seasoned leaders. We offer targeted programs, including initiatives to groom women leaders. Our learning path spans both technical skills and essential behavioral competencies.",
  },
  {
    title: "Bootcamps",
    content:
      "Bootcamps bridge the talent gap, delivering ready-to-deploy professionals for business needs. We hand-pick individuals, nurturing their skills to match your requirements. Our agile approach ensures rapid adaptation and continuous improvement.",
  },
  {
    title: "Campus to Corporate",
    content:
      "We design and deliver personalized learning journeys that enhance both technical capabilities and soft skills across all organizational levels. Our offerings include leadership training, domain-specific knowledge, process excellence, and technology upskilling.",
  },
  {
    title: "Placement Competency Development",
    content:
      "We prepare students and professionals for successful placement opportunities by focusing on competency development in technical, analytical, and communication skills. Structured programs cover mock interviews, aptitude training, domain-specific projects, and behavioral coaching.",
  },
  {
    title: "Research & Development",
    content:
      "Our R&D services foster innovation by driving cutting-edge research across emerging technologies like AI, IoT, and cybersecurity. We collaborate with academic institutions and industries to build prototypes, conduct feasibility studies, and deliver proof-of-concept solutions.",
  },
];

const Section3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative min-h-screen mt-12 px-4 lg:px-20 mb-40">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl text-white">
            IT Companies
          </h1>
         <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
  Our customers seek to enhance their workforce and technology strategies, and we partner with them to deliver impactful solutions that drive measurable business outcomes. We are engaged as specialists to identify and solve complex business challenges, offering expert guidance across IT infrastructure, application development, and digital transformation initiatives. Collaborating with DLithe ensures access to cutting-edge expertise, innovative methodologies, and cost-effective solutions, empowering organizations to stay ahead in an increasingly competitive and technology-driven marketplace.
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

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <motion.img
            src="https://images.pexels.com/photos/7988206/pexels-photo-7988206.jpeg"
            alt="IT Companies"
            className="w-full h-full object-cover rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
