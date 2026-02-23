import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
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
              IP-driven AI strategy for UAE Government entities and enterprises.
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
                  Industry Models
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
                  Request Briefing
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
            trademark of Sovereign Intelligence.
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
