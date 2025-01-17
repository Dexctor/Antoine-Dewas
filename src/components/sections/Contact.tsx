import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, ArrowUpRight, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"
import { typography, textSizes } from "@/styles/typography";
import React from 'react';

// Ajout du type pour le formulaire
interface FormData {
  name: string;
  email: string;
  message: string;
}

const WindowHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-2 mb-16 border-b border-neutral-800 pb-3">
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-500/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <div className="w-3 h-3 rounded-full bg-green-500/80" />
    </div>
    <div className="text-sm text-neutral-400 font-mono">{title}</div>
  </div>
);

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [state, handleSubmit] = useForm("mvggnyga");
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  // Afficher le toast de succès quand l'envoi réussit et reset le formulaire
  React.useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message envoyé avec succès !",
        description: "Je vous répondrai dans les prochaines 24h. Merci de votre message.",
        variant: "default",
        className: "border-2 border-emerald-500/50 bg-emerald-500/10"
      });
      
      // Reset le formulaire
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded, toast]);

  return (
    <section ref={ref} id="contact" className="py-12 sm:py-20 relative overflow-hidden px-4 sm:px-6 md:px-8">
      <motion.div 
        className="spotlight spotlight-purple -right-32 top-1/4 w-96 h-96"
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className={`${typography.heading} ${textSizes.section} flex items-center gap-4 w-fit`}
        >
          <span className={`section-number ${typography.secondary}`}>
            03<span className="ml-0.5 group-hover:text-emerald-400">.</span>
          </span>
          <span className="relative">Contact</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="glass-panel p-6 rounded-lg bg-neutral-900/50 border border-neutral-700/50 backdrop-blur-sm max-w-3xl mx-auto"
        >
          <WindowHeader title="contact.tsx" />
          <div className="space-y-8">
            <div className="space-y-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className={`${typography.accent} ${textSizes.small} font-mono`}>
                      <span className="text-neutral-400">const</span> name <span className="text-neutral-400">=</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg font-mono
                               bg-neutral-900/50 border border-neutral-700/50 
                               focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 
                               text-green-400 placeholder-neutral-600
                               transition-all duration-200"
                      placeholder='"Votre nom complet"'
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className={`${typography.accent} ${textSizes.small} font-mono`}>
                      <span className="text-neutral-400">const</span> email <span className="text-neutral-400">=</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg font-mono
                               bg-neutral-900/50 border border-neutral-700/50 
                               focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 
                               text-green-400 placeholder-neutral-600
                               transition-all duration-200"
                      placeholder='"votre@email.com"'
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className={`${typography.accent} ${textSizes.small} font-mono`}>
                    <span className="text-neutral-400">const</span> message <span className="text-neutral-400">=</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg font-mono
                             bg-neutral-900/50 border border-neutral-700/50 
                             focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 
                             text-green-400 placeholder-neutral-600
                             transition-all duration-200 resize-none"
                    placeholder='"Votre message..."'
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="relative inline-flex items-center justify-center gap-2 px-8 py-3
                             bg-white/5
                             border border-white/10 hover:border-white/20
                             rounded-lg text-neutral-200
                             transition-all duration-300 ease-out
                             disabled:opacity-50 disabled:cursor-not-allowed
                             hover:bg-white/10
                             focus:outline-none focus:ring-1 focus:ring-white/20
                             sm:w-auto w-full
                             group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative flex items-center gap-2">
                      {state.submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-white/70" />
                          <span className="text-white/70">En cours d'envoi...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 transition-transform duration-300 ease-out 
                                        group-hover:-translate-y-0.5 text-white/70" />
                          <span className="text-white">Envoyer</span>
                          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 ease-out 
                                                group-hover:translate-x-0.5 group-hover:-translate-y-0.5 
                                                text-white/50 group-hover:text-white/70" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </div>
              </form>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-800">
              <div className="font-mono text-sm space-y-3">
                <div>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">contactDetails</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">email:</span> <span className="text-green-400">&quot;antoinedewas@outlook.fr&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">status:</span> <span className="text-green-400">&quot;Open to opportunities&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">response_time:</span> <span className="text-green-400">&quot;Less than 24h&quot;</span>
                </div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;