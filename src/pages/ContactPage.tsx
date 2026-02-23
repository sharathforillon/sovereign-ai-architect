import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Building2, ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <PageLayout>
      <div className="pt-20">
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
          <div className="particle-grid absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Begin Your Assessment
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
                Request a
                <span className="text-gradient-gold"> Confidential Briefing</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground">
                Schedule a confidential executive briefing to explore how the
                SAEF™ 250-Point Sovereign Scorecard can unlock measurable value
                and full regulatory compliance for your organization.
              </p>
              <div className="gold-line mx-auto mt-8 w-20 rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-16 grid gap-8 md:grid-cols-2"
            >
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Executive Engagement
                  </h3>
                  <p className="mt-3 font-body text-sm text-muted-foreground">
                    All engagements begin with a confidential briefing. No sales
                    decks. No vendor pitches. Direct strategic dialogue with
                    senior principals.
                  </p>
                  <div className="mt-6 space-y-4">
                    <a
                      href="mailto:contact@sovereignintelligence.ae"
                      className="flex items-center gap-3 font-body text-sm text-foreground transition-colors hover:text-primary"
                    >
                      <Mail size={16} className="text-primary" />
                      contact@sovereignintelligence.ae
                    </a>
                    <div className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      Abu Dhabi · Dubai · Riyadh
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-8">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    What to Expect
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      "60-minute confidential briefing with a senior principal",
                      "Preliminary assessment of your AI exposure landscape",
                      "Regulatory readiness overview for your sector",
                      "SAEF™ engagement scope and timeline discussion",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                      >
                        <div className="gold-dot mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Card */}
              <div className="glass-card flex flex-col justify-center rounded-xl p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Building2 size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  For Government & Enterprise
                </h3>
                <p className="mt-3 font-body text-sm text-muted-foreground">
                  The SAEF™ diagnostic is designed for institutions that require
                  forensic-grade AI readiness determination. Not advisory. Not
                  aspirational. Evidence-based and regulator-defensible.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:contact@sovereignintelligence.ae"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
                  >
                    <Mail size={16} />
                    Request Executive Briefing
                  </a>
                </div>
                <p className="mt-6 font-body text-xs text-muted-foreground">
                  All communications are treated as confidential. NDA available
                  upon request.
                </p>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="font-display text-xl italic text-muted-foreground">
                "Our intensity.{" "}
                <span className="text-gradient-gold">Your agility.</span>"
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
