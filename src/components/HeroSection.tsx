import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const roles = [
  "Software Engineer",
  "Backend Developer",
  "React Specialist",
  "AI Enthusiast",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(174, 72%, 56%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-heading text-primary text-sm mb-4 tracking-wider"
            >
              Hello, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-2 leading-tight"
            >
              Omar Mokhtar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 h-10 flex items-center justify-center lg:justify-start"
            >
              <span className="text-muted-foreground">I'm a </span>
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-gradient ml-2"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="text-muted-foreground text-base max-w-xl mb-6 leading-relaxed mx-auto lg:mx-0"
            >
              Software Engineer specialized in Back-End development with solid
              experience in Front-End technologies. Passionate about building
              scalable, high-quality web applications and deeply interested in
              theoretical computer science and AI research. Continuously focused
              on delivering clean, maintainable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-2 text-muted-foreground text-sm mb-8 justify-center lg:justify-start"
            >
              <MapPin size={14} className="text-primary" />
              <span>Giza, Egypt</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a
                href="mailto:omarmokhtar20015@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <Mail size={16} />
                Get In Touch
              </a>
              <a
                href="https://github.com/omarmokhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/omarmokhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full border border-primary/20 p-1">
                <div className="w-full h-full rounded-full border border-primary/10 p-1">
                  <img
                    src={profilePhoto}
                    alt="Omar Mokhtar - Software Engineer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.2, duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
