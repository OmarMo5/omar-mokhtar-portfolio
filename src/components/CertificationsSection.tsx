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

const CertificationCard = ({ cert, index }: { cert: Certification; index: number }) => {
  const link = cert.certificateFile || cert.credentialUrl || "#";

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="card-glass p-6 h-full flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 group">
        {/* Header: Logo + Org */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-secondary/60 border border-border flex items-center justify-center overflow-hidden shrink-0 p-1.5">
            <img
              src={cert.logo}
              alt={cert.organization}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-primary font-heading truncate">
              {cert.organization}
            </p>
            {cert.issued && (
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                <Calendar size={12} />
                {cert.issued}
              </p>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-base font-semibold text-foreground mb-2 leading-snug">
          {cert.title}
        </h3>

        {/* Description */}
        {cert.description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {cert.description}
          </p>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Action button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-medium border border-primary/20 text-primary bg-primary/5 transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 group-hover:border-primary/30 w-fit"
        >
          <Award size={16} />
          {cert.actionLabel}
          <ExternalLink size={14} className="opacity-60" />
        </a>
      </div>
    </ScrollReveal>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
