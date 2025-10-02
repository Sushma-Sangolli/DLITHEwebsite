import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CyberInfo = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6">
      {/* Removed DialogHeader & DialogTitle, using normal heading */}
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
         Cyber Security
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
              "Basic understanding of computer networks.",
              "Familiarity with operating systems (Windows, Linux).",
              "Curiosity about security principles and practices.",
            ]}
          />

          <Section
            title="Program Agenda"
            items={[
              "Module 1: Introduction to Cyber Security (Concepts, Threats, Attack Vectors)",
              "Module 2: Network Security (Firewalls, IDS/IPS, VPNs, Network Scanning)",
              "Module 3: Ethical Hacking & Penetration Testing (Reconnaissance, Scanning, Exploitation)",
              "Module 4: Web Application Security (OWASP Top 10, XSS, SQL Injection)",
              "Module 5: Incident Response & Forensics (Detection, Analysis, Containment)",
              "Module 6: Cryptography & Data Security (Encryption, Hashing, Digital Signatures)",
              "Module 7: Security Operations & Compliance (SOC, SIEM, Regulations)",
            ]}
          />

          <SectionText
            title="Execution Approach"
            text="The program will be highly practical, utilizing virtual labs and specialized security tools. Interns will simulate real-world attack scenarios, conduct vulnerability assessments, and analyze security incidents under expert guidance."
          />

          <SectionText
            title="Expected Outcome"
            text="Interns will develop a strong foundation in cyber security principles and practices. They will gain practical experience in identifying vulnerabilities, performing basic penetration testing, and understanding incident response procedures."
          />

          <Section
            title="Case Studies / Use Cases"
            items={[
              "Conducting a penetration test on a simulated web application.",
              "Analyzing a network intrusion incident.",
              "Implementing security controls for a cloud environment.",
            ]}
          />

          <Section
            title="Deliverables"
            items={[
              "Vulnerability assessment reports.",
              "Incident response plans.",
              "Hands-on lab completion certificates.",
              "Project report on a simulated security challenge.",
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

// ✅ Reusable List Section
const Section = ({ title, items }) => (
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
      <ChevronRight className="text-orange-600" size={20} /> {title}:
    </h3>
    <p className="leading-relaxed !text-black text-justify">{text}</p>
  </motion.div>
);

export default CyberInfo;
