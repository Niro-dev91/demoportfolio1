"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

// Dynamically import CanvasStarField without SSR
const CanvasStarField = dynamic(() => import("./CanvasStarField"), { ssr: false });

const Hero = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section
            id="home"
            className="relative w-full h-screen flex items-center justify-center bg-primary text-white bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
            {/* Star animation overlay */}
            {isClient && <CanvasStarField />}

            {/* Optional: dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

            {/* Animated Text Box */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-20 p-6 w-3/4 mx-auto text-left"
            >
                <p className="text-lg mt-4">Hi, I Am Mary Elizabeth</p>

                {/* TypeAnimation */}
                <div className="text-lg mt-10 mb-2">
                    {isClient && (
                        <TypeAnimation
                            sequence={[
                                "Designer", 2000,
                                "", 500,
                                "Freelancer", 2000,
                                "", 500,
                                "Developer", 2000,
                                "", 500,
                                "Explorer", 2000,
                                "", 500,
                            ]}
                            wrapper="h1"
                            speed={50}
                            repeat={Infinity}
                            className="text-4xl md:text-6xl font-bold text-mono"
                        />
                    )}
                </div>

                <p className="text-lg mt-4">Crafting clean and interactive UIs</p>
                <br />
                <div className="w-3/4 mt-6">
                    {/* Labels row */}
                    <div className="grid grid-cols-4 text-gray-300 font-semibold text-sm mb-1">
                        <div>Email</div>
                        <div>Phone</div>
                        <div>Address</div>
                        <div>Nationality</div>
                    </div>

                    {/* Values row */}
                    <div className="grid grid-cols-4 text-white text-sm">
                        <div>info@example.com</div>
                        <div>+456 789 321</div>
                        <div>New Winchester</div>
                        <div>USA</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
