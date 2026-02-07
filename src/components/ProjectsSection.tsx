import { ExternalLink, Github, Folder } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  color: string;
}

const projects: Project[] = [
  {
    title: "Real-Time Chat App",
    description:
      "A full-featured real-time messaging application with rich media support and modern UI.",
    features: [
      "Real-time messaging with WebSocket",
      "Emoji & Markdown support",
      "File sharing with download",
      "Audio recording & sending",
    ],
    technologies: ["ReactJS", "Laravel", "WebSocket", "MySQL", "Bootstrap"],
    color: "174, 72%, 56%",
  },
  {
    title: "Skill Matrix Web App",
    description:
      "Employee profile and skill management system with admin capabilities and search.",
    features: [
      "Employee profile management",
      "Skill tracking & rating system",
      "Admin dashboard with CRUD",
      "Search by name, skill, department",
    ],
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    color: "199, 89%, 48%",
  },
  {
    title: "Freightex Shipping",
    description:
      "Multi-step quotation wizard for shipping logistics with state management.",
    features: [
      "Multi-step quotation wizard",
      "State management with validation",
      "Route guarding",
      "API-driven offers",
    ],
    technologies: ["ReactJS", "Redux", "Hooks", "Bootstrap"],
    color: "262, 83%, 58%",
  },
  {
    title: "Logistics Operations CMS",
    description:
      "Content management system for logistics operations with real-time updates.",
    features: [
      "Branch-based filtering",
      "Interactive dashboard",
      "Map visualization with routes",
      "Real-time order updates",
    ],
    technologies: ["ReactJS", "Redux", "Socket.IO", "Bootstrap"],
    color: "142, 71%, 45%",
  },
  {
    title: "Admin Dashboard",
    description:
      "Interactive analytics dashboard with charts, reporting, and calendar scheduling.",
    features: [
      "Interactive charts & analytics",
      "Search & sorting",
      "Report exporting",
      "Calendar integration",
    ],
    technologies: ["ReactJS", "Hooks", "Nivo", "FullCalendar"],
    color: "32, 95%, 44%",
  },
  {
    title: "Ecommerce Website",
    description:
      "Full-featured e-commerce platform with product management and shopping cart.",
    features: [
      "Product listing & filtering",
      "Shopping cart system",
      "Global state with Redux",
      "Responsive design",
    ],
    technologies: ["React", "Redux", "Hooks", "Bootstrap"],
    color: "346, 77%, 50%",
  },
  {
    title: "Organize-Posts App",
    description:
      "Post management application with tags, admin controls, and full CRUD operations.",
    features: [
      "Post management with tags",
      "Admin control panel",
      "Full CRUD operations",
      "Backend data validation",
    ],
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    color: "210, 79%, 46%",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <div className="card-glass group h-full flex flex-col overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.15)]">
          {/* Project icon header */}
          <div
            className="relative px-6 pt-6 pb-4 flex items-center justify-between"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `hsl(${project.color}, 0.12)`,
                border: `1px solid hsl(${project.color}, 0.25)`,
              }}
            >
              <Folder
                size={24}
                style={{ color: `hsl(${project.color})` }}
              />
            </div>
            <div className="flex gap-1.5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="View source code"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="View live project"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-3 flex-1 flex flex-col">
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <ul className="space-y-1.5 mb-5 flex-1">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: `hsl(${project.color})` }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech footer */}
          <div className="px-6 pb-6 pt-2 border-t border-border/50">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
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
      </motion.div>
    </ScrollReveal>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">03.</span>
            <h2 className="section-heading">Projects</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">Some things I've built</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
