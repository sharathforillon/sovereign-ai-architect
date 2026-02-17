import { motion } from "framer-motion";
import { Shield, Award, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Digital twin visualization of UAE"
          className="h-full w-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="particle-grid absolute inset-0 opacity-30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 text-center lg:px-12">
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wider text-primary">
            <Award size={14} />
            USPTO-GRANTED IP
          </span>
          <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wider text-primary">
            <Shield size={14} />
            UAE AI ACT 2026 COMPLIANT
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          The Architect of
          <br />
          <span className="text-gradient-gold">Sovereign Intelligence</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          IP-driven AI strategy for UAE Government entities and enterprises.
          From regulatory compliance to measurable value — grounded in
          execution certainty, not hype.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#saef"
            className="rounded-lg bg-primary px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Explore the SAEF Framework
          </a>
          <a
            href="#sovereignty"
            className="rounded-lg border border-border px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            UAE AI Act 2026 Compliance
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-8"
        >
          {[
            { value: "250+", label: "Diagnostic Touch Points" },
            { value: "$1M+", label: "Leakage Discovery" },
            { value: "72hr", label: "Incident Reporting" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-body text-xs font-medium tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
