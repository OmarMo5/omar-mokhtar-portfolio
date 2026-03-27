import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Briefcase, User } from "lucide-react";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Momentum Solutions",
    type: "Full-time",
  },
  {
    role: "Web Developer",
    company: "AL-Salam ASC",
    type: "Part-time",
  },
  {
    role: "Intern",
    company: "Advanced Computer Technology (ACT)",
    type: "Internship",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-14 sm:py-24 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">01.</span>
            <h2 className="section-heading">About Me</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">Get to know me better</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Bio */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <User className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Who I Am
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am <span className="text-foreground font-medium">Omar Mokhtar Mohamed</span>, a Software Engineer specialized in Back-End development, with solid hands-on experience in Front-End technologies. I enjoy building scalable, efficient, and high-quality web applications, and I'm always focused on writing clean, maintainable code that follows modern engineering standards.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    My primary expertise lies in Back-End development using PHP and Laravel, where I design and build robust systems, manage databases efficiently using MySQL, and handle business logic with a strong focus on performance and scalability.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    I also have strong experience in Front-End development, working with HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, React.js, Redux, and Hooks — allowing me to build complete, full-stack applications with seamless user experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    I'm interested in automation and workflow optimization with practical experience using n8n, and I have a good foundational understanding of Docker for containerized environments. Beyond development, I have a deep interest in theoretical computer science and artificial intelligence.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    I built this portfolio to showcase not only my projects, but also how I think, design systems, and solve problems. I'm always learning, always improving, and constantly looking for new challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Education
                  </h3>
                  <p className="text-foreground font-medium">
                    Bachelor's in Computer Science
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Helwan University, Cairo, Egypt
                  </p>
                  <p className="text-primary text-sm font-heading mt-1">GPA: 3.2 / 4.0</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Experience */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="flex items-start gap-3">
              <Briefcase className="text-primary mt-1 shrink-0" size={20} />
              <div className="w-full">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Experience
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="card-glass p-4 transition-all duration-300 hover:border-primary/30"
                    >
                      <p className="text-foreground font-medium">{exp.role}</p>
                      <p className="text-primary text-sm font-heading">{exp.company}</p>
                      <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {exp.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
