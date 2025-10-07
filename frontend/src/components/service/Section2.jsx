import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import image from "../../assets/service/service1.jpg";


const Section2 = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center relative overflow-hidden px-4">
      {/* Background container */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-[90%] h-[600px] flex items-center justify-center text-white m-auto my-[20vh] p-4 rounded-2xl shadow-2xl relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(140deg, rgba(15,2,52,0.7), #060606f2), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-2xl" />

        <div className="relative z-10 max-w-5xl text-center px-4">
          {/* Heading */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6 leading-snug"
          >
            We create{" "}
            <span className="bg-gradient-to-r from-[#ff9c00] to-[#ff7a00] bg-clip-text text-transparent">
              customized offerings
            </span>{" "}
            to meet your business objectives
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-full mx-auto text-justify text-lg md:text-xl leading-relaxed text-white brightness-800"
          >
            We create customized offerings aligned with your business goals. Our
            tailor-made services give you the flexibility to build unique
            solutions. Choose from a range of programs designed to ensure quality
            and impact. We focus on delivering measurable outcomes, not just
            completing tasks. Partner with us to accelerate growth and innovation
            in your business. Together, we turn strategies into tangible results.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => navigate("/contact")}
              className="mt-8 bg-[#ff9c00] hover:bg-[#ff7a00] text-white rounded-full px-10 py-4 tracking-wider font-semibold uppercase shadow-lg hover:shadow-[0_0_25px_rgba(255,156,0,0.6)] transition-all duration-300"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Section2;
