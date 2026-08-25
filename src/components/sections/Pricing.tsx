import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CornerDots from "@/components/ui/CornerDots";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const offers = [
  {
    name: "One Page",
    price: "980 €",
    timeline: "10 jours",
    bestFor: "Lancer une offre ou valider un marché",
    outcome: "Une page courte qui présente l'offre et pousse vers un contact.",
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
    price: "2 480 €",
    timeline: "21 jours",
    bestFor: "Petites entreprises, artisans et indépendants établis",
    outcome: "Un site complet pour expliquer vos services et recevoir des demandes qualifiées.",
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
    price: "2 880 €",
    timeline: "21 jours",
    bestFor: "Produit digital, SaaS ou waitlist",
    outcome: "Une page de vente qui clarifie la proposition de valeur et mesure les conversions.",
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
    price: "3 880 €",
    timeline: "30 jours",
    bestFor: "Activités avec plusieurs services ou zones",
    outcome: "Une architecture solide pour créer plusieurs portes d'entrée SEO et commerciales.",
    description: "Architecture complète pour les activités qui nécessitent de la profondeur.",
    features: [
      "Jusqu'à 10 pages sur mesure",
      "Stratégie de contenu par page",
      "Optimisation conversion avancée",
      "Analytics et suivi des objectifs",
      "Pages supplémentaires dès 240 € HT",
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
            Des offres claires,{" "}
            <span className="text-emerald-400">sans surprise</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Tous les tarifs sont indiqués hors taxes (HT). Le devis final est fixe, validé avant
            le démarrage et adapté à votre contenu, vos pages et vos objectifs.
          </p>
        </div>
      </FadeIn>

      {/* Offers grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12">
        {offers.map((offer, index) => (
          <FadeIn key={offer.name} delay={index * 0.06}>
            <div className={`relative rounded-xl p-5 sm:p-6 h-full flex flex-col ${
              offer.popular
                ? "border-2 border-emerald-500 bg-emerald-500/10"
                : "border border-neutral-800 bg-neutral-950"
            }`}>
              {offer.popular && <CornerDots />}
              {offer.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-semibold text-white bg-emerald-500 rounded-full uppercase tracking-wider">
                  Le plus demandé
                </span>
              )}

              <h3 className="text-xl font-semibold text-white mb-3">{offer.name}</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-white">
                  <span className="text-xs font-medium text-neutral-500">À partir de </span>
                  {offer.price}
                  <span className="text-xs font-medium text-neutral-500"> HT</span>
                </p>
                <p className="text-xs text-emerald-400 mt-1">Livraison estimée : {offer.timeline}</p>
              </div>
              <div className="mb-5 rounded-lg border border-neutral-800 bg-neutral-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">Pour qui ?</p>
                <p className="text-sm font-medium text-neutral-200 mb-3">{offer.bestFor}</p>
                <p className="text-sm leading-relaxed text-neutral-400">{offer.outcome}</p>
              </div>
              <p className="text-sm text-neutral-400 mb-5 leading-relaxed">{offer.description}</p>

              <div className="space-y-2.5 flex-grow">
                {offer.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-300">{f}</span>
                  </div>
                ))}
              </div>
              <Button href="#contact" variant={offer.popular ? "primary-light" : "secondary-light"} className="mt-6 justify-center text-xs px-4 py-2.5">
                Demander un devis
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.25}>
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {[
            "Maintenance technique dès 99 €/mois",
            "Paiement en 2 fois possible selon le projet",
            "Vous êtes propriétaire du site et du code",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-center text-sm text-neutral-300">
              {item}
            </div>
          ))}
        </div>
      </FadeIn>

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
            Demander un devis clair
          </Button>
          <p className="text-xs text-neutral-500 mt-3">
            Réponse sous 24h avec une recommandation réaliste, même si on ne travaille pas ensemble.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Pricing;
