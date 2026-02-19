import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Gavel, Globe, Cpu, UserCheck, FileSearch } from "lucide-react";

const pillars = [
  {
    icon: Gavel,
    number: "01",
    title: "Decision Authority",
    subtitle: "When AI Acts vs When Humans Must Intervene",
    description:
      "Validates delegation of authority matrices and automated decision logic flows. Ensures enforceable limits on machine autonomy with hard-coded red lines.",
    details: [
      "Authority Delegation Table with named executives per system",
      "Mandatory reasoning trace for every deterministic decision",
      "Automatic downgrade to Advisory Mode if trace cannot be reproduced",
      "Confidence threshold triggers for immediate human override",
    ],
    critical:
      "Any system without an approved entry in the Authority Registry may not operate.",
  },
  {
    icon: Globe,
    number: "02",
    title: "Data Sovereignty & Jurisdictional Control",
    subtitle: "Ownership of Data, Models, and Derived Intelligence",
    description:
      "Validates legal control of data, models, and derived intelligence. Ensures fine-tuned weights and organizational wisdom stored in vector databases remain sovereign assets.",
    details: [
      "CSP residency attestations with region lock audits",
      "Vector embeddings encrypted using institution-managed CMK",
      "Non-retention flags enforced on all vendor API calls",
      "Shadow training detection through quarterly statistical comparison",
    ],
    critical:
      "Contractual assurances alone are insufficient without cryptographic or statistical verification.",
  },
  {
    icon: Cpu,
    number: "03",
    title: "Model & Economic Control",
    subtitle: "Behavioral and Cost Control Over Time",
    description:
      "Validates drift detection, version rollback capability, kill switch functionality, and cost anomaly detection across all AI systems.",
    details: [
      "Model accuracy baseline ≥ 95%, red line at < 82% or sudden 5% drop",
      "Inference cost ceilings with anomaly detection ($200/day baseline)",
      "Tested kill switch with < 1 hour execution requirement",
      "Live emergency disconnect drill every 90 days",
    ],
    critical:
      "Kill-switch authority must not reside exclusively within IT. Business owners must have direct shutdown capability.",
  },
  {
    icon: UserCheck,
    number: "04",
    title: "Human Accountability",
    subtitle: "Named, Enforceable, Personal Responsibility",
    description:
      "Validates explicit, named executive accountability with signed AI Accountability Deeds and AI-specific incident response playbooks.",
    details: [
      "Named VP/Director owner per AI system with signed accountability deed",
      "AI failure explicitly included in enterprise risk registers",
      "Board notification within 1 hour for Tier 1 incidents",
      "Regulator notification within 24 hours for bias, harm, or financial impact",
    ],
    critical:
      "Non-compliance in Human Accountability overrides all other pillar scores. The system is automatically classified as Not Defensible.",
  },
  {
    icon: FileSearch,
    number: "05",
    title: "Regulatory Survivability & Evidence",
    subtitle: "Defensibility Under Audit, Legal, or Regulatory Scrutiny",
    description:
      "Validates explainability artifacts, immutable logging, AI interaction disclosures, and board AI literacy attestation.",
    details: [
      "WORM-compliant storage with cryptographic signatures at ingestion",
      "Rapid Model Card availability with frozen, signed versions",
      "SHAP/LIME explainability for top 5 decision drivers",
      "7-year minimum retention period for all AI decision logs",
    ],
    critical:
      "No model may enter production without a frozen and signed model card. Tamper attempts invalidate the entire record.",
  },
];

const PillarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="pillars" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Non-Negotiable Assessment Framework
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            The Five
            <span className="text-gradient-gold"> Non-Negotiable Pillars</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground">
            Each pillar is independently assessed. Critical failure in Data
            Sovereignty or Human Accountability overrides all other scores.
            No negotiation. No averaging.
          </p>
          <div className="gold-line mx-auto mt-6 w-20 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="glass-card-hover overflow-hidden rounded-xl"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="flex w-full items-center gap-6 p-8 text-left"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <pillar.icon size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-bold text-primary/40">
                      {pillar.number}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-1 font-body text-xs text-muted-foreground">
                    {pillar.subtitle}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  className="shrink-0 text-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expanded === i ? "auto" : 0,
                  opacity: expanded === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="border-t border-border px-8 pb-8 pt-6">
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {pillar.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 font-body text-xs text-muted-foreground"
                      >
                        <div className="gold-dot mt-1 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3">
                    <p className="font-body text-xs font-medium text-destructive">
                      ⚠ {pillar.critical}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
