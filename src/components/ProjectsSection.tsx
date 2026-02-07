import { ExternalLink, Github } from "lucide-react";
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
    description: "A full-featured real-time messaging application with rich media support.",
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
    description: "Employee profile and skill management system with admin capabilities.",
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
    description: "Multi-step quotation wizard for shipping logistics.",
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
    description: "Content management system for logistics operations with real-time updates.",
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
    description: "Interactive analytics dashboard with charts, reporting, and scheduling.",
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
    description: "Full-featured e-commerce platform with product management and shopping cart.",
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
    description: "Post management application with tags and admin controls.",
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="card-glass group overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
        {/* Color accent bar */}
        <div
          className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
          style={{
            background: `linear-gradient(90deg, hsl(${project.color}), hsl(${project.color}, 0.4))`,
          }}
        />

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <button
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label="View source"
              >
                <Github size={18} />
              </button>
              <button
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label="View project"
              >
                <ExternalLink size={18} />
              </button>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          <ul className="space-y-1.5 mb-5">
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

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-heading px-2 py-1 rounded"
                style={{
                  color: `hsl(${project.color})`,
                  background: `hsl(${project.color}, 0.1)`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
