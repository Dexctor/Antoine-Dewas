import { FileText, Code2, Rocket, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CornerDots from "@/components/ui/CornerDots";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Brief",
    subtitle: "5 min pour tout m'expliquer",
    description:
      "Remplissez un formulaire rapide : votre activité, vos objectifs, votre budget. Je vous recontacte sous 24h avec une proposition chiffrée et un calendrier précis.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Création",
    subtitle: "Vous voyez, vous validez",
    description:
      "Design, développement, ajustements. Vous avez un accès direct pour suivre l'avancée et donner vos retours. Rien n'est livré sans votre validation.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lancement",
    subtitle: "Votre site génère des leads",
    description:
      "Mise en ligne, configuration analytics, derniers réglages. Votre site est prêt à convertir. Je reste disponible après le lancement pour le suivi.",
  },
];

const Process = () => {
  return (
    <SectionWrapper variant="light" id="process" className="bg-surface-gray">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            De l'idée au site en ligne{" "}
            <span className="text-emerald-500">en 3 étapes</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Pas de process interminable. Vous décrivez, je crée, on lance. Simple.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="relative border-2 border-neutral-200 rounded-xl overflow-hidden">
          <CornerDots />
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            {steps.map((step, index) => (
              <div key={step.number} className="p-8 md:p-10 relative group">
                {/* Step number - large background */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-neutral-100 select-none">
                  {step.number}
                </span>

                <div className="relative">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-neutral-300 hidden md:block absolute -right-7 top-2 z-10" />
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-emerald-500 font-medium mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
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
