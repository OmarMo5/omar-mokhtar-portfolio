import { Server, Globe, Database, Zap, ShieldCheck, Layers } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/contexts/LanguageContext";

const serviceIcons = [Server, Globe, Database, Zap, ShieldCheck, Layers];

const serviceColors = [
  { color: "text-[#61afef]", bg: "bg-[#61afef]/10", border: "border-[#61afef]/20", glow: "group-hover:shadow-[#61afef]/10" },
  { color: "text-[#98c379]", bg: "bg-[#98c379]/10", border: "border-[#98c379]/20", glow: "group-hover:shadow-[#98c379]/10" },
  { color: "text-[#e5c07b]", bg: "bg-[#e5c07b]/10", border: "border-[#e5c07b]/20", glow: "group-hover:shadow-[#e5c07b]/10" },
  { color: "text-[#e06c75]", bg: "bg-[#e06c75]/10", border: "border-[#e06c75]/20", glow: "group-hover:shadow-[#e06c75]/10" },
  { color: "text-[#c678dd]", bg: "bg-[#c678dd]/10", border: "border-[#c678dd]/20", glow: "group-hover:shadow-[#c678dd]/10" },
  { color: "text-[#56b6c2]", bg: "bg-[#56b6c2]/10", border: "border-[#56b6c2]/20", glow: "group-hover:shadow-[#56b6c2]/10" },
];

const WhatIDoSection = () => {
  const { t } = useLang();
  const { whatIDo } = t;

  return (
    <section id="what-i-do" className="py-14 sm:py-24 relative">
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-sm gradient-animated">{whatIDo.num}</span>
            <h2 className="section-heading">{whatIDo.title}</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ms-4" />
          </div>
          <p className="section-subheading">{whatIDo.subtitle}</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10">
          {whatIDo.services.map((service, index) => {
            const Icon = serviceIcons[index];
            const clr = serviceColors[index];
            return (
              <ScrollReveal key={index} delay={index * 0.07}>
                <div className={`group relative card-glass card-shimmer p-5 sm:p-6 h-full flex flex-col gap-4 hover:border-opacity-50 transition-all duration-300 hover:shadow-lg ${clr.glow} hover:-translate-y-1`}>
                  <div className={`w-10 h-10 rounded-xl ${clr.bg} border ${clr.border} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={18} className={clr.color} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                    {service.tags.map((tag) => (
                      <span key={tag} className={`text-[10px] font-heading px-2 py-0.5 rounded-md border ${clr.bg} ${clr.border} ${clr.color}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
