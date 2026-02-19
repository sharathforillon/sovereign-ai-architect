import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Activity, Brain, Hand, Power, FileText } from "lucide-react";

const stages = [
  {
    icon: Database,
    code: "KC1",
    title: "Data Entry",
    control: "Jurisdiction & Classification",
    evidence: "Trace-route proof of local residency. Data classification and tagging logs.",
    consequence: "Data sovereignty breach. Regulatory exposure cannot be rebutted.",
    critical: true,
  },
  {
    icon: Activity,
    code: "KC2",
    title: "Model Inference",
    control: "Drift & Bias Monitoring",
    evidence: "Weekly automated drift reports. Bias test payloads. Reproducible reasoning trace.",
    consequence: "Undetected model degradation. Unbounded risk accumulation.",
    critical: false,
  },
  {
    icon: Brain,
    code: "KC3",
    title: "Decision Logic",
    control: "Explainability",
    evidence: "SHAP/LIME values for every decision. Log of successful reasoning trace replay.",
    consequence: "Decision rationale cannot be reconstructed under audit.",
    critical: false,
  },
  {
    icon: Hand,
    code: "KC4",
    title: "Human Override",
    control: "Enforceable Authority",
    evidence: "Recorded production drill where a business user halted automated decision flow.",
    consequence: "Loss of human control over automated outcomes.",
    critical: true,
  },
  {
    icon: Power,
    code: "KC5",
    title: "Action Execution",
    control: "Kill Switch",
    evidence: "Timestamped proof of API or service isolation in under 60 minutes.",
    consequence: "Inability to stop harm propagation.",
    critical: false,
  },
  {
    icon: FileText,
    code: "KC6",
    title: "Evidence",
    control: "Immutable Logs",
    evidence: "Verification of WORM storage with cryptographic signatures.",
    consequence: "No defensible record. Presumption of institutional negligence.",
    critical: true,
  },
];

const scoringRules = [
  { score: "0", label: "Control Absent", desc: "Structural failure. Intent or claims are not evidence.", color: "text-destructive" },
  { score: "1", label: "Present but Untested", desc: "Theoretical defense only. Tabletop exercises do not qualify.", color: "text-yellow-500" },
  { score: "2", label: "Tested & Enforced", desc: "Forensically verified in production or identical replica.", color: "text-green-500" },
];

const KillChainSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="killchain" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Forensic Determination Engine
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            AI Kill Chain
            <span className="text-gradient-gold"> Risk Model</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground">
            Six sequential control stages. If one link fails, the entire system
            fails. This is a mechanical integrity test, not a checklist.
          </p>
          <div className="gold-line mx-auto mt-6 w-20 rounded-full" />
        </motion.div>

        {/* Chain visualization */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.code}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className={`glass-card-hover group rounded-xl p-6 ${
                stage.critical ? "border-destructive/20" : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <stage.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-primary">
                      {stage.code}
                    </span>
                    <h4 className="font-display text-base font-semibold text-foreground">
                      {stage.title}
                    </h4>
                  </div>
                </div>
                {stage.critical && (
                  <span className="rounded-full border border-destructive/30 bg-destructive/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-destructive">
                    Critical
                  </span>
                )}
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-body text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Required Control
                  </span>
                  <p className="mt-0.5 font-body text-sm text-foreground">
                    {stage.control}
                  </p>
                </div>
                <div>
                  <span className="font-body text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Forensic Evidence Required
                  </span>
                  <p className="mt-0.5 font-body text-xs leading-relaxed text-muted-foreground">
                    {stage.evidence}
                  </p>
                </div>
                <div className="rounded-lg border border-destructive/10 bg-destructive/5 px-3 py-2">
                  <span className="font-body text-[10px] font-semibold uppercase tracking-wider text-destructive">
                    If Absent
                  </span>
                  <p className="mt-0.5 font-body text-xs text-muted-foreground">
                    {stage.consequence}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scoring Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {scoringRules.map((rule) => (
            <div key={rule.score} className="glass-card rounded-xl p-6 text-center">
              <span className={`font-display text-3xl font-bold ${rule.color}`}>
                {rule.score}
              </span>
              <h4 className="mt-2 font-display text-sm font-semibold text-foreground">
                {rule.label}
              </h4>
              <p className="mt-2 font-body text-xs text-muted-foreground">
                {rule.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Hard rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-8"
        >
          <h4 className="font-display text-lg font-semibold text-foreground">
            Determination Logic
          </h4>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
              <span className="font-display text-sm font-bold text-destructive">
                🔴 NOT DEFENSIBLE
              </span>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                Any score of 0 in KC1, KC4, or KC6. Immediate halt required.
              </p>
            </div>
            <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
              <span className="font-display text-sm font-bold text-yellow-500">
                🟡 CONDITIONAL
              </span>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                Two or more scores of 1 across any stages. Sandbox or pilot only.
              </p>
            </div>
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
              <span className="font-display text-sm font-bold text-green-500">
                🟢 PERMISSIBLE
              </span>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                All stages scored 2. Scaling approved. Full institutional integrity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KillChainSection;
