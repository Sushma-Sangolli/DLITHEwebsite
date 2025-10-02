import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHandshake,
  faLaptopCode,
  faMicroscope,
  faGraduationCap,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: faBook,
    title: "Industry-Agnostic Learning & Development Services",
    text: "Our tailored learning and development programs transcend industry boundaries, equipping your workforce with essential skills for today's dynamic landscape.",
  },
  {
    icon: faHandshake,
    title: "Industry Agnostic HR & Operations Support",
    text: "Streamline your core business functions with our scalable HR and operations support, helping you optimize workflows and manage talent effectively.",
  },
  {
    icon: faLaptopCode,
    title: "Academics-Competency Development Services",
    text: "Foster innovation with our expertise in lab setup and incubation activities, inspiring research, experimentation, and groundbreaking ideas.",
  },
  {
    icon: faMicroscope,
    title: "Academics-Lab Setup & Incubation",
    text: "We offer digital solutions from design thinking and software development to testing, integration, and migration for reliable, future-ready systems.",
  },
  {
    icon: faGraduationCap,
    title: "Technology Services",
    text: "Elevate academic excellence with targeted trainings, internships, and impactful faculty development programs for real-world readiness.",
  },
  {
    icon: faLightbulb,
    title: "Academics-Product Development",
    text: "Ignite creativity with end-to-end product development support for academia, from POCs to hackathons and full-fledged products.",
  },
];

export default function ServicesCards() {
  // Define 3 light background color sets
  const bgVariants = [
    "bg-gradient-to-br from-orange-50 via-white to-yellow-50", // warm light
    "bg-gradient-to-br from-red-50 via-white to-cyan-50",     // cool light
    "bg-gradient-to-br from-green-50 via-white to-emerald-50", // fresh light
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-md">
          SERVICES
        </h1>
        <h2 className="text-2xl font-semibold text-orange-500 mt-2">
          What We Do
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative"
          >
            <Card
              className={`group relative rounded-3xl shadow-xl overflow-hidden h-full border border-gray-200 hover:shadow-2xl transition-all duration-300 ${bgVariants[idx % 3]}`}
            >
              <CardHeader className="flex flex-col items-center p-8">
                {/* Icon in Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 shadow-md mb-3 group-hover:scale-110 transition-transform duration-300"
                >
                  <FontAwesomeIcon
                    icon={s.icon}
                    className="text-black text-3xl"
                  />
                </motion.div>

                {/* Title */}
                <CardTitle className="text-center text-lg font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                  {s.title}
                </CardTitle>
              </CardHeader>

              {/* Description */}
              <CardContent className="p-4 pt-0 text-justify flex-1">
                <p className="!text-black leading-relaxed text-base">{s.text}</p>
              </CardContent>

              {/* Decorative Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
