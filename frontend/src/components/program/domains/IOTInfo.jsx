import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const IOTInfo = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6">
      {/* Removed DialogHeader & DialogTitle, using normal heading */}
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
        Internet of Things (IoT)
      </h1>

      <ScrollArea className="h-[75vh] pr-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Section
            title="Pre-requisites"
            items={[
              "Basic understanding of electronics concepts.",
              "Familiarity with at least one programming language (C/C++, Python).",
              "Curiosity about embedded systems and connectivity.",
            ]}
          />

          <Section
            title="Program Agenda"
            items={[
              "Module 1: IoT Fundamentals & Ecosystem (Concepts, Architectures, Protocols)",
              "Module 2: Microcontrollers & Sensors (Arduino, ESP32, Raspberry Pi, various sensors)",
              "Module 3: Data Acquisition & Processing (Sensor interfacing, data logging)",
              "Module 4: IoT Communication Protocols (MQTT, HTTP, CoAP, Wi-Fi, Bluetooth)",
              "Module 5: Cloud Platforms for IoT (AWS IoT, Google Cloud IoT, Azure IoT Hub)",
              "Module 6: IoT Security & Applications (Threats, best practices, real-world case studies)",
            ]}
          />

          <SectionText
            title="Execution Approach"
            text="The program is highly hands-on, involving work with actual hardware kits. Practical labs, simulation tools, and real-world project development will be core to the learning. Mentors will guide interns through hardware setup, coding for embedded systems, and cloud integration."
          />

          <SectionText
            title="Expected Outcome"
            text="Interns will be able to design, prototype, and implement basic IoT solutions. They will gain practical experience in interfacing sensors, communicating with cloud platforms, and visualizing IoT data, making them proficient in developing smart applications."
          />

          <Section
            title="Case Studies / Use Cases"
            items={[
              "Smart Home Automation (e.g., controlling lights, monitoring temperature).",
              "Environmental Monitoring (e.g., air quality, water level).",
              "Asset Tracking and Management.",
            ]}
          />

          <Section
            title="Deliverables"
            items={[
              "Functional IoT prototypes for various use cases.",
              "Code for microcontroller programming and cloud interaction.",
              "Project documentation, including circuit diagrams and data flow.",
              "Demonstration of working IoT solutions.",
            ]}
          />

          <SectionText
            title="Duration"
            text="Customizable as per your needs (e.g., 4 weeks, 8 weeks, 12 weeks)"
          />
        </motion.div>
      </ScrollArea>
    </div>
  );
};

// ✅ Reusable Section Component
const Section = ({ title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 !text-black"
  >
    <h3 className="text-xl font-semibold !text-black mb-3 flex items-center gap-2">
      <ChevronRight className="text-green-600" size={20} /> {title}:
    </h3>
    <ul className="list-disc list-inside space-y-2 !text-black">
      {items.map((item, i) => (
        <li key={i} className="!text-black">
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

// ✅ Reusable Text Section
const SectionText = ({ title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 !text-black"
  >
    <h3 className="text-xl font-semibold !text-black mb-3 flex items-center gap-2">
      <ChevronRight className="text-blue-600" size={20} /> {title}:
    </h3>
    <p className="leading-relaxed !text-black text-justify">{text}</p>
  </motion.div>
);

export default IOTInfo;
