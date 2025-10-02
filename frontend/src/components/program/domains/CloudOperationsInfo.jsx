import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CloudInfo = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6">
      {/* Removed DialogHeader & DialogTitle, using normal heading */}
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
       Cloud Operations
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
              "Basic understanding of networking concepts (IP addresses, DNS).",
              "Familiarity with Linux command line.",
              "Knowledge of virtual machines and operating systems.",
            ]}
          />

          <Section
            title="Program Agenda"
            items={[
              "Module 1: Cloud Computing Fundamentals (IaaS, PaaS, SaaS, Deployment Models)",
              "Module 2: Introduction to a Major Cloud Provider (AWS/Azure/GCP)",
              "Module 3: Compute Services (EC2/VMs, Lambda/Functions, Container Services)",
              "Module 4: Storage & Database Services (S3/Blob Storage, RDS/SQL Database)",
              "Module 5: Networking & Security (VPCs/VNets, Security Groups, IAM/RBAC)",
              "Module 6: Monitoring, Logging & Cost Management (CloudWatch/Azure Monitor)",
              "Module 7: Automation in Cloud (CloudFormation/ARM Templates, Scripting)",
            ]}
          />

          <SectionText
            title="Execution Approach"
            text="The program will be heavily hands-on, utilizing real cloud accounts. Interns will provision and manage cloud resources, set up monitoring, and troubleshoot common cloud operational issues through practical exercises and project work."
          />

          <SectionText
            title="Expected Outcome"
            text="Interns will be proficient in managing cloud infrastructure and services. They will understand cloud security best practices, cost optimization strategies, and automated cloud operations, preparing them for cloud administrator or DevOps roles."
          />

          <Section
            title="Case Studies / Use Cases"
            items={[
              "Deploying a scalable web application on a cloud platform.",
              "Setting up a disaster recovery solution in the cloud.",
              "Migrating on-premise infrastructure to the cloud.",
            ]}
          />

          <Section
            title="Deliverables"
            items={[
              "Configured cloud infrastructure for various scenarios.",
              "Scripts for cloud resource automation.",
              "Monitoring dashboards and alerts.",
              "Documentation of cloud architecture and operational procedures.",
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
      <ChevronRight className="text-sky-600" size={20} /> {title}:
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
      <ChevronRight className="text-indigo-600" size={20} /> {title}:
    </h3>
    <p className="leading-relaxed !text-black text-justify">{text}</p>
  </motion.div>
);

export default CloudInfo;
