import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes"; // your existing Boxes component
import { motion } from "framer-motion";

const ASection1 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden px-4 py-8">
      {/* Animated Boxes Background */}
      <Boxes className="absolute inset-0 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-center max-w-3xl z-10"
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Meet Your Strategic Learning & Development Partner
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          With a blend of domain, process, technology and building agile workforce we
          are adding values to our customers. We customize our programs for IT
          companies and academic institutions. We provide IT services on various
          technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-xl text-lg"
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ASection1;
