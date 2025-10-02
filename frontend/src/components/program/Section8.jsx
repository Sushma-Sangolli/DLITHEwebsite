import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils" // shadcn helper for conditional classes

// Section data → match these IDs with your existing <div id="Section1"> etc.
const sections = [
  { id: "Section1", label: "Programs at DLithe" },
  { id: "Section2", label: "Freshers to Experience" },
  { id: "Section3", label: "Testimonials" },
  { id: "Section4", label: "Right opportunities for you" },
  { id: "Section5", label: "Why choose DLithe" },
  { id: "Section6", label: "Life at DLithe" },
  { id: "Section7", label: "Apply Now" },
]

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("")
  const [hoveredSection, setHoveredSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-1/2 right-2 -translate-y-1/2 flex flex-col items-center z-50 bg-neutral-100 rounded-3xl p-4 w-12 md:w-14 shadow-md">
      <div className="flex flex-col items-center space-y-4">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection("")}
          >
            {/* Line connector */}
            {index !== 0 && (
              <div
                className={cn(
                  "w-0.5 h-5 bg-neutral-400 transition-colors",
                  activeSection === section.id && "bg-orange-500"
                )}
              />
            )}

            {/* Dot */}
            <div
              className={cn(
                "w-3 h-3 rounded-full bg-neutral-400 cursor-pointer transition-transform duration-300",
                activeSection === section.id &&
                  "bg-orange-500 scale-125 shadow-md"
              )}
              onClick={() => {
                const element = document.getElementById(section.id)
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                  setActiveSection(section.id)
                }
              }}
            />

            {/* Tooltip */}
            {hoveredSection === section.id && (
              <div className="absolute top-[-8px] right-10 bg-white px-3 py-2 rounded-md shadow-lg w-48 text-sm text-black">
                {section.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
