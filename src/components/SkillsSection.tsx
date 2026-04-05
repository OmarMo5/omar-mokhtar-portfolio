import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "Java", "Python"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Livewire", "Filament", "Redis", "WordPress"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Bootstrap", "Material UI", "ShadCN UI", "JavaScript", "TypeScript", "jQuery", "React.js", "Hooks", "Redux", "Context API", "Toolkit", "Next.js"],
  },
  {
    title: "Database",
    skills: ["MySQL", "SQL Server", "Oracle"],
  },
  {
    title: "Concepts",
    skills: ["Data Structures", "Databases", "OOP & SOLID Principles", "Clean Code", "Design Patterns"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "n8n Automation", "Docker"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Teamwork & Collaboration", "Adaptability"],
  },
];

const SkillsSection = () => {
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

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.08}>
              <div className="card-glass p-4 sm:p-5 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <h3 className="font-heading text-xs sm:text-sm font-semibold text-primary mb-3 tracking-wider uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge text-xs sm:text-sm">
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
