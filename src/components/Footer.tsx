import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-primary text-sm font-bold mb-1">
              &lt;Omar Mokhtar /&gt;
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Built with <Heart size={14} className="text-primary" /> using React
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/omarmokhtar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/omarmokhtar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:omarmokhtar20015@gmail.com"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Omar Mokhtar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
