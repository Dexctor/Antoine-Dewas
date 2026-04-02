import { memo, useEffect, useState, useRef } from "react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import { useInView } from "react-intersection-observer";

const clientLogos = [
  "Motus Pocus", "Kin-Siologie", "Habbone", "SAP-OD", "NFT Store", "Drone Axis", "Atrakt",
];

const stats = [
  { value: 6, suffix: "+", label: "Projets livrés" },
  { value: 100, suffix: "%", label: "Satisfaction client" },
  { value: 24, suffix: "h", label: "Temps de réponse" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, start]);

  return count;
}

const StatCounter = ({ value, suffix, label, delay, started }: { value: number; suffix: string; label: string; delay: number; started: boolean }) => {
  const count = useCountUp(value, 1500 + delay * 200, started);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-neutral-900">
        {count}
        <span className="text-emerald-500">{suffix}</span>
      </div>
      <p className="text-sm text-neutral-500 mt-1">{label}</p>
    </div>
  );
};

const Hero = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section id="hero" className="section-light pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="section-container">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full mb-8">
              Sites web sur mesure &middot; Code qui convertit
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-6 text-balance">
              Votre site web devrait{" "}
              <span className="text-emerald-500">générer des clients</span>
              , pas les faire fuir
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Je développe des sites codés sur mesure — sans WordPress, sans template —
              pensés pour une seule chose : convertir vos visiteurs en clients payants.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button href="#contact" variant="primary" className="px-8 py-3.5 text-base">
                Obtenir mon devis gratuit
              </Button>
              <Button href="#projects" variant="secondary" className="px-8 py-3.5 text-base">
                Voir les réalisations
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.15}>
          <div ref={statsRef} className="flex items-center justify-center gap-12 md:gap-20 mb-16">
            {stats.map((stat, i) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i}
                started={statsInView}
              />
            ))}
          </div>
        </FadeIn>

        {/* Client quote */}
        <FadeIn delay={0.25}>
          <div className="text-center mb-16">
            <p className="text-sm text-neutral-400 italic">
              &ldquo;Le site a complètement changé notre image. On reçoit 3x plus de demandes qu'avant.&rdquo;
            </p>
            <p className="text-xs text-neutral-500 mt-2">— Joris-Karl P., Fondateur de Drone Axis</p>
          </div>
        </FadeIn>

        {/* Logo marquee */}
        <FadeIn delay={0.35}>
          <div className="border-t border-b border-neutral-200 py-8">
            <Marquee speed={25}>
              {clientLogos.map((name) => (
                <span
                  key={name}
                  className="mx-10 text-sm font-medium text-neutral-400 whitespace-nowrap uppercase tracking-wider"
                >
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
