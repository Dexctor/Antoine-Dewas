import { Code2, Zap, Search, BarChart3 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    icon: Code2,
    title: "Zéro dépendance, zéro limite",
    description: "Pas de plugins qui cassent. Pas de mises à jour qui plantent votre site. Du code pur, ultra rapide, que vous possédez à 100%.",
  },
  {
    icon: Zap,
    title: "Chaque pixel sert la conversion",
    description: "Parcours utilisateur étudié, CTA placés stratégiquement, formulaires qui convertissent. Votre site guide le visiteur vers l'action.",
  },
  {
    icon: Search,
    title: "Visible sur Google dès le jour 1",
    description: "Performance A+ sur PageSpeed, structure sémantique, balises optimisées. Vos concurrents sur WordPress ne pourront pas suivre.",
  },
  {
    icon: BarChart3,
    title: "Des résultats mesurables",
    description: "Analytics intégrés, suivi des conversions, heatmaps. Vous savez exactement ce qui fonctionne et ce qu'il faut améliorer.",
  },
];

const Services = () => {
  return (
    <SectionWrapper variant="light" id="services">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Ce qui rend mes sites{" "}
            <span className="text-emerald-500">différents</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Pas de WordPress. Pas de template. Du code écrit à la main, pensé pour un seul objectif : votre croissance.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <FadeIn key={feature.title} delay={index * 0.08}>
            <div className="flex gap-4 p-6 rounded-xl border border-neutral-200 hover:border-emerald-200 transition-colors duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
