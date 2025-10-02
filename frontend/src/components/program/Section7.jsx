import React from "react"
import { Card, CardContent } from "@/components/ui/card" // shadcn card
import { cn } from "@/lib/utils"

import applynow  from "../../assets/programs/applynow.jpg";

const Section7 = () => {
  return (
    <div id="Section7">
    <section className="w-full flex justify-center px-4 py-12 bg-black">
      <Card className="flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full bg-transparent border-0 shadow-none">
        {/* Left Section: Image */}
        <div className="flex-1 w-full h-full">
          <img
            src={applynow}
            alt="Smiling woman with laptop"
            className="w-full rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Right Section: Text */}
        <CardContent className="flex-1 flex flex-col justify-center text-white px-0 md:px-6">
          <h2 className="text-3xl font-bold mb-4">Apply now</h2>
          <p className="mb-6 leading-relaxed">
            Are you ready to discover? Our programs are designed to invest in
            you, your potential, and your future.
          </p>

          <div className="space-y-3">
            <a
              href="/program/internshipcards"
              className="block text-orange-400 font-semibold hover:underline transition-colors"
            >
              Internship opportunities →
            </a>
            <a
              href="/program/certificationcards"
              className="block text-orange-400 font-semibold hover:underline transition-colors"
            >
              Certification Programs →
            </a>
            <a
              href="/program/bootcampcards"
              className="block text-orange-400 font-semibold hover:underline transition-colors"
            >
              Bootcamp →
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
    </div>
  )
}

export default Section7
