import { Star } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";

const avatarColors = [
  "bg-emerald-500", "bg-blue-500", "bg-purple-500",
  "bg-orange-500", "bg-pink-500", "bg-cyan-500",
];

const testimonials = [
  {
    quote: "Super sérieux, la discussion a été claire et efficace, le prix est raisonnable, je recommande !",
    name: "Teufeurs",
    role: "Streameur sur Kick",
    stars: 5,
  },
  {
    quote: "Antoine est un atout précieux : créatif, réactif et toujours à l'écoute. Il m'a accompagné sur de nombreux projets avec un travail graphique toujours au top. Je recommande à 100% !",
    name: "Zaros",
    role: "Fondateur, Creators Area",
    stars: 5,
  },
  {
    quote: "Un réel potentiel, il ne cesse de s'améliorer et travailler avec lui est agréable car il est à l'écoute et avec de bonnes idées !",
    name: "Enzo",
    role: "Développeur Front End",
    stars: 5,
  },
  {
    quote: "Un site moderne, fluide et qui reflète exactement notre image de marque. Je recommande leur professionnalisme et leur réactivité !",
    name: "Joris-Karl Pottier",
    role: "Fondateur, Drone Axis",
    stars: 5,
  },
  {
    quote: "La qualité était au-delà de mes espérances. Je recommande pour leur sérieux et les livrables qu'ils ont pu délivrer.",
    name: "Johan",
    role: "Fondateur, Atrakt",
    stars: 5,
  },
  {
    quote: "Accompagnement parfait. Force de proposition, adaptables et réactifs, le site produit est plus que conforme à nos attentes. Je recommande fortement !",
    name: "Gauthier",
    role: "Growth Manager, Instaply",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <SectionWrapper variant="light" id="testimonials">
      <FadeIn>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-3">
            Ils ont franchi{" "}
            <span className="text-emerald-500">le pas</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Ce ne sont pas mes mots, mais les leurs. Voici pourquoi ils recommandent de travailler avec moi.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="columns-1 md:columns-2 xl:columns-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="break-inside-avoid mb-4 border border-neutral-200 rounded-xl p-5 hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                ))}
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
                <div className={`w-9 h-9 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center`}>
                  <span className="text-xs font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-xs text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Testimonials;
