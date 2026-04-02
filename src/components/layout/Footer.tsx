import { Linkedin, Github } from "lucide-react";
import AccordionItem from "@/components/ui/AccordionItem";
import CornerDots from "@/components/ui/CornerDots";
import Button from "@/components/ui/Button";

const faqItems = [
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer: "Selon la complexité du projet : 10 jours pour une One Page, 21 jours pour un site vitrine, et environ 30 jours pour un site multi-pages. Ces délais incluent le design, le développement et les révisions.",
  },
  {
    question: "Comment fonctionne le processus de commande ?",
    answer: "Tout commence par un formulaire pour préciser votre projet et vos attentes. Ensuite, je crée votre site en tenant compte de vos retours. Enfin, je vous accompagne pour le lancement et la mise en ligne.",
  },
  {
    question: "Pourquoi du code sur mesure plutôt qu'un CMS ?",
    answer: "Un site codé sur mesure est plus rapide, plus sécurisé et entièrement optimisé pour la conversion. Pas de plugins inutiles, pas de limitations de templates. Chaque ligne de code sert votre objectif business.",
  },
  {
    question: "Comment se déroule la maintenance après la création ?",
    answer: "Je propose une maintenance mensuelle à 49€/mois qui inclut les mises à jour de sécurité, le monitoring des performances, les corrections de bugs et un support prioritaire par email.",
  },
  {
    question: "Est-ce que le site sera bien référencé sur Google ?",
    answer: "Oui, chaque site est optimisé pour le SEO technique : temps de chargement rapide, structure HTML sémantique, balises meta, sitemap, et responsive design. Pour aller plus loin, l'option SEO avancé est disponible.",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-black text-white">
      <div className="section-container py-20 md:py-28">
        {/* Top section: CTA + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: CTA + Social */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Lancez votre projet
            </h2>
            <p className="text-neutral-400 mb-8">
              Un échange de 15 minutes suffit pour cadrer votre besoin. Réponse garantie sous 24h.
            </p>
            <Button href="#contact" variant="primary-light" className="mb-12">
              Démarrer mon projet
            </Button>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/antoine-dewas-640a191a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/dexctor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: FAQ */}
          <div>
            <h3 className="text-sm font-medium text-emerald-500 uppercase tracking-wider mb-6">
              Questions fréquentes
            </h3>
            {faqItems.map((item) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative mt-16 pt-8 border-t border-neutral-800">
          <CornerDots />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} Antoine Dewas. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <span>Paris</span>
              <span className="text-neutral-700">&middot;</span>
              <span>Lille</span>
              <span className="text-neutral-700">&middot;</span>
              <span>Lyon</span>
              <span className="text-neutral-700">&middot;</span>
              <span>Bordeaux</span>
              <span className="text-neutral-700">&middot;</span>
              <span>Toulouse</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
