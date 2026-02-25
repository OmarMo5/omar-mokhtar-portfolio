import { useEffect, useRef, useState } from "react";
import { FolderGit2, Cpu, Radio, BrainCircuit } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const metrics = [
  { icon: FolderGit2, value: 7, suffix: "+", label: "Projects Completed" },
  { icon: Cpu, value: 15, suffix: "+", label: "Technologies Used" },
  { icon: Radio, value: 3, suffix: "", label: "Real-Time Systems Built" },
  { icon: BrainCircuit, value: 3, suffix: "", label: "AI/ML Frameworks" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const steps = 30;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold font-heading text-foreground">
      {count}{suffix}
    </span>
  );
};

const ImpactMetrics = () => {
  return (
    <section className="py-20 relative">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 0.1}>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <metric.icon size={20} className="text-primary" />
                </div>
                <Counter target={metric.value} suffix={metric.suffix} />
                <p className="text-sm text-muted-foreground mt-2 font-heading">{metric.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
