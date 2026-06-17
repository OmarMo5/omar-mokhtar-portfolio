import { useState, useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Briefcase, User, ChevronDown, MapPin, Calendar, ChevronRight, Code2, Layers, Zap } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const statIcons = [Zap, Briefcase, Layers, Code2];

function AnimatedStat({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const [displayed, setDisplayed] = useState(match ? 0 : null);
  const ref = useRef<HTMLParagraphElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!match) return;
    const target = parseInt(match[1]);
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        const start = performance.now();
        const duration = 1600;
        const frame = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setDisplayed(Math.floor(ease * target));
          if (p < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <p ref={ref} className="font-heading text-xl sm:text-2xl font-bold text-primary leading-none">
      {match && displayed !== null ? `${displayed}${match[2]}` : value}
    </p>
  );
}

const AboutSection = () => {
  const { t, lang } = useLang();
  const [expanded, setExpanded] = useState(false);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isRtl = lang === "ar";

  const about = t.about;

  return (
    <section id="about" className="py-14 sm:py-24 relative overflow-hidden">
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
            <span className="font-heading text-sm gradient-animated">{about.num}</span>
            <h2 className="section-heading">{about.title}</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ms-4" />
          </div>
          <p className="section-subheading">{about.subtitle}</p>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 sm:mb-14">
            {about.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div key={i} className="card-glass card-shimmer p-4 sm:p-5 flex items-center gap-3 group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <AnimatedStat value={stat.value} />
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{stat.label}</p>
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
              <div className="card-glass card-shimmer p-5 sm:p-6 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User size={15} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground tracking-wider uppercase">
                    {about.whoIAmTitle}
                  </h3>
                </div>

                {/* Quote */}
                <div className="quote-border border-s-2 border-primary ps-4 mb-4">
                  <p className="text-foreground text-sm font-medium leading-relaxed italic">
                    {about.quote}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">{about.bio1}</p>

                <div
                  ref={contentRef}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: expanded ? (contentRef.current?.scrollHeight ?? 500) + "px" : "0px",
                    opacity: expanded ? 1 : 0,
                  }}
                >
                  <p className="text-muted-foreground leading-relaxed text-sm mt-3">{about.bio2}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm mt-3">{about.bio3}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm mt-3">{about.bio4}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm mt-3">{about.bio5}</p>
                </div>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-1.5 mt-4 text-xs font-heading font-medium text-primary hover:text-primary/80 transition-colors duration-200 px-3 py-1.5 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                >
                  {expanded ? about.readLess : about.readMore}
                  <ChevronDown size={13} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Education */}
              <div className="card-glass card-shimmer p-5 sm:p-6 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap size={15} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground tracking-wider uppercase">
                    {about.educationTitle}
                  </h3>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-foreground font-medium text-sm">{about.degree}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{about.university}</p>
                  </div>
                  <div className="shrink-0 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-primary text-xs font-heading font-semibold">{about.gpa}</span>
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
                  {about.experienceTitle}
                </h3>
              </div>

              <div className="relative space-y-0">
                {/* Timeline vertical line */}
                <div
                  className="timeline-line absolute top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-border"
                  style={{ [isRtl ? "right" : "left"]: "7px" }}
                />

                {about.experiences.map((exp, index) => {
                  const isOpen = expandedExp === index;
                  return (
                    <div
                      key={index}
                      className="timeline-item relative pb-4 last:pb-0"
                      style={{ [isRtl ? "paddingRight" : "paddingLeft"]: "1.75rem" }}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`timeline-dot absolute top-2 w-[15px] h-[15px] rounded-full border-2 z-10 transition-all duration-300 ${
                          isOpen
                            ? "border-primary bg-primary scale-110 shadow-[0_0_8px_0px] shadow-primary/50"
                            : "border-primary bg-background"
                        }`}
                        style={{ [isRtl ? "right" : "left"]: "0" }}
                      />

                      <button
                        onClick={() => setExpandedExp(isOpen ? null : index)}
                        className={`w-full text-start p-4 rounded-xl border transition-all duration-300 ${
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
                              {exp.types.map((typeLabel) => (
                                <span key={typeLabel} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-heading">
                                  {typeLabel}
                                </span>
                              ))}
                            </div>
                            <div className="flex flex-wrap items-center gap-3 mt-1.5 text-[11px] text-muted-foreground">
                              {exp.location && (
                                <span className="inline-flex items-center gap-1">
                                  <MapPin size={10} /> {exp.location}
                                </span>
                              )}
                              {"duration" in exp && exp.duration && (
                                <span className="inline-flex items-center gap-1">
                                  <Calendar size={10} /> {exp.duration}
                                </span>
                              )}
                            </div>
                          </div>
                          <ChevronRight
                            size={15}
                            className={`text-muted-foreground shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? "rotate-90 text-primary" : ""} ${isRtl ? "rotate-180" : ""}`}
                          />
                        </div>

                        <div
                          className="overflow-hidden transition-all duration-400 ease-in-out"
                          style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}
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
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                              {exp.technologies.map((tech) => (
                                <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md font-heading border border-border bg-secondary/50 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors duration-200">
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
