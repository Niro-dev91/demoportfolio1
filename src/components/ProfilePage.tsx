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
    <section
      id="about"
      className="min-h-screen bg-[#1a1a1a] text-white px-6 md:px-12 py-16"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center md:text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Profile</h2>
        <p className="text-gray-300 text-base md:text-lg">
          I am a creative and motivated person with a passion for learning and growth.
        </p>
      </div>

      {/* Content: Two Column Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
        {/* Left: Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
            <img
              src="/images/profile.jpg"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Intro & Skills */}
        <div className="w-full md:w-[55%] px-4 md:px-6">
          <h2 className="font-bold mb-4 text-white text-xl">Intro</h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed text-left md:text-justify">
            I’m a passionate developer skilled in building beautiful, performant,
            and scalable web applications. I focus on user experience, modern UI,
            and interactive functionality. With a strong foundation in React,
            Next.js, Tailwind CSS, and backend technologies like Node.js, I bring
            projects to life with clean and efficient code. I enjoy learning new
            tools and applying best practices to create responsive and accessible
            designs that work seamlessly across devices.
          </p>

          <h2 className="font-bold mb-4 text-white text-xl">Skills</h2>

          <div className="space-y-2">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm font-medium text-gray-300">
                  <span>{skill.name}</span>
                  <AnimatedNumber value={skill.level} />
                </div>
                <div className="bg-gray-800 rounded-full h-1 overflow-hidden">
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
      </div>
    </section>
  );
};

export default ProfilePage;
