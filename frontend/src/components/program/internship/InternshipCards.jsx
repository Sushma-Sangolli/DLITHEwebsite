import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Domain Components
import PythonInfo from "../domains/PythonInfo";
import IOTInfo from "../domains/IOTInfo";
import AutomationInfo from "../domains/AutomationInfo";
import CloudOperationsInfo from "../domains/CloudOperationsInfo";
import DevOpsInfo from "../domains/DevOpsInfo";
import VLSIInfo from "../domains/VLSIInfo";
import JavaInfo from "../domains/JavaInfo";
import MSInfo from "../domains/MSInfo";
import CyberSecurityInfo from "../domains/CyberSecurityInfo";

// Images
import aboutImage from "../../../assets/Intern/image.jpg";
import pythonImage from "../../../assets/Intern/ai-ml.jpg";
import javaImage from "../../../assets/Intern/java.jpg";
import mernImage from "../../../assets/Intern/MS.png";
import iotImage from "../../../assets/Intern/iot.jpg";
import arImage from "../../../assets/Intern/AR.jpg";
import vlsiImage from "../../../assets/Intern/VLSI.jpg";
import devopsImage from "../../../assets/Intern/DO1.jpg";
import cloudImage from "../../../assets/Intern/CLOUD1.jpg";
import cyberImage from "../../../assets/Intern/Cyber.jpeg";

const InternshipCards = () => {
  const cardsRef = useRef(null);
  const [popupDomain, setPopupDomain] = useState(null);
  const navigate = useNavigate();



 const domains = [
    {
      program_id: "INT01",
      title: "Python Full Stack Development",
      description: "Unlock the power of Python and build dynamic web applications from front to back. Our Python Full Stack Development internship offers a comprehensive journey into modern web technologies, equipping you with the skills to design, develop, and deploy robust solutions. Dive deep into frameworks like Django and Flask, master essential frontend technologies, and emerge as a proficient developer ready for the industry.",
      image: pythonImage,
      organization: "",
    },
    {
      program_id: "INT02",
      title: "Java Full Stack Development",
      description: "Master the enterprise-grade power of Java and become a versatile full-stack developer. Our Java Full Stack Development internship offers an intensive curriculum covering everything from robust backend frameworks like Spring Boot to modern frontend technologies. Build scalable, secure, and high-performance applications, gaining the expertise sought after by leading tech companies.",
      image: javaImage,
      organization: "",
    },
    {
      program_id: "INT03",
      title: "MERN Stack Development",
      description: "Dive into the world of modern web development with our MERN Stack internship! Learn to build powerful, single-page applications using MongoDB, Express.js, React.js, and Node.js – the technologies driving today's most innovative web experiences. Gain hands-on expertise in building responsive UIs, robust APIs, and scalable databases, preparing you for a thriving career in web development.",
      image: mernImage,
      organization: "",
    },
     {
      program_id: "INT04",
      title: "Internet of Things (IoT)",
      description: "Step into the future with our Internet of Things internship! Explore the fascinating world where physical objects connect and transforming industries. Learn to design, develop, and deploy smart solutions using popular IoT platforms, sensors, and microcontrollers. Gain practical skills in hardware-software integration, data collection, and cloud connectivity, positioning yourself at the forefront of the IoT revolution.",
      image: iotImage,
      organization: "",
    },
    {
      program_id: "INT05",
      title: "Automation & Robotics",
      description: "Revolutionize industries with our Automation & Robotics internship! Explore the exciting intersection of mechanical engineering, electronics, and computer science. Learn to design, program, and control robotic systems and automated processes, gaining critical skills in industrial automation, intelligent systems, and robotic manipulation. Be part of shaping the future of smart manufacturing and beyond.",
      image: arImage,
      organization: "",
    },
    {
      program_id: "INT06",
      title: "VLSI",
      description: "Design the chips of tomorrow with our VLSI internship! Delve into the intricate world of Very Large Scale Integration, where you'll learn the complete lifecycle of integrated circuit design – from specification to fabrication. Gain expertise in RTL design, verification, synthesis, and physical design, acquiring the specialized skills crucial for a career in semiconductor innovation.",
      image: vlsiImage,
      organization: "",
    },
    {
      program_id: "INT07",
      title: "DevOps",
      description: "Bridge the gap between development and operations with our immersive DevOps internship! Learn the principles and practices that accelerate software delivery, improve system reliability, and foster collaboration. Master essential tools for automation, continuous integration/delivery, containerization, and infrastructure as code, becoming a crucial asset in any modern software team.",
      image: devopsImage,
      organization: "",
    },
    {
      program_id: "INT08",
      title: "Cloud Operations",
      description: "Become a cloud expert with our Cloud Operations internship! Learn to manage, monitor, and optimize scalable infrastructure on leading cloud platforms like AWS, Azure, or GCP. Gain practical skills in cloud resource provisioning, network configuration, security, and cost management, becoming essential for organizations embracing the power of the cloud.",
      image: cloudImage,
      organization: "",
    },
    {
      program_id: "INT09",
      title: "Cyber Security",
      description: "Become a digital guardian with our Cyber Security internship! Learn to defend against evolving cyber threats, protect critical data, and ensure system integrity. Gain hands-on experience in ethical hacking, vulnerability assessment, network security, and incident response, equipping you with the vital skills to safeguard the digital world.",
      image: cyberImage,
      organization: "",
    },
  ];

  const handleLearnMoreClick = () =>
    cardsRef.current?.scrollIntoView({ behavior: "smooth" });

const handleApplyClick = (domain) =>
  navigate("/program/internshipregister", { 
    state: { 
      programId: domain.program_id, 
      selectedDomain: domain.title 
    } 
  });

  // ✅ Put the renderPopupComponent function here
  const renderPopupComponent = () => {
    const components = {
      "Python Full Stack Development": PythonInfo,
      "Java Full Stack Development": JavaInfo,
      "MERN Stack Development": MSInfo,
      "Internet of Things (IoT)": IOTInfo,
      "Automation & Robotics": AutomationInfo,
      "VLSI": VLSIInfo,
      "DevOps": DevOpsInfo,
      "Cloud Operations": CloudOperationsInfo,
      "Cyber Security": CyberSecurityInfo
    };

    const Component = components[popupDomain];
    return Component ? <Component handleClose={() => setPopupDomain(null)} /> : null;
  };

  return (
 <div>
  {/* Hero Section */}
  <div className="relative flex flex-col md:flex-row items-center justify-between px-29 py-18 ">
    <div className="w-full md:w-1/2 flex flex-col gap-6">
      <h1 className="text-3xl md:text-5xl text-center md:text-center text-white">
        Unlock Your Potential with Our Internship Programs
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {[
          { title: "Exclusive Mentorship", desc: "Personal guidance from industry experts." },
          { title: "Hands-on Experience", desc: "Work on real-world projects." },
          { title: "Career Support", desc: "Resume building & interview prep." },
          { title: "Flexible Learning", desc: "Choose remote or on-site options." },
        ].map((item, index) => (
          <li
            key={index}
            className="flex gap-3 items-start transform hover:translate-x-2 transition duration-300"
          >
           <FaCheckCircle className="text-orange-400 text-lg mt-1" 
                           size={24} 
                           /><div>
              <strong className="block text-lg">{item.title}</strong>
              <p className="text-sm">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center md:justify-start mt-6">
        <Button
          className="hover:scale-105 transition-transform"
          onClick={handleLearnMoreClick}
        >
          LEARN MORE
        </Button>
      </div>
    </div>
    <div className="w-full md:w-1/2 mt-8 md:mt-0">
      <img
        src={aboutImage}
        alt="About Us"
        className="rounded-3xl shadow-2xl hover:scale-105 transition-transform"
      />
    </div>
  </div>

  {/* Cards Section */}
  <h2 className="text-3xl font-bold text-center mt-12 mb-8 text-white"
  ref={cardsRef} 
  >
    Expert Life Coaching – Your Solution to Personal Growth
  </h2>



     <div className="grid gap-x-20 gap-y-78 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-16 py-10">
  {domains.map((domain, index) => (
    <div
      key={index}
      className="relative bg-white shadow-lg overflow-visible transform hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 mb-72"
    >
      {/* Image + Title */}
      <div className="relative h-54 w-full">
        <img
          src={domain.image}
          alt={domain.title}
          className="w-full h-full object-cover filter brightness-90"
        />
        <p className="absolute top-3 left-3 bg-red-700 px-5 py-1 rounded text-white font-bold text-xs uppercase shadow-lg">
          {domain.title}
        </p>
      </div>

{/* Floating Description Card BELOW image */}
<div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-[360px] bg-white p-5 border border-gray-200 shadow-xl rounded-2xl">
  
  {/* 🔹 Uniform height for description */}
  <div className="h-112 flex items-start overflow-hidden">
    <p className="text-sm text-justify mb-3 !text-black">
      {domain.description}
    </p>
  </div>

  {/* Buttons */}
                   <div className="flex justify-between gap-3">
                <Button
                  variant="secondary"
                  className="px-3 py-2 shadow-md hover:bg-gray-500 text-sm"
                  onClick={() => setPopupDomain(domain.title)}
                >
                  View More
                </Button>

                <Button
                  className="bg-orange-500 text-white px-3 py-2 shadow-lg hover:bg-orange-600 transition transform hover:scale-105 text-sm"
                  onClick={() => handleApplyClick(domain)}
                >
                  Apply
                </Button>

  </div>
</div>


    </div>
  ))}
</div>
<Dialog open={!!popupDomain} onOpenChange={(open) => !open && setPopupDomain(null)}>
  <DialogContent className="!w-[70rem] !max-w-[1400px] rounded-2xl shadow-2xl bg-white p-6 h-[90vh] overflow-y-auto">
  {renderPopupComponent()}
</DialogContent>
</Dialog>
    </div>
  );
};

export default InternshipCards;