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
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">01.</span>
            <h2 className="section-heading">About Me</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">Get to know me better</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
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
                    I am <span className="text-foreground font-medium">Omar Mokhtar Mohamed</span>, a software engineer
                    with a passion for theoretical computer science and AI research. I specialize in building
                    modern, responsive web applications with clean code and great user experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    With expertise in both front-end and back-end development, I enjoy working with technologies
                    like React.js, Redux, PHP, Laravel, and exploring the frontiers of Machine Learning
                    with TensorFlow, Keras, and PyTorch.
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
