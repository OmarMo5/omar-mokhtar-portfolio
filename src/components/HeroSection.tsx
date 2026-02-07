import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const roles = [
  "Software Developer",
  "Backend Engineer",
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
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-heading text-primary text-sm md:text-base mb-4 tracking-wider"
            >
              Hello, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-2 leading-tight"
            >
              Omar Mokhtar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 h-14 md:h-16 flex items-center justify-center lg:justify-start"
            >
              <span className="text-muted-foreground">I'm a </span>
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-gradient ml-2"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-muted-foreground text-base md:text-lg max-w-2xl mb-2 leading-relaxed mx-auto lg:mx-0"
            >
              Software Engineer specialized in Back-End development with solid experience
              in Front-End technologies. Passionate about building scalable, high-quality
              web applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-muted-foreground text-sm md:text-base max-w-2xl mb-4 leading-relaxed mx-auto lg:mx-0"
            >
              Deeply interested in modern challenges in theoretical computer science
              and artificial intelligence research. Continuously focused on improving
              engineering skills and delivering clean, maintainable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-2 text-muted-foreground text-sm mb-8 justify-center lg:justify-start"
            >
              <MapPin size={16} className="text-primary" />
              <span>Giza, Egypt</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="mailto:omarmokhtar20015@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95"
              >
                <Mail size={18} />
                Get In Touch
              </a>
              <a
                href="https://github.com/omarmokhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm transition-all hover:border-primary hover:text-primary hover:scale-105 active:scale-95"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/omarmokhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm transition-all hover:border-primary hover:text-primary hover:scale-105 active:scale-95"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/10 blur-xl animate-pulse" />
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 p-1">
                <div className="w-full h-full rounded-full border border-primary/20 p-1">
                  <img
                    src={profilePhoto}
                    alt="Omar Mokhtar - Software Engineer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative dots */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary/60"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-primary/40"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
