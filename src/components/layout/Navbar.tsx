import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { Menu, X, Github, Linkedin, Mail, ChevronDown, ArrowDown, Lock, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import debounce from "lodash/debounce";

// Types
interface NavItemProps {
  item: { name: string; href: string };
  index: number;
}

interface SocialLink {
  Icon: LucideIcon;
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: Array<{ name: string; href: string }>;
  socialLinks: Array<SocialLink>;
}

interface IconWrapperProps {
  Icon: LucideIcon;
  className?: string;
}

// Composants optimisés
const IconWrapper = memo(({ Icon, className }: IconWrapperProps) => (
  <Icon className={className} />
));

IconWrapper.displayName = 'IconWrapper';

const NavItem = memo(({ item, index }: NavItemProps) => (
  <a
    href={item.href}
    className="group relative px-3 py-2"
    aria-label={`Navigation vers ${item.name}`}
  >
    <span className="relative z-10 flex items-center text-slate hover:text-primary transition-colors duration-300">
      <span className="font-mono text-primary text-sm mr-2">0{index + 1}.</span>
      {item.name}
    </span>
    <div className="absolute -inset-1 bg-white/[0.03] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </a>
));

NavItem.displayName = 'NavItem';

const MobileMenu = memo(({ isOpen, setIsOpen, navItems, socialLinks }: MobileMenuProps) => {
  if (!isOpen) return null;
  
  return (
    <div
      className="fixed inset-0 z-40 backdrop-blur-2xl bg-black/80 transition-all duration-500"
      role="dialog"
      aria-modal="true"
      aria-label="Menu mobile"
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {navItems.map((item, index) => (
          <NavItem key={item.name} item={item} index={index} />
        ))}

        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="group relative px-8 py-4 mt-4"
        >
          <span className="relative z-10 flex flex-col items-center text-slate hover:text-primary transition-colors duration-300">
            <span className="font-mono text-primary text-sm mb-1">03.</span>
            <span className="text-2xl">Contact</span>
          </span>
          <div className="absolute -inset-2 bg-primary/10 rounded-lg opacity-100 group-hover:opacity-80 transition-opacity duration-300 border border-primary/20" />
        </a>

        <div className="flex items-center space-x-6 mt-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-slate hover:text-primary transition-colors duration-300 p-3 hover:bg-white/[0.03] rounded-lg"
              aria-label={link.label}
            >
              <IconWrapper Icon={link.Icon} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

  const navItems = useMemo(() => [
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
  ], []);

  const socialLinks = useMemo(() => [
    { 
      Icon: Github,
      href: "https://github.com/dexctor",
      label: "GitHub"
    },
    { 
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/antoine-dewas-640a191a1/",
      label: "LinkedIn"
    }
  ], []);

  const handleScroll = useCallback(
    debounce(() => {
      const scrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
    }, 100),
    [isScrolled]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (isContactMenuOpen && !(event.target as Element).closest('#contact-menu')) {
      setIsContactMenuOpen(false);
    }
  }, [isContactMenuOpen]);

  useEffect(() => {
    if (isContactMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isContactMenuOpen, handleClickOutside]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-black/30 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]" 
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="section-container h-20 flex justify-between items-center">
          <a 
            href="#" 
            className="relative text-4xl font-bold text-slate-lightest hover:text-primary transition-colors duration-300"
          >
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavItem key={item.name} item={item} index={index} />
            ))}

            <div className="relative" id="contact-menu">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsContactMenuOpen(!isContactMenuOpen);
                }}
                className="group relative px-3 py-2 flex items-center"
                aria-expanded={isContactMenuOpen}
                aria-haspopup="true"
              >
                <span className="relative z-10 flex items-center text-slate hover:text-primary transition-colors duration-300">
                  <span className="font-mono text-primary text-sm mr-2">03.</span>
                  Contact
                  <IconWrapper 
                    Icon={ChevronDown} 
                    className={`ml-2 w-4 h-4 transition-transform duration-200 ${isContactMenuOpen ? 'rotate-180' : ''}`} 
                  />
                </span>
                <div className="absolute -inset-1 bg-white/[0.03] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {isContactMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-black/80 backdrop-blur-xl shadow-lg transform transition-all duration-200">
                  <a
                    href="mailto:votre@email.com"
                    className="flex items-center space-x-3 px-4 py-3 text-slate hover:text-primary hover:bg-white/[0.03] transition-colors duration-200 rounded-t-lg"
                  >
                    <IconWrapper Icon={Mail} className="w-4 h-4" />
                    <span>Envoyer un e-mail</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsContactMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-slate hover:text-primary hover:bg-white/[0.03] transition-colors duration-200 rounded-b-lg"
                  >
                    <IconWrapper Icon={ArrowDown} className="w-4 h-4" />
                    <span>Descendre</span>
                  </a>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4 pl-4 border-l border-slate-700">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-primary transition-colors duration-300 p-2 hover:bg-white/[0.03] rounded-lg"
                  aria-label={link.label}
                >
                  <IconWrapper Icon={link.Icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <button
            className="relative md:hidden w-10 h-10 flex items-center justify-center text-slate-lightest hover:text-primary transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Menu principal"
          >
            <IconWrapper Icon={isOpen ? X : Menu} className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {isOpen && (
        <MobileMenu 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navItems={navItems}
          socialLinks={socialLinks}
        />
      )}
    </header>
  );
};

export default memo(Navbar);