import { Monitor, Server, Code, BrainCircuit, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "React Hooks", "Bootstrap", "Material UI"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["PHP", "Laravel", "MySQL", "SQL Server"],
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "Java", "C"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "Keras", "PyTorch"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub", "WebSocket", "Socket.IO"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">02.</span>
            <h2 className="section-heading">Technical Stack</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">Technologies & tools I work with</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.08}>
              <div className="card-glass p-6 h-full transition-all duration-300 hover:border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <category.icon size={16} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground tracking-wider uppercase">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
