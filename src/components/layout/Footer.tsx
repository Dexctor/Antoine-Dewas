import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/dexctor",
      label: "GitHub"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/in/antoine-dewas-640a191a1/",
      label: "LinkedIn"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: "mailto:antoinedewas@outlook.fr",
      label: "Email"
    }
  ];

  return (
    <footer className="relative z-10">
      <div className="border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="text-sm text-neutral-500">
              © {currentYear} Antoine Dewas. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 