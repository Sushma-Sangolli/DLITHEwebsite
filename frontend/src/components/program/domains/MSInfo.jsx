import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const MERNInfo = () => {
  return (
   <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6">
      {/* Removed DialogHeader & DialogTitle, using normal heading */}
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
         MERN Stack Development
      </h1>

      <ScrollArea className="h-[75vh] pr-2 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Section
            title="Pre-requisites"
            items={[
              "Solid understanding of JavaScript.",
              "Familiarity with HTML and CSS.",
              "Basic knowledge of command-line interface.",
            ]}
          />

          <Section
            title="Program Agenda"
            items={[
              "Module 1: Frontend with React.js (Components, Hooks, Redux, React Router)",
              "Module 2: Backend with Node.js & Express.js (RESTful APIs, Middleware, Authentication)",
              "Module 3: Database with MongoDB (NoSQL concepts, Mongoose ORM)",
              "Module 4: Full Stack Integration (Connecting Frontend & Backend)",
              "Module 5: Authentication & Authorization (JWT, Passport.js)",
              "Module 6: Deployment & Performance Optimization (Netlify/Vercel, Heroku)",
            ]}
          />

          <SectionText
            title="Execution Approach"
            text="This program is highly practical, focusing on building applications from day one. Each component of the MERN stack will be introduced with hands-on coding. Pair programming, agile methodologies, and live coding sessions will be employed to foster a dynamic learning environment."
          />

          <SectionText
            title="Expected Outcome"
            text="Interns will be capable of independently developing complete MERN stack applications. They will have a deep understanding of asynchronous programming, API design, and database management in a NoSQL environment, making them highly marketable in the web development landscape."
          />

          <Section
            title="Case Studies / Use Cases"
            items={[
              "Developing a real-time chat application with WebSockets.",
              "Building a task management system with user profiles.",
              "Creating a recipe sharing platform with image uploads.",
            ]}
          />

          <Section
            title="Deliverables"
            items={[
              "Multiple functional applications demonstrating MERN stack components.",
              "A complete MERN stack capstone project.",
              "Git repository with well-structured code and commit history.",
              "Project presentation and demo.",
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

// ✅ Reusable List Section (Card Style)
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

// ✅ Reusable Text Section (Card Style)
const SectionText = ({ title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 !text-black"
  >
    <h3 className="text-xl font-semibold !text-black mb-3 flex items-center gap-2">
      <ChevronRight className="text-teal-600" size={20} /> {title}:
    </h3>
    <p className="leading-relaxed !text-black text-justify">{text}</p>
  </motion.div>
);

export default MERNInfo;
