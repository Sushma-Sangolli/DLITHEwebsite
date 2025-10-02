import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

// Counter Component
const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = Math.ceil(target / (duration / 20));
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(interval);
  }, [hasStarted, target, duration]);

  return (
    <h3
      ref={ref}
      className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-extrabold text-orange-400"
    >
      {count.toLocaleString()}
      <Plus className="w-5 h-5 text-orange-400" />
    </h3>
  );
};

// Section2 Component
const Section2 = () => {
  return (
    <section className="relative w-full  py-20 px-6 md:px-12 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
  IT Services Overview
</h1>

        <p className="text-zinc-300 text-lg md:text-xl mb-12">
          Empowering businesses with innovative solutions and trusted partnerships
        </p>

        {/* Counters Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { target: 15, label: "IT Companies" },
            { target: 40, label: "Academic Institutions" },
            { target: 5, label: "Development Centers" },
            { target: 300000, label: "Resources Mentored" },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-zinc-900/80 border border-zinc-800 shadow-lg rounded-2xl hover:border-orange-400 hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center py-8 px-4 space-y-3">
                <Counter target={item.target} duration={2000} />
                <p className="text-white text-base md:text-lg font-medium">
                  {item.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
