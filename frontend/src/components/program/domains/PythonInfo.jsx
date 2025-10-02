import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const PythonInfo = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6">
      {/* Removed DialogHeader & DialogTitle, using normal heading */}
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
        Python Full Stack Development
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
              "Basic understanding of programming concepts (variables, loops, functions).",
              "Familiarity with HTML, CSS, and JavaScript fundamentals.",
              "Eagerness to learn and a problem-solving mindset.",
            ]}
          />

          <Section
            title="Program Agenda"
            items={[
              "Module 1: Frontend Development Fundamentals (HTML5, CSS3, JavaScript ES6+, Bootstrap)",
              "Module 2: Python Programming Core (Data Structures, Algorithms, OOPs, File I/O)",
              "Module 3: Web Frameworks - Django/Flask (MVC architecture, ORM, REST APIs)",
              "Module 4: Database Management (SQL/NoSQL, PostgreSQL/MongoDB)",
              "Module 5: Version Control & Deployment (Git, Heroku/AWS)",
              "Module 6: Project Work & Best Practices (Testing, Security, Scalability)",
            ]}
          />

          <SectionText
            title="Execution Approach"
            text="The program combines theoretical sessions with hands-on coding exercises. Each module will culminate in a mini-project, leading to a comprehensive capstone project. Mentors will provide regular feedback, conduct code reviews, and offer guidance on industry best practices."
          />

          <SectionText
            title="Expected Outcome"
            text="Interns will be able to design, develop, and deploy full-stack web applications using Python, Django/Flask, and related technologies. They will gain practical experience in database integration, API development, and deployment strategies, making them job-ready for full-stack developer roles."
          />

          <Section
            title="Case Studies / Use Cases"
            items={[
              "Building an e-commerce platform with user authentication and payment integration.",
              "Developing a social media application with real-time updates.",
              "Creating a data visualization dashboard using Python libraries and web frameworks.",
            ]}
          />

          <Section
            title="Deliverables"
            items={[
              "Completed mini-projects for each module.",
              "A fully functional, production-ready capstone project.",
              "Codebase with proper documentation and version control.",
              "Presentation of the final project.",
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
      <ChevronRight className="text-blue-600" size={20} /> {title}:
    </h3>
    <p className="leading-relaxed !text-black text-justify">{text}</p>
  </motion.div>
);

export default PythonInfo;
