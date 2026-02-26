import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Lock, Server, Eye, Layers, ArrowRight } from "lucide-react";

const layers = [
  {
    id: "perimeter",
    label: "Perimeter Defence",
    icon: Shield,
    color: "border-gold-dark/40 bg-gold-dark/5",
    detail:
      "Air-Gap Gateway with hardware-enforced network isolation. All ingress/egress passes through sovereign checkpoints with deep packet inspection and anomaly detection.",
  },
  {
    id: "identity",
    label: "Identity & Access",
    icon: Lock,
    color: "border-primary/40 bg-primary/5",
    detail:
      "Sovereign-in-the-Loop (SGiL) governance with multi-factor biometric authentication, role-based access control, and real-time session auditing tied to national identity frameworks.",
  },
  {
    id: "compute",
    label: "Sovereign Compute",
    icon: Server,
    color: "border-primary/30 bg-primary/5",
    detail:
      "On-premise GPU clusters running vLLM inference engines with encrypted model weights. All computation stays within national borders with no external API dependencies.",
  },
  {
    id: "observability",
    label: "Logic Logging & Audit",
    icon: Eye,
    color: "border-gold-dark/40 bg-gold-dark/5",
    detail:
      "Every inference request, model decision, and data access is immutably logged. Full chain-of-custody for regulatory audits with tamper-evident hashing.",
  },
  {
    id: "data",
    label: "Data Residency Layer",
    icon: Layers,
    color: "border-muted-foreground/30 bg-muted/30",
    detail:
      "Encrypted-at-rest data stores within sovereign jurisdiction. RAG pipelines access only locally-hosted vector databases with no cloud replication.",
  },
];

const ZeroTrustDiagram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Architecture Preview
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Zero-Trust Sovereign
            <span className="text-gradient-gold"> Architecture</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-muted-foreground">
            Purpose-built infrastructure with defence-in-depth. Every layer is
            independently verifiable, nationally hosted, and regulator-auditable.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Interactive Layer Stack */}
          <div className="space-y-3">
            {layers.map((layer, i) => (
              <motion.button
                key={layer.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                onClick={() =>
                  setActiveLayer(activeLayer === layer.id ? null : layer.id)
                }
                className={`group flex w-full items-center gap-4 rounded-xl border p-5 text-left transition-all ${
                  layer.color
                } ${
                  activeLayer === layer.id
                    ? "ring-1 ring-primary/50 shadow-lg shadow-primary/5"
                    : "hover:border-primary/30"
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                  <layer.icon size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Layer {i + 1}
                  </span>
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {layer.label}
                  </h4>
                </div>
                <ArrowRight
                  size={14}
                  className={`text-muted-foreground transition-transform ${
                    activeLayer === layer.id ? "rotate-90 text-primary" : ""
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Detail Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass-card flex items-center rounded-2xl p-8"
          >
            {activeLayer ? (
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const layer = layers.find((l) => l.id === activeLayer)!;
                  return (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <layer.icon size={22} className="text-primary" />
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {layer.label}
                        </h3>
                      </div>
                      <p className="font-body text-sm leading-relaxed text-muted-foreground">
                        {layer.detail}
                      </p>
                    </>
                  );
                })()}
              </motion.div>
            ) : (
              <div className="text-center w-full">
                <Shield size={40} className="mx-auto text-primary/30" />
                <p className="mt-4 font-body text-sm text-muted-foreground">
                  Select a layer to explore the sovereign defence-in-depth
                  architecture.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ZeroTrustDiagram;
