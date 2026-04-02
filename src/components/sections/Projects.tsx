import { ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "Motus Pocus",
    description:
      "Site d'acquisition pour une agence de montage vidéo SaaS B2B. Structuré pour convertir : pricing, social proof, formulaire multi-étapes.",
    tech: ["Next.js", "React", "TailwindCSS"],
    external: "https://motus-pocus.vercel.app",
    image: "/motus-pocus.png",
    category: "Site d'acquisition",
  },
  {
    title: "Kin-Siologie",
    description:
      "Site vitrine pour une praticienne bien-être. Prise de rendez-vous en ligne intégrée, contenu orienté patient, référencement local.",
    tech: ["Next.js", "TailwindCSS", "Google Calendar API"],
    external: "https://kin-siologie.vercel.app",
    image: "/kin-siologie.png",
    category: "Site vitrine",
  },
  {
    title: "Habbone",
    description:
      "Plateforme communautaire complète : forums, actualités, outils interactifs, système de profils et base de données d'objets.",
    tech: ["Next.js", "TailwindCSS", "Discord API"],
    external: "https://habbone.vercel.app",
    image: "/habbone.png",
    category: "Plateforme",
  },
  {
    title: "SAP-OD",
    description:
      "Site vitrine pour une consultante SAP. Message clair, parcours simplifié, formulaire de contact accessible à chaque section.",
    tech: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    external: "https://sap-od.vercel.app",
    image: "/SAP-ODILEDEWAS.webp",
    category: "Site vitrine",
  },
  {
    title: "NFT Store",
    description:
      "Interface marketplace avec focus UX : navigation fluide, animations soignées, architecture pensée pour l'engagement.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    external: "https://nft-store-six.vercel.app",
    image: "/NFT-STORE.webp",
    category: "Interface web",
  },
  {
    title: "Portfolio V1",
    description:
      "Première itération de mon portfolio. Le point de départ — chaque version est meilleure que la précédente.",
    tech: ["React", "Framer Motion", "tsParticles"],
    external: "https://antoinedewasv1.vercel.app",
    image: "/Portfoliov1.webp",
    category: "One page",
  },
];

const Projects = () => {
  return (
    <SectionWrapper variant="dark" id="projects">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Des sites qui{" "}
            <span className="text-emerald-400">travaillent</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Chaque projet est conçu avec le même objectif : structurer le parcours visiteur pour générer des demandes.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.06}>
            <a href={project.external} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="rounded-xl border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-colors duration-300 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm">
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 rounded-full mb-2.5 uppercase tracking-wider w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] font-medium text-neutral-500 bg-neutral-800 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="text-center mt-10">
          <p className="text-sm text-neutral-500 mb-4">Même approche pour vous ?</p>
          <Button href="#contact" variant="primary-light">
            On en discute
          </Button>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Projects;
