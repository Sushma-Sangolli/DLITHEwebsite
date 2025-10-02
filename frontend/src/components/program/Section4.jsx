import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import image2 from "../../assets/programs/image1.jpg";

function Section4() {
  const navigate = useNavigate();

  return (
<div id="Section4">
    <div className="font-sans bg-black text-white">
      {/* Header */}
      <header className="py-12 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We just don’t work, We produce results.
        </motion.h1>
      </header>

      {/* Content Section */}
      <section className="flex flex-wrap justify-around items-center gap-8 p-8 md:p-16">
        {/* Text Content */}
        <motion.div
          className="flex-1 min-w-[620px] max-w-lg space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-1xl md:text-2xl text-center">
            Need help figuring out which opportunities are a fit for you?
          </h2>
          <p className="text-lg text-gray-300 text-justify leading-relaxed">
            <span className=" font-medium">Explore Your Fit</span> is an
            interactive tool designed to help you explore business areas and
            opportunities within DLithe that may be a good fit based on your
            background and interests.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="flex justify-center mt-6">
  <Button
    onClick={() => navigate("/service")}
    className="px-6 py-3 text-lg font-medium"
  >
    Explore with us
  </Button>
</div>

          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="flex-1 min-w-[620px] max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
  src={image2}
  alt="Person smiling"
  className="w-[420rem] h-[350px] object-cover rounded-xl shadow-lg"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.4 }}
/>

        </motion.div>
      </section>
    </div>
    </div>
  );
}

export default Section4;
