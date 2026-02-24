import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Mail, MapPin, Lock, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const objectives = [
  "Sovereign Infrastructure Implementation",
  "Legacy System Migration to Private AI",
  "Data Privacy & Compliance Audit",
  "Cost Optimization (Transitioning from API Models)",
  "National Security / Defense Applications",
  "SAEF™ 250-Point Diagnostic Assessment",
];

const infrastructureOptions = [
  "On-Premise",
  "AWS / Azure / GCP",
  "Hybrid Cloud",
  "Air-Gapped / Classified",
  "Not Sure / Exploratory",
];

const urgencyOptions = ["Immediate", "3–6 Months", "Exploratory"];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showTechNotes, setShowTechNotes] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                Executive Engagement
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
                Schedule a
                <span className="text-gradient-gold"> Private Strategy Briefing</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground">
                Secure a 30-minute consultation with our lead architects to
                discuss your transition to Sovereign AI infrastructure.
              </p>
              <div className="gold-line mx-auto mt-8 w-20 rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-16 grid gap-8 lg:grid-cols-5"
            >
              {/* Form — 3 cols */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="glass-card flex flex-col items-center justify-center rounded-xl p-12 text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                      <Shield size={28} className="text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Briefing Request Logged
                    </h3>
                    <p className="mt-4 max-w-md font-body text-sm text-muted-foreground">
                      Our lead architect is currently reviewing your
                      organization's profile. You will receive a secure calendar
                      invite within 24 business hours.
                    </p>
                    <p className="mt-6 font-body text-xs text-muted-foreground">
                      If your organization requires an NDA or a specific secure
                      communication channel (Signal, Proton, etc.), please email
                      us directly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="glass-card space-y-6 rounded-xl p-8"
                  >
                    {/* Core fields */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Full Name & Title *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g., Dr. Ahmed Al-Rashid, CIO"
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Organization Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Government entity or enterprise name"
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Official Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="Use your official work or government email"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Primary Objective *
                      </label>
                      <select
                        required
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                      >
                        <option value="">Select your primary objective</option>
                        {objectives.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Executive Context */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Current Infrastructure
                        </label>
                        <select className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30">
                          <option value="">Select infrastructure</option>
                          {infrastructureOptions.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Urgency
                        </label>
                        <select className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30">
                          <option value="">Select timeline</option>
                          {urgencyOptions.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* CTO Technical Note */}
                    <div>
                      <button
                        type="button"
                        onClick={() => setShowTechNotes(!showTechNotes)}
                        className="inline-flex items-center gap-2 font-body text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        {showTechNotes ? "−" : "+"} Add Technical Constraints
                        (Optional — for CTO)
                      </button>
                      {showTechNotes && (
                        <Textarea
                          placeholder="Specify hardware requirements (H100/A100), specific LLM preferences (Llama/Mistral), air-gapping needs, or other technical constraints."
                          className="mt-3 min-h-[100px] border-border bg-background font-body text-sm"
                        />
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary px-8 py-4 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
                    >
                      Request Briefing
                    </button>

                    {/* Trust signals */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <span className="flex items-center gap-1.5 font-body text-[10px] text-muted-foreground">
                        <Lock size={10} className="text-primary" />
                        AES-256 Encrypted Submission
                      </span>
                      <span className="flex items-center gap-1.5 font-body text-[10px] text-muted-foreground">
                        <Clock size={10} className="text-primary" />
                        Response within 24 business hours
                      </span>
                      <span className="flex items-center gap-1.5 font-body text-[10px] text-muted-foreground">
                        <Shield size={10} className="text-primary" />
                        Never shared with third parties
                      </span>
                    </div>
                  </form>
                )}
              </div>

              {/* Sidebar — 2 cols */}
              <div className="space-y-6 lg:col-span-2">
                <div className="glass-card rounded-xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    What to Expect
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      "30-minute strategic consultation with lead architects",
                      "Tailored assessment of your AI sovereignty requirements",
                      "Regulatory readiness overview for your sector",
                      "SAEF™ engagement scope and timeline discussion",
                      "NDA available upon request",
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

                <div className="glass-card rounded-xl p-8">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Direct Contact
                  </h3>
                  <div className="mt-4 space-y-3">
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

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                  <p className="font-body text-xs italic text-muted-foreground">
                    "No data is sent to OpenAI, Anthropic, or Google. Ever. Your
                    architecture allows for full Code Ownership and Export — the
                    ultimate trust signal."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
