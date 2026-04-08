"use client";

import dynamic from "next/dynamic";
import { I18nProvider } from "@/lib/i18n-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

// Lazy load below-fold sections
const LogoBar = dynamic(() => import("@/components/sections/LogoBar"));
const Services = dynamic(() => import("@/components/sections/Services"));
const About = dynamic(() => import("@/components/sections/About"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Reviews = dynamic(() => import("@/components/sections/Reviews"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Services />
        <About />
        <Skills />
        <Portfolio />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </I18nProvider>
  );
}
