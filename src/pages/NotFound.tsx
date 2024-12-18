import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* Spotlights avec les mêmes couleurs que Hero */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-[600px] h-[600px] -top-[200px] -left-[200px] bg-green-500/20 rounded-full blur-[128px]" />
          <div className="absolute w-[600px] h-[600px] -bottom-[200px] -right-[200px] bg-green-400/20 rounded-full blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 sm:p-12 text-center space-y-6"
          >
            {/* Code d'erreur animé */}
            <motion.h1
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-neutral-700 to-neutral-900 text-transparent bg-clip-text drop-shadow-sm"
            >
              404
            </motion.h1>

            {/* Message d'erreur */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-200">
                Page introuvable
              </h2>
              <p className="text-neutral-400 max-w-md mx-auto">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              </p>
            </div>

            {/* Bouton de retour avec le même style que Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={() => navigate('/')}
                className="group relative w-full sm:w-auto px-6 py-3 
                         rounded-lg overflow-hidden
                         bg-neutral-800/30 border border-neutral-700/50
                         transition-all duration-300
                         hover:border-green-500/50 hover:bg-neutral-800/50"
              >
                <div className="relative z-10 flex items-center justify-center gap-2
                             text-base font-medium text-neutral-300
                             group-hover:text-green-400 transition-colors">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>Retour à l'accueil</span>
                </div>

                {/* Effet de brillance au survol comme dans Hero */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 -z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-neutral-800/10" />
                  <div className="absolute -inset-[100%] animate-[spin_4s_linear_infinite] bg-gradient-to-r from-transparent via-green-500/10 to-transparent" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>

          {/* Message SEO caché */}
          <div className="sr-only">
            <h1>Erreur 404 - Page non trouvée</h1>
            <p>
              La page que vous recherchez sur le portfolio d'Antoine Dewas n'existe pas.
              Veuillez retourner à la page d'accueil pour continuer votre navigation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 