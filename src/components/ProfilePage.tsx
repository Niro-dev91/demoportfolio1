"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: number;
};

const skills: Skill[] = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
];

// Animated number with hydration-safe approach
const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <span>{displayValue}%</span>;
};

const ProfilePage: React.FC = () => {
  return (
    <section id="about"  className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center md:items-start px-8 py-16 w-full gap-12">
      {/* Left: Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
          <img
            src="/images/profile.jpg"
            alt="Portrait"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right: Intro & Skills */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-white">Intro</h2>
        <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          I’m a passionate developer skilled in building beautiful, performant,
          and scalable web applications. I focus on user experience, modern UI,
          and interactive functionality.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-white">Skills</h2>

        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between text-sm font-medium text-gray-300">
                <span>{skill.name}</span>
                <AnimatedNumber value={skill.level} />
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
