import React from "react";
import {
  FaTrophy,
  FaCode,
  FaImage,
  FaCrown,
  FaKey,
  FaHandPaper,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTrophy size={40} />,
    title: "Web Design",
    desc: "Creating modern and responsive UI/UX designs for websites and web apps.",
  },
  {
    icon: <FaCode size={40} />,
    title: "Development",
    desc: "Building robust, scalable, and secure applications using modern technologies.",
  },
  {
    icon: <FaImage size={40} />,
    title: "Social Media",
    desc: "Crafting visually appealing content and strategies for social engagement.",
  },
  {
    icon: <FaCrown size={40} />,
    title: "Branding",
    desc: "Helping businesses establish a strong and memorable brand identity.",
  },
  {
    icon: <FaKey size={40} />,
    title: "Strategy",
    desc: "Planning data-driven strategies for growth, marketing, and success.",
  },
  {
    icon: <FaHandPaper size={40} />,
    title: "Consulting",
    desc: "Providing expert advice to optimize tech solutions and business decisions.",
  },
];

const WhatIDo = () => {
  return (
    <section id="whatido" className="bg-[#1a1a1a] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What I'm Doing</h2>
        <p className="text-gray-400 mb-12 text-base md:text-lg">
          Here's how I help businesses grow and succeed in the digital world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#1f1f1f] border border-gray-800 rounded-xl p-6 hover:border-yellow-400 transition duration-300 cursor-pointer text-center"
            >
              <div className="text-yellow-400 mb-4 flex justify-center transform transition-transform duration-300 group-hover:-translate-y-3">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
