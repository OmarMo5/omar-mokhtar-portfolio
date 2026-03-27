import { ExternalLink, Calendar, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import logoUdacity from "@/assets/logo-udacity.png";
import logo365ds from "@/assets/logo-365ds.png";
import logoMicrosoft from "@/assets/logo-microsoft.png";

interface Certification {
  title: string;
  organization: string;
  logo: string;
  issued?: string;
  description?: string;
  certificateFile?: string;
  credentialUrl?: string;
  actionLabel: string;
}

const certifications: Certification[] = [
  {
    title: "Data Science",
    organization: "365 Data Science",
    logo: logo365ds,
    description: "Fulfilled all the requirements of fundamentals in Python language programming.",
    certificateFile: "/certificates/Certificate Python.pdf",
    actionLabel: "View Certificate",
  },
  {
    title: "Microsoft Professional Program in Front-End Web Development",
    organization: "Udacity",
    logo: logoUdacity,
    issued: "Feb 2023",
    certificateFile: "/certificates/Certificate Udacity_Web Professional.pdf",
    actionLabel: "View Certificate",
  },
  {
    title: "Microsoft Office Specialist: Microsoft Office 2019",
    organization: "Country Manager Microsoft Egypt & Ministry of Youth and Sports Egypt",
    logo: logoMicrosoft,
    issued: "Sep 2021",
    credentialUrl: "#",
    actionLabel: "Show Credential",
  },
  {
    title: "Data Analysis",
    organization: "Udacity",
    logo: logoUdacity,
    issued: "Sep 2021",
    certificateFile: "/certificates/Certificate Udacity_Data Analysis.pdf",
    actionLabel: "View Certificate",
  },
  {
    title: "Web Development Challenger Track",
    organization: "Udacity",
    logo: logoUdacity,
    credentialUrl: "#",
    actionLabel: "Show Credential",
  },
];

const TimelineNode = ({ index }: { index: number }) => (
  <div className="relative flex items-center justify-center z-10">
    <ScrollReveal delay={index * 0.12} direction="none">
      <div className="w-4 h-4 rounded-full bg-primary border-[3px] border-background shadow-[0_0_12px_hsl(174,72%,56%,0.4)] transition-shadow duration-500" />
    </ScrollReveal>
  </div>
);

const CertCard = ({ cert, index }: { cert: Certification; index: number }) => {
  const link = cert.certificateFile || cert.credentialUrl || "#";
  const isLeft = index % 2 === 0;

  return (
    <ScrollReveal delay={index * 0.1} direction={isLeft ? "left" : "right"}>
      <div className="card-glass p-5 sm:p-6 flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_-8px_hsl(174,72%,56%,0.15)] hover:-translate-y-1 group">
        {/* Logo + Org */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-secondary/60 border border-border flex items-center justify-center overflow-hidden shrink-0 p-1.5">
            <img
              src={cert.logo}
              alt={cert.organization}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-primary font-heading truncate">
              {cert.organization}
            </p>
            {cert.issued && (
              <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                <Calendar size={10} />
                {cert.issued}
              </p>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-sm sm:text-base font-semibold text-foreground mb-2 leading-snug">
          {cert.title}
        </h3>

        {/* Description */}
        {cert.description && (
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
            {cert.description}
          </p>
        )}

        <div className="flex-1" />

        {/* Action */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium border border-primary/20 text-primary bg-primary/5 transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 w-fit"
        >
          <Award size={14} />
          {cert.actionLabel}
          <ExternalLink size={12} className="opacity-60" />
        </a>
      </div>
    </ScrollReveal>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-14 sm:py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-primary text-sm">04.</span>
            <h2 className="section-heading">Licenses & Certifications</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="section-subheading">Professional credentials & achievements</p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="flex flex-col gap-6 sm:gap-10 md:gap-14">
            {certifications.map((cert, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={cert.title}
                  className="relative grid grid-cols-[40px_1fr] md:grid-cols-[1fr_40px_1fr] items-start"
                >
                  {/* Desktop left card or spacer */}
                  <div className="hidden md:block">
                    {isLeft ? <CertCard cert={cert} index={index} /> : <div />}
                  </div>

                  {/* Timeline node */}
                  <div className="flex justify-center pt-5">
                    <TimelineNode index={index} />
                  </div>

                  {/* Desktop right card or spacer */}
                  <div className="hidden md:block">
                    {!isLeft ? <CertCard cert={cert} index={index} /> : <div />}
                  </div>

                  {/* Mobile card (always right of timeline) */}
                  <div className="md:hidden col-start-2">
                    <CertCard cert={cert} index={index} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
