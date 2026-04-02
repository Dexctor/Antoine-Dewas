import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Loader2, Mail, ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { toast } from "sonner";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvggnyga");
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (state.succeeded) {
      toast.success("Demande envoyée !", {
        description: "Je vous recontacte dans les prochaines 24h.",
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded]);

  return (
    <SectionWrapper variant="light" id="contact">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4 text-balance">
              Prêt à recevoir des demandes{" "}
              <span className="text-emerald-500">depuis votre site</span> ?
            </h2>
            <p className="text-neutral-500 text-lg">
              Décrivez votre situation en 2 minutes. Diagnostic gratuit, réponse sous 24h.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900
                           placeholder-neutral-400 transition-all duration-200 text-sm
                           focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Votre nom"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900
                           placeholder-neutral-400 transition-all duration-200 text-sm
                           focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  placeholder="votre@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            <div>
              <label htmlFor="project-type" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Quel est votre besoin ?
              </label>
              <select
                id="project-type"
                name="project-type"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900
                         bg-white transition-all duration-200 text-sm
                         focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="">Sélectionnez</option>
                <option value="one-page">One Page</option>
                <option value="site-vitrine">Site Vitrine</option>
                <option value="landing-saas">Landing Page SaaS</option>
                <option value="multi-pages">Site Multi-Pages</option>
                <option value="refonte">Refonte de site existant</option>
                <option value="autre">Autre / Je ne sais pas encore</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Parlez-moi de votre projet
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900
                         placeholder-neutral-400 transition-all duration-200 resize-none text-sm
                         focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                placeholder="Votre activité, vos objectifs, ce qui ne fonctionne pas actuellement..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="btn-primary w-full justify-center py-3.5 text-sm group"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>Demander mon diagnostic gratuit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            <p className="text-xs text-neutral-400 text-center">
              Aucun engagement. Aucune donnée revendue. Juste un échange pour comprendre votre situation.
            </p>
          </form>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Disponible pour un projet</span>
            </div>
            <span className="hidden sm:block text-neutral-300">&middot;</span>
            <span>antoinedewas@outlook.fr</span>
            <span className="hidden sm:block text-neutral-300">&middot;</span>
            <span>Réponse sous 24h</span>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
