import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "SAEF Framework", href: "#saef" },
  { label: "14-Day Engagement", href: "#engagement" },
  { label: "Five Pillars", href: "#pillars" },
  { label: "Kill Chain", href: "#killchain" },
  { label: "Sovereignty", href: "#sovereignty" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
            <span className="font-display text-lg font-bold text-primary">SI</span>
          </div>
          <div>
            <span className="font-display text-lg font-semibold tracking-wide text-foreground">
              Sovereign
            </span>
            <span className="font-display text-lg font-semibold tracking-wide text-primary">
              {" "}Intelligence
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Request Assessment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-primary px-5 py-2.5 text-center font-body text-sm font-semibold text-primary-foreground"
              >
                Request Assessment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
