import { Code2, Scale, Shield, Gauge, GitBranch } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const principles = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Separation of concerns, modular design, and clear boundaries between layers. Code should communicate intent.",
  },
  {
    icon: Scale,
    title: "Scalability",
    description: "Design systems that grow gracefully. Choose patterns that handle increased load without architectural rewrites.",
  },
  {
    icon: Shield,
    title: "Maintainability",
    description: "Write code for the next developer. Consistent patterns, meaningful abstractions, and comprehensive documentation.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Measure first, optimize second. Lazy loading, efficient queries, and strategic caching where it matters.",
  },
  {
    icon: GitBranch,
    title: "Code Quality",
    description: "Type safety, thorough validation, and defensive programming. Every edge case is a future bug prevented.",
  },
];

const EngineeringPhilosophy = () => {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">05.</span>
            <h2 className="section-heading">Engineering Philosophy</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">How I think about building software</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((principle, index) => (
            <ScrollReveal key={principle.title} delay={index * 0.08}>
              <div className="card-glass p-6 h-full transition-all duration-300 hover:border-primary/20">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <principle.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPhilosophy;
