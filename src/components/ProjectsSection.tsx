import { useState } from "react";
import { ExternalLink, Github, Folder, Star, ArrowRight, X, Layers, Database, Zap, Lightbulb, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  color: string;
  category: string;
  featured?: boolean;
  caseStudy?: {
    problem: string;
    architecture: string;
    scalability: string;
    challenges: string;
    lessons: string;
  };
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
    category: "Full Stack",
    featured: true,
    caseStudy: {
      problem: "Building a reliable real-time messaging system that handles concurrent users, media sharing, and maintains message ordering across distributed connections.",
      architecture: "Event-driven architecture using WebSocket for bi-directional communication. Laravel serves as the API backend with MySQL for persistent storage. React handles optimistic UI updates for instant feedback.",
      scalability: "Implemented connection pooling and message queuing to handle concurrent WebSocket connections. Lazy loading for message history with infinite scroll pagination.",
      challenges: "Ensuring message delivery guarantees across unstable network conditions. Solved with acknowledgment-based messaging and local message queuing with retry logic.",
      lessons: "Learned the importance of optimistic UI updates for perceived performance. WebSocket reconnection strategies are critical for production-grade real-time apps.",
    },
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
    category: "Full Stack",
    caseStudy: {
      problem: "Organizations needed a centralized system to track employee skills, identify skill gaps, and facilitate team formation based on competencies.",
      architecture: "Traditional MVC architecture with PHP backend, MySQL relational database with normalized schema for skills and employees, and Bootstrap responsive frontend.",
      scalability: "Indexed search queries on skill and department columns. Paginated results for large employee datasets.",
      challenges: "Designing a flexible rating system that accommodates different skill levels and categories while maintaining query performance.",
      lessons: "Normalized database design pays off when query patterns are predictable. Server-side validation is non-negotiable for data integrity.",
    },
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
    category: "Frontend",
    caseStudy: {
      problem: "Shipping companies needed a streamlined quotation process that reduces user drop-off across multi-step forms while ensuring data accuracy.",
      architecture: "Redux-based state management with form validation at each step. Route guards prevent navigation to incomplete steps. API integration for real-time shipping rates.",
      scalability: "Modular step components allow adding new quotation steps without refactoring. Redux middleware handles async API calls cleanly.",
      challenges: "Synchronizing the homepage search with the quotation flow's initial state required careful state hydration and URL parameter parsing.",
      lessons: "Multi-step forms benefit greatly from centralized state management. Route guarding UX must balance security with user convenience.",
    },
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
    category: "Dashboards",
    caseStudy: {
      problem: "Logistics operators needed real-time visibility into fleet operations, order statuses, and route optimization across multiple branches.",
      architecture: "React frontend with Redux for state management. Socket.IO for real-time order updates. Map integration for route visualization with branch-level data isolation.",
      scalability: "Branch-based data partitioning ensures each branch only loads relevant data. Socket.IO rooms segregate real-time events by branch.",
      challenges: "Rendering complex map routes with many waypoints required careful optimization and progressive loading of route segments.",
      lessons: "Real-time systems need graceful degradation. When WebSocket connections drop, the UI should still function with periodic polling as fallback.",
    },
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
    category: "Dashboards",
    caseStudy: {
      problem: "Business teams needed a centralized analytics dashboard to visualize KPIs, schedule events, and export reports for stakeholder presentations.",
      architecture: "Component-based React architecture with Nivo for data visualization and FullCalendar for scheduling. Custom hooks for data fetching and caching.",
      scalability: "Lazy loading of chart components to reduce initial bundle size. Memoized chart data transformations for large datasets.",
      challenges: "Synchronizing calendar events with dashboard metrics while maintaining responsive chart rendering on data updates.",
      lessons: "Charting libraries have vastly different performance profiles. Nivo's declarative API proved more maintainable than imperative alternatives.",
    },
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
    category: "Full Stack",
    caseStudy: {
      problem: "Building a performant e-commerce platform with complex state management for cart operations, product filtering, and responsive product displays.",
      architecture: "Redux for global state management handling cart, products, and user preferences. Component-driven architecture with reusable product cards and filter components.",
      scalability: "Product filtering operates client-side for instant feedback. Redux selectors are memoized to prevent unnecessary re-renders of product lists.",
      challenges: "Cart state persistence across sessions and handling concurrent cart modifications required careful state reconciliation.",
      lessons: "Redux shines in e-commerce where many components need access to cart state. Reusable component patterns dramatically reduce development time.",
    },
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
    category: "Backend Systems",
    caseStudy: {
      problem: "Content teams needed a robust post management system with tagging, admin controls, and strict data validation to maintain content quality.",
      architecture: "Laravel MVC with Eloquent ORM for database operations. Many-to-many relationships for post-tag associations. Middleware-based authentication and authorization.",
      scalability: "Eager loading prevents N+1 query problems on post listings. Database indexing on frequently queried columns (tags, dates, status).",
      challenges: "Implementing flexible tag management with proper data validation while keeping the admin interface intuitive and responsive.",
      lessons: "Laravel's validation system and Eloquent relationships make CRUD applications maintainable. Backend validation is the last line of defense for data integrity.",
    },
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend Systems", "Dashboards"];

const FeaturedProject = ({ project, onOpenCaseStudy }: { project: Project; onOpenCaseStudy: (p: Project) => void }) => (
  <ScrollReveal>
    <div className="card-glass p-8 md:p-10 mb-12 border-primary/20 relative overflow-hidden">
      <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-heading text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
        <Star size={12} />
        Featured Project
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>
          <ul className="space-y-2 mb-6">
            {project.features.map((f) => (
              <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="skill-badge text-xs">{tech}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Layers size={16} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-heading text-primary uppercase tracking-wider mb-1">Architecture</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.caseStudy?.architecture?.slice(0, 120)}...
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap size={16} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-heading text-primary uppercase tracking-wider mb-1">Key Challenge</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.caseStudy?.challenges?.slice(0, 120)}...
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              View Case Study
              <ArrowRight size={14} />
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium transition-all hover:border-primary hover:text-primary"
            >
              <Github size={14} />
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  </ScrollReveal>
);

const ProjectCard = ({ project, onOpenCaseStudy }: { project: Project; index: number; onOpenCaseStudy: (p: Project) => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className="h-full"
  >
    <div className="card-glass group h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-primary/20">
      <div className="px-6 pt-6 pb-3 flex items-center justify-between">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: `hsl(${project.color}, 0.1)`,
            border: `1px solid hsl(${project.color}, 0.2)`,
          }}
        >
          <Folder size={18} style={{ color: `hsl(${project.color})` }} />
        </div>
        <div className="flex gap-1">
          <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Source code">
            <Github size={15} />
          </a>
          <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Live project">
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      <div className="px-6 pb-3 flex-1 flex flex-col">
        <h3 className="font-heading text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <ul className="space-y-1 mb-4 flex-1">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ background: `hsl(${project.color})` }} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 pb-4 pt-2 border-t border-border/40 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-heading px-2 py-0.5 rounded"
              style={{
                color: `hsl(${project.color})`,
                background: `hsl(${project.color}, 0.08)`,
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] text-muted-foreground">+{project.technologies.length - 3}</span>
          )}
        </div>
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="text-xs text-muted-foreground hover:text-primary transition-colors font-heading"
        >
          Details →
        </button>
      </div>
    </div>
  </motion.div>
);

const CaseStudyModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const sections = [
    { icon: Lightbulb, title: "Problem Statement", content: project.caseStudy?.problem },
    { icon: Layers, title: "Technical Architecture", content: project.caseStudy?.architecture },
    { icon: Database, title: "Scalability Decisions", content: project.caseStudy?.scalability },
    { icon: Zap, title: "Challenges & Solutions", content: project.caseStudy?.challenges },
    { icon: BookOpen, title: "Lessons Learned", content: project.caseStudy?.lessons },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto card-glass border-primary/20 p-8 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
        >
          <X size={16} />
        </button>

        <div className="mb-8">
          <span className="text-xs font-heading text-primary uppercase tracking-wider">Case Study</span>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-1 mb-2">{project.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="skill-badge text-xs">{tech}</span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {sections.map(({ icon: Icon, title, content }) => content && (
            <div key={title} className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={14} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-foreground mb-1.5">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-8 pt-6 border-t border-border/40">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary/25">
            <Github size={14} />
            View Source Code
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium transition-all hover:border-primary hover:text-primary">
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projects.find((p) => p.featured);
  const filteredProjects = projects.filter(
    (p) => !p.featured && (activeCategory === "All" || p.category === activeCategory)
  );

  return (
    <section id="projects" className="py-28 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">03.</span>
            <h2 className="section-heading">Projects</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">Engineering work & case studies</p>
        </ScrollReveal>

        {featuredProject && (
          <FeaturedProject project={featuredProject} onOpenCaseStudy={setSelectedProject} />
        )}

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-heading transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpenCaseStudy={setSelectedProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-12 font-heading text-sm">
            No projects in this category yet.
          </p>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
