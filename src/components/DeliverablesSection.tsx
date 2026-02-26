import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  FileCheck2,
  Map,
  Shield,
  AlertOctagon,
  Layers,
} from "lucide-react";

const deliverables = [
  {
    icon: BarChart3,
    title: "Institutional Defensibility Heatmap",
    description:
      "Single-page board decision view showing compliance status across all Five Pillars for every AI system and business unit.",
  },
  {
    icon: AlertOctagon,
    title: "AI Kill Chain Risk Flow",
    description:
      "End-to-end harm propagation visualization demonstrating how a single upstream failure cascades through the AI lifecycle.",
  },
  {
    icon: Map,
    title: "AI Opportunity vs Defensibility Matrix",
    description:
      "CEO portfolio prioritization tool plotting use cases across Value and Defensibility axes with quadrant-based verdicts.",
  },
  {
    icon: FileCheck2,
    title: "Institutional License to Operate AI",
    description:
      "Signed certification for the Board confirming AI footprint is legally and regulatory-defensible. Valid 12 months.",
  },
  {
    icon: Shield,
    title: "Executive Liability Heatmap",
    description:
      "Confidential mapping of CEO, CRO, CIO, and CDO exposure areas with specific liability risk levels per AI system.",
  },
  {
    icon: Layers,
    title: "30-60-90 Day Remediation Roadmap",
    description:
      "Prioritized action plan with named owners, outcomes, and hard deadlines for each remediation milestone.",
  },
];

const tiers = [
  {
    tier: "Tier 1",
    profile: "Sovereign / Regulated",
    governance: "Forensic intensity",
    autonomy: "Zero (pre-action human mandatory)",
    audit: "Per-transaction",
    approval: "Board / Steering Committee",
  },
  {
    tier: "Tier 2",
    profile: "Material",
    governance: "Rigorous controls",
    autonomy: "Conditional (hard-coded limits)",
    audit: "Weekly review",
    approval: "BU Head + CISO",
  },
  {
    tier: "Tier 3",
    profile: "Advisory",
    governance: "Standard protocols",
    autonomy: "Advisory only (human validation)",
    audit: "Monthly review",
    approval: "Department Head",
  },
  {
    tier: "Tier 4",
    profile: "Productivity",
    governance: "Lightweight",
    autonomy: "Full (post-action oversight)",
    audit: "Quarterly",
    approval: "Team Lead",
  },
];

const DeliverablesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="deliverables" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            SAEF™ Deliverables
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            Executive
            <span className="text-gradient-gold"> Deliverables</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-muted-foreground">
            Board-ready, regulator-defensible artifacts delivered in a fixed,
            non-customizable format. No theory. No placeholders.
          </p>
          <div className="gold-line mx-auto mt-6 w-20 rounded-full" />
        </motion.div>

        {/* Deliverables grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="glass-card-hover rounded-xl p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                <d.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">
                {d.title}
              </h3>
              <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground">
                {d.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Risk Classification Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="mb-6 text-center font-display text-2xl font-bold text-foreground">
            AI Use-Case <span className="text-gradient-gold">Risk Classification</span>
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-center font-body text-sm text-muted-foreground">
            All AI systems must be classified before deployment. Tier assignment
            is mandatory. Absence of classification equals Tier 1 by default.
          </p>

          <div className="overflow-hidden rounded-xl border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="px-5 py-3 text-left font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Tier
                    </th>
                    <th className="px-5 py-3 text-left font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Risk Profile
                    </th>
                    <th className="px-5 py-3 text-left font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Governance
                    </th>
                    <th className="px-5 py-3 text-left font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Autonomy
                    </th>
                    <th className="px-5 py-3 text-left font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Audit
                    </th>
                    <th className="px-5 py-3 text-left font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Approval
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((t, i) => (
                    <tr
                      key={t.tier}
                      className={`border-b border-border ${
                        i === 0 ? "bg-muted/30" : ""
                      }`}
                    >
                      <td className="px-5 py-4 font-display text-sm font-bold text-primary">
                        {t.tier}
                      </td>
                      <td className="px-5 py-4 font-body text-xs text-foreground">
                        {t.profile}
                      </td>
                      <td className="px-5 py-4 font-body text-xs text-muted-foreground">
                        {t.governance}
                      </td>
                      <td className="px-5 py-4 font-body text-xs text-muted-foreground">
                        {t.autonomy}
                      </td>
                      <td className="px-5 py-4 font-body text-xs text-muted-foreground">
                        {t.audit}
                      </td>
                      <td className="px-5 py-4 font-body text-xs text-muted-foreground">
                        {t.approval}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Final positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center"
        >
          <p className="font-display text-lg font-semibold italic text-foreground">
            "This playbook does not assess AI maturity. It determines whether AI
            can be legally defended, institutionally controlled, and safely
            scaled under GCC regulatory scrutiny."
          </p>
          <p className="mt-4 font-body text-sm text-primary">
            Anything less is experimentation at enterprise risk.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
