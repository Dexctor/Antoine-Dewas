import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="section-light min-h-screen flex items-center">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">
              Erreur 404
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 mb-6">
              Page introuvable
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <a href="/" className="btn-primary group">
              <ArrowLeft className="w-4 h-4 text-emerald-400 transition-transform duration-300 group-hover:-translate-x-1" />
              Retour à l'accueil
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
