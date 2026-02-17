import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* CTA Band */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card relative z-10 mx-auto max-w-4xl rounded-2xl p-12 text-center md:p-16"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Begin Your Assessment
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Ready to Achieve
            <span className="text-gradient-gold"> Strategic Independence?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-muted-foreground">
            Schedule a confidential briefing to explore how the 250-Point
            Sovereign Scorecard can unlock measurable value and full regulatory
            compliance for your organization.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:contact@sovereignintelligence.ae"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              <Mail size={16} />
              Request a Briefing
            </a>
          </div>
        </motion.div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/30 bg-primary/10">
              <span className="font-display text-xs font-bold text-primary">SI</span>
            </div>
            <span className="font-body text-sm text-muted-foreground">
              © 2026 Sovereign Intelligence. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-body text-xs text-muted-foreground">
              <MapPin size={12} className="text-primary" />
              Abu Dhabi · Dubai · Riyadh
            </span>
            <a
              href="#"
              className="flex items-center gap-1 font-body text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy <ArrowUpRight size={10} />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 font-body text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
