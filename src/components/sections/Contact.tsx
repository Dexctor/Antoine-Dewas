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
      toast.success("Message envoyé avec succès !", {
        description: "Je vous répondrai dans les prochaines 24h.",
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
              Prêt à avoir un site qui{" "}
              <span className="text-emerald-500">convertit</span> ?
            </h2>
            <p className="text-neutral-500 text-lg">
              Décrivez votre projet en 2 minutes. Devis gratuit et réponse garantie sous 24h.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900
                           placeholder-neutral-400 transition-all duration-200
                           focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Votre nom"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900
                           placeholder-neutral-400 transition-all duration-200
                           focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  placeholder="votre@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            <div>
              <label htmlFor="project-type" className="block text-sm font-medium text-neutral-700 mb-2">
                Type de projet
              </label>
              <select
                id="project-type"
                name="project-type"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900
                         bg-white transition-all duration-200
                         focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="">Sélectionnez une offre</option>
                <option value="one-page">One Page — 980€</option>
                <option value="site-vitrine">Site Vitrine — 1 880€</option>
                <option value="multi-pages">Site Multi-Pages — 2 880€</option>
                <option value="landing-saas">Landing Page SaaS — 2 480€</option>
                <option value="custom">Autre / Sur mesure</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900
                         placeholder-neutral-400 transition-all duration-200 resize-none
                         focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                placeholder="Décrivez votre projet, vos objectifs, votre budget..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="btn-primary w-full justify-center py-3.5 text-base group"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  <span>Envoyer ma demande</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Disponible pour de nouveaux projets</span>
            </div>
            <span className="hidden sm:block text-neutral-300">·</span>
            <span>antoinedewas@outlook.fr</span>
            <span className="hidden sm:block text-neutral-300">·</span>
            <span>Réponse sous 24h</span>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
