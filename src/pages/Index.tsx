import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SovereigntyPillarsSection from "@/components/SovereigntyPillarsSection";
import SovereignShieldSection from "@/components/SovereignShieldSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Search, Cpu, FileText } from "lucide-react";

const highlights = [
  {
    icon: Search,
    title: "SAEF™ Framework",
    desc: "250-Point Sovereign Scorecard built on USPTO-granted patents. The diagnostic engine for AI readiness.",
    link: "/framework",
  },
  {
    icon: Shield,
    title: "Five Non-Negotiable Pillars",
    desc: "Independent assessment of Decision Authority, Data Sovereignty, Model Control, Accountability, and Regulatory Survivability.",
    link: "/pillars",
  },
  {
    icon: Cpu,
    title: "AI Kill Chain",
    desc: "6-stage forensic simulation mapping how a single AI failure escalates to institutional crisis.",
    link: "/pillars",
  },
  {
    icon: FileText,
    title: "UAE AI Act 2026",
    desc: "Full compliance pathways for Tier 3 and 4 systems. Pre-deployment audits, data residency, and incident protocols.",
    link: "/compliance",
  },
];

const Index = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <PageLayout>
      <HeroSection />
      <ProblemSection />
      <SovereigntyPillarsSection />
      <SovereignShieldSection />

      {/* Quick Navigation Cards */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Explore Our Capabilities
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Institutional AI
              <span className="text-gradient-gold"> Readiness</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <Link
                  to={h.link}
                  className="glass-card-hover group flex items-start gap-5 rounded-xl p-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <h.icon size={22} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {h.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-muted-foreground">
                      {h.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 font-body text-xs font-medium text-primary transition-all group-hover:gap-2">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      <FAQSection />

      {/* Final CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground">
            Ready to Own Your AI Future?
          </h3>
          <p className="mt-3 font-body text-sm text-muted-foreground">
            Request a confidential strategy briefing with our lead architects.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Request Strategy Briefing <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
