import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Server, DollarSign } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "Data Sovereignty",
    desc: "Full national data residency. Zero cross-border leakage. Your models, your jurisdiction.",
  },
  {
    icon: Server,
    title: "Operational Resilience",
    desc: "Air-gapped deployments with 99.97% uptime. Operational continuity through any crisis.",
  },
  {
    icon: DollarSign,
    title: "Economic Advantage",
    desc: "40% TCO reduction versus API-dependent models. Perpetual license, zero per-token fees.",
  },
];

const ValuePillarsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative border-t border-b border-border bg-secondary/30">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-0 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 * i, duration: 0.5 }}
            className={`flex items-start gap-4 px-8 py-10 ${
              i < 2 ? "md:border-r md:border-border" : ""
            }`}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
              <p.icon size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-1.5 font-body text-xs leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ValuePillarsBar;
