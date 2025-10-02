import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import image3 from "../../assets/programs/mentorship.jpg";
import image4 from "../../assets/programs/impactfulProject.jpg";
import image5 from "../../assets/programs/growthanddev.jpg";
import image6 from "../../assets/programs/Worktogether.jpg";

const Section5 = () => {
  const programs = [
    {
      image: image4,
      title: "Impactful projects",
      desc: "Get ready to dive into real-life projects! This is your opportunity to explore your chosen field, sharpen your skills, and let your curiosity soar.",
    },
    {
      image: image3,
      title: "Mentorship",
      desc: "Your success is our priority. Throughout your program, a dedicated mentorship team will be there to guide you every step of the way with feedback and support.",
    },
    {
      image: image5,
      title: "Growth & development",
      desc: "Throughout your internship, you'll have access to various formal and informal growth opportunities to empower your success.",
    },
    {
      image: image6,
      title: "Diversity, Equality and Inclusion",
      desc: "Our mentoring emphasizes creating a safe, inclusive space for everyone. We listen, show empathy, and challenge biases so everyone feels valued and respected.",
    },
  ];

  return (
    <div id="Section5"> 
    <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Why choose DLithe for your programs?
        </h1>
        <p className="text-white/90 text-lg leading-relaxed max-w-full mx-auto text-justify">
          At DLithe, we understand that ambition is the driving force behind
          success. We are committed to providing an environment where your
          aspirations can flourish. Our programs offer a unique opportunity to
          immerse yourself in the dynamic world of professional services. You'll
          gain invaluable hands-on experience, working on challenging projects
          that will push your limits and inspire you to reach new heights.
          <br />
          <br />
          We believe in fostering a culture of growth and development. Our
          programs are designed to equip you with the skills and knowledge you
          need to succeed in your career. You'll work alongside experienced
          professionals who will mentor and guide you, providing valuable
          insights and support along the way.
          <br />
          <br />
          At DLithe, you'll not only gain professional skills, but you'll also
          experience our unique and inclusive culture. You'll have the chance to
          connect with talented individuals from diverse backgrounds and build
          lasting relationships. Our internships are more than just a job; they
          are a stepping stone towards a fulfilling and rewarding career.
          <br />
          <br />
          We invite you to explore the possibilities and discover how DLithe can
          help you turn your ambitions into reality.
        </p>
      </motion.header>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-6">
  {programs.map((program, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="flex"
    >
      <Card
        className="bg-black-900/80 backdrop-blur-md text-white shadow-lg rounded-2xl 
                   overflow-hidden hover:shadow-2xl transition-all duration-300 
                   w-full h-[550px] flex flex-col 
                   hover:bg-gray-800 "
      >
        <CardContent className="p-3 flex flex-col flex-grow">
          {/* Image */}
          <motion.img
            src={program.image}
            alt={program.title}
            className="w-full h-44 object-cover rounded-t-5xl"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
          <h3 className="text-xl font-semibold text-center mb-3">
            {program.title}
          </h3>
          <p className="text-sm text-justify text-gray-300 leading-relaxed flex-grow">
            {program.desc}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</section>
</div>

    </div>
  );
};

export default Section5;
