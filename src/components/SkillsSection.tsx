import { useState, useEffect } from "react";
import { Code, Server, Layout, Database, Lightbulb, Wrench, Users, Globe, Cpu, Terminal, LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/contexts/LanguageContext";

const iconMap: Record<string, LucideIcon> = {
  Code, Server, Layout, Database, Lightbulb, Wrench, Users, Globe, Cpu, Terminal,
};

interface SkillCategory {
  key: string;
  label: string;
  icon: string;
  color: string;
  bg_color: string;
  border_color: string;
  skills: string[];
}

const fallbackCategories: SkillCategory[] = [
  { key: "languages", label: "languages", icon: "Code", color: "text-[#e06c75]", bg_color: "bg-[#e06c75]/10", border_color: "border-[#e06c75]/30", skills: ["C", "Java", "Python"] },
  { key: "backend", label: "backend", icon: "Server", color: "text-[#61afef]", bg_color: "bg-[#61afef]/10", border_color: "border-[#61afef]/30", skills: ["PHP", "Laravel", "Livewire", "Filament", "Redis", "WordPress", "Node.js", "Express.js"] },
  { key: "frontend", label: "frontend", icon: "Layout", color: "text-[#98c379]", bg_color: "bg-[#98c379]/10", border_color: "border-[#98c379]/30", skills: ["HTML", "CSS", "Bootstrap", "Material UI", "ShadCN UI", "JavaScript", "TypeScript", "jQuery", "React.js", "Hooks", "Redux", "Context API", "Toolkit", "Next.js"] },
  { key: "database", label: "database", icon: "Database", color: "text-[#e5c07b]", bg_color: "bg-[#e5c07b]/10", border_color: "border-[#e5c07b]/30", skills: ["MySQL", "SQL Server", "Oracle"] },
  { key: "concepts", label: "concepts", icon: "Lightbulb", color: "text-[#c678dd]", bg_color: "bg-[#c678dd]/10", border_color: "border-[#c678dd]/30", skills: ["Data Structures", "Databases", "OOP & SOLID Principles", "Clean Code", "Design Patterns"] },
  { key: "tools", label: "tools", icon: "Wrench", color: "text-[#56b6c2]", bg_color: "bg-[#56b6c2]/10", border_color: "border-[#56b6c2]/30", skills: ["Git & GitHub", "n8n Automation", "Docker"] },
  { key: "softSkills", label: "softSkills", icon: "Users", color: "text-primary", bg_color: "bg-primary/10", border_color: "border-primary/30", skills: ["Problem Solving", "Communication", "Teamwork & Collaboration", "Adaptability", "Agile", "Scrum"] },
];

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const SkillsSection = () => {
  const { t } = useLang();
  const sk = t.skills;
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(fallbackCategories);

  useEffect(() => {
    fetch(`${API_BASE}/portfolio/skills`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => { if (data && data.length > 0) setSkillCategories(data); })
      .catch(() => {});
  }, []);

  const activeCategory = skillCategories[activeTab] ?? skillCategories[0];
  const maxSkills = Math.max(...skillCategories.map((c) => c.skills.length), 1);

  return (
    <section id="skills" className="py-14 sm:py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-sm gradient-animated">{sk.num}</span>
            <h2 className="section-heading">{sk.title}</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ms-4" />
          </div>
          <p className="section-subheading">{sk.subtitle}</p>
        </ScrollReveal>

        {/* Desktop: Code Editor Style */}
        <div className="hidden md:block">
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden border border-border shadow-2xl shadow-black/40">
              {/* Editor Top Bar */}
              <div className="flex items-center gap-0 bg-[hsl(222,44%,7%)] border-b border-border">
                <div className="flex items-center gap-1.5 px-4 py-3 border-r border-border">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(222,44%,9%)] border-r border-border text-xs font-heading text-muted-foreground">
                  <span className="text-[#e5c07b]">const</span>
                  <span className="text-foreground">techStack</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-muted-foreground">skills.config.ts</span>
                </div>
                <div className="px-4 py-3 text-xs font-heading text-muted-foreground/40 ml-auto">
                  TypeScript
                </div>
              </div>

              {/* Editor Body */}
              <div className="flex bg-[hsl(222,44%,8%)]">
                {/* Category Sidebar */}
                <div className="w-56 shrink-0 border-r border-border bg-[hsl(222,44%,7%)] py-3">
                  <p className="text-xs font-heading text-muted-foreground/50 px-4 pb-2 uppercase tracking-widest">
                    {sk.categories}
                  </p>
                  {skillCategories.map((cat, index) => {
                    const Icon = iconMap[cat.icon] ?? Code;
                    const isActive = activeTab === index;
                    return (
                      <button
                        key={cat.key}
                        onClick={() => setActiveTab(index)}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-start transition-all duration-200 group ${
                          isActive
                            ? "bg-[hsl(222,44%,11%)] border-s-2 border-primary"
                            : "border-s-2 border-transparent hover:bg-[hsl(222,44%,10%)] hover:border-s-[hsl(var(--border))]"
                        }`}
                      >
                        <Icon
                          size={14}
                          className={`shrink-0 transition-colors ${
                            isActive ? cat.color : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        />
                        <span
                          className={`text-xs font-heading transition-colors ${
                            isActive ? cat.color : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          .{cat.label}
                        </span>
                        {isActive && (
                          <span className="ml-auto text-[10px] font-heading text-muted-foreground/40">
                            {cat.skills.length}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Code Content */}
                <div className="flex-1 p-6 overflow-auto min-h-[420px]">
                  <div className="font-heading text-sm leading-loose">
                    <div className="flex items-start gap-4 mb-1">
                      <span className="text-muted-foreground/30 text-xs w-5 text-right shrink-0 mt-0.5">1</span>
                      <span className="text-muted-foreground/50 italic">
                        {`// ${activeCategory.label} — ${activeCategory.skills.length} technologies`}
                      </span>
                    </div>
                    <div className="flex items-start gap-4 mb-1">
                      <span className="text-muted-foreground/30 text-xs w-5 text-right shrink-0 mt-0.5">2</span>
                      <div>
                        <span className="text-[#c678dd]">const </span>
                        <span className={activeCategory.color}>{activeCategory.key} </span>
                        <span className="text-muted-foreground">= </span>
                        <span className="text-foreground">[</span>
                      </div>
                    </div>
                    {activeCategory.skills.map((skill, i) => (
                      <div
                        key={skill}
                        className="flex items-center gap-4 mb-1 group cursor-default"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <span className="text-muted-foreground/30 text-xs w-5 text-right shrink-0">
                          {i + 3}
                        </span>
                        <div
                          className={`flex items-center gap-1 px-2 py-0.5 rounded transition-all duration-200 ${
                            hoveredSkill === skill
                              ? `${activeCategory.bg_color} ${activeCategory.border_color} border`
                              : ""
                          }`}
                        >
                          <span className="text-muted-foreground/40 ms-4">"</span>
                          <span
                            className={`transition-colors duration-200 ${
                              hoveredSkill === skill ? activeCategory.color : "text-[#98c379]"
                            }`}
                          >
                            {skill}
                          </span>
                          <span className="text-muted-foreground/40">"</span>
                          {i < activeCategory.skills.length - 1 && (
                            <span className="text-muted-foreground">,</span>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-start gap-4 mb-1">
                      <span className="text-muted-foreground/30 text-xs w-5 text-right shrink-0 mt-0.5">
                        {activeCategory.skills.length + 3}
                      </span>
                      <div>
                        <span className="text-foreground">]</span>
                        <span className="text-muted-foreground/40 ml-1">as const;</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mt-2">
                      <span className="text-muted-foreground/30 text-xs w-5 text-right shrink-0">
                        {activeCategory.skills.length + 5}
                      </span>
                      <span className="inline-block w-2 h-4 bg-primary/70 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Minimap / Stats Panel */}
                <div className="w-48 shrink-0 border-l border-border bg-[hsl(222,44%,7%)] p-4 hidden xl:block">
                  <p className="text-[10px] font-heading text-muted-foreground/40 uppercase tracking-widest mb-4">
                    {sk.overview}
                  </p>
                  <div className="space-y-3">
                    {skillCategories.map((cat, i) => {
                      const isActive = activeTab === i;
                      return (
                        <button key={cat.key} onClick={() => setActiveTab(i)} className="w-full text-left">
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[10px] font-heading transition-colors ${isActive ? cat.color : "text-muted-foreground/50"}`}>
                              .{cat.label}
                            </span>
                            <span className="text-[10px] text-muted-foreground/30">{cat.skills.length}</span>
                          </div>
                          <div className="h-1 rounded-full bg-border overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${isActive ? "opacity-100" : "opacity-30"}`}
                              style={{
                                width: `${(cat.skills.length / maxSkills) * 100}%`,
                                background: isActive ? "hsl(174, 72%, 56%)" : "hsl(222, 30%, 30%)",
                              }}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-[10px] font-heading text-muted-foreground/40 uppercase tracking-widest mb-2">
                      {sk.total}
                    </p>
                    <p className="text-2xl font-heading font-bold text-primary">
                      {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
                    </p>
                    <p className="text-[10px] text-muted-foreground/50">{sk.technologies}</p>
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 py-1.5 bg-primary text-primary-foreground text-[11px] font-heading">
                <div className="flex items-center gap-4">
                  <span>⎇ main</span>
                  <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>{activeCategory.key}: {activeCategory.skills.length} items</span>
                  <span>Ln {activeCategory.skills.length + 5}, Col 1</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile: Card Layout */}
        <div className="md:hidden">
          <ScrollReveal>
            <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-1 px-1" style={{ scrollbarWidth: "none" }}>
              {skillCategories.map((cat, index) => {
                const Icon = iconMap[cat.icon] ?? Code;
                const isActive = activeTab === index;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-heading font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon size={13} />
                    .{cat.label}
                  </button>
                );
              })}
            </div>

            <div className="rounded-xl overflow-hidden border border-border">
              <div className="flex items-center gap-3 px-4 py-3 bg-[hsl(222,44%,7%)] border-b border-border">
                {(() => {
                  const Icon = iconMap[activeCategory.icon] ?? Code;
                  return (
                    <>
                      <Icon size={14} className={activeCategory.color} />
                      <span className={`text-xs font-heading ${activeCategory.color}`}>.{activeCategory.key}</span>
                      <span className="ml-auto text-xs text-muted-foreground/50 font-heading">{activeCategory.skills.length} items</span>
                    </>
                  );
                })()}
              </div>
              <div className="p-4 bg-[hsl(222,44%,8%)]">
                <div className="flex flex-wrap gap-2">
                  {activeCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-sm font-heading font-medium border transition-all duration-200 ${activeCategory.bg_color} ${activeCategory.border_color} ${activeCategory.color}`}
                    >
                      "{skill}"
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-1.5 mt-4">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeTab === index ? "bg-primary w-5" : "bg-muted-foreground/30 w-1.5"
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
