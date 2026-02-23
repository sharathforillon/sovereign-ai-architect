import PageLayout from "@/components/PageLayout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Landmark,
  Radio,
  Building2,
  HeartPulse,
  ShoppingCart,
  DollarSign,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Landmark,
    title: "Government",
    metrics: ["100% decision auditability", "Zero cross-border risk"],
    description:
      "Full sovereign control over AI decision-making in public services. SGiL framework ensures every government AI action is explainable, reversible, and attributable.",
  },
  {
    icon: Radio,
    title: "Telecommunications",
    metrics: [
      "12× throughput improvement",
      "Lower latency",
      "Sovereign LLM workloads",
    ],
    description:
      "Sovereign compute infrastructure for real-time AI workloads. Local inference eliminates cross-border data dependency and volatile API costs.",
  },
  {
    icon: Building2,
    title: "Banking & Financial Services",
    metrics: [
      "68% OPEX reduction",
      "PDPL compliance",
      "Real-time explainability",
    ],
    description:
      "Automated underwriting with full explainability artifacts. Every credit decision forensically reconstructible for regulatory defense.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    metrics: [
      "Liability containment via traceability",
      "Clinical oversight loops",
    ],
    description:
      "AI-assisted diagnostics with mandatory human-in-the-loop for Tier 1 clinical decisions. Full chain-of-thought logging for patient safety.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    metrics: ["Model drift control", "Safe personalization"],
    description:
      "AI-driven personalization with built-in drift detection and cost governors. Every recommendation traceable and reversible.",
  },
];

const tokenomicsData = [
  {
    metric: "Annual Token Spend",
    without: "Volatile, uncapped",
    with: "Predictable, governed",
  },
  {
    metric: "Primary Cost Driver",
    without: "Uncapped API Volume",
    with: "Fixed Sovereign Compute",
  },
  {
    metric: "Data Liability",
    without: "100% Exposure",
    with: "Zero Exposure",
  },
  {
    metric: "IP Ownership",
    without: "Vendor-Owned",
    with: "Enterprise-Owned",
  },
];

const IndustriesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const tokenRef = useRef(null);
  const tokenInView = useInView(tokenRef, { once: true, margin: "-80px" });

  return (
    <PageLayout>
      <div className="pt-20">
        {/* Hero */}
        <section className="section-padding relative text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
          <div className="particle-grid absolute inset-0 opacity-20" />
          <div className="relative z-10">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Multi-Industry Value Models
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              Sovereignty Delivers
              <br />
              <span className="text-gradient-gold">Measurable ROI</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground">
              Different industries. Same sovereignty logic. Same transformation
              opportunity. SAEF™ adapts to sector-specific regulatory and
              operational requirements.
            </p>
            <div className="gold-line mx-auto mt-8 w-20 rounded-full" />
          </div>
        </section>

        {/* Industry Cards */}
        <section className="section-padding relative">
          <div ref={ref} className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="glass-card-hover flex flex-col rounded-xl p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <ind.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {ind.title}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                    {ind.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {ind.metrics.map((m) => (
                      <li
                        key={m}
                        className="flex items-center gap-2 font-body text-xs font-medium text-foreground"
                      >
                        <div className="gold-dot shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
          <div ref={tokenRef} className="relative z-10 mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={tokenInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Cost Governance
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                The Uncapped Liability of
                <span className="text-gradient-gold"> Tokenomics</span>
              </h2>
              <p className="mt-3 font-body text-sm text-muted-foreground">
                Tokenomics is the new cloud bill shock. Except it scales 100×
                faster.
              </p>
            </motion.div>

            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="px-6 py-4 text-left font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Metric
                    </th>
                    <th className="px-6 py-4 text-left font-body text-xs font-semibold uppercase tracking-wider text-destructive">
                      Without Governance
                    </th>
                    <th className="px-6 py-4 text-left font-body text-xs font-semibold uppercase tracking-wider text-primary">
                      With Sovereignty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tokenomicsData.map((row) => (
                    <tr key={row.metric} className="border-b border-border">
                      <td className="px-6 py-4 font-body text-sm font-medium text-foreground">
                        {row.metric}
                      </td>
                      <td className="px-6 py-4 font-body text-sm text-muted-foreground">
                        {row.without}
                      </td>
                      <td className="px-6 py-4 font-body text-sm text-primary">
                        {row.with}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={tokenInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center font-body text-sm italic text-muted-foreground"
            >
              The enterprises that survive will be the ones that control their
              token flows, not the ones that add more LLM features.
            </motion.p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center">
            <h3 className="font-display text-2xl font-bold text-foreground">
              See how SAEF™ applies to your sector
            </h3>
            <p className="mt-3 font-body text-sm text-muted-foreground">
              Request a confidential industry-specific briefing.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Request Briefing <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default IndustriesPage;
