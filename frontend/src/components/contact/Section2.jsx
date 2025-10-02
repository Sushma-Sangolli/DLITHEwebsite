import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const Section2 = () => {
  const contacts = [
    {
      title: "Address",
      icon: "📍",
      bg: "bg-gradient-to-br from-orange-400 to-yellow-300",
      details: [
        "No. 280, 3rd Floor SLV ARCADE, 100 Feet Ring Road",
        "BSK 3rd Stage, Bangalore-560070",
      ],
    },
    {
      title: "Phone",
      icon: "📞",
      bg: "bg-gradient-to-br from-gray-100 to-gray-300",
      details: ["Support: +91 9008815252"],
    },
    {
      title: "Email",
      icon: "✉️",
      bg: "bg-gradient-to-br from-[#00274D] to-[#013366]",
      details: ["Info@dlithe.com"],
    },
  ]

  return (
    <div className="text-center font-sans px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
        Get in Touch
      </h1>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {contacts.map((item, index) => (
          <Card
            key={index}
            className={`${item.bg} w-100 h-70 flex flex-col justify-center items-center rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl`}
          >
            <CardContent className="flex flex-col items-center justify-center gap-3 p-6 text-center">
              {/* Icon Circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-3xl shadow-md">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black">{item.title}</h3>

              {/* Details - Always Black */}
              {item.details.map((line, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed !text-black"
                >
                  {line}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Section2
