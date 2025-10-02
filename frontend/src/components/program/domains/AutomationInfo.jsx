import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const AutomationInfo = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6">
      {/* Removed DialogHeader & DialogTitle, using normal heading */}
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
        Automation & Robotics
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
              "Basic understanding of physics and mathematics.",
              "Familiarity with basic programming concepts (Python/C++ preferred).",
              "Interest in mechanical systems and problem-solving.",
            ]}
          />

          <Section
            title="Program Agenda"
            items={[
              "Module 1: Fundamentals of Robotics (Kinematics, Dynamics, Types of Robots)",
              "Module 2: Actuators & Sensors for Robotics (Motors, Encoders, Vision Systems)",
              "Module 3: Robot Programming (ROS, Python for Robotics)",
              "Module 4: Control Systems & Feedback (PID control, motion planning)",
              "Module 5: Industrial Automation Concepts (PLCs, SCADA, Industry 4.0)",
              "Module 6: Robot Simulation & Real-world Applications (Gazebo, RoboDK)",
            ]}
          />

          <SectionText
            title="Execution Approach"
            text="This program combines theoretical understanding with extensive hands-on work in robotic simulation environments and, where possible, with physical robot platforms. Project-based learning will be central, allowing interns to apply concepts to real-world automation challenges."
          />

          <SectionText
            title="Expected Outcome"
            text="Interns will gain a foundational understanding of robotics and automation principles. They will be able to program robotic systems, understand control mechanisms, and contribute to the development of automated solutions in various industrial and research settings."
          />

          <Section
            title="Case Studies / Use Cases"
            items={[
              "Developing a pick-and-place robot for manufacturing.",
              "Implementing an autonomous navigation system for a mobile robot.",
              "Designing an automated inspection system using robotic arms.",
            ]}
          />

          <Section
            title="Deliverables"
            items={[
              "Simulation models of robotic systems.",
              "Code for robot control and task execution.",
              "Project reports on automated solutions.",
              "Demonstration of simulated or physical robotic tasks.",
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

// Section Component
const Section = ({ title, items }) => (
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
    <ul className="list-disc list-inside space-y-2 !text-black">
      {items.map((item, i) => (
        <li key={i} className="!text-black">
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

// Text Section Component
const SectionText = ({ title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 !text-black"
  >
    <h3 className="text-xl font-semibold !text-black mb-3 flex items-center gap-2">
      <ChevronRight className="text-purple-600" size={20} /> {title}:
    </h3>
    <p className="leading-relaxed !text-black text-justify">{text}</p>
  </motion.div>
);

export default AutomationInfo;
