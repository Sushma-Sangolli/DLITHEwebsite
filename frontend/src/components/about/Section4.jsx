import React from "react";
import { Card, CardContent } from "@/components/ui/card";

function Section4() {
  const teamMembers = [
    { name: "Sridhar Murthy", designation: "Co Founder & Director, HR" },
    { name: "Arun R", designation: "Co Founder & Director, Delivery Excellence" },
    { name: "Vijay GH", designation: "Head of Technology" },
    { name: "Dhanya Bangera", designation: "Customer Success Lead" },
    { name: "Archana M", designation: "Senior Software Engineer" },
    { name: "Madhusudhan", designation: "Embedded System Engineer" },
    { name: "Kaveri SB", designation: "Software Engineer" },
    { name: "Harshith", designation: "Embedded Engineer" },
    { name: "Sahana B Ilager", designation: "Embedded Engineer" },
    { name: "Anjali Mishra", designation: "Training Assistant Manager-India" },
    { name: "Sushma I Sangolli", designation: "Software Engineer" },
    { name: "Shreya V", designation: "Training Assistant Manager-Global" },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-white">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Team
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => {
            const imagePath = `/gallary/${member.name}.jpg`; // file path from public folder
            return (
              <Card
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition-transform duration-300 transform hover:-translate-y-3"
              >
                <CardContent className="flex flex-col items-center p-6">
                  <div className="relative">
                    <img
                      src={imagePath}
                      alt={member.name}
                      className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-zinc-700"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/10 to-yellow-300/10 opacity-0 hover:opacity-100 transition"></div>
                  </div>
                  <h3 className="mt-4 text-xl md:text-2xl font-semibold text-white">{member.name}</h3>
                  <h5 className="mt-2 text-zinc-400 text-center">{member.designation}</h5>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Section4;
