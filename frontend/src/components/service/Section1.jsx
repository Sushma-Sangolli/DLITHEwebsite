import React from "react";
import {
  FaLaptop,
  FaProjectDiagram,
  FaUserTie,
  FaBrain,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "IT Application Development",
    color: "bg-[#FF8A00] text-white",
    icon: <FaLaptop size={40} className="text-black" />,
    pdf: "/services/IT_Application_Development.pdf",
  },
  {
    title: "Campus to Corporate",
    color: "bg-white text-black",
    icon: <FaChalkboardTeacher size={40} className="text-black" />,
    pdf: "/services/Campus_to_Corporate.pdf",
  },
  {
    title: "Bootcamp",
    color: "bg-gray-100 text-black",
    icon: <FaBrain size={40} className="text-black" />,
    pdf: "/services/Bootcamp.pdf",
  },
  {
    title: "Learning & Development",
    color: "bg-gray-100 text-black",
    icon: <FaUserGraduate size={40} className="text-black" />,
    pdf: "/services/Learning_Development.pdf",
  },
  {
    title: "Placement Competency Development",
    color: "bg-[#002b5b] text-white",
    icon: <FaUserTie size={40} className="text-black" />,
    pdf: "/services/Placement_Training.pdf",
  },
  {
    title: "Research & Development",
    color: "bg-[#FF8A00] text-white",
    icon: <FaProjectDiagram size={40} className="text-black" />,
    pdf: "/services/Research_Development.pdf",
  },
];

const Section1 = () => {
  const openPDF = (pdfPath) => {
    const unique = new Date().getTime();
    window.open(
      `${pdfPath}?v=${unique}#page=1&zoom=page-fit&view=Fit`,
      "_blank"
    );
  };

  return (
    <div className="w-full bg-black py-20 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-4/5 max-w-6xl items-stretch">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col"
          >
            {/* Card */}
            <div
              className={`h-60 w-full rounded-xl shadow-lg p-8 text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-2 ${service.color}`}
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>

            {/* Button */}
            <Button
              onClick={() => openPDF(service.pdf)}
              variant="secondary"
              className="mt-4 w-38"
            >
              Learn More
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
