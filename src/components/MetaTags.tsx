interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const MetaTags = ({
  title = "Antoine Dewas | Sites web sur mesure qui convertissent",
  description = "Développeur web freelance. Je crée des sites codés sur mesure, optimisés pour la conversion. React, Next.js, TypeScript.",
  image = "/og-image.webp",
  url = "https://antoine-dewas.vercel.app"
}: MetaTagsProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};
