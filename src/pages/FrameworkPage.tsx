import PageLayout from "@/components/PageLayout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  ShieldCheck,
  DollarSign,
  Brain,
  Fingerprint,
  BarChart3,
  ShieldOff,
  Cpu,
  FileText,
  Clock,
  CheckCircle2,
  FlaskConical,
  ShieldAlert,
  FileCheck,
} from "lucide-react";

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

const saefLayers = [
  {
    icon: ShieldOff,
    title: "Air-Gap Gateway",
    tagline: "Protect Before You Predict.",
    description:
      "Residency and PII sanitization before inference. All sensitive data is filtered before reaching any model.",
    outcomes: ["Zero data leakage", "Zero shadow AI", "Full PII redaction"],
  },
  {
    icon: Cpu,
    title: "Sovereign Compute Layer",
    tagline: "If you don't own the bottom layer, you don't own the AI.",
    description:
      "Inference runs only on GCC-controlled hardware. No foreign-hosted model dependency.",
    outcomes: ["Predictable OpEx", "Vendor independence", "Local inference"],
  },
  {
    icon: FileText,
    title: "Logic Logging Engine",
    tagline: "If you can't explain it, you can't defend it.",
    description:
      "Immutable logs of reasoning, prompts, and outputs. Full chain-of-thought traceability for every decision.",
    outcomes: ["Traceability", "Auditability", "Liability shield"],
  },
];

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

const SectionBlock = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FrameworkPage = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
        <div className="particle-grid absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Proprietary IP · USPTO-Granted Patents
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
            SAEF™ — Sovereign AI
            <br />
            <span className="text-gradient-gold">Enablement Framework</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground">
            The 250-Point Sovereign Scorecard is the gold standard for AI
            readiness. A diagnostic engine built on USPTO-granted patents that
            determines whether AI can be legally defended, institutionally
            controlled, and safely scaled.
          </p>
          <div className="gold-line mx-auto mt-8 w-20 rounded-full" />
        </div>
      </section>

      {/* SAEF Architecture */}
      <section className="section-padding relative">
        <div className="mx-auto max-w-6xl">
          <SectionBlock className="mb-16 text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              SAEF™ Architecture
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Your Operating System for
              <span className="text-gradient-gold"> AI Sovereignty</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground">
              SAEF™ integrates governance, compute, policy, and control into a
              single sovereignty OS for the GCC.
            </p>
          </SectionBlock>

          <div className="grid gap-8 lg:grid-cols-3">
            {saefLayers.map((layer, i) => (
              <SectionBlock key={layer.title}>
                <div className="glass-card-hover flex h-full flex-col rounded-xl p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <layer.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {layer.title}
                  </h3>
                  <p className="mt-2 font-body text-xs italic text-primary">
                    "{layer.tagline}"
                  </p>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                    {layer.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {layer.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-center gap-2 font-body text-xs text-foreground"
                      >
                        <div className="gold-dot shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionBlock>
            ))}
          </div>
        </div>
      </section>

      {/* 250-Point Diagnostic */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <SectionBlock className="mb-16 text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Diagnostic Domains
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              250+ Point
              <span className="text-gradient-gold"> Sovereign Scorecard</span>
            </h2>
          </SectionBlock>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <SectionBlock key={pillar.title}>
                <div className="glass-card-hover group h-full rounded-xl p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <pillar.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </SectionBlock>
            ))}
          </div>

          <SectionBlock className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="font-display text-2xl font-bold text-primary">14</p>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                Calendar Day Sprint
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="font-display text-2xl font-bold text-primary">
                250+
              </p>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                Diagnostic Touch Points
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="font-display text-2xl font-bold text-primary">0</p>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                Vendor Bias or Commercial Conflicts
              </p>
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* 14-Day Engagement */}
      <section className="section-padding relative">
        <div className="mx-auto max-w-6xl">
          <SectionBlock className="mb-16 text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              14-Day Fixed-Scope Engagement
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              From Discovery to
              <span className="text-gradient-gold"> Institutional License</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground">
              An independent, non-vendor, patent-backed forensic evaluation. No
              tool selection, no system build, no commercial bias.
            </p>
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
          </SectionBlock>

          <div className="relative">
            <div className="absolute left-[28px] top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent lg:block" />
            <div className="space-y-8">
              {phases.map((phase, i) => (
                <SectionBlock key={phase.phase}>
                  <div className="glass-card-hover relative rounded-xl p-8 lg:ml-16">
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
                  </div>
                </SectionBlock>
              ))}
            </div>
          </div>

          {/* Stakeholders */}
          <SectionBlock className="mt-12 rounded-xl border border-border bg-secondary/20 p-8 text-center">
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
          </SectionBlock>
        </div>
      </section>
    </PageLayout>
  );
};

export default FrameworkPage;
