import PageLayout from "@/components/PageLayout";
import PillarsSection from "@/components/PillarsSection";
import KillChainSection from "@/components/KillChainSection";

const PillarsPage = () => {
  return (
    <PageLayout>
      <div className="pt-20">
        <section className="section-padding relative text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
          <div className="particle-grid absolute inset-0 opacity-20" />
          <div className="relative z-10">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              SAEF™ Assessment Architecture
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              Five Pillars &
              <br />
              <span className="text-gradient-gold">AI Kill Chain</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground">
              The structural integrity tests that determine whether your AI
              systems are institutionally defensible under adversarial scrutiny.
            </p>
            <div className="gold-line mx-auto mt-8 w-20 rounded-full" />
          </div>
        </section>
        <PillarsSection />
        <KillChainSection />
      </div>
    </PageLayout>
  );
};

export default PillarsPage;
