import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, Database, ShieldAlert, Baby } from "lucide-react";

const regulations = [
  {
    icon: Scale,
    title: "UAE AI Act 2026",
    badge: "Tier 3 & 4 Compliance",
    description:
      "Pre-deployment algorithm audits for High-Risk (Tier 3) and Critical-Risk (Tier 4) AI systems, including mandatory 72-hour incident reporting protocols.",
    narrative:
      "Our 250-point assessment includes a Pre-Deployment Algorithm Audit required for Tier 3 systems.",
  },
  {
    icon: ShieldAlert,
    title: "SGiL Framework",
    badge: "USPTO-Patented",
    description:
      'Sovereign Governance-in-the-Loop prevents "Black Box" decision-making in public services through patented explainable AI architecture.',
    narrative:
      "Our patents ensure Sovereign Governance-in-the-Loop, preventing opaque automated decisions in government.",
  },
  {
    icon: Database,
    title: "Data Localization & PDPL",
    badge: "Decree-Law No. 45",
    description:
      '100% compliance with UAE Mainland, DIFC, and ADGM data residency requirements. "Privacy by Design" for healthcare and banking sectors.',
    narrative:
      "Full compliance with Federal PDPL data residency across all UAE jurisdictions.",
  },
  {
    icon: Baby,
    title: "Child Digital Safety",
    badge: "Law No. 26 of 2025",
    description:
      "Integration of active content filters for AI systems interacting with minors, ensuring cultural alignment and ethical robustness.",
    narrative:
      "Active content filtering integrated into all AI systems for minor-facing deployments.",
  },
];

const SovereigntySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sovereignty" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Sovereignty & Law
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            UAE AI Act 2026
            <br />
            <span className="text-gradient-gold">Compliance Pathways</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-muted-foreground">
            Strategic alignment with every 2026 mandate — from algorithm audits
            to data sovereignty and the UAI Seal.
          </p>
          <div className="gold-line mx-auto mt-6 w-20 rounded-full" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {regulations.map((reg, i) => (
            <motion.div
              key={reg.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="glass-card-hover rounded-xl p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                  <reg.icon size={22} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {reg.title}
                    </h3>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {reg.badge}
                    </span>
                  </div>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                    {reg.description}
                  </p>
                  <div className="mt-4 rounded-lg border border-primary/10 bg-primary/5 px-4 py-3">
                    <p className="font-body text-xs italic leading-relaxed text-primary">
                      "{reg.narrative}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SovereigntySection;
