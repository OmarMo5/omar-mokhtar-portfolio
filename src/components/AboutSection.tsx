import { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Briefcase, User, ChevronDown, MapPin, Calendar, ChevronRight } from "lucide-react";

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
    <section id="about" className="py-14 sm:py-24 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">01.</span>
            <h2 className="section-heading">About Me</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">Get to know me better</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Bio */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <User className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Who I Am
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am <span className="text-foreground font-medium">Omar Mokhtar Mohamed</span>, a Software Engineer specialized in Back-End development, with solid hands-on experience in Front-End technologies. I enjoy building scalable, efficient, and high-quality web applications, and I'm always focused on writing clean, maintainable code that follows modern engineering standards.
                  </p>

                  <div
                    ref={contentRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: expanded ? contentRef.current?.scrollHeight + "px" : "0px",
                      opacity: expanded ? 1 : 0,
                    }}
                  >
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      My primary expertise lies in Back-End development using PHP and Laravel, where I design and build robust systems, manage databases efficiently using MySQL, and handle business logic with a strong focus on performance and scalability.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      I also have strong experience in Front-End development, working with HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, React.js, Redux, and Hooks — allowing me to build complete, full-stack applications with seamless user experiences.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      I'm interested in automation and workflow optimization with practical experience using n8n, and I have a good foundational understanding of Docker for containerized environments. Beyond development, I have a deep interest in theoretical computer science and artificial intelligence.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      I built this portfolio to showcase not only my projects, but also how I think, design systems, and solve problems. I'm always learning, always improving, and constantly looking for new challenges.
                    </p>
                  </div>

                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group"
                  >
                    {expanded ? "Read Less" : "Read More"}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Education
                  </h3>
                  <p className="text-foreground font-medium">
                    Bachelor's in Computer Science
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Helwan University, Cairo, Egypt
                  </p>
                  <p className="text-primary text-sm font-heading mt-1">GPA: 3.2 / 4.0</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="flex items-start gap-3">
              <Briefcase className="text-primary mt-1 shrink-0" size={20} />
              <div className="w-full">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Experience
                </h3>
                <div className="relative space-y-0">
                  {/* Timeline line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

                  {experiences.map((exp, index) => {
                    const isOpen = expandedExp === index;
                    return (
                      <div key={index} className="relative pl-7 pb-5 last:pb-0">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background z-10" />

                        <button
                          onClick={() => setExpandedExp(isOpen ? null : index)}
                          className="w-full text-left card-glass p-4 transition-all duration-300 hover:border-primary/30 group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <p className="text-foreground font-medium text-sm sm:text-base">{exp.role}</p>
                              <p className="text-primary text-sm font-heading">{exp.company}</p>
                              <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                {exp.types.map((t) => (
                                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                    {t}
                                  </span>
                                ))}
                              </div>
                              <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                                {exp.location && (
                                  <span className="inline-flex items-center gap-1">
                                    <MapPin size={11} /> {exp.location}
                                  </span>
                                )}
                                {exp.duration && (
                                  <span className="inline-flex items-center gap-1">
                                    <Calendar size={11} /> {exp.duration}
                                  </span>
                                )}
                              </div>
                            </div>
                            <ChevronRight
                              size={16}
                              className={`text-muted-foreground shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
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
                                  <li key={i} className="text-muted-foreground text-xs leading-relaxed flex items-start gap-2">
                                    <span className="text-primary mt-0.5 shrink-0">▹</span>
                                    {r}
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                  <span key={tech} className="skill-badge text-xs !px-2 !py-1">
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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
