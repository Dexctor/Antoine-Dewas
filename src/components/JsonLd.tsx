const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Antoine Dewas",
    "url": "https://antoine-dewas.vercel.app",
    "jobTitle": "Développeur Web",
    "knowsAbout": ["React", "Next.js", "TypeScript", "Web Development"],
    "sameAs": [
      "https://github.com/dexctor",
      "https://www.linkedin.com/in/antoine-dewas-640a191a1/"
    ],
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