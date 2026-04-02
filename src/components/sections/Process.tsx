import { FileText, Code2, Rocket, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CornerDots from "@/components/ui/CornerDots";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    icon: FileText,
    week: "Semaine 1",
    title: "Stratégie & structure",
    points: [
      "Analyse de votre marché, vos concurrents, les recherches de vos clients",
      "Définition de l'architecture du site et du contenu de chaque page",
      "Devis fixe validé avant de démarrer — pas de coût caché",
    ],
  },
  {
    number: "02",
    icon: Code2,
    week: "Semaine 2",
    title: "Production & validation",
    points: [
      "Construction du site, rédaction du contenu, mise en place des formulaires",
      "Vous validez chaque étape avant qu'on avance",
      "Code sur mesure, optimisé pour la performance et la conversion",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    week: "Semaine 3",
    title: "Mise en ligne & ajustements",
    points: [
      "Vérification que tout fonctionne sur mobile et desktop",
      "Mise en ligne et configuration des analytics",
      "Ajustements après les premiers jours de données réelles",
    ],
  },
];

const Process = () => {
  return (
    <SectionWrapper variant="light" id="process" className="bg-surface-gray">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4 text-balance">
            Comment ça se passe{" "}
            <span className="text-emerald-500">concrètement</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Vous gardez le contrôle à chaque étape. En moyenne, votre site est en ligne en 3 semaines.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="relative border-2 border-neutral-200 rounded-xl overflow-hidden">
          <CornerDots />
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            {steps.map((step, index) => (
              <div key={step.number} className="p-6 md:p-8 relative">
                <span className="absolute top-4 right-4 text-4xl sm:text-5xl font-bold text-neutral-100 select-none">
                  {step.number}
                </span>

                <div className="relative">
                  <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
                    {step.week}
                  </span>
                  <div className="flex items-center gap-2 mt-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                  </div>

                  <ul className="space-y-2.5">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-1" />
                        <span className="text-sm text-neutral-500 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Process;
