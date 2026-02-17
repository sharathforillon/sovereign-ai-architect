import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, FlaskConical, Languages, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "AI Strategy & Discovery",
    subtitle: "From Experimental to Measurable Value",
    description:
      "Proof-Stage AI engagements that move your organization from pilot fatigue to enterprise-grade, ROI-driven AI deployment.",
    features: [
      "250-Point Sovereign Scorecard Assessment",
      "AI Maturity Roadmap & Gap Analysis",
      "Executive Alignment Workshops",
    ],
  },
  {
    icon: FlaskConical,
    title: "Regulatory Sandbox Integration",
    subtitle: "UAE AI Authority Sandbox",
    description:
      "End-to-end support for rapid, compliant deployment within the UAE AI Authority Sandbox environment.",
    features: [
      "Sandbox Application & Documentation",
      "Compliance Monitoring Dashboard",
      "Post-Sandbox Production Transition",
    ],
  },
  {
    icon: Languages,
    title: "Bilingual LLM Deployment",
    subtitle: "Arabic-First Government Services",
    description:
      "Leveraging Falcon-level IP for culturally aligned, Arabic-first AI services across federal and local government entities.",
    features: [
      "Arabic NLP Model Fine-Tuning",
      "Cultural Alignment & Sensitivity Audits",
      "Multi-Dialect Support Framework",
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Enterprise-Grade Modules
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            Strategic
            <span className="text-gradient-gold"> Service Modules</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-muted-foreground">
            Execution certainty across the full AI lifecycle — strategy,
            compliance, and culturally aligned deployment.
          </p>
          <div className="gold-line mx-auto mt-6 w-20 rounded-full" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className="glass-card-hover group flex flex-col rounded-xl p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon size={22} className="text-primary" />
              </div>
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                {service.subtitle}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 font-body text-xs text-muted-foreground"
                  >
                    <div className="gold-dot shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-primary transition-all hover:gap-3"
              >
                Learn More <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
