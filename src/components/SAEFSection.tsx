import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, ShieldCheck, DollarSign, Brain, Fingerprint, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Technical Debt & Data Architecture",
    description:
      "Deep audit of data pipelines, model infrastructure, and integration debt across your AI stack. Identifies jurisdiction, classification, and residency gaps.",
  },
  {
    icon: ShieldCheck,
    title: "Governance Maturity & Bias Mitigation",
    description:
      "Assess policy frameworks, ethical guardrails, and algorithmic fairness. Controls verified against artifacts and system evidence, not policy documents.",
  },
  {
    icon: DollarSign,
    title: "$1M+ Leakage Point Discovery",
    description:
      "High-velocity ROI identification. Uncover hidden cost sinks, revenue opportunities, and quantified business friction in existing AI systems.",
  },
  {
    icon: Brain,
    title: "Explainable & Ethical AI",
    description:
      "USPTO-patented Human-Robot Symbiosis ensures Sovereign-in-the-Loop (SGiL) governance. Every decision path must be forensically reconstructible.",
  },
  {
    icon: Fingerprint,
    title: "Sovereign Governance-in-the-Loop",
    description:
      "Prevent black-box decision-making in public services. Patented SGiL framework ensures full auditability and named executive accountability.",
  },
  {
    icon: BarChart3,
    title: "Pre-Deployment Algorithm Audit",
    description:
      "Mandatory Tier 3 system audits aligned with the UAE AI Act 2026 before any production deployment. Evidence-driven, not advisory.",
  },
];

const SAEFSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="saef" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Proprietary IP · USPTO-Granted Patents
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            SAEF™ — Sovereign AI
            <br />
            <span className="text-gradient-gold">Enablement Framework</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground">
            The 250-Point Sovereign Scorecard is the gold standard for AI
            readiness. A diagnostic engine built on USPTO-granted patents that
            determines whether AI can be legally defended, institutionally
            controlled, and safely scaled.
          </p>
          <div className="gold-line mx-auto mt-6 w-20 rounded-full" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="glass-card-hover group rounded-xl p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                <pillar.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Engagement type callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="font-display text-2xl font-bold text-primary">14</p>
            <p className="mt-1 font-body text-xs text-muted-foreground">Calendar Day Sprint</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="font-display text-2xl font-bold text-primary">250+</p>
            <p className="mt-1 font-body text-xs text-muted-foreground">Diagnostic Touch Points</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="font-display text-2xl font-bold text-primary">0</p>
            <p className="mt-1 font-body text-xs text-muted-foreground">Vendor Bias or Commercial Conflicts</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SAEFSection;
