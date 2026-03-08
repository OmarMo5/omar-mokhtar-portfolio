import { useState, useCallback, useRef, useEffect } from "react";
import { ExternalLink, Github, Folder, RotateCcw } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  color: string;
}

const FlipCard = ({ project, isCentered }: { project: Project; isCentered: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip when card leaves center
  useEffect(() => {
    if (!isCentered) setIsFlipped(false);
  }, [isCentered]);

  return (
    <div
      className="w-[300px] h-[380px] shrink-0 cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => isCentered && setIsFlipped((f) => !f)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 card-glass flex flex-col overflow-hidden group"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="px-5 pt-5 pb-3 flex items-center justify-between">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{
                background: `hsl(${project.color} / 0.12)`,
                border: `1px solid hsl(${project.color} / 0.25)`,
              }}
            >
              <Folder size={22} style={{ color: `hsl(${project.color})` }} />
            </div>
            {isCentered && (
              <span className="text-xs font-heading px-2 py-0.5 rounded-md text-muted-foreground border border-border/50 animate-fade-in">
                Click to flip
              </span>
            )}
          </div>
          <div className="px-5 pb-4 flex-1 flex flex-col">
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3">
              {project.description}
            </p>
            <div className="mt-auto pt-3 border-t border-border/50">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-heading px-2 py-0.5 rounded-md"
                    style={{
                      color: `hsl(${project.color})`,
                      background: `hsl(${project.color} / 0.08)`,
                      border: `1px solid hsl(${project.color} / 0.15)`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 card-glass flex flex-col overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="px-5 pt-4 pb-2 flex items-center justify-between border-b border-border/50">
            <h3 className="font-heading text-sm font-bold text-primary">{project.title}</h3>
            <button
              onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <RotateCcw size={14} />
            </button>
          </div>
          <div className="px-5 py-3 flex-1 flex flex-col overflow-y-auto">
            <p className="text-muted-foreground text-xs leading-relaxed mb-3">{project.description}</p>
            <h4 className="font-heading text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Key Features</h4>
            <ul className="space-y-1 mb-3 flex-1">
              {project.features.map((f) => (
                <li key={f} className="text-xs text-muted-foreground flex items-start gap-1.5">
                  <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ background: `hsl(${project.color})` }} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-[10px] font-heading px-1.5 py-0.5 rounded" style={{ color: `hsl(${project.color})`, background: `hsl(${project.color} / 0.08)`, border: `1px solid hsl(${project.color} / 0.15)` }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="px-5 pb-4 pt-2 border-t border-border/50 flex gap-2">
            <a href="#" onClick={(e) => e.stopPropagation()} className="flex-1 flex items-center justify-center gap-1.5 text-xs font-heading py-1.5 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Github size={13} /> Source
            </a>
            <a href="#" onClick={(e) => e.stopPropagation()} className="flex-1 flex items-center justify-center gap-1.5 text-xs font-heading py-1.5 rounded-lg text-primary-foreground transition-all" style={{ background: `hsl(${project.color})` }}>
              <ExternalLink size={13} /> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: CarouselProps) => {
  const count = projects.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const angleStep = 360 / count;
  const radius = 480;

  const next = useCallback(() => setActiveIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + count) % count), [count]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // Mouse drag
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = e.clientX - dragStart.current;
    if (Math.abs(diff) > 50) {
      diff < 0 ? next() : prev();
    }
  };

  // Wheel
  const wheelTimeout = useRef<ReturnType<typeof setTimeout>>();
  const onWheel = (e: React.WheelEvent) => {
    if (wheelTimeout.current) return;
    if (Math.abs(e.deltaX) > 20) {
      e.deltaX > 0 ? next() : prev();
      wheelTimeout.current = setTimeout(() => { wheelTimeout.current = undefined; }, 400);
    }
  };

  return (
    <div className="relative">
      {/* Carousel container */}
      <div
        ref={containerRef}
        className="relative mx-auto overflow-hidden select-none"
        style={{ height: "480px", perspective: "1200px" }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={() => setIsDragging(false)}
        onWheel={onWheel}
      >
        <div
          className="absolute left-1/2 top-1/2 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateX(-50%) translateY(-50%) rotateY(${-activeIndex * angleStep}deg)`,
            width: "320px",
            height: "400px",
          }}
        >
          {projects.map((project, i) => {
            const angle = i * angleStep;
            const isCentered = i === activeIndex;
            return (
              <div
                key={project.title}
                className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  opacity: isCentered ? 1 : 0.5,
                  filter: isCentered ? "none" : "brightness(0.6)",
                }}
              >
                <FlipCard project={project} isCentered={isCentered} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
          aria-label="Previous project"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === activeIndex ? "hsl(var(--primary))" : "hsl(var(--muted))",
                transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
          aria-label="Next project"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Project counter */}
      <p className="text-center text-muted-foreground text-sm font-heading mt-3">
        <span className="text-primary">{String(activeIndex + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(projects.length).padStart(2, "0")}</span>
      </p>
    </div>
  );
};

export default ProjectCarousel;
export { FlipCard };
