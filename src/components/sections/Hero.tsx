import { memo, useEffect, useState, useRef } from "react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import { useInView } from "react-intersection-observer";

const clientLogos = [
  "Motus Pocus", "Kin-Siologie", "Habbone", "SAP-OD", "Drone Axis", "Atrakt",
];

const stats = [
  { value: 6, suffix: "+", label: "Projets livrés" },
  { value: 100, suffix: "%", label: "Clients satisfaits" },
  { value: 24, suffix: "h", label: "Réponse garantie" },
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
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
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
        {count}<span className="text-emerald-500">{suffix}</span>
      </div>
      <p className="text-sm text-neutral-500 mt-1">{label}</p>
    </div>
  );
};

const Hero = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section id="hero" className="section-light pt-28 pb-16 md:pt-40 md:pb-20">
      <div className="section-container">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full mb-8">
              Développeur web &middot; Sites sur mesure
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-6 text-balance">
              Vous avez un site web.
              <br />
              <span className="text-emerald-500">Mais est-ce qu'il vous rapporte des clients ?</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              La plupart des sites vitrines ne génèrent aucune demande entrante.
              Pas un problème de design — un problème de structure.
              Je conçois des sites codés sur mesure, pensés pour convertir.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Button href="#contact" variant="primary" className="px-8 py-3.5 text-base">
                Réserver un diagnostic gratuit
              </Button>
              <Button href="#projects" variant="secondary" className="px-8 py-3.5 text-base">
                Voir les réalisations
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div ref={statsRef} className="flex items-center justify-center gap-6 sm:gap-12 md:gap-20 mb-14">
            {stats.map((stat, i) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i} started={statsInView} />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="border-t border-b border-neutral-200 py-6">
            <Marquee speed={25}>
              {clientLogos.map((name) => (
                <span key={name} className="mx-6 sm:mx-10 text-xs sm:text-sm font-medium text-neutral-400 whitespace-nowrap uppercase tracking-wider">
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
