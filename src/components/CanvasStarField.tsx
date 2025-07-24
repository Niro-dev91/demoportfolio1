// components/CanvasStarField.tsx
"use client";
import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    r: number;   // radius
    d: number;   // speed
    vx: number;  // velocity x
    vy: number;  // velocity y
}

const CanvasStarField = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Create stars with random velocity for flying effect
        const stars: Star[] = Array.from({ length: 150 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 2 + 1.5, // Larger stars
            d: Math.random() * 0.5 + 0.2,
            vx: (Math.random() - 0.5) * 1.0, // random horizontal speed
            vy: (Math.random() - 0.5) * 1.0, // random vertical speed
        }));

        const maxDistance = 100; // max distance to draw lines between stars

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            for (let star of stars) {
                // Update position
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around edges
                if (star.x < 0) star.x = width;
                else if (star.x > width) star.x = 0;

                if (star.y < 0) star.y = height;
                else if (star.y > height) star.y = 0;

                // Draw star (dot)
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
                ctx.fill();
            }

            // Draw connecting lines
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / maxDistance})`;
                        ctx.lineWidth = 1.2; // Bolder lines
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-10"
            style={{ background: "transparent" }}
        />
    );
};

export default CanvasStarField;
