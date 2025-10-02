import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const JavaInfo = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6">
      {/* Removed DialogHeader & DialogTitle, using normal heading */}
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
        Java Full Stack Development
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
              "Strong understanding of Java programming fundamentals (OOPs concepts).",
              "Basic knowledge of HTML, CSS, and JavaScript.",
              "Logical thinking and problem-solving abilities.",
            ]}
          />

          <Section
            title="Program Agenda"
            items={[
              "Module 1: Java Core & Advanced Concepts (Collections, Multithreading, Exception Handling)",
              "Module 2: Backend Development with Spring Boot (REST APIs, MVC, Data JPA)",
              "Module 3: Frontend Development with React/Angular (Components, State Management, Routing)",
              "Module 4: Database Management (SQL, MySQL/PostgreSQL)",
              "Module 5: Microservices Architecture (Introduction, Design Patterns)",
              "Module 6: Deployment & Cloud Integration (Docker, AWS/Azure basics)",
            ]}
          />

          <SectionText
            title="Execution Approach"
            text="The program emphasizes a project-driven learning approach. Each concept will be reinforced through coding challenges and practical implementations. Regular mentorship, code reviews, and collaborative problem-solving sessions will be integral to the learning experience."
          />

          <SectionText
            title="Expected Outcome"
            text="Interns will be proficient in developing end-to-end web applications using Java, Spring Boot, and modern frontend frameworks. They will understand best practices for building scalable and maintainable applications, along with practical experience in database interaction and deployment."
          />

          <Section
            title="Case Studies / Use Cases"
            items={[
              "Developing an online banking application with secure transactions.",
              "Building a supply chain management system with real-time tracking.",
              "Creating an enterprise resource planning (ERP) module.",
            ]}
          />

          <Section
            title="Deliverables"
            items={[
              "Functional code for module-specific assignments.",
              "A comprehensive full-stack Java application as the final project.",
              "Detailed project report and architectural diagrams.",
              "Presentation of the final solution.",
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
      <ChevronRight className="text-orange-600" size={20} /> {title}:
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
      <ChevronRight className="text-red-600" size={20} /> {title}:
    </h3>
    <p className="leading-relaxed !text-black text-justify">{text}</p>
  </motion.div>
);

export default JavaInfo;
