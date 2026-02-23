import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Engagement & Scope",
    questions: [
      {
        q: "What exactly is the 14-day diagnostic engagement?",
        a: "A fixed-scope, independent forensic evaluation of your institution's AI readiness. It is not a consulting engagement, implementation project, or vendor selection exercise. In 14 calendar days, we deliver an evidence-based Institutional License to Operate AI that determines whether your organization can deploy AI without unacceptable legal, regulatory, reputational, or sovereign risk.",
      },
      {
        q: "Who needs to be involved from our organization?",
        a: "The engagement requires a Steering Committee with representation from the Board, CEO/COO, CIO, CISO, CRO, Legal & Compliance, Internal Audit, and Business/Product Owners. We require formal authority to inspect production, sandbox, pilot, and shadow environments, including system logs, prompts, APIs, model configurations, vendor contracts, and access controls.",
      },
      {
        q: "Is this engagement vendor-neutral?",
        a: "Completely. This is an independent, non-vendor, non-implementation engagement with zero commercial bias. We do not select tools, build systems, or recommend specific vendors. Our methodology is derived from USPTO-granted patents, ensuring assessments go beyond policy to inspect the actual mechanics of intelligence.",
      },
      {
        q: "What if we already have AI systems in production?",
        a: "That increases urgency. Most AI failures surface after deployment during regulatory inquiries, legal disputes, internal audits, media exposure, or ministerial scrutiny. At that point, remediation is no longer possible. Our diagnostic identifies whether your existing systems are institutionally defensible under adversarial scrutiny.",
      },
    ],
  },
  {
    category: "SAEF Framework & Methodology",
    questions: [
      {
        q: "What does the 250-Point Sovereign Scorecard assess?",
        a: "The SAEF™ Scorecard is a forensic diagnostic engine that audits five non-negotiable pillars: Decision Authority & Delegation Integrity, Data Sovereignty & Jurisdictional Compliance, Model Governance & Lifecycle Control, Institutional Accountability & Liability Architecture, and Regulatory & Ethical Alignment. Each pillar is scored across 50+ touchpoints with binary pass/fail evidence requirements.",
      },
      {
        q: "How is this different from an AI maturity model?",
        a: "AI maturity models measure aspiration. Our protocol measures defensibility. We do not ask 'How advanced is your AI?' We ask 'Can this institution survive a regulatory inquiry, legal dispute, or public scrutiny of its AI systems?' Policy documents are treated as hypotheses. Only technical evidence determines defensibility.",
      },
      {
        q: "What is the AI Kill Chain and why does it matter?",
        a: "The AI Kill Chain is a 6-stage forensic simulation that maps how a single AI failure escalates from a technical anomaly to institutional crisis. The stages are: Trigger Event, Detection Failure, Escalation Collapse, Regulatory Exposure, Institutional Damage, and Sovereign Impact. Each stage is scored for your organization, revealing exactly where your containment breaks down.",
      },
      {
        q: "What is 'Sovereign Governance-in-the-Loop' (SGiL)?",
        a: "SGiL is our USPTO-patented framework within SAEF™ that prevents 'Black Box' decision-making in public services. It ensures every AI-driven decision can be explained, halted, reversed, and attributed to a human authority. This is not optional under the UAE AI Act 2026 for Tier 3 and Tier 4 systems.",
      },
    ],
  },
  {
    category: "UAE AI Act 2026 Compliance",
    questions: [
      {
        q: "What are Tier 3 and Tier 4 AI systems under the UAE AI Act?",
        a: "Tier 3 (High-Risk) systems include AI used in healthcare diagnostics, credit scoring, HR screening, and critical infrastructure. Tier 4 (Critical-Risk) systems involve national security, autonomous weapons, and sovereign decision-making. Both tiers require mandatory pre-deployment algorithm audits, 72-hour incident reporting, and ongoing compliance monitoring.",
      },
      {
        q: "How does your engagement address Federal PDPL compliance?",
        a: "We audit data residency across all UAE jurisdictions including Mainland, DIFC, and ADGM. Our assessment verifies 'Privacy by Design' implementation, cross-border data flows, vendor data use clauses, CSP residency attestations, and compliance with Decree-Law No. 45. Any partial compliance is flagged as High Defensibility Impact until resolved.",
      },
      {
        q: "What is the 'Institutional License to Operate AI'?",
        a: "It is the formal output of our diagnostic. A board-ready determination that states whether your institution is structurally prepared to deploy and scale AI without unacceptable risk. It includes the full Sovereign Scorecard, Kill Chain simulation results, AI Accountability Deeds for each system, and an Executive Liability Heatmap.",
      },
      {
        q: "What happens if we fail the assessment?",
        a: "A 'fail' is not punitive. It is protective. The assessment identifies specific, actionable gaps before regulators, auditors, or adversarial parties discover them. You receive a prioritized remediation roadmap with clear value gates. Discovery of $1M+ leakage points through governance gaps is common and delivers immediate ROI.",
      },
    ],
  },
  {
    category: "Deliverables & Outcomes",
    questions: [
      {
        q: "What tangible deliverables do we receive?",
        a: "You receive: (1) The complete 250-Point Sovereign Scorecard with evidence-backed scoring, (2) AI Kill Chain Simulation Report, (3) Executive Liability Heatmap mapping personal accountability, (4) AI Accountability Deeds for each system, (5) Risk-tiered AI use case register, (6) Board-ready Institutional License to Operate AI, and (7) Prioritized remediation roadmap with value gates.",
      },
      {
        q: "How is the Executive Liability Heatmap used?",
        a: "The Heatmap maps which executives hold personal accountability for each AI system's decisions. Under the UAE AI Act 2026, diffused accountability is not a defense. The Heatmap ensures every AI-driven decision has a named, empowered human authority who can explain, halt, and reverse outcomes.",
      },
      {
        q: "What is a 'Value Gate' and how does it protect us?",
        a: "Value Gates are governance checkpoints that must be cleared before any AI initiative advances. They ensure AI use cases are not only economically meaningful but institutionally permissible. No use case proceeds past a Value Gate without verified governance, sovereignty, and accountability evidence. This prevents the common pattern of 'pilot fatigue' where AI projects launch without defensible foundations.",
      },
      {
        q: "Can the engagement uncover cost savings?",
        a: "Yes. The Controlled AI Value Discovery phase identifies $1M+ leakage points where governance gaps, shadow AI usage, redundant vendor contracts, or unoptimized decision processes are creating measurable financial exposure. This is not speculative. It is forensic cost discovery under institutional constraint.",
      },
    ],
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Executive Briefing
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            Questions
            <span className="text-gradient-gold"> Decision-Makers Ask</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-muted-foreground">
            Direct answers for Board members, C-suite executives, and
            institutional stakeholders evaluating AI readiness.
          </p>
          <div className="gold-line mx-auto mt-6 w-20 rounded-full" />
        </motion.div>

        <div className="space-y-10">
          {faqCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * catIdx, duration: 0.5 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="gold-dot shrink-0" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {cat.category}
                </h3>
              </div>

              <div className="glass-card rounded-xl">
                <Accordion type="single" collapsible className="w-full">
                  {cat.questions.map((item, qIdx) => (
                    <AccordionItem
                      key={qIdx}
                      value={`${catIdx}-${qIdx}`}
                      className="border-border/50 px-6 last:border-b-0"
                    >
                      <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:text-primary hover:no-underline md:text-base">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center"
        >
          <p className="font-display text-lg font-semibold text-foreground">
            Have a question not covered here?
          </p>
          <p className="mt-2 font-body text-sm text-muted-foreground">
            Request a confidential executive briefing tailored to your
            institution's specific regulatory and operational context.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-block rounded-lg bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Request Executive Briefing
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
