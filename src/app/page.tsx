"use client";

import { I18nProvider } from "@/lib/i18n-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

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
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
