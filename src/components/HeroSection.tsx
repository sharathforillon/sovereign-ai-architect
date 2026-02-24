import { motion } from "framer-motion";
import { Shield, Award, ChevronDown, Lock, Server, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const quickStats = [
  { value: "100%", label: "Data Ownership" },
  { value: "40%", label: "TCO Reduction vs. API Models" },
  { value: "14", label: "Day Fixed-Scope Sprint" },
  { value: "250+", label: "Diagnostic Touchpoints" },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Sovereign AI infrastructure visualization"
          className="h-full w-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="particle-grid absolute inset-0 opacity-20" />

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
          <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wider text-primary">
            <Lock size={14} />
            ZERO-TRUST ARCHITECTURE
          </span>
        </motion.div>

        {/* Headline — outcome-focused per feedback */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Build AI Infrastructure
          <br />
          <span className="text-gradient-gold">That You Own, Not Rent.</span>
        </motion.h1>

        {/* Sub — strategic, not technical */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          We design Sovereign AI systems for Government and Enterprise that
          ensure total data privacy, eliminate vendor lock-in, and maintain
          operational continuity — even in global crises.
        </motion.p>

        {/* Triple bottom line pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-4"
        >
          {[
            { icon: Lock, text: "Data Sovereignty" },
            { icon: Server, text: "Operational Resilience" },
            { icon: DollarSign, text: "Economic Advantage" },
          ].map((p) => (
            <span
              key={p.text}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 font-body text-sm font-medium text-foreground"
            >
              <p.icon size={14} className="text-primary" />
              {p.text}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            to="/contact"
            className="rounded-lg bg-primary px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Request a Strategy Briefing
          </Link>
          <Link
            to="/framework"
            className="rounded-lg border border-border px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            Explore the SAEF™ Framework
          </Link>
        </motion.div>

        {/* Quick Stats — "Executive Dashboard" style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {quickStats.map((stat) => (
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
