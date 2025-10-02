import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes"; // import your Boxes component
import { motion } from "framer-motion";

const ASection1 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden px-4 py-10">
      {/* Animated Boxes Background */}
      <Boxes className="absolute inset-0 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-center max-w-4xl z-10"
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          IT Services and Learning & Development
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6 mx-4 md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We are a leading IT professional services company with two decades of rich
          experience in delivery excellence, learning & development, and human resource
          functions. Our services are adding value to our customers in achieving greater
          customer experience.
        </motion.p>

        {/* Contact Button */}
        <motion.div
          className="flex justify-center mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ASection1;
