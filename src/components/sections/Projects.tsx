import { ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "Motus Pocus",
    description:
      "Landing page pour une agence de montage vidéo SaaS B2B. Design sombre et minimaliste, orienté conversion avec sections pricing et social proof intégrées.",
    tech: ["Next.js", "React", "TailwindCSS"],
    external: "https://motus-pocus.vercel.app",
    image: "/motus-pocus.png",
    category: "Landing Page SaaS",
  },
  {
    title: "Kin-Siologie",
    description:
      "Site vitrine pour une kinésiologue et maderothérapeute. Design épuré orienté bien-être avec prise de rendez-vous en ligne et intégration Google Calendar.",
    tech: ["Next.js", "TailwindCSS", "Google Calendar API"],
    external: "https://kin-siologie.vercel.app",
    image: "/kin-siologie.png",
    category: "Site Vitrine",
  },
  {
    title: "Habbone",
    description:
      "Fansite communautaire Habbo avec forums, actualités, outils interactifs et système de profils. Plateforme complète avec base de données d'objets et événements.",
    tech: ["Next.js", "TailwindCSS", "Discord API"],
    external: "https://habbone.vercel.app",
    image: "/habbone.png",
    category: "Site Multi-Pages",
  },
  {
    title: "SAP-OD",
    description:
      "Site vitrine pour une experte SAP. Interface moderne et responsive, optimisée pour la conversion avec animations fluides.",
    tech: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    external: "https://sap-od.vercel.app",
    image: "/SAP-ODILEDEWAS.webp",
    category: "Site Vitrine",
  },
  {
    title: "NFT Store",
    description:
      "Marketplace NFT conceptuelle avec design d'interface soigné et animations fluides. Focus UX et performances front-end.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    external: "https://nft-store-six.vercel.app",
    image: "/NFT-STORE.webp",
    category: "Landing Page",
  },
  {
    title: "Portfolio V1",
    description:
      "Première version de mon portfolio. React, animations et particules interactives.",
    tech: ["React", "Framer Motion", "tsParticles"],
    external: "https://antoinedewasv1.vercel.app",
    image: "/Portfoliov1.webp",
    category: "One Page",
  },
];

const Projects = () => {
  return (
    <SectionWrapper variant="dark" id="projects">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Des sites qui{" "}
            <span className="text-emerald-400">travaillent</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Chaque projet est une machine à convertir. Pas juste un joli design — un outil business.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="rounded-xl border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-colors duration-300">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {"category" in project && project.category && (
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 rounded-full mb-3 uppercase tracking-wider">
                      {project.category}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full"
                      >
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

      <FadeIn delay={0.4}>
        <div className="text-center mt-12">
          <Button href="#contact" variant="primary-light">
            Discuter de votre projet
          </Button>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export default Projects;
