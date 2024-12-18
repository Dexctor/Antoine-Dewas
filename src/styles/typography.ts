export const typography = {
  // Titres principaux (h1, h2)
  heading: "text-neutral-50 font-bold", // Blanc pur pour contraste maximal
  
  // Sous-titres (h3)
  subheading: "text-emerald-400/90 font-semibold", // Émeraude avec légère transparence pour élégance
  
  // Texte important
  primary: "text-neutral-200", // Gris très clair pour bonne lisibilité
  
  // Texte standard
  body: "text-neutral-300", // Gris clair pour le texte courant
  
  // Texte secondaire
  secondary: "text-neutral-400", // Gris moyen pour informations moins importantes
  
  // Accents et highlights
  accent: "text-emerald-400", // Émeraude pur pour les accents
  
  // Texte interactif (liens, boutons)
  interactive: {
    default: "text-neutral-200 hover:text-emerald-400",
    active: "text-emerald-400",
  },
  
  // Texte de statut
  status: {
    success: "text-emerald-400",
    warning: "text-amber-400",
    error: "text-rose-400",
  }
};

export const textSizes = {
  // Grands titres de section
  section: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  
  // Sous-titres
  subtitle: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  
  // Corps de texte
  base: "text-base sm:text-lg",
  
  // Petits textes
  small: "text-sm",
  
  // Très petits textes
  xs: "text-xs",
}; 