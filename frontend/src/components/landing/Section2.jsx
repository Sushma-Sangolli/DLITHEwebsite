import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Section2 = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-white px-6 md:px-20 py-20 overflow-hidden">
      {/* Floating Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Full-width Heading */}
      <motion.h1
        className="w-full text-3xl md:text-5xl font-extrabold mb-12 leading-snug text-center relative z-10"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Professional{" "}
        <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          IT Services
        </span>{" "}
        and Technology Consulting
      </motion.h1>

      {/* Content Row */}
      <div className="relative flex flex-wrap md:flex-nowrap items-center justify-between gap-12 z-10">
        {/* Text Side */}
        <motion.div
          className="flex-1 flex flex-col items-start text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            In today's rapidly evolving digital landscape, harnessing the power
            of technology is not just an advantage, but a necessity for
            sustainable growth. We offer comprehensive professional IT services
            and strategic technology consultation designed to empower your
            business. Our expertise spans across optimizing your existing
            infrastructure, guiding you through seamless digital transformations,
            and implementing cutting-edge solutions tailored to your unique
            challenges.
            <br />
            <br />
            From robust cybersecurity measures to cloud migration strategies and
            custom software development, we ensure your technology aligns
            perfectly with your business objectives, driving efficiency,
            innovation, and a competitive edge in your market. Partner with us to
            navigate the complexities of IT and unlock your full potential.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button onClick={() => navigate("/services")}>
  Learn More
</Button>


           

          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="flex-1 flex justify-center items-center w-full md:w-auto relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/30 to-yellow-300/30 blur-2xl opacity-70"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            ></motion.div>
            <img
              src="/landing_page/section2.jpg"
              alt="IT Consulting"
              className="relative w-full max-w-2xl rounded-2xl shadow-2xl object-cover border border-orange-500/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
