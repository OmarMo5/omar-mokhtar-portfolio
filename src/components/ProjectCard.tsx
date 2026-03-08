import { useState } from "react";
import { ExternalLink, Github, Folder, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  color: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <div
        className="h-[420px] cursor-pointer [perspective:1200px]"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          whileHover={{ y: -8, boxShadow: `0 20px 40px -10px hsl(${project.color}, 0.2)` }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 [backface-visibility:hidden] card-glass flex flex-col overflow-hidden group"
          >
            <div className="px-6 pt-6 pb-4 flex items-center justify-between">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `hsl(${project.color}, 0.12)`,
                  border: `1px solid hsl(${project.color}, 0.25)`,
                }}
              >
                <Folder size={24} style={{ color: `hsl(${project.color})` }} />
              </div>
              <span
                className="text-xs font-heading px-2.5 py-1 rounded-md text-muted-foreground border border-border/50"
              >
                Click to flip
              </span>
            </div>

            <div className="px-6 pb-4 flex-1 flex flex-col">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="mt-auto pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-heading px-2.5 py-1 rounded-md"
                      style={{
                        color: `hsl(${project.color})`,
                        background: `hsl(${project.color}, 0.08)`,
                        border: `1px solid hsl(${project.color}, 0.15)`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] card-glass flex flex-col overflow-hidden"
          >
            <div className="px-6 pt-5 pb-3 flex items-center justify-between border-b border-border/50">
              <h3 className="font-heading text-base font-bold text-primary">
                {project.title}
              </h3>
              <button
                onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Flip back"
              >
                <RotateCcw size={16} />
              </button>
            </div>

            <div className="px-6 py-4 flex-1 flex flex-col overflow-y-auto">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <h4 className="font-heading text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Key Features
              </h4>
              <ul className="space-y-1.5 mb-4 flex-1">
                {project.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: `hsl(${project.color})` }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-heading px-2 py-0.5 rounded-md"
                    style={{
                      color: `hsl(${project.color})`,
                      background: `hsl(${project.color}, 0.08)`,
                      border: `1px solid hsl(${project.color}, 0.15)`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 pb-5 pt-2 border-t border-border/50 flex gap-3">
              <a
                href="#"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 text-sm font-heading py-2 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <Github size={15} /> Source Code
              </a>
              <a
                href="#"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 text-sm font-heading py-2 rounded-lg text-primary-foreground transition-all"
                style={{
                  background: `hsl(${project.color})`,
                }}
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
};

export default ProjectCard;
