import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";

const beforeSteps = [
  "Your Data",
  "Global Cloud (US/China Servers)",
  "Potential Leakage / Control Loss",
];

const afterSteps = [
  "Your Data",
  "The Sovereign Shield (Our Architecture)",
  "Actionable Intelligence (Full Control)",
];

const workflow = [
  {
    step: "01",
    title: "Ingestion",
    desc: "Your private documents and data stay within the local firewall. No external transfer.",
  },
  {
    step: "02",
    title: "Processing",
    desc: "Retrieval-Augmented Generation (RAG) ensures the AI \"knows\" your business without retraining on the public web.",
  },
  {
    step: "03",
    title: "Output",
    desc: "Highly accurate, context-aware intelligence delivered via secure internal API.",
  },
  {
    step: "04",
    title: "Governance",
    desc: "Full transfer of keys, weights, and administrative control. 100% independent operation.",
  },
];

const SovereignShieldSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Visual Architecture
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            The
            <span className="text-gradient-gold"> Sovereign Shield</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-muted-foreground">
            A clear comparison: traditional AI dependency vs. sovereign control.
          </p>
          <div className="gold-line mx-auto mt-6 w-20 rounded-full" />
        </motion.div>

        {/* Before vs After */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-xl border border-muted-foreground/20 bg-muted/30 p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle size={20} className="text-muted-foreground" />
              <h3 className="font-display text-lg font-semibold text-foreground">
                Traditional AI
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {beforeSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-lg border border-muted-foreground/20 bg-muted/40 px-3 py-2 font-body text-sm text-foreground">
                    {step}
                  </span>
                  {i < beforeSteps.length - 1 && (
                    <ArrowRight size={16} className="text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 font-body text-xs italic text-muted-foreground">
              Data flowing out to external servers = Risk
            </p>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-xl border border-primary/20 bg-primary/5 p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck size={20} className="text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">
                Sovereign AI
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {afterSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 font-body text-sm text-foreground">
                    {step}
                  </span>
                  {i < afterSteps.length - 1 && (
                    <ArrowRight size={16} className="text-primary" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 font-body text-xs italic text-primary">
              Data stays within your Sovereign Shield = Secure
            </p>
          </motion.div>
        </div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="mb-8 text-center font-display text-2xl font-bold text-foreground">
            The Path to <span className="text-gradient-gold">Sovereignty</span>
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((w) => (
              <div key={w.step} className="glass-card rounded-xl p-6">
                <span className="font-display text-3xl font-bold text-primary/30">
                  {w.step}
                </span>
                <h4 className="mt-2 font-display text-lg font-semibold text-foreground">
                  {w.title}
                </h4>
                <p className="mt-2 font-body text-sm text-muted-foreground">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SovereignShieldSection;
