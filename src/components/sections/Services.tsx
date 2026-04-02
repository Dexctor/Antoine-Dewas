import { Check, X } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";

const whatWeDo = [
  "Restructuration des pages autour des recherches de vos clients",
  "Formulaires et boutons d'appel visibles à chaque étape du parcours",
  "Rédaction de contenu orientée problème client, pas jargon technique",
  "Optimisation vitesse de chargement, mobile en priorité",
  "Référencement technique intégré dès la conception",
  "Code propriétaire — vous êtes propriétaire de votre site à 100%",
];

const whatWeDont = [
  "Pas de thème WordPress générique habillé à la va-vite",
  "Pas de plugin SEO installé à l'aveugle sans stratégie",
  "Pas de site livré puis abandonné sans suivi ni accompagnement",
  "Pas de jargon, pas de sous-traitance, pas de surprise sur la facture",
];

const Services = () => {
  return (
    <SectionWrapper variant="light" id="services">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4 text-balance">
            Ce qu'on met en place{" "}
            <span className="text-emerald-500">concrètement</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Un site peut être beau et ne rien générer. Ce qui compte, c'est la structure, le parcours, et le message.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
        {/* Ce qu'on fait */}
        <FadeIn delay={0.05}>
          <div className="p-4 sm:p-6 md:p-8 rounded-xl border border-neutral-200">
            <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-6">
              Ce qu'on fait
            </h3>
            <div className="space-y-4">
              {whatWeDo.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Ce qu'on ne fait pas */}
        <FadeIn delay={0.1}>
          <div className="p-6 md:p-8 rounded-xl border border-neutral-200 bg-neutral-50">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
              Ce qu'on ne fait pas
            </h3>
            <div className="space-y-4">
              {whatWeDont.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-500 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export default Services;
