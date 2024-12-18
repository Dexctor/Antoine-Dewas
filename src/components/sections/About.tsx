import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { typography, textSizes } from "@/styles/typography";

// Types
interface TechItemProps {
  logo: string;
  name: string;
  onHover: (name: string) => void;
}

interface WindowHeaderProps {
  title: string;
}

// Composants optimisés
const WindowHeader = memo(({ title }: WindowHeaderProps) => (
  <div className="flex items-center gap-2 mb-4 border-b border-neutral-800 pb-3">
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-500/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <div className="w-3 h-3 rounded-full bg-green-500/80" />
    </div>
    <div className="text-sm text-neutral-400 font-mono">{title}</div>
  </div>
));

WindowHeader.displayName = 'WindowHeader';

const TechItem = memo(({ logo, name, onHover }: TechItemProps) => (
  <motion.div
    className="relative w-14 h-14 cursor-pointer group perspective-1000"
    whileHover={{ scale: 1.05 }}
    onHoverStart={() => onHover(name)}
    onHoverEnd={() => onHover("")}
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 
                  backdrop-blur-sm shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-600/10 opacity-0 
                   group-hover:opacity-100 transition-all duration-300 rounded-xl" />
      
      <div className="absolute -inset-[0.5px] bg-gradient-to-r from-purple-500/20 via-transparent to-pink-600/20 
                   rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <div className="absolute inset-0 flex items-center justify-center p-2.5">
        <img 
          src={logo} 
          alt={name}
          loading="lazy"
          className={`w-8 h-8 object-contain transition-all duration-300 
                   group-hover:scale-110 filter group-hover:brightness-125
                   ${name === "OpenAI" ? "invert" : ""}`}
        />
      </div>
    </div>
  </motion.div>
));

TechItem.displayName = 'TechItem';

// Animations
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
};

const About = () => {
  const [hoveredTech, setHoveredTech] = useState<string>("");
  const [ref, inView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true,
    rootMargin: "50px"
  });

  const skills = [
    "React", 
    "Next.js",
    "TypeScript",
    "Node.js", 
    "TailwindCSS",
    "PayloadCMS",
    "WordPress",
    "OpenAI API"
  ];

  const techStack = [
    { name: "Next.js", logo: "/assets/Nextjs-logo.svg" },
    { name: "React", logo: "/assets/React-icon.svg" },
    { name: "TypeScript", logo: "/assets/Typescript-logo.svg" },
    { name: "Tailwind", logo: "/assets/Tailwind-Logo.svg" },
    { name: "OpenAI", logo: "/assets/openai-icon.svg" },
    { name: "Wordpress", logo: "/assets/Wordpress-Logo.svg" },
    { name: "PayloadCMS", logo: "/assets/payload-logo.svg" },
  ];

  const handleTechHover = useCallback((name: string) => {
    setHoveredTech(name);
  }, []);

  return (
    <section 
      ref={ref} 
      id="about" 
      className="py-12 sm:py-20 relative overflow-hidden px-4 sm:px-6 md:px-8"
    >
      <motion.div 
        className="spotlight spotlight-purple -left-32 top-1/4 w-96 h-96"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        <motion.h2 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animations.item}
          className={`${typography.heading} section-heading group relative flex items-center gap-4 w-fit`}
        >
          <span className={`section-number ${typography.secondary}`}>
            01<span className="ml-0.5 group-hover:text-emerald-400">.</span>
          </span>
          <span className="relative">À propos</span>
        </motion.h2>

        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animations.container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <motion.div 
            variants={animations.item}
            className="glass-panel p-6 rounded-lg bg-neutral-900/50 border border-neutral-700/50 backdrop-blur-sm"
          >
            <WindowHeader title="about.tsx" />
            <div className="space-y-4">
              <p className={`${typography.primary} ${textSizes.base} leading-relaxed`}>
                Je suis Antoine, développeur Web full-stack passionné par les technologies modernes et l'innovation.
              </p>
              <p className={`${typography.body} ${textSizes.base}`}>
                Mon expertise s'étend du développement front-end avec React et Next.js à la gestion de CMS comme WordPress et PayloadCMS, en passant par l'intégration d'APIs avancées comme OpenAI.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={animations.item}
            className="glass-panel p-6 rounded-lg bg-neutral-900/50 border border-neutral-700/50 backdrop-blur-sm"
          >
            <WindowHeader title="skills.tsx" />
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  className={`flex items-center text-base transition-all duration-200 ease-out
                    ${hoveredTech && skill.toLowerCase().includes(hoveredTech.toLowerCase())
                      ? 'text-neutral-300 font-medium translate-x-2' 
                      : 'text-neutral-200 hover:text-purple-400'
                    }`}
                  style={{
                    transitionTimingFunction: hoveredTech && skill.toLowerCase().includes(hoveredTech.toLowerCase())
                      ? 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                      : 'ease-out'
                  }}
                >
                  <span className="text-purple-400 mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={animations.item}
            className="glass-panel p-6 rounded-lg bg-neutral-900/50 border border-neutral-700/50 backdrop-blur-sm lg:col-span-2 hidden sm:block"
          >
            <WindowHeader title="tech-stack.tsx" />
            <div className="grid grid-cols-7 gap-6 justify-items-center items-center">
              {techStack.map((tech) => (
                <TechItem
                  key={tech.name}
                  {...tech}
                  onHover={handleTechHover}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(About);