import { useEffect } from 'react';

export const useErrorTracking = (error?: Error) => {
  useEffect(() => {
    if (error) {
      // Log l'erreur dans la console en développement
      if (process.env.NODE_ENV === 'development') {
        console.error('Error:', error);
      }

      // Envoyer l'erreur à un service d'analytics (ex: Google Analytics)
      if (typeof window !== 'undefined' && 'gtag' in window) {
        // @ts-ignore
        window.gtag('event', 'error', {
          error_name: error.name,
          error_message: error.message,
          error_stack: error.stack,
        });
      }
    }
  }, [error]);
}; 