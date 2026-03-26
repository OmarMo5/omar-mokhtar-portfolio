import ScrollReveal from "./ScrollReveal";
import ProjectCarousel, { type Project } from "./ProjectCarousel";

const projects: Project[] = [
  {
    title: "AOLC Platform",
    description: "Administrative dashboard for managing church events, schedules, and community engagement.",
    features: ["Event scheduling & location management", "Structured community engagement system", "Full admin CRUD operations"],
    technologies: ["ReactJS", "Laravel", "MySQL", "Bootstrap", "DaisyUI"],
    color: "174, 72%, 56%",
  },
  {
    title: "LomaTech Logistics",
    description: "Logistics management system with real-time shipment tracking and live driver monitoring.",
    features: ["Real-time map visualization & route tracking", "Branch-based filtering with dynamic data loading", "Order & driver status dashboard with geofencing"],
    technologies: ["ReactJS", "Laravel", "MySQL", "WebSocket", "Bootstrap"],
    color: "199, 89%, 48%",
  },
  {
    title: "Smart Finance Platform",
    description: "Financial management system for tracking expenses and generating real-time insights.",
    features: ["Expense tracking & bookkeeping", "Interactive analytics dashboards", "Real-time financial reporting"],
    technologies: ["ReactJS", "Laravel", "MySQL", "Bootstrap", "DaisyUI"],
    color: "262, 83%, 58%",
  },
  {
    title: "Calta Group Website",
    description: "Premium real estate platform showcasing luxury residential properties.",
    features: ["Modern responsive UI design", "Property showcase & filtering", "High-quality user experience"],
    technologies: ["ReactJS", "Laravel", "MySQL", "Bootstrap", "DaisyUI"],
    color: "142, 71%, 45%",
  },
  {
    title: "Lip Reading in Arabic",
    description: "Mobile app helping people with speech and hearing disabilities communicate through lip reading.",
    features: ["Android & iOS support via Flutter", "Deep learning-based lip reading model", "Built with a team of 6 members"],
    technologies: ["Python", "PyTorch", "FastAPI", "Flutter"],
    color: "32, 95%, 44%",
  },
  {
    title: "Vehicle Routing Problem",
    description: "Optimized vehicle routing using Genetic Algorithms and Differential Evolution.",
    features: ["Genetic Algorithm implementation", "Differential Evolution optimization", "Minimized total travel distance under constraints"],
    technologies: ["Python"],
    color: "346, 77%, 50%",
  },
  {
    title: "Airline Reservation System",
    description: "Desktop application for airline seat reservation with real-time availability checking.",
    features: ["Seat reservation & availability check", "Multi-threaded client-side application", "Interactive Swing GUI"],
    technologies: ["Java", "Swing GUI", "Multithreading"],
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
