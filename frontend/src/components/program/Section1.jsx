import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/programs/applyForJob1.jpg";

const Section1 = () => {
  return (
    <div id="Section1">
    <div className="bg-black text-white py-20 px-6 md:px-16 lg:px-32">
      <section className="flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Programs at DLithe
          </motion.h1>

          <motion.p
  className="text-base md:text-lg leading-relaxed text-justify text-gray-200 mb-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  Embarking on a professional journey is not just about gaining work experience, 
  but an opportunity to bring your academic knowledge to life in the dynamic world of business. 
  Discover your potential at DLithe, where you will experience the Agile way of working 
  with a perfect blend of Domain, Process, and Technology. Our programs are designed 
  to ensure skill enhancement, hands-on exposure, and measurable outcomes.
</motion.p>

        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <motion.img
            src={image1}
            alt="Internships at DLithe"
            className="w-full max-h-[500px] rounded-lg object-cover shadow-xl hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>
    </div>
    </div>
  );
};

export default Section1;
