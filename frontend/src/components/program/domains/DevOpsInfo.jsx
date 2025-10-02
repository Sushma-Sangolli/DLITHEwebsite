import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const DevOpsInfo = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6">
      {/* Removed DialogHeader & DialogTitle, using normal heading */}
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
        DevOps
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
              "Basic understanding of Linux command line.",
              "Familiarity with software development lifecycle concepts.",
              "Knowledge of a scripting language (e.g., Python, Bash) is a plus.",
            ]}
          />

          <Section
            title="Program Agenda"
            items={[
              "Module 1: Introduction to DevOps (Principles, Culture, SDLC)",
              "Module 2: Version Control with Git (Advanced Git workflows, GitHub/GitLab)",
              "Module 3: CI/CD Pipelines (Jenkins, GitLab CI/CD, GitHub Actions)",
              "Module 4: Containerization with Docker (Dockerfiles, Docker Compose, Images)",
              "Module 5: Orchestration with Kubernetes (Pods, Deployments, Services)",
              "Module 6: Infrastructure as Code (Terraform, Ansible basics)",
              "Module 7: Monitoring & Logging (Prometheus, Grafana, ELK Stack basics)",
            ]}
          />

          <SectionText
            title="Execution Approach"
            text="This program is heavily hands-on, focusing on practical implementation of DevOps tools and workflows. Interns will set up and manage their own CI/CD pipelines, containerized applications, and automate infrastructure provisioning through a series of interconnected projects."
          />

          <SectionText
            title="Expected Outcome"
            text="Interns will be able to design, implement, and manage automated software delivery pipelines. They will gain expertise in containerization, orchestration, and infrastructure automation, making them highly valuable for DevOps engineer roles."
          />

          <Section
            title="Case Studies / Use Cases"
            items={[
              "Setting up a CI/CD pipeline for a web application.",
              "Deploying a microservices architecture using Docker and Kubernetes.",
              "Automating infrastructure provisioning for a cloud-based application.",
            ]}
          />

          <Section
            title="Deliverables"
            items={[
              "Functional CI/CD pipelines for various applications.",
              "Containerized applications deployed on a local or cloud environment.",
              "Infrastructure as Code scripts.",
              "Project documentation detailing the DevOps setup.",
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
      <ChevronRight className="text-emerald-600" size={20} /> {title}:
    </h3>
    <p className="leading-relaxed !text-black text-justify">{text}</p>
  </motion.div>
);

export default DevOpsInfo;
