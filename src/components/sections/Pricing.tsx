import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CornerDots from "@/components/ui/CornerDots";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const offers = [
  {
    name: "One Page",
    description: "Une page, un objectif. Idéal pour tester un marché ou lancer une offre rapidement.",
    features: [
      "Page unique orientée conversion",
      "Design et code sur mesure",
      "Responsive mobile & desktop",
      "Formulaire de contact intégré",
      "Référencement technique de base",
    ],
  },
  {
    name: "Site Vitrine",
    popular: true,
    description: "Votre présence en ligne professionnelle. Structuré pour générer des demandes entrantes.",
    features: [
      "3 à 5 pages sur mesure",
      "Parcours visiteur optimisé conversion",
      "Contenu rédigé orienté client",
      "SEO technique complet",
      "Formulaires & analytics intégrés",
    ],
  },
  {
    name: "Landing SaaS",
    description: "Landing page haute conversion pour SaaS et produits digitaux.",
    features: [
      "Hero et proposition de valeur percutants",
      "Sections features, pricing, social proof",
      "Intégration Stripe ou waitlist",
      "Analytics & tracking avancés",
      "Conçu pour l'A/B testing",
    ],
  },
  {
    name: "Site Multi-Pages",
    description: "Architecture complète pour les activités qui nécessitent de la profondeur.",
    features: [
      "Architecture avancée, pages illimitées",
      "Stratégie de contenu par page",
      "Optimisation conversion avancée",
      "Analytics et suivi des objectifs",
      "Formation et accompagnement post-lancement",
    ],
  },
];

const qualifications = {
  not: [
    "Vous cherchez le site le moins cher possible",
    "Vous voulez juste une carte de visite en ligne",
    "Le design compte plus que les résultats pour vous",
  ],
  yes: [
    "Vous dirigez une entreprise et voulez des demandes entrantes",
    "Vous comprenez qu'un bon site est un investissement, pas une dépense",
    "Vous êtes prêt à collaborer sur le contenu et la stratégie",
  ],
};

const Pricing = () => {
  return (
    <SectionWrapper variant="dark" id="pricing">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Chaque projet est{" "}
            <span className="text-emerald-400">sur mesure</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Devis fixe validé avant de démarrer. Pas de coût caché, pas de surprise. On en discute ensemble.
          </p>
        </div>
      </FadeIn>

      {/* Offers grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
        {offers.map((offer, index) => (
          <FadeIn key={offer.name} delay={index * 0.06}>
            <div className={`relative rounded-xl p-5 h-full flex flex-col ${
              offer.popular
                ? "border-2 border-emerald-500 bg-emerald-500/5"
                : "border border-neutral-800"
            }`}>
              {offer.popular && <CornerDots />}
              {offer.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-semibold text-white bg-emerald-500 rounded-full uppercase tracking-wider">
                  Le plus demandé
                </span>
              )}

              <h3 className="text-lg font-semibold text-white mb-2">{offer.name}</h3>
              <p className="text-xs text-neutral-500 mb-4 leading-relaxed">{offer.description}</p>

              <div className="space-y-2 flex-grow">
                {offer.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Qualification section - inspired by Opale */}
      <FadeIn delay={0.3}>
        <div className="relative border border-neutral-800 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
          <CornerDots />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                Ce n'est pas pour vous si…
              </h3>
              <ul className="space-y-3">
                {qualifications.not.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-neutral-600 text-xs mt-0.5">✕</span>
                    <span className="text-sm text-neutral-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                En revanche, si…
              </h3>
              <ul className="space-y-3">
                {qualifications.yes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="text-center mt-10">
          <Button href="#contact" variant="primary-light" className="px-8 py-3.5 text-base">
            Réserver un diagnostic gratuit
          </Button>
          <p className="text-xs text-neutral-500 mt-3">
            Aucun engagement. On analyse votre situation et on vous dit ce qui est possible.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Pricing;
