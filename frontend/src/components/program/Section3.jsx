import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Section3 = () => {
  const testimonials = [
    {
      text: "The diverse projects and abundant learning opportunities during my internship at DLithe significantly prepared me for a dynamic career.",
      author: "Santosh P",
      role: "Java Full Stack Intern",
      color: "bg-red-200",
    },
    {
      text: "My internship at DLithe provided a wealth of learning and development opportunities, equipping me with valuable skills and connections.",
      author: "Vriksha Patil",
      role: "IoT Embedded Systems Intern",
      color: "bg-gray-100",
    },
    {
      text: "I am incredibly grateful for my internship at DLithe. The variety of projects and the support I received helped me develop essential skills.",
      author: "Jason",
      role: "Python AI ML Intern",
      color: "bg-red-200",
    },
  ];

  const getAnimation = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: index * 0.3 },
    },
  });

  return (
    <div id="Section3">
      <div className="px-6 py-12 space-y-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={getAnimation(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className={`relative w-5xl mx-auto rounded-xl shadow-md border border-gray-400 overflow-hidden ${testimonial.color}`}
            >
              <div className="p-4 md:p-6 space-y-2 !text-black">
                <p className="italic text-sm md:text-base text-justify leading-snug !text-black">
                  {testimonial.text}
                </p>
                <p className="font-semibold text-base !text-black">
                  {testimonial.author}
                </p>
                <p className="text-xs opacity-80 !text-black">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
