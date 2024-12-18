interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const MetaTags = ({
  title = "Antoine Dewas | Développeur Web",
  description = "Portfolio de Antoine Dewas, développeur web spécialisé en React, Next.js et TypeScript",
  image = "/og-image.png",
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