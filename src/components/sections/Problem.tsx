import { Clock, TrendingDown, UserX } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CornerDots from "@/components/ui/CornerDots";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const painPoints = [
  {
    icon: Clock,
    title: "3 secondes pour convaincre",
    description: "C'est le temps que vous avez avant qu'un visiteur ne parte. Un site lent ou confus ? Votre prospect est déjà chez un concurrent.",
  },
  {
    icon: UserX,
    title: "Du trafic mais zéro conversion",
    description: "Vous payez pour du trafic (SEO, pubs) mais votre site ne transforme pas. Pas de parcours clair, pas de CTA, pas de résultat.",
  },
  {
    icon: TrendingDown,
    title: "Vos concurrents vous dépassent",
    description: "Pendant que votre site stagne, d'autres investissent dans des sites pensés pour vendre. Chaque semaine d'inaction creuse l'écart.",
  },
];

const Problem = () => {
  return (
    <SectionWrapper variant="dark" id="problem">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Pendant que vous lisez ceci, votre site{" "}
            <span className="text-emerald-400">perd des clients</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            97% des visiteurs quittent un site sans agir. Si le vôtre n'est pas conçu pour convertir, vous laissez de l'argent sur la table.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {painPoints.map((point, index) => (
          <FadeIn key={point.title} delay={index * 0.15}>
            <div className="relative p-8 border border-neutral-800 rounded-xl h-full">
              <CornerDots />
              <point.icon className="w-8 h-8 text-emerald-400 mb-6" />
              <h3 className="text-lg font-semibold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="text-center mt-12">
          <Button href="#services" variant="primary-light">
            Découvrir la solution
          </Button>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Problem;
