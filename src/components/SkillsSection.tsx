import { useState } from "react";
import { Code, Server, Layout, Database, Lightbulb, Wrench, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "Java", "Python"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["PHP", "Laravel", "Livewire", "Filament", "Redis", "WordPress"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "Bootstrap", "Material UI", "ShadCN UI", "JavaScript", "TypeScript", "jQuery", "React.js", "Hooks", "Redux", "Context API", "Toolkit", "Next.js"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "SQL Server", "Oracle"],
  },
  {
    title: "Concepts",
    icon: Lightbulb,
    skills: ["Data Structures", "Databases", "OOP & SOLID Principles", "Clean Code", "Design Patterns"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git & GitHub", "n8n Automation", "Docker"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Communication", "Teamwork & Collaboration", "Adaptability"],
  },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-14 sm:py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">02.</span>
            <h2 className="section-heading">Skills</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">Technologies I work with</p>
        </ScrollReveal>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={category.title} delay={catIndex * 0.08}>
                <div className="card-glass p-5 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-primary tracking-wider uppercase">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Mobile: Tabs layout */}
        <div className="md:hidden">
          <ScrollReveal>
            {/* Tab buttons - horizontal scroll */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide -mx-1 px-1">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.title}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-heading font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                      activeTab === index
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon size={14} />
                    {category.title}
                  </button>
                );
              })}
            </div>

            {/* Active tab content */}
            <div className="card-glass p-4">
              <div className="flex items-center gap-2.5 mb-3">
                {(() => {
                  const Icon = skillCategories[activeTab].icon;
                  return (
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                  );
                })()}
                <h3 className="font-heading text-sm font-semibold text-primary tracking-wider uppercase">
                  {skillCategories[activeTab].title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategories[activeTab].skills.map((skill) => (
                  <span key={skill} className="skill-badge text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 mt-3">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    activeTab === index
                      ? "bg-primary w-4"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
