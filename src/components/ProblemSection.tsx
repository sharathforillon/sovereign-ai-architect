import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingUp, Eye, Users, FileWarning } from "lucide-react";

const riskFactors = [
  {
    icon: Users,
    text: "Delegated decision authority without enforceable limits",
  },
  {
    icon: Eye,
    text: "Cross-border data and model exposure beyond institutional control",
  },
  {
    icon: FileWarning,
    text: "Opaque reasoning paths with missing evidence trails",
  },
  {
    icon: AlertTriangle,
    text: "Diffused accountability with no named executive ownership",
  },
  {
    icon: TrendingUp,
    text: "Boards approving AI systems they cannot explain or audit",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-destructive">
              The GCC Ambition-Readiness Gap
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Capital investment in AI is moving{" "}
              <span className="text-gradient-gold">3× faster</span> than the
              governance controls required to protect the institution.
            </h2>
            <p className="mt-6 font-body text-sm leading-relaxed text-muted-foreground">
              AI introduces a new category of institutional risk that traditional
              IT governance does not cover. Most AI failures surface after
              deployment during regulatory inquiries, legal disputes, internal
              audits, media exposure, or parliamentary scrutiny. At that point,
              remediation is no longer possible.
            </p>
            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="font-body text-sm font-medium text-foreground">
                This protocol answers two questions, in the correct order:
              </p>
              <ol className="mt-3 space-y-2 font-body text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-display text-lg font-bold text-primary">1</span>
                  <span>
                    Is this institution structurally prepared to deploy AI
                    without unacceptable legal, regulatory, reputational, or
                    sovereign risk?
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-lg font-bold text-primary">2</span>
                  <span>
                    Where can AI be introduced to create value without violating
                    institutional constraints?
                  </span>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Right: Risk factors */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Root Causes of AI Risk
              </h3>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                Not caused by model accuracy. Caused by structural governance
                failure.
              </p>
            </div>
            {riskFactors.map((factor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
                className="glass-card-hover flex items-start gap-4 rounded-xl p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-destructive/20 bg-destructive/10">
                  <factor.icon size={18} className="text-destructive" />
                </div>
                <p className="font-body text-sm leading-relaxed text-foreground">
                  {factor.text}
                </p>
              </motion.div>
            ))}

            <div className="mt-6 rounded-lg border border-border bg-secondary/30 px-5 py-4">
              <p className="font-body text-xs italic text-muted-foreground">
                "This is not an AI maturity model. This is a defensibility
                determination under adversarial scrutiny."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
