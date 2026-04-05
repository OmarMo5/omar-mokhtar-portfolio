import { ExternalLink, Calendar, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import logoUdacity from "@/assets/logo-udacity.png";
import logo365ds from "@/assets/logo-365ds.png";
import logoMicrosoft from "@/assets/logo-microsoft.png";
import { useEffect, useRef, useState, useCallback } from "react";

interface Certification {
  title: string;
  organization: string;
  logo: string;
  issued?: string;
  description?: string;
  certificateFile?: string;
  credentialUrl?: string;
  actionLabel: string;
}

const certifications: Certification[] = [
  {
    title: "Data Science",
    organization: "365 Data Science",
    logo: logo365ds,
    description: "Fulfilled all the requirements of fundamentals in Python language programming.",
    certificateFile: "https://drive.google.com/file/d/1w1sTSBpkxI2Mt3Gmea2w5o3LF4pQ8xsq/view?usp=sharing",
    actionLabel: "View Certificate",
  },
  {
    title: "Microsoft Professional Program in Front-End Web Development",
    organization: "Udacity",
    logo: logoUdacity,
    issued: "Feb 2023",
    certificateFile: "https://drive.google.com/file/d/1Sh65aq72mEmX6aLh1tD9Js5yhT2lpPCq/view?usp=sharing",
    actionLabel: "View Certificate",
  },
  {
    title: "Microsoft Office Specialist: Microsoft Office 2019",
    organization: "Country Manager Microsoft Egypt & Ministry of Youth and Sports Egypt",
    logo: logoMicrosoft,
    issued: "Sep 2021",
    credentialUrl: "https://drive.google.com/file/d/1r4a6RssvOVaWsUZwRRS6yFPnecZTQ389/view?usp=sharing",
    actionLabel: "Show Credential",
  },
  {
    title: "Data Analysis",
    organization: "Udacity",
    logo: logoUdacity,
    issued: "Sep 2021",
    certificateFile: "https://drive.google.com/file/d/1mPtdA4jHq0gvyl1TXo8YClekRPHlpQqL/view?usp=sharing",
    actionLabel: "View Certificate",
  },
  {
    title: "Web Development Challenger Track",
    organization: "Udacity",
    logo: logoUdacity,
    credentialUrl: "https://drive.google.com/file/d/1cdEX7Bh6rK3AK2YwT0e8pGPDo_0qcDxb/view?usp=sharing",
    actionLabel: "Show Credential",
  },
];

const CertCard = ({ cert }: { cert: Certification }) => {
  const link = cert.certificateFile || cert.credentialUrl || "#";

  return (
    <div className="card-glass p-5 sm:p-6 flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_-8px_hsl(174,72%,56%,0.15)] group w-[300px] sm:w-[340px] shrink-0 h-[220px] sm:h-[240px]">
      {/* Logo + Org */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-secondary/60 border border-border flex items-center justify-center overflow-hidden shrink-0 p-1.5">
          <img
            src={cert.logo}
            alt={cert.organization}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-primary font-heading truncate">
            {cert.organization}
          </p>
          {cert.issued && (
            <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
              <Calendar size={10} />
              {cert.issued}
            </p>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading text-sm sm:text-base font-semibold text-foreground mb-2 leading-snug line-clamp-2">
        {cert.title}
      </h3>

      {/* Description */}
      {cert.description && (
        <p className="text-xs text-muted-foreground leading-relaxed mb-2 line-clamp-2">
          {cert.description}
        </p>
      )}

      <div className="flex-1" />

      {/* Action */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium border border-primary/20 text-primary bg-primary/5 transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 w-fit"
      >
        <Award size={14} />
        {cert.actionLabel}
        <ExternalLink size={12} className="opacity-60" />
      </a>
    </div>
  );
};

const InfiniteCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const scrollPos = useRef(0);
  const speed = useRef(0.5);

  // Duplicate cards for seamless loop
  const items = [...certifications, ...certifications, ...certifications];

  const animate = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const singleSetWidth = container.scrollWidth / 3;

    if (!isPaused) {
      scrollPos.current += speed.current;
      if (scrollPos.current >= singleSetWidth) {
        scrollPos.current -= singleSetWidth;
      }
      container.scrollLeft = scrollPos.current;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  // Touch support
  const touchStart = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const diff = touchStart.current - e.touches[0].clientX;
    scrollPos.current += diff;
    touchStart.current = e.touches[0].clientX;
    scrollRef.current.scrollLeft = scrollPos.current;
  };
  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-hidden scrollbar-hide py-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((cert, index) => (
          <CertCard key={`${cert.title}-${index}`} cert={cert} />
        ))}
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-14 sm:py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">04.</span>
            <h2 className="section-heading">Licenses & Certifications</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">Professional credentials & achievements</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <InfiniteCarousel />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CertificationsSection;
