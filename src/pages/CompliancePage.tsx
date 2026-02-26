import PageLayout from "@/components/PageLayout";
import SovereigntySection from "@/components/SovereigntySection";
import DeliverablesSection from "@/components/DeliverablesSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, Shield, Scale } from "lucide-react";

const timeline = [
  {
    year: "2024",
    label: "Pilot Chaos",
    desc: "Unregulated LLM use across enterprises. Shadow AI proliferating.",
  },
  {
    year: "2025",
    label: "Rules Activated",
    desc: "PDPL, DIFC Reg 10, ADGM AI Rules, NCA Controls enforced.",
  },
  {
    year: "2026",
    label: "Enforcement",
    desc: "Full regulatory enforcement. Non-compliance carries institutional liability.",
  },
];

const complianceChecklist = [
  {
    icon: Shield,
    title: "Data Residency",
    owner: "CIO / CTO",
    desc: "Inference and embeddings must remain inside the country. No PII leaves KSA/UAE.",
  },
  {
    icon: Scale,
    title: "Explainability",
    owner: "Legal",
    desc: "Ability to reconstruct why the model made each decision. Required for PDPL, DIFC Reg 10, ADGM AI Rulebook.",
  },
  {
    icon: AlertTriangle,
    title: "AI Kill Switch",
    owner: "CEO / Board",
    desc: "Authority to instantly shut down misbehaving models. Override authority cannot reside exclusively within IT.",
  },
  {
    icon: Clock,
    title: "Audit Logging",
    owner: "CISO",
    desc: "Every inference event tied to a specific identity. Regulators evaluating reliance on foreign-hosted models.",
  },
];

const CompliancePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <PageLayout>
      <div className="pt-20">
        {/* Hero */}
        <section className="section-padding relative text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
          <div className="particle-grid absolute inset-0 opacity-20" />
          <div className="relative z-10">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Regulatory Intelligence
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              UAE AI Act 2026
              <br />
              <span className="text-gradient-gold">Compliance & Sovereignty</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground">
              AI regulation in the GCC is no longer theory. It is infrastructure
              law. Your AI architecture becomes legally equivalent to your
              financial systems.
            </p>
            <div className="gold-line mx-auto mt-8 w-20 rounded-full" />
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding relative">
          <div ref={ref} className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                The 2026 <span className="text-gradient-gold">Reality Check</span>
              </h2>
              <p className="mt-3 font-body text-sm text-muted-foreground">
                From mandate to enforcement. The compliance window is closing.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 * i, duration: 0.5 }}
                  className={`glass-card-hover rounded-xl p-6 text-center ${
                    i === 2 ? "border-primary/30" : ""
                  }`}
                >
                  <p className="font-display text-3xl font-bold text-primary">
                    {t.year}
                  </p>
                  <p className="mt-2 font-display text-sm font-semibold text-foreground">
                    {t.label}
                  </p>
                  <p className="mt-2 font-body text-xs text-muted-foreground">
                    {t.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center"
            >
              <p className="font-body text-sm font-medium text-foreground">
                If your AI system leaks data or lacks traceability, it becomes
                non-compliant overnight.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Checklist */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Five Non-Negotiable
                <span className="text-gradient-gold"> Capabilities</span>
              </h2>
              <p className="mt-3 font-body text-sm text-muted-foreground">
                Every enterprise must demonstrate these to be compliant. This is
                the minimum bar for 2026. Not the gold standard.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {complianceChecklist.map((item) => (
                <div
                  key={item.title}
                  className="glass-card-hover rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-base font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 font-body text-[10px] font-medium text-primary">
                          {item.owner}
                        </span>
                      </div>
                      <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SovereigntySection />
        <DeliverablesSection />
      </div>
    </PageLayout>
  );
};

export default CompliancePage;
