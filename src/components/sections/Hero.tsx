import { memo } from "react";
import { FileText, Gauge, Search } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";

const clientLogos = [
  "Sitoscope", "Motus Pocus", "Kin-Siologie", "Habbone", "Drone Axis", "Atrakt",
];

const stats = [
  { value: 980, suffix: "€", label: "Prix d'entrée" },
  { value: 21, suffix: "j", label: "Délai moyen" },
  { value: 24, suffix: "h", label: "Réponse garantie" },
];

const proofItems = [
  {
    icon: Search,
    title: "Message clair",
    text: "Le visiteur comprend votre offre, votre cible et l'action à faire.",
  },
  {
    icon: FileText,
    title: "Parcours structuré",
    text: "Chaque section répond à une objection avant la prise de contact.",
  },
  {
    icon: Gauge,
    title: "Site rapide",
    text: "Code sur mesure, responsive, SEO technique et tracking inclus.",
  },
];

const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
        {value}<span className="text-emerald-500">{suffix}</span>
      </div>
      <p className="text-xs sm:text-sm text-neutral-500 mt-1">{label}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="section-light pt-24 pb-14 md:pt-36 md:pb-20">
      <div className="section-container">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full mb-7">
              Sites web pour indépendants, artisans et PME
            </span>

            <h1 className="max-w-3xl mx-auto text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 mb-6 text-balance">
              Un site web clair.
              <br />
              <span className="text-emerald-600">Pensé pour recevoir plus de demandes.</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-9 leading-relaxed">
              Je crée des sites vitrines et landing pages qui expliquent votre offre,
              rassurent vos prospects et les guident vers une prise de contact.
              Design, contenu, SEO local et formulaire sont pensés ensemble.
            </p>

            <div className="w-full max-w-sm sm:max-w-none mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button href="#contact" variant="primary" className="w-full sm:w-auto justify-center px-5 sm:px-8 py-3.5 text-sm sm:text-base">
                Demander un avis sur mon projet
              </Button>
              <Button href="#pricing" variant="secondary" className="w-full sm:w-auto justify-center px-5 sm:px-8 py-3.5 text-sm sm:text-base">
                Voir les offres et prix
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-500">
              <span className="rounded-full border border-neutral-200 px-3 py-1">Devis fixe avant démarrage</span>
              <span className="rounded-full border border-neutral-200 px-3 py-1">Code sur mesure</span>
              <span className="rounded-full border border-neutral-200 px-3 py-1">SEO technique inclus</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 gap-3 sm:gap-8 max-w-lg mx-auto mt-12 mb-10">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-5xl mx-auto mb-14 rounded-xl border border-neutral-200 bg-neutral-50 p-3 sm:p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {proofItems.map((item) => (
                <div key={item.title} className="rounded-lg bg-white p-5 border border-neutral-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <h2 className="text-sm font-semibold text-neutral-950">{item.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="border-t border-b border-neutral-200 py-6">
            <Marquee speed={25}>
              {clientLogos.map((name) => (
                <span key={name} className="mx-6 sm:mx-10 text-xs sm:text-sm font-medium text-neutral-400 whitespace-nowrap uppercase tracking-wider">
                  {name}
                </span>
              ))}
            </Marquee>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default memo(Hero);
