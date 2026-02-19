import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FlaskConical, ShieldAlert, FileCheck, Clock, CheckCircle2 } from "lucide-react";

const phases = [
  {
    icon: Search,
    phase: "Phase A",
    days: "Days 1–3",
    title: "Discovery & Artifact Ingestion",
    objective:
      "Establish the factual baseline of AI exposure and governance reality. Determine what is actually happening, not what leadership believes is happening.",
    outputs: [
      "AI Exposure Map: Full inventory of systems, users, data sources, jurisdictions",
      "Hypothesis Matrix: Likely governance and sovereignty failure points",
      "Shadow AI Discovery Survey with Safe Harbor protections",
      "Business Friction Inventory with quantified impact",
    ],
  },
  {
    icon: FlaskConical,
    phase: "Phase B",
    days: "Days 4–8",
    title: "Forensic Deep Dives",
    objective:
      "Validate whether institutional controls exist, function, and are enforceable through structured 60-minute forensic interviews.",
    outputs: [
      "Verified Gap Log with severity and affected pillars",
      "Control Failure Classification: Missing, weak, unenforced, or untested",
      "Regulatory Exposure Index mapped to enforceable obligations",
      "Stakeholder forensic interviews across Legal, Cyber, Risk, Audit",
    ],
  },
  {
    icon: ShieldAlert,
    phase: "Phase C",
    days: "Days 9–11",
    title: "Failure Simulation & Synthesis",
    objective:
      "Test whether documented controls survive real-world pressure through mandatory AI Incident Tabletop Simulations.",
    outputs: [
      "Simulation Performance Scorecard (time to escalation, evidence availability)",
      "AI Emergency Authority Matrix with named owners",
      "Kill Chain stress test results across all 6 stages",
      "Failure at any point automatically downgrades readiness",
    ],
  },
  {
    icon: FileCheck,
    phase: "Phase D",
    days: "Days 12–14",
    title: "Executive Determination & Risk Transfer",
    objective:
      "Formally transfer AI risk ownership to executives and the board with signed, binding documentation.",
    outputs: [
      "Institutional License to Operate AI (signed certification)",
      "Executive Liability Heatmap (CEO/CRO/CIO exposure mapping)",
      "30-60-90 Day Remediation Roadmap with named owners",
      "Board-ready Defensibility Heatmap across all Five Pillars",
    ],
  },
];

const EngagementSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="engagement" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            14-Day Fixed-Scope Engagement
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            From Discovery to
            <br />
            <span className="text-gradient-gold">Institutional License</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground">
            An independent, non-vendor, patent-backed forensic evaluation.
            No tool selection, no system build, no commercial bias.
            Methodology derived from US Patent-level understanding of AI logic.
          </p>
          <div className="gold-line mx-auto mt-6 w-20 rounded-full" />

          <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-4">
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground">
              <Clock size={14} className="text-primary" />
              14 Calendar Days
            </span>
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground">
              <CheckCircle2 size={14} className="text-primary" />
              Evidence-Based, Not Advisory
            </span>
          </div>
        </motion.div>

        {/* Phase Cards */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[28px] top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent lg:block" />

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className="glass-card-hover relative rounded-xl p-8 lg:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[52px] top-8 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background lg:flex">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <div className="flex items-center gap-4 lg:w-64 lg:shrink-0 lg:flex-col lg:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                      <phase.icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                        {phase.phase} · {phase.days}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      {phase.objective}
                    </p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {phase.outputs.map((output) => (
                        <li
                          key={output}
                          className="flex items-start gap-2 font-body text-xs text-muted-foreground"
                        >
                          <div className="gold-dot mt-1 shrink-0" />
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stakeholders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 rounded-xl border border-border bg-secondary/20 p-8 text-center"
        >
          <h4 className="font-display text-lg font-semibold text-foreground">
            Key Stakeholders Engaged
          </h4>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {[
              "Board & Committees",
              "CEO / COO",
              "CIO / CISO / CRO",
              "Legal & Compliance",
              "Internal Audit",
              "Business & Product Owners",
            ].map((s) => (
              <span
                key={s}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-body text-xs font-medium text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementSection;
