import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle2, Loader2, Mail, ArrowUpRight, Calendar } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { toast } from "sonner";

const responsePoints = [
  "Un avis franc sur votre site ou votre idée",
  "Le type de page le plus adapté à votre objectif",
  "Une estimation claire du budget et du délai",
];

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
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4 text-balance">
              Vous voulez savoir ce qui peut{" "}
              <span className="text-emerald-500">mieux convertir</span> ?
            </h2>
            <p className="text-neutral-500 text-lg">
              Décrivez votre activité, votre objectif et votre site actuel si vous en avez un.
              Je vous réponds sous 24h avec une première recommandation claire.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-8">
          <FadeIn delay={0.05}>
            <div className="h-full rounded-xl bg-neutral-950 p-6 sm:p-8 text-white">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                Après votre message
              </p>
              <h3 className="text-2xl font-bold tracking-tight mb-4">
                Vous repartez avec une direction claire.
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400 mb-6">
                Pas de rendez-vous forcé ni de discours flou. Je vous dis ce qui bloque,
                ce qui peut être amélioré, et quel format de site a du sens pour votre objectif.
              </p>
              <div className="space-y-3 mb-8">
                {responsePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400 mt-0.5" />
                    <span className="text-sm text-neutral-200">{point}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">Vous préférez en parler ?</p>
                    <p className="text-xs text-neutral-400 mt-1 mb-4">
                      Réservez un appel de 30 min pour cadrer pages, budget et prochaines étapes.
                    </p>
                    <a
                      href="https://cal.com/antoine-dewas/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-100"
                    >
                      Réserver un créneau
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm">
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
                <option value="one-page">One Page - à partir de 980 € HT</option>
                <option value="site-vitrine">Site Vitrine - à partir de 2 480 € HT</option>
                <option value="landing-saas">Landing Page SaaS - à partir de 2 880 € HT</option>
                <option value="multi-pages">Site Multi-Pages - à partir de 3 880 € HT</option>
                <option value="refonte">Refonte de site existant</option>
                <option value="autre">Autre / Je ne sais pas encore</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Budget prévu
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900
                         bg-white transition-all duration-200 text-sm
                         focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="">Sélectionnez</option>
                <option value="moins-1500">Moins de 1 500 €</option>
                <option value="1500-2500">1 500 € à 2 500 €</option>
                <option value="2500-4000">2 500 € à 4 000 €</option>
                <option value="4000-plus">4 000 € et plus</option>
                <option value="a-definir">À définir ensemble</option>
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
                  <span>Recevoir une recommandation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            <p className="text-xs text-neutral-400 text-center">
              Aucun engagement. Si je ne suis pas le bon profil, je vous le dis clairement.
            </p>
          </form>
          </FadeIn>
        </div>

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
