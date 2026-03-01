import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "React Hooks", "Bootstrap", "Material UI"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "MySQL", "SQL Server"],
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "C"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "Keras", "PyTorch"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "WebSocket", "Socket.IO"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.1}>
              <div className="card-glass p-6 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <h3 className="font-heading text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
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
