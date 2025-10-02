import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faBarsProgress,
  faChalkboard,
  faUserPlus,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";

// 🎨 Use ONLY rgba colors
const spheres = [
  { icon: faIndustry, label: "INDUSTRY", color: "rgba(59,130,246,0.6)" },
  { icon: faBarsProgress, label: "PROCESS", color: "rgba(156,163,175,0.6)" },
  { icon: faChalkboard, label: "LEARNING & DEVELOPMENT", color: "rgba(249,115,22,0.6)" },
  { icon: faUserPlus, label: "BEHAVIORAL", color: "rgba(71,85,105,0.6)" },
  { icon: faMicrochip, label: "TECHNOLOGY", color: "rgba(56,189,248,0.6)" },
];

const variants = {
  hiddenTop: { y: -80, opacity: 0 },
  hiddenBottom: { y: 80, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const Section4 = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 overflow-hidden">
      {/* Floating Glow Backgrounds */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-[150px] animate-pulse" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12 px-6 relative z-10">
        
        {/* Left: Text Section */}
        <motion.div
          className="flex-1 flex flex-col justify-center p-10 bg-zinc-900/40 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center md:text-left bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-md">
            Five Spheres. One Mission.
          </h1>
          <p className="mt-6 text-zinc-300 leading-relaxed text-justify text-lg">
            Unlocking Potential Across All Dimensions. Our mission is singular: to unlock
            the full potential within every organization, be it corporate or academic. We
            achieve this by synergistically addressing five critical spheres.
            <br /><br />
            We deliver deep Domain expertise, ensuring solutions are industry-relevant and
            impactful. Our focus on Process optimization streamlines operations, driving
            efficiency and effectiveness.
            <br /><br />
            Through targeted Behavioral interventions, we cultivate leadership, foster
            collaboration, and enhance team dynamics. Leveraging cutting-edge Technology,
            we build innovative solutions and empower digital transformation.
          </p>
        </motion.div>

        {/* Divider Glow */}
        <div className="hidden md:block w-1 bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600 rounded-full animate-pulse" />

        {/* Right: Sphere Cards */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          {spheres.map((sphere, index) => (
            <motion.div
              key={sphere.label}
              initial={index % 2 === 0 ? "hiddenTop" : "hiddenBottom"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateX: 8,
                rotateY: 8,
                boxShadow: `0 10px 30px ${sphere.color}`, // glow matches bg
              }}
            >
              <Card
                style={{ backgroundColor: sphere.color }}
                className="w-full h-28 rounded-3xl shadow-xl flex items-center justify-center"
              >
                <CardContent className="flex flex-col items-center justify-center text-white bg-transparent shadow-none">
                  <FontAwesomeIcon icon={sphere.icon} size="2x" className="mb-2 drop-shadow" />
                  <span className="text-sm font-bold text-center tracking-wide">{sphere.label}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
