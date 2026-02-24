import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight, Shield, Lock, CheckCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      {/* Sovereignty Guarantee */}
      <div className="border-b border-border bg-primary/5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-4 lg:px-12">
          <span className="flex items-center gap-2 font-body text-xs font-medium text-foreground">
            <Shield size={12} className="text-primary" />
            No data is sent to OpenAI, Anthropic, or Google. Ever.
          </span>
          <span className="flex items-center gap-2 font-body text-xs text-muted-foreground">
            <Lock size={12} className="text-primary" />
            Full Code Ownership &amp; Export
          </span>
          <span className="flex items-center gap-2 font-body text-xs text-muted-foreground">
            <CheckCircle size={12} className="text-primary" />
            SOC2 · ISO 27001 · GDPR Ready
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/30 bg-primary/10">
                <span className="font-display text-xs font-bold text-primary">SI</span>
              </div>
              <span className="font-display text-sm font-semibold text-foreground">
                Sovereign Intelligence
              </span>
            </Link>
            <p className="mt-3 font-body text-xs text-muted-foreground">
              We design Sovereign AI systems for Government and Enterprise that
              ensure total data privacy, eliminate vendor lock-in, and maintain
              operational continuity.
            </p>
            <span className="mt-3 flex items-center gap-1.5 font-body text-xs text-muted-foreground">
              <MapPin size={12} className="text-primary" />
              Abu Dhabi · Dubai · Riyadh
            </span>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-foreground">
              Framework
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/framework" className="font-body text-xs text-muted-foreground hover:text-primary">
                  SAEF™ Overview
                </Link>
              </li>
              <li>
                <Link to="/pillars" className="font-body text-xs text-muted-foreground hover:text-primary">
                  Five Pillars
                </Link>
              </li>
              <li>
                <Link to="/pillars" className="font-body text-xs text-muted-foreground hover:text-primary">
                  AI Kill Chain
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/compliance" className="font-body text-xs text-muted-foreground hover:text-primary">
                  UAE AI Act 2026
                </Link>
              </li>
              <li>
                <Link to="/industries" className="font-body text-xs text-muted-foreground hover:text-primary">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="font-body text-xs text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-foreground">
              Engage
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/contact" className="font-body text-xs text-muted-foreground hover:text-primary">
                  Request Strategy Briefing
                </Link>
              </li>
              <li>
                <a href="mailto:contact@sovereignintelligence.ae" className="font-body text-xs text-muted-foreground hover:text-primary">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <span className="font-body text-xs text-muted-foreground">
            © 2026 Sovereign Intelligence. All rights reserved. SAEF™ is a
            trademark of Sovereign Intelligence. Built on open-source excellence.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-1 font-body text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy <ArrowUpRight size={10} />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 font-body text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
