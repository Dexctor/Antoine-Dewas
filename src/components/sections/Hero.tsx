import { useEffect, useState, useCallback, useMemo, memo } from "react";
import { ArrowRight, ChevronDown, ExternalLink, Globe, Lock, LayoutGrid, X, Sparkles } from "lucide-react";
import { motion, useAnimation, useReducedMotion, AnimatePresence } from "framer-motion";
import { MdWavingHand } from "react-icons/md";
import { typography, textSizes } from "@/styles/typography";

// Composants optimisés
const IconWrapper = memo(({ Icon, ...props }: { Icon: any; className?: string }) => (
  <Icon {...props} />
));

const WindowControls = memo(() => (
  <div className="flex gap-2">
    {['bg-red-400/80', 'bg-yellow-400/80', 'bg-green-400/80'].map((color, i) => (
      <div key={i} className={`w-3 h-3 rounded-full ${color}`} />
    ))}
  </div>
));

const SkillBar = memo(({ name }: { name: string }) => (
  <div className="flex items-center justify-between">
    <div className="text-xs text-neutral-300">{name}</div>
    <div className="w-24 h-1.5 bg-neutral-700/50 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-emerald-500/50 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, delay: Math.random() }}
      />
    </div>
  </div>
));

const StatBox = memo(({ label, value }: { label: string; value: string }) => (
  <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-sm">
    <div className="text-xs text-neutral-400 mb-1">{label}</div>
    <div className="text-sm text-emerald-400">{value}</div>
  </div>
));

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 });

  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();

  const startTyping = useCallback((currentText: string, currentIndex: number) => {
    const fullText = "Développeur Web ";
    const typingSpeed = shouldReduceMotion ? 0 : 30;

    if (currentIndex < fullText.length) {
      setText(currentText + fullText[currentIndex]);
      return setTimeout(
        () => startTyping(currentText + fullText[currentIndex], currentIndex + 1),
        typingSpeed
      );
    }
    setIsTypingComplete(true);
  }, [shouldReduceMotion]);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      controls.start({
        y: scrolled * 0.3,
        opacity: 1 - scrolled / 700
      });
    });
  }, [controls]);

  const handleStatusHover = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSparklePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setShowEasterEgg(true);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setMounted(true);
    const timeoutId = startTyping("", 0);
    return () => clearTimeout(timeoutId);
  }, [startTyping]);

  useEffect(() => {
    const scrollHandler = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  return (
    <section 
      id="hero"
      aria-label="Introduction"
      className="section-container relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <motion.div 
        className="spotlight spotlight-purple absolute -top-1/4 -left-1/4 w-[150%] h-[150%] sm:w-[100%] sm:h-[100%]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="glass-panel p-4 sm:p-6 md:p-8 lg:p-10 relative z-10 w-full max-w-7xl mx-auto mb-20 sm:mb-24"
        animate={controls}
      >
        <nav className="flex items-center gap-2 p-2 mb-4 rounded-t-lg bg-neutral-900/50 border-b border-neutral-800/50">
          <WindowControls />
          
          <div className="flex items-center flex-1 mx-2 sm:mx-4 px-2 sm:px-3 py-1.5 rounded-md bg-neutral-800/50 text-sm text-neutral-300 overflow-hidden">
            <IconWrapper Icon={Lock} className="min-w-4 w-4 h-4 mr-1 sm:mr-2 text-emerald-500" aria-hidden="true" />
            <IconWrapper Icon={Globe} className="min-w-4 w-4 h-4 mr-1 sm:mr-2 text-neutral-400" aria-hidden="true" />
            <a 
              href="https://antoine-dewas.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-xs sm:text-sm hover:text-emerald-400 transition-colors"
              aria-label="Visiter antoine-dewas.vercel.app (s'ouvre dans un nouvel onglet)"
            >
              antoine-dewas.vercel.app
            </a>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16"
        >
          <div className="w-full lg:w-3/5 space-y-6 sm:space-y-8">
            <motion.h1 className="sr-only">
              Portfolio de Antoine Dewas - Développeur Web
            </motion.h1>
            
            <motion.h2 className={`${typography.heading} ${textSizes.section} flex items-center gap-4`}>
              Antoine Dewas
              <motion.span
                animate={{ 
                  rotate: [0, 15, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="inline-block origin-bottom"
              >
                <MdWavingHand className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
              </motion.span>
            </motion.h2>
            
            <motion.h3 className={`${typography.subheading} ${textSizes.subtitle} relative`}>
              {text}
              <motion.span
                animate={{
                  opacity: isTypingComplete ? [1, 0] : 1
                }}
                transition={{
                  duration: 0.5,
                  repeat: isTypingComplete ? Infinity : 0,
                  repeatType: "reverse"
                }}
                className="absolute"
              >
                |
              </motion.span>
            </motion.h3>
            
            <div className="space-y-4">
              <p className={`${typography.primary} ${textSizes.base} leading-relaxed`}>
                Je m'appelle Antoine. Je suis développeur Web passionné par la création d'expériences numériques innovantes et performantes.
              </p>
              
              <p className={`${typography.body} ${textSizes.base}`}>
                Spécialisé dans le développement d'applications Web modernes avec React et Next.js, je m'efforce de créer des solutions élégantes et efficaces.
              </p>
            </div>
            
            <motion.button
              onClick={() => scrollToSection('projects')}
              onHoverStart={() => setIsButtonHovered(true)}
              onHoverEnd={() => setIsButtonHovered(false)}
              whileHover={{ scale: 1.01 }}
              className="group relative w-full sm:w-auto px-6 py-3 rounded-lg overflow-hidden
                       bg-neutral-900/50 border border-neutral-800/50 transition-all duration-300
                       hover:border-emerald-500/50 hover:bg-neutral-800/50"
              aria-label="Voir mes projets"
            >
              <span className="relative z-10 flex items-center justify-center gap-2
                           text-base font-medium text-neutral-200
                           group-hover:text-emerald-400 transition-colors">
                Découvrir mes projets
                <AnimatePresence mode="wait">
                  {isButtonHovered ? (
                    <IconWrapper Icon={ArrowRight} className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <IconWrapper Icon={ExternalLink} className="w-4 h-4" aria-hidden="true" />
                  )}
                </AnimatePresence>
              </span>
            </motion.button>
          </div>

          <div className="hidden lg:block lg:w-2/5 space-y-4">
            <div className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-sm relative">
              <div 
                className="flex items-center gap-2 mb-3 relative cursor-pointer"
                onMouseEnter={handleStatusHover}
                onMouseLeave={() => setShowEasterEgg(false)}
              >
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {showEasterEgg && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -left-1 w-4 h-4"
                    >
                      <div className="absolute inset-0 animate-ping bg-emerald-500 rounded-full opacity-20" />
                    </motion.div>
                  )}
                </div>
                <span className="text-sm text-emerald-400">En ligne</span>
                
                <AnimatePresence>
                  {showEasterEgg && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-12 left-0 bg-neutral-900/95 text-emerald-400 
                               px-3 py-1.5 rounded-lg text-sm border border-emerald-500/20
                               backdrop-blur-sm whitespace-nowrap z-50"
                    >
                      <div className="flex items-center gap-2">
                        <IconWrapper Icon={Sparkles} className="w-4 h-4" />
                        <span>Disponible pour de nouveaux projets !</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-200">Compétences</div>
                  <div className="text-xs text-emerald-400">5+</div>
                </div>
                <div className="space-y-2">
                  {['React', 'Next.js', 'TypeScript'].map((skill) => (
                    <SkillBar key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <StatBox label="Projets" value="2+" />
              <StatBox label="Expérience" value="1 an" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <button 
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-slate hover:text-primary transition-colors duration-300"
        aria-label="Défiler vers la section À propos"
      >
        <ChevronDown 
          className="w-6 h-6 animate-bounce" 
          aria-hidden="true"
        />
        <span className="sr-only">Défiler vers la section À propos</span>
      </button>
    </section>
  );
};

export default memo(Hero);