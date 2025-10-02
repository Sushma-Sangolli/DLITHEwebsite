import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: `Our partnership with DLithe for Learning & Development has been invaluable. Their tailored programs have significantly enhanced our team's performance and addressed our specific skill gaps. We've seen a measurable improvement in productivity and employee engagement.`,
    author: "Vibha Mishra",
    position: "L&D Manager, TietoEvry",
  },
  {
    id: 2,
    text: `The bootcamp provided by DLithe exceeded our expectations. The quality of the resources, the domain process and technical expertise, and the hands-on approach were instrumental in preparing our team for real-world challenges. We've hired several graduates and are consistently impressed with their skills.`,
    author: "Nagaraju",
    position: "Delivery Head, TietoEvry",
  },
  {
    id: 3,
    text: `Thanks to DLithe’s placement training, our hiring success rate has dramatically increased. The comprehensive curriculum, combined with mock interviews and personalized feedback, gave our candidates the confidence and skills they needed to excel. We've onboarded several talented individuals who are already making significant contributions.`,
    author: "Bharat Kumar",
    position: "NMAMIT, Nitte",
  },
  {
    id: 4,
    text: `The Faculty Development Program offered by DLithe was transformative. The emphasis on practical application and real-time implementation in the Artificial Intelligence domain made a significant difference in our faculty's ability to integrate new technologies into the classroom. Our instructors are now more confident and effective in their teaching.`,
    author: "Dr Mohan Kumar",
    position: "PESCE (MCA Department), Mandya",
  },
];

const Section5 = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 text-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/landing_page/newimage.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Heading */}
<motion.h1
  className="w-full text-3xl md:text-5xl font-extrabold mb-12 leading-snug text-center relative z-10 text-white"
  initial={{ y: 40, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  What{" "}
  <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
    People
  </span>{" "}
  Are Saying
</motion.h1>

        
      

      {/* Testimonials */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="perspective-1000"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <Card className="rounded-3xl shadow-2xl border border-white/10 bg-white/10 backdrop-blur-md relative overflow-hidden group transition-all duration-300 hover:shadow-orange-500/30 hover:border-orange-400/40">
                <CardContent className="p-10 relative text-left text-justify">
                  <span className="absolute top-6 left-6 text-7xl font-serif text-white/20 group-hover:opacity-50 transition-opacity">
                    “
                  </span>
                  <p className="text-lg leading-relaxed text-white/90 relative z-10 brightness-800">
                    {item.text}
                  </p>
                  <span className="absolute bottom-6 right-6 text-7xl font-serif text-white/20 group-hover:opacity-50 transition-opacity">
                    ”
                  </span>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold shadow-lg ">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg brightness-800">{item.author}</p>
                      <p className="text-sm brightness-800">{item.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
