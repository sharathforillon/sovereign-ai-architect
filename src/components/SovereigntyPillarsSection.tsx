import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Lock, Server, DollarSign, ChevronDown } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "Absolute Data Sovereignty",
    ceoView:
      "Your proprietary data never leaves your infrastructure. We ensure 100% compliance with national security and data privacy laws by eliminating \"phone-home\" API calls to external providers.",
    ctoSpecs: [
      "Deployment: On-premise, Air-gapped, or Private Cloud (VPC) via Kubernetes (K8s) orchestration.",
      "Data Privacy: Local inference execution ensures zero data persistence on third-party servers.",
      "Compliance: Support for SOC2 Type II, HIPAA, and GDPR-compliant logging and auditing frameworks.",
      "Data Residency: 100% of PII stays within your VPC; no \"training leak\" to public models.",
    ],
  },
  {
    icon: Server,
    title: "Operational Resilience & Ownership",
    ceoView:
      "Avoid \"AI Blackouts.\" By owning the weights and the infrastructure, your operations remain functional regardless of global tech shifts or provider policy changes.",
    ctoSpecs: [
      "Model Agnostic: Support for Llama 3, Mistral, and Falcon via Hugging Face Transformers or vLLM engines.",
      "Inference Optimization: Quantization (INT8/FP16) for high-throughput performance on NVIDIA H100/A100 clusters.",
      "Versioning: Full control over model weights and fine-tuning checkpoints to prevent \"model drift\" from external updates.",
      "Uptime: 99.9% operational continuity, independent of external API provider outages.",
    ],
  },
  {
    icon: DollarSign,
    title: "Predictable Economic Scale",
    ceoView:
      "Move from a \"Tax-per-Token\" model to an \"Owned Infrastructure\" model. Lower your long-term Total Cost of Ownership (TCO) by up to 40% as you scale AI across the enterprise.",
    ctoSpecs: [
      "Auto-Scaling: Integrated with KEDA for event-driven autoscaling based on inference demand.",
      "Stack: Python-based FastAPI backends with Vector Database integration (Pinecone, Milvus, or Weaviate) for RAG workflows.",
      "Monitoring: Prometheus and Grafana dashboards for real-time GPU utilization and latency tracking.",
      "Latency: Sub-100ms Time-To-First-Token (TTFT) for internal applications.",
    ],
  },
];

const SovereigntyPillarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Triple Bottom Line
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            Why
            <span className="text-gradient-gold"> Sovereign AI?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-muted-foreground">
            Government and enterprise leaders care about three things:
            data control, operational resilience, and economic predictability.
            Each pillar below includes a CEO overview and expandable CTO-level
            technical specifications.
          </p>
          <div className="gold-line mx-auto mt-6 w-20 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="glass-card rounded-xl p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <pillar.icon size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                    {pillar.title}
                  </h3>
                  <span className="mt-1 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wider text-primary">
                    CEO View
                  </span>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground md:text-base">
                    {pillar.ceoView}
                  </p>

                  {/* CTO Expandable */}
                  <button
                    onClick={() =>
                      setExpandedPillar(expandedPillar === i ? null : i)
                    }
                    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-body text-xs font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
                  >
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${expandedPillar === i ? "rotate-180" : ""}`}
                    />
                    {expandedPillar === i
                      ? "Hide Technical Specs"
                      : "Tech Specs for CTO"}
                  </button>

                  {expandedPillar === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 rounded-lg border border-primary/10 bg-primary/5 p-5"
                    >
                      <ul className="space-y-3">
                        {pillar.ctoSpecs.map((spec) => (
                          <li
                            key={spec}
                            className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                          >
                            <div className="gold-dot mt-1.5 shrink-0" />
                            <span>
                              <strong className="text-foreground">
                                {spec.split(":")[0]}:
                              </strong>
                              {spec.split(":").slice(1).join(":")}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SovereigntyPillarsSection;
