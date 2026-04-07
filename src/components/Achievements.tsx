import { motion } from "framer-motion";
import { Rocket, Clock, Gauge, Blocks } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    title: "20+ Completed Projects",
    description: "Delivered production-ready web applications across e-commerce, education, and SaaS domains.",
    icon: <Rocket size={22} />,
  },
  {
    title: "2 Years Professional Experience",
    description: "Consistent growth building scalable frontend solutions with React and TypeScript.",
    icon: <Clock size={22} />,
  },
  {
    title: "Performance Optimization",
    description: "Reduced load times by up to 60% through code splitting, lazy loading, and memoization.",
    icon: <Gauge size={22} />,
  },
  {
    title: "Reusable Component Architecture",
    description: "Built design systems and shared component libraries adopted across multiple teams.",
    icon: <Blocks size={22} />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Milestones</p>
        <h2 className="section-title">Key Achievements</h2>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card group text-center transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              {item.icon}
            </div>
            <h3 className="font-display text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
