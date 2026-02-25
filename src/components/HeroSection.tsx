import { Suspense } from "react";
import { motion } from "framer-motion";
import { Shield, Award, ChevronDown, Lock, Globe, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SovereignNetwork from "./SovereignNetwork";

const quickStats = [
  { value: "100%", label: "National Data Residency" },
  { value: "40%", label: "TCO Reduction vs. API Models" },
  { value: "14", label: "Day Fixed-Scope Sprint" },
  { value: "250+", label: "Diagnostic Touchpoints" },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Deep slate base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      {/* WebGL Network */}
      <Suspense fallback={null}>
        <SovereignNetwork />
      </Suspense>

      {/* Overlay gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background pointer-events-none" />
      <div className="particle-grid absolute inset-0 opacity-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 text-center lg:px-12">
        {/* Trust badges — expanded regional compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Award, text: "USPTO-GRANTED IP" },
            { icon: Shield, text: "UAE AI ACT 2026" },
            { icon: Lock, text: "ZERO-TRUST ARCHITECTURE" },
            { icon: Globe, text: "DESC ALIGNED" },
            { icon: Building2, text: "NCA COMPLIANT (KSA)" },
          ].map((badge) => (
            <span
              key={badge.text}
              className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold tracking-wider text-primary"
            >
              <badge.icon size={12} />
              {badge.text}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Sovereign AI. From
          <br />
          <span className="text-gradient-gold">Strategy to Operations.</span>
        </motion.h1>

        {/* Sub — executive-level, full lifecycle messaging */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          End-to-end AI strategy, roadmap, implementation, and governance,
          engineered for national data residency and regulatory supremacy.
          Purpose-built for Government and Enterprise across the GCC.
        </motion.p>

        {/* CTAs — primary solid, secondary outlined with glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            to="/contact"
            className="rounded-lg bg-primary px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            Request a Strategy Briefing
          </Link>
          <Link
            to="/framework"
            className="group inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-7 py-3.5 font-body text-sm font-semibold text-primary shadow-md shadow-primary/10 transition-all hover:border-primary/70 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20"
          >
            Explore the SAEF™ Framework
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Quick Stats — metallic glass cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-5 text-center shadow-lg shadow-background/50"
              style={{
                background:
                  "linear-gradient(135deg, hsl(222 20% 14% / 0.7), hsl(222 20% 14% / 0.4))",
                borderImage:
                  "linear-gradient(135deg, hsl(42 52% 54% / 0.15), transparent) 1",
              }}
            >
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-body text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
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
