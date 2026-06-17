import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./ScrollReveal";
import { useToast } from "@/hooks/use-toast";
import { EMAILJS_CONFIG } from "@/config/emailjs";
import { useLang } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLang();
  const c = t.contact;
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim())    newErrors.name    = c.errors.nameRequired;
    if (!formData.email.trim())   newErrors.email   = c.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = c.errors.emailInvalid;
    if (!formData.subject.trim()) newErrors.subject = c.errors.subjectRequired;
    if (!formData.message.trim()) newErrors.message = c.errors.messageRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({ title: c.errors.fixErrors, description: c.errors.allRequired, variant: "destructive" });
      return;
    }

    setIsSending(true);
    try {
      const { name, email, subject, message } = formData;
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        { name, from_name: name, user_name: name, email, from_email: email, user_email: email, reply_to: email, subject, title: subject, message, user_message: message, date: new Date().toLocaleString(), to_email: EMAILJS_CONFIG.TO_EMAIL },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );
      toast({ title: c.successTitle, description: c.successDesc });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err: any) {
      const detail = (err && (err.text || err.message)) || (typeof err === "string" ? err : "Something went wrong.");
      toast({ title: c.errorTitle, description: String(detail), variant: "destructive" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-sm gradient-animated">{c.num}</span>
            <h2 className="section-heading">{c.title}</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ms-4" />
          </div>
          <p className="section-subheading">{c.subtitle}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <ScrollReveal delay={0.1} direction="left">
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">{c.description}</p>

              <div className="space-y-4">
                <a href="mailto:omarmokhtar20015@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.emailLabel}</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">omarmokhtar20015@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+201140229621" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.phoneLabel}</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">+20 (114) 022-9621</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.locationLabel}</p>
                    <p className="text-foreground">{c.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">{c.nameLabel}</label>
                <input id="name" type="text" value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder={c.namePlaceholder} />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">{c.emailFieldLabel}</label>
                <input id="email" type="email" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder={c.emailPlaceholder} />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">{c.subjectLabel}</label>
                <input id="subject" type="text" value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder={c.subjectPlaceholder} />
                {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">{c.messageLabel}</label>
                <textarea id="message" rows={5} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder={c.messagePlaceholder} />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSending}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSending ? (
                  <><Loader2 size={18} className="animate-spin" />{c.sending}</>
                ) : (
                  <><Send size={18} />{c.send}</>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
