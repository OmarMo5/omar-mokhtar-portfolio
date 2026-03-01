import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import EngineeringPhilosophy from "@/components/EngineeringPhilosophy";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SkeletonLoader from "@/components/SkeletonLoader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <SkeletonLoader />}</AnimatePresence>

      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ImpactMetrics />
          <SkillsSection />
          <ProjectsSection />
          <EngineeringPhilosophy />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
