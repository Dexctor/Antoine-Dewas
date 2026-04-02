import { useState, useEffect, useCallback, memo } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

// IDs des sections à fond noir
const darkSections = ["problem", "projects", "pricing"];

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOnDark, setIsOnDark] = useState(false);

  const checkSection = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    // Détecte si la navbar est au-dessus d'une section sombre
    const navHeight = 80;
    const checkPoint = navHeight / 2;

    let onDark = false;
    for (const id of darkSections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= checkPoint && rect.bottom >= checkPoint) {
          onDark = true;
          break;
        }
      }
    }

    // Aussi vérifier le footer
    const footer = document.querySelector("footer");
    if (footer) {
      const rect = footer.getBoundingClientRect();
      if (rect.top <= checkPoint && rect.bottom >= checkPoint) {
        onDark = true;
      }
    }

    setIsOnDark(onDark);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkSection, { passive: true });
    checkSection();
    return () => window.removeEventListener("scroll", checkSection);
  }, [checkSection]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  // Couleurs dynamiques
  const isDark = isOnDark && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? isOnDark
            ? "bg-surface-black/95 backdrop-blur-sm border-b border-neutral-800"
            : "bg-white/95 backdrop-blur-sm border-b border-neutral-200"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className={cn(
              "text-lg font-bold tracking-tight transition-colors duration-300",
              isDark || (isScrolled && isOnDark) ? "text-white" : "text-neutral-900"
            )}
          >
            Antoine Dewas
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isDark || (isScrolled && isOnDark)
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              href="#contact"
              variant={isDark || (isScrolled && isOnDark) ? "primary-light" : "primary"}
              className="text-xs px-5 py-2.5"
            >
              Devis gratuit
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              isDark || (isScrolled && isOnDark) ? "text-white" : "text-neutral-900"
            )}
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-2xl font-medium text-neutral-900 hover:text-emerald-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contact"
              variant="primary"
              className="mt-4"
              onClick={() => setIsMobileOpen(false)}
            >
              Devis gratuit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
