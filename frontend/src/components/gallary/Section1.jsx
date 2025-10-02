import React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion"

import image1 from "../../assets/gallery/1.avif"
import image2 from "../../assets/gallery/2.avif"
import image3 from "../../assets/gallery/3.jpeg"
import image4 from "../../assets/gallery/4.jpg"
import image5 from "../../assets/gallery/5.jpeg"
import image6 from "../../assets/gallery/6.jpeg"
import image7 from "../../assets/gallery/7.jpeg"
import image8 from "../../assets/gallery/8.jpeg"
import image9 from "../../assets/gallery/9.jpeg"
import image10 from "../../assets/gallery/10.jpeg"
import image11 from "../../assets/gallery/11.jpeg"

const cardData = [
  { image: image1, title: "National Level Workshop – IoT with IO Cube" },
  { image: image2, title: "The AI Community at DLithe" },
  { image: image3, title: "DLithe Campus Life" },
  { image: image4, title: "Career Opportunities Session – Banashankari Campus" },
  { image: image5, title: "Interactive Training Session with students" },
  { image: image6, title: "Pre Placement Training" },
  { image: image7, title: "Internal Hackathon" },
  { image: image8, title: "Internal Hackathon" },
  { image: image9, title: "Internal Hackathon" },
  { image: image10, title: "Internal Hackathon" },
  { image: image11, title: "Internal Hackathon" },
]

const Section1 = () => {
  return (
    <div className="bg-black px-6 md:px-10 py-16 mt-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
      >
        Memories in the making
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-400 italic max-w-full mx-auto mb-12"
      >
        "Celebrating the moments that matter! These photos are a vibrant
        reminder of our shared experiences and the incredible memories we have
        created as a team."
      </motion.p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="relative overflow-hidden cursor-pointer group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-74 object-cover transform transition-transform duration-500  group-hover:brightness-110"
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                    <h2 className="text-white text-lg font-semibold drop-shadow-md">
                      {card.title}
                    </h2>
                  </CardFooter>
                </Card>
              </DialogTrigger>

              {/* Fullscreen Preview */}
              <DialogContent className="max-w-6xl bg-black/90 border-0 shadow-none flex flex-col items-center justify-center p-4 rounded-2xl">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto max-h-[80vh] rounded-xl object-contain shadow-lg"
                />
                <p className="mt-4 text-white text-center text-lg font-medium">
                  {card.title}
                </p>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Section1
