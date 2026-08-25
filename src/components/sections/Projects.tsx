import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "Sitoscope",
    description:
      "Un SaaS qui transforme un audit technique complexe en diagnostic lisible, avec priorités d'action et restitution pensée pour déclencher l'inscription.",
    tech: ["Next.js", "TypeScript", "Prisma", "Redis", "Playwright"],
    external: "https://sitoscope.fr",
    image: "/sitoscope.png",
    category: "SaaS B2B",
    result: "Offre complexe rendue compréhensible",
  },
  {
    title: "Motus Pocus",
    description:
      "Une page d'acquisition qui clarifie l'offre vidéo pour SaaS B2B et pousse vers un rendez-vous plutôt qu'une simple visite passive.",
    tech: ["Site vitrine", "SaaS B2B", "Conversion"],
    external: "https://www.motus-pocus.com",
    image: "/motus-pocus.jpg",
    category: "Site d'acquisition",
    result: "Parcours orienté appel",
  },
  {
    title: "Kin-Siologie",
    description:
      "Un site rassurant qui présente les séances et facilite la prise de rendez-vous.",
    tech: ["Next.js", "TailwindCSS", "Google Calendar API"],
    external: "https://kin-siologie.vercel.app",
    image: "/kin-siologie-preview.jpg",
    category: "Site vitrine",
    result: "Rendez-vous simplifié",
  },
  {
    title: "Habbone",
    description:
      "Une interface communautaire avec une identité visuelle forte, pensée pour donner envie de se connecter et rejoindre l'univers du site.",
    tech: ["Communauté", "Interface web", "Responsive"],
    external: "https://habbone.fr",
    image: "/habbone.jpg",
    category: "Plateforme web",
    result: "Univers et inscription valorisés",
  },
];

const Projects = () => {
  return (
    <SectionWrapper variant="dark" id="projects">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Des projets pensés pour{" "}
            <span className="text-emerald-400">déclencher une action</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Chaque site guide vers une action précise.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.06} className="h-full">
            <article className="h-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 transition-colors duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:border-neutral-600 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:ring-offset-4 focus-within:ring-offset-neutral-950">
              <a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir ${project.title} (nouvel onglet)`}
                className="flex h-full flex-col focus-visible:outline-none"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={`Aperçu du site ${project.title}`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-medium text-white/80">
                      {project.result}
                    </p>
                  </div>
                </div>

                <div className="flex flex-grow flex-col gap-5 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                  </div>
                  <p className="flex-grow text-sm leading-relaxed text-neutral-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                    Voir le projet
                    <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                  </div>
                </div>
              </a>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="text-center mt-10">
          <p className="text-sm text-neutral-500 mb-4">Vous voulez transformer votre site en vrai canal d'acquisition ?</p>
          <Button href="#contact" variant="primary-light">
            Demander un avis
          </Button>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Projects;
