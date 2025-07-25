"use client";

import React, { useEffect, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  duration?: number;
};

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(value / (duration / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [value, duration]);

  return <span>{count}</span>;
};

const statsData = [
  { number: 191, label: "Happy Clients" },
  { number: 221, label: "Successful Projects" },
  { number: 89, label: "UI / UX Projects" },
  { number: 33, label: "Team Members" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] text-white px-6 md:px-20 py-12 rounded-lg">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12 text-center">
        {statsData.map(({ number, label }, index) => (
          <div key={index}>
            <p className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
              <AnimatedNumber value={number} />
            </p>
            <p className="uppercase text-gray-400 tracking-wide text-sm md:text-base">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
