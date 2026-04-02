import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CornerDots from "@/components/ui/CornerDots";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "One Page",
    price: "980",
    delay: "10 jours",
    description: "Site une page, optimisé conversion.",
    features: [
      "Design sur mesure",
      "Responsive mobile & desktop",
      "Animations & interactions",
      "Formulaire de contact",
      "SEO de base",
      "Hébergement inclus",
    ],
  },
  {
    name: "Site Vitrine",
    price: "1 880",
    delay: "21 jours",
    description: "Présence en ligne pro, multi-pages.",
    popular: true,
    features: [
      "3 à 5 pages sur mesure",
      "Code 100% custom",
      "Responsive mobile & desktop",
      "SEO technique complet",
      "Formulaires & analytics",
      "2 tours de révisions",
    ],
  },
  {
    name: "Landing SaaS",
    price: "2 480",
    delay: "14 jours",
    description: "Landing page haute conversion pour SaaS.",
    features: [
      "Hero orienté conversion",
      "Sections features & pricing",
      "Social proof intégré",
      "Intégration Stripe / waitlist",
      "Analytics & tracking",
      "A/B testing ready",
    ],
  },
  {
    name: "Multi-Pages",
    price: "2 880",
    delay: "30 jours",
    description: "Site complet, architecture avancée.",
    features: [
      "Pages illimitées",
      "Architecture complète",
      "Analytics avancés",
      "Optimisation conversion",
      "3 tours de révisions",
      "Formation & support",
    ],
  },
];

const addOns = [
  { name: "SEO Avancé", price: "+390€", desc: "Audit, mots-clés, optimisation on-page" },
  { name: "Motion Design", price: "+490€", desc: "Animations sur mesure, transitions" },
  { name: "Copywriting", price: "+350€", desc: "Textes optimisés conversion" },
  { name: "Maintenance", price: "49€/mois", desc: "Mises à jour, monitoring, support" },
  { name: "Page supplémentaire", price: "+280€", desc: "Page additionnelle sur mesure" },
];

const Pricing = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());

  const toggleAddOn = (name: string) => {
    setSelectedAddOns((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  return (
    <SectionWrapper variant="dark" id="pricing">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Investissez dans un site qui{" "}
            <span className="text-emerald-400">rapporte</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Des tarifs clairs, pas de surprise. Vous savez exactement ce que vous payez et ce que vous obtenez.
          </p>
        </div>
      </FadeIn>

      {/* Plans grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {plans.map((plan, index) => (
          <FadeIn key={plan.name} delay={index * 0.08}>
            <div className={`relative rounded-xl p-6 h-full flex flex-col ${
              plan.popular
                ? "border-2 border-emerald-500 bg-emerald-500/5"
                : "border border-neutral-800"
            }`}>
              {plan.popular && <CornerDots />}
              {plan.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-semibold text-white bg-emerald-500 rounded-full uppercase tracking-wider">
                  Populaire
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-sm font-medium text-neutral-400 mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-lg text-white">€</span>
                </div>
                <p className="text-xs text-emerald-400 mt-1">Livraison en {plan.delay}</p>
              </div>

              <p className="text-xs text-neutral-500 mb-4">{plan.description}</p>

              <div className="space-y-2 mb-6 flex-grow">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "border border-neutral-700 text-neutral-300 hover:border-white hover:text-white"
                }`}
              >
                Choisir cette offre
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Add-ons */}
      <FadeIn delay={0.3}>
        <div className="relative border border-neutral-800 rounded-xl p-6 max-w-4xl mx-auto">
          <CornerDots />
          <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
            Options complémentaires
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {addOns.map((addon) => {
              const isSelected = selectedAddOns.has(addon.name);
              return (
                <button
                  key={addon.name}
                  onClick={() => toggleAddOn(addon.name)}
                  className={`text-left p-3 rounded-lg border transition-all duration-200 ${
                    isSelected
                      ? "border-emerald-500 bg-emerald-500/10"
                      : "border-neutral-800 hover:border-neutral-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-medium text-white">{addon.name}</span>
                    <span className="text-xs font-semibold text-emerald-400">{addon.price}</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">{addon.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="text-center mt-10">
          <p className="text-sm text-neutral-500 mb-4">
            Un besoin spécifique ?{" "}
            <a href="#contact" className="text-emerald-400 hover:underline">Demandez un devis personnalisé</a>
          </p>
          <Button href="#contact" variant="primary-light" className="px-8 py-3.5 text-base">
            Démarrer mon projet
          </Button>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Pricing;
