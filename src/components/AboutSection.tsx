import { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Briefcase, User, ChevronDown, MapPin, Calendar, ChevronRight, Code2, Layers, Zap } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience", icon: Zap },
  { value: "3", label: "Companies", icon: Briefcase },
  { value: "40+", label: "Technologies", icon: Layers },
  { value: "∞", label: "Lines of Code", icon: Code2 },
];

const experiences = [
  {
    role: "Back-End Developer",
    company: "AL-Salam ASC",
    types: ["Full-Time (Nov 2025 – Present)", "Part-Time (Apr 2025 – Nov 2025)"],
    location: "Cairo",
    responsibilities: [
      "Improved website development, design, and SEO performance",
      "Enhanced and optimized websites using WordPress",
      "Worked on custom WordPress themes and plugins",
      "Built scalable backend systems using Laravel",
      "Implemented authentication, authorization, and database management",
      "Developed and improved store websites using JavaScript and CSS",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "TypeScript", "React.js", "WordPress", "PHP", "Laravel", "MySQL"],
  },
  {
    role: "Web Developer",
    company: "Momentum Solutions Co.",
    types: ["Hybrid"],
    location: "Cairo, Egypt",
    duration: "Jan 2025 – Nov 2025",
    responsibilities: [
      "Developed and maintained scalable RESTful APIs using Laravel (PHP)",
      "Applied clean architecture principles for performance and maintainability",
      "Built backend systems including authentication, authorization, and real-time features (WebSockets)",
      "Optimized database queries and backend logic",
      "Collaborated with frontend teams to integrate APIs with React applications",
      "Developed and improved multiple websites using modern frontend technologies",
      "Applied UI/UX best practices for better user experience",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "TypeScript", "React.js", "Redux", "Hooks", "PHP", "Laravel", "MySQL"],
  },
  {
    role: "Intern – Back-End Developer",
    company: "Advanced Computer Technology (ACT)",
    types: ["Internship"],
    location: "Smart Village",
    duration: "Aug 2022 – Sep 2022",
    responsibilities: [
      "Worked on a real internal company system to manage employee data",
      "Built and maintained multiple parts of the web application",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "SQL Server"],
  },
];

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-14 sm:py-24 relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(174,72%,56%) 1px, transparent 1px), linear-gradient(90deg, hsl(174,72%,56%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">01.</span>
            <h2 className="section-heading">About Me</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">Get to know me better</p>
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 sm:mb-14">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="card-glass p-4 sm:p-5 flex items-center gap-3 group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-xl sm:text-2xl font-bold text-primary leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Bio */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="space-y-6">
              {/* Who I Am */}
              <div className="card-glass p-5 sm:p-6 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User size={15} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground tracking-wider uppercase">
                    Who I Am
                  </h3>
                </div>

                {/* Highlighted quote */}
                <div className="border-l-2 border-primary pl-4 mb-4">
                  <p className="text-foreground text-sm font-medium leading-relaxed italic">
                    "I build systems that are clean by design, scalable by default, and meaningful in purpose."
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  I am <span className="text-foreground font-medium">Omar Mokhtar Mohamed</span>, a Software Engineer specialized in Back-End development with solid hands-on experience across the full stack. I enjoy building scalable, efficient, and high-quality web applications focused on clean, maintainable code.
                </p>

                <div
                  ref={contentRef}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: expanded ? (contentRef.current?.scrollHeight ?? 500) + "px" : "0px",
                    opacity: expanded ? 1 : 0,
                  }}
                >
                  <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                    My primary expertise lies in Back-End development using PHP and Laravel — designing robust systems, managing databases efficiently with MySQL, and handling business logic with a strong focus on performance and scalability.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                    I also have strong experience in Front-End development with HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, React.js, Redux, and Hooks — allowing me to build complete full-stack applications with seamless user experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                    I'm interested in automation and workflow optimization with practical experience using n8n, and a foundational understanding of Docker. Beyond development, I have a deep interest in theoretical computer science and artificial intelligence.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                    I built this portfolio to showcase not only my projects, but how I think, design systems, and solve problems. Always learning. Always improving.
                  </p>
                </div>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-1.5 mt-4 text-xs font-heading font-medium text-primary hover:text-primary/80 transition-colors duration-200 px-3 py-1.5 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                >
                  {expanded ? "Read Less" : "Read More"}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {/* Education */}
              <div className="card-glass p-5 sm:p-6 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap size={15} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground tracking-wider uppercase">
                    Education
                  </h3>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-foreground font-medium text-sm">
                      Bachelor's in Computer Science
                    </p>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      Helwan University — Cairo, Egypt
                    </p>
                  </div>
                  <div className="shrink-0 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-primary text-xs font-heading font-semibold">3.2 / 4.0</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="card-glass p-5 sm:p-6 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase size={15} className="text-primary" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground tracking-wider uppercase">
                  Experience
                </h3>
              </div>

              <div className="relative space-y-0">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-border" />

                {experiences.map((exp, index) => {
                  const isOpen = expandedExp === index;
                  return (
                    <div key={index} className="relative pl-7 pb-4 last:pb-0">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 z-10 transition-all duration-300 ${
                          isOpen
                            ? "border-primary bg-primary scale-110 shadow-[0_0_8px_0px] shadow-primary/50"
                            : "border-primary bg-background"
                        }`}
                      />

                      <button
                        onClick={() => setExpandedExp(isOpen ? null : index)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                          isOpen
                            ? "border-primary/30 bg-primary/5 shadow-sm shadow-primary/10"
                            : "border-border bg-[hsl(222,44%,9%)] hover:border-border/80 hover:bg-[hsl(222,44%,10%)]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="text-foreground font-medium text-sm">{exp.role}</p>
                            <p className="text-primary text-xs font-heading mt-0.5">{exp.company}</p>
                            <div className="flex flex-wrap items-center gap-1.5 mt-2">
                              {exp.types.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-heading"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                            <div className="flex flex-wrap items-center gap-3 mt-1.5 text-[11px] text-muted-foreground">
                              {exp.location && (
                                <span className="inline-flex items-center gap-1">
                                  <MapPin size={10} /> {exp.location}
                                </span>
                              )}
                              {exp.duration && (
                                <span className="inline-flex items-center gap-1">
                                  <Calendar size={10} /> {exp.duration}
                                </span>
                              )}
                            </div>
                          </div>
                          <ChevronRight
                            size={15}
                            className={`text-muted-foreground shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? "rotate-90 text-primary" : ""}`}
                          />
                        </div>

                        {/* Expandable details */}
                        <div
                          className="overflow-hidden transition-all duration-400 ease-in-out"
                          style={{
                            maxHeight: isOpen ? "600px" : "0px",
                            opacity: isOpen ? 1 : 0,
                          }}
                        >
                          <div className="mt-3 pt-3 border-t border-border">
                            <ul className="space-y-1.5 mb-3">
                              {exp.responsibilities.map((r, i) => (
                                <li
                                  key={i}
                                  className="text-muted-foreground text-xs leading-relaxed flex items-start gap-2"
                                >
                                  <span className="text-primary mt-0.5 shrink-0">▹</span>
                                  {r}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[10px] px-2 py-0.5 rounded-md font-heading border border-border bg-secondary/50 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors duration-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
