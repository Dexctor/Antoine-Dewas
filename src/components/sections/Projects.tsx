import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { ProjectCard } from "@/components/ProjectCard";
import { typography, textSizes } from "@/styles/typography";

const Projects = () => {
  const projects = [
    {
      title: "SAP-OD",
      description:
        "Site vitrine développé pour une experte SAP, mettant en avant son expertise à travers une interface moderne et responsive. Utilisation de Next.js et Tailwind CSS pour une expérience utilisateur optimale.",
      tech: ["React", "Next.js", "TailwindCSS", "Framer-motion"],
      github: "https://github.com/Dexctor/SAP-OD",
      external: "https://sap-od.vercel.app",
      image: "/SAP-ODILEDEWAS.webp",
    },
    {
      title: "NFT-Store",
      description:
        "Marketplace NFT conceptuelle démontrant mes compétences en design d'interface et en intégration d'animations fluides. Focus sur l'expérience utilisateur et les performances front-end.",
      tech: ["Next.js", "framer-motion", "TailwindCSS"],
      github: "https://github.com/Dexctor/NFT-store",
      external: "https://nft-store-six.vercel.app",
      image: "/NFT-STORE.webp",
    },   {
      title: "V1 Portfolio",
      description:
        " En m'appuyant sur React pour la structure, Framer Motion pour animer l'interface et tsParticles pour ajouter un côté ludique, j'ai pu donner vie à cette première version de mon portfolio. Elle reflète mon état d'esprit du moment et servira de point de repère pour mesurer mes progrès dans le futur.",
      tech: ["React", "Framer-motion", "Tsparticules"],
      github: "https://github.com/Dexctor/Portfolio-v1",
      external: "https://antoinedewasv1.vercel.app",
      image: "/Portfoliov1.webp",
    },
  ];

  return (
    <section id="projects" className="py-20 relative px-4 sm:px-6 md:px-8">
      <motion.h2 
        className={`${typography.heading} section-heading group relative flex items-center gap-4 w-fit mx-auto mb-16`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={`section-number ${typography.secondary}`}>
          02<span className="ml-0.5 group-hover:text-emerald-400">.</span>
        </span>
        <motion.span 
          className="relative"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
        >
          Mes Projets
        </motion.span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}

        <motion.div
          className="glass-panel p-6 rounded-lg bg-neutral-900/50 border border-neutral-700/50 backdrop-blur-sm h-fit overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: projects.length * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4 border-b border-neutral-800 pb-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-sm text-neutral-400 font-mono typing-text">next-project.tsx</div>
          </div>

          <div className="flex flex-col items-center justify-center py-8 space-y-4 relative">
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial="hidden"
              animate="visible"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                  initial={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    scale: 0,
                  }}
                  animate={{
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-2 rounded-full bg-neutral-900 flex items-center justify-center"
                initial={false}
              >
                <motion.div
                  className="w-8 h-8 border-2 border-t-purple-400 border-r-transparent border-b-pink-400 border-l-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>

            <motion.h3
              className={`${typography.subheading} ${textSizes.base}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Projet en cours
            </motion.h3>

            <motion.p
              className={`${typography.body} ${textSizes.base} text-center text-sm max-w-xs`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Un nouveau projet passionnant est en cours de développement. 
              Revenez bientôt pour découvrir les dernières innovations !
            </motion.p>

            <div className="w-full h-2 bg-neutral-800/50 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0 opacity-30 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2,
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <SectionSeparator />
    </section>
  );
};

export default Projects;