import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "SAEF™ Framework", href: "/framework" },
  { label: "Five Pillars", href: "/pillars" },
  { label: "Compliance", href: "/compliance" },
  { label: "Industries", href: "/industries" },
  { label: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

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
        <Link to="/" className="flex items-center gap-3">
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
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`font-body text-sm font-medium tracking-wider transition-colors hover:text-primary ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Request Assessment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground lg:hidden"
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
            className="glass-card border-t border-border lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-body text-sm font-medium hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="rounded-lg bg-primary px-5 py-2.5 text-center font-body text-sm font-semibold text-primary-foreground"
              >
                Request Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
