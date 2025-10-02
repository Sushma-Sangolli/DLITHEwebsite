import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const VLSIInfo = () => {
  return (
   <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6">
      {/* Removed DialogHeader & DialogTitle, using normal heading */}
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
        VLSI
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
              "Strong understanding of digital electronics and logic design.",
              "Basic knowledge of programming (Verilog/VHDL preferred).",
              "Familiarity with computer architecture fundamentals.",
            ]}
          />

          <Section
            title="Program Agenda"
            items={[
              "Module 1: Digital Design Fundamentals (Combinational & Sequential Logic, FSM)",
              "Module 2: HDL Programming (Verilog/VHDL) (RTL Coding, Testbenches)",
              "Module 3: VLSI Design Flow (Specification, Architecture, RTL, Synthesis, P&R, Verification)",
              "Module 4: ASIC Design Concepts (Standard Cells, Libraries, Timing Analysis)",
              "Module 5: VLSI Verification Techniques (UVM/SystemVerilog basics, Functional Coverage)",
              "Module 6: Introduction to Physical Design (Floorplanning, Placement, Routing, DRC/LVS)",
            ]}
          />

          <SectionText
            title="Execution Approach"
            text="The program will involve a mix of theoretical lectures, hands-on lab sessions using industry-standard EDA tools, and project-based learning. Interns will work on designing and verifying small to medium-scale digital circuits, simulating real-world VLSI challenges."
          />

          <SectionText
            title="Expected Outcome"
            text="Interns will develop a solid understanding of the VLSI design flow and gain practical experience with HDL coding, digital verification, and basic physical design concepts. They will be prepared for entry-level roles in ASIC design, verification, or test engineering."
          />

          <Section
            title="Case Studies / Use Cases"
            items={[
              "Designing and verifying a simple RISC processor core.",
              "Implementing a cryptographic accelerator.",
              "Developing a complex digital filter.",
            ]}
          />

          <Section
            title="Deliverables"
            items={[
              "RTL code for various digital blocks.",
              "Testbenches and simulation results for verification.",
              "Synthesis reports and timing analysis reports.",
              "Project documentation detailing design choices and methodologies.",
            ]}
          />

          <SectionText
            title="Duration"
            text="Customizable as per your needs (e.g., 4 weeks, 8 weeks, 12 weeks)."
          />
        </motion.div>
      </ScrollArea>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 !text-black"
  >
    <h3 className="text-xl font-semibold !text-black mb-3 flex items-center gap-2">
      <ChevronRight className="text-pink-600" size={20} /> {title}:
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

// Reusable Text Section
const SectionText = ({ title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 !text-black"
  >
    <h3 className="text-xl font-semibold !text-black mb-3 flex items-center gap-2">
      <ChevronRight className="text-red-600" size={20} /> {title}:
    </h3>
    <p className="leading-relaxed !text-black text-justify">{text}</p>
  </motion.div>
);

export default VLSIInfo;
