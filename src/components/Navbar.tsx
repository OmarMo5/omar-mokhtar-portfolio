import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { useLang } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  const navItems = [
    { label: t.nav.home,           href: "#home" },
    { label: t.nav.about,          href: "#about" },
    { label: t.nav.whatIDo,        href: "#what-i-do" },
    { label: t.nav.skills,         href: "#skills" },
    { label: t.nav.projects,       href: "#projects" },
    { label: t.nav.achievements,   href: "#achievements" },
    { label: t.nav.certifications, href: "#certifications" },
    { label: t.nav.contact,        href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [t]);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <button
          onClick={(e) => handleClick(e, "#home")}
          className="font-heading text-lg font-bold text-primary tracking-tight"
        >
          &lt;Omar /&gt;
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`nav-link text-sm font-medium pb-1 ${
                activeSection === item.href.slice(1) ? "active text-primary" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="relative h-9 px-3 rounded-lg flex items-center justify-center font-heading text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-transparent hover:border-primary/20 tracking-widest"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18 }}
              >
                {lang === "en" ? "AR" : "EN"}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Sun size={17} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Moon size={17} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-start text-sm font-medium py-2 transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
