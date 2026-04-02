import { Clock, UserX, TrendingDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CornerDots from "@/components/ui/CornerDots";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const painPoints = [
  {
    icon: Clock,
    title: "Pas de message clair en 5 secondes",
    description: "Un visiteur arrive avec une intention précise. Si votre page n'y répond pas immédiatement, il part — et il ne reviendra pas.",
  },
  {
    icon: UserX,
    title: "Aucun parcours vers la prise de contact",
    description: "Un seul bouton de contact en bas de page ne suffit pas. Chaque clic inutile, chaque étape confuse éloigne le visiteur de la conversion.",
  },
  {
    icon: TrendingDown,
    title: "Invisible sur Google",
    description: "Si votre site n'apparaît pas quand un prospect tape votre métier + votre ville, il ne sert qu'à ceux qui vous connaissent déjà.",
  },
];

const Problem = () => {
  return (
    <SectionWrapper variant="dark" id="problem">
      <FadeIn>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Ce qu'on observe sur la plupart des sites
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Ce n'est pas une question de design. C'est une question de <span className="text-emerald-400 font-medium">structure</span>.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {painPoints.map((point, index) => (
          <FadeIn key={point.title} delay={index * 0.08}>
            <div className="relative p-5 sm:p-7 border border-neutral-800 rounded-xl h-full">
              <CornerDots />
              <point.icon className="w-7 h-7 text-emerald-400 mb-5" />
              <h3 className="text-base font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="text-center mt-10">
          <Button href="#services" variant="primary-light">
            Découvrir notre approche
          </Button>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Problem;
