import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/ProfilePage";
import WhatIDo from "@/components/WhatIDo";
import Contact from "@/components/Contact";
import StatsSection from "@/components/StatsSection";
import { Metadata } from "next";

// Metadata export replaces Head in app router
export const metadata: Metadata = {
  title: "Mary | Frontend Developer",
  description: "Portfolio of Mary, Frontend Developer",
  icons: "/favicon.ico",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <StatsSection />
        <Contact />
      </main>
    </>
  );
}
