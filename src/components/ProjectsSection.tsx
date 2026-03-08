import ScrollReveal from "./ScrollReveal";
import ProjectCarousel, { type Project } from "./ProjectCarousel";

const projects: Project[] = [
  {
    title: "Real-Time Chat App",
    description: "A full-featured real-time messaging application with rich media support and modern UI.",
    features: ["Real-time messaging with WebSocket", "Emoji & Markdown support", "File sharing with download", "Audio recording & sending"],
    technologies: ["ReactJS", "Laravel", "WebSocket", "MySQL", "Bootstrap"],
    color: "174, 72%, 56%",
  },
  {
    title: "Skill Matrix Web App",
    description: "Employee profile and skill management system with admin capabilities and search.",
    features: ["Employee profile management", "Skill tracking & rating system", "Admin dashboard with CRUD", "Search by name, skill, department"],
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    color: "199, 89%, 48%",
  },
  {
    title: "Freightex Shipping",
    description: "Multi-step quotation wizard for shipping logistics with state management.",
    features: ["Multi-step quotation wizard", "State management with validation", "Route guarding", "API-driven offers"],
    technologies: ["ReactJS", "Redux", "Hooks", "Bootstrap"],
    color: "262, 83%, 58%",
  },
  {
    title: "Logistics Operations CMS",
    description: "Content management system for logistics operations with real-time updates.",
    features: ["Branch-based filtering", "Interactive dashboard", "Map visualization with routes", "Real-time order updates"],
    technologies: ["ReactJS", "Redux", "Socket.IO", "Bootstrap"],
    color: "142, 71%, 45%",
  },
  {
    title: "Admin Dashboard",
    description: "Interactive analytics dashboard with charts, reporting, and calendar scheduling.",
    features: ["Interactive charts & analytics", "Search & sorting", "Report exporting", "Calendar integration"],
    technologies: ["ReactJS", "Hooks", "Nivo", "FullCalendar"],
    color: "32, 95%, 44%",
  },
  {
    title: "Ecommerce Website",
    description: "Full-featured e-commerce platform with product management and shopping cart.",
    features: ["Product listing & filtering", "Shopping cart system", "Global state with Redux", "Responsive design"],
    technologies: ["React", "Redux", "Hooks", "Bootstrap"],
    color: "346, 77%, 50%",
  },
  {
    title: "Organize-Posts App",
    description: "Post management application with tags, admin controls, and full CRUD operations.",
    features: ["Post management with tags", "Admin control panel", "Full CRUD operations", "Backend data validation"],
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    color: "210, 79%, 46%",
  },
];

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
          <p className="section-subheading">Drag, scroll, or use arrows to explore · Click a card to flip</p>
        </ScrollReveal>

        <ScrollReveal>
          <ProjectCarousel projects={projects} />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
