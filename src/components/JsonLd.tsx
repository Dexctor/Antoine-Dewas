const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Antoine Dewas",
    "url": "https://antoine-dewas.vercel.app",
    "jobTitle": "Développeur Web Freelance",
    "description": "Je crée des sites web sur mesure, codés pour convertir vos visiteurs en clients.",
    "knowsAbout": ["React", "Next.js", "TypeScript", "TailwindCSS", "Web Development", "Conversion Optimization"],
    "sameAs": [
      "https://github.com/dexctor",
      "https://www.linkedin.com/in/antoine-dewas-640a191a1/"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Site One Page",
        "price": "980",
        "priceCurrency": "EUR",
        "description": "Site une page sur mesure, optimisé conversion"
      },
      {
        "@type": "Offer",
        "name": "Site Vitrine",
        "price": "1880",
        "priceCurrency": "EUR",
        "description": "Site vitrine multi-pages, code sur mesure"
      },
      {
        "@type": "Offer",
        "name": "Site Multi-Pages",
        "price": "2880",
        "priceCurrency": "EUR",
        "description": "Site complet avec architecture avancée"
      },
      {
        "@type": "Offer",
        "name": "Landing Page SaaS",
        "price": "2480",
        "priceCurrency": "EUR",
        "description": "Landing page haute conversion pour SaaS"
      }
    ],
    "areaServed": ["Paris", "Lille", "Lyon", "Bordeaux", "Toulouse", "France"],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
