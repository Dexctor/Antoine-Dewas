import { useState, useEffect, useCallback } from 'react';
import { ref, onValue, runTransaction } from 'firebase/database';
import { db } from '@/lib/firebase';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Configurer l'écouteur de Firebase en temps réel
  useEffect(() => {
    const likesRef = ref(db, 'likes');

    const unsubscribe = onValue(likesRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data.count === 'number') {
        setLikes(data.count);
      } else {
        // Initialiser si nécessaire
        runTransaction(likesRef, (currentData) => {
          if (currentData === null) return { count: 0 };
          return currentData;
        });
      }
    });

    return () => unsubscribe();
  }, []);

  // Optimiser la fonction de like avec useCallback et runTransaction
  const handleLike = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const likesRef = ref(db, 'likes');
    
    try {
      await runTransaction(likesRef, (currentData) => {
        if (currentData === null) {
          return { count: 1 };
        }
        
        return {
          count: currentData.count + 1
        };
      });

      // Animation de succès
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    } catch (error) {
      console.error('Erreur lors du like:', error);
      setError(error.message);
      setIsAnimating(false);
    }
  }, [isAnimating]);

  return (
    <div className="relative">
      <motion.button
        onClick={handleLike}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 bg-white/[0.03] text-slate hover:text-pink-500"
        aria-label="Aimer le site"
        disabled={isAnimating}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isAnimating ? 'animating' : 'static'}
            initial={{ scale: 1 }}
            animate={isAnimating ? {
              scale: [1, 1.5, 1],
              rotate: [0, 15, -15, 0],
            } : {}}
            transition={{ duration: 0.5 }}
          >
            <Heart
              className={`w-5 h-5 fill-none group-hover:fill-pink-500 transition-colors duration-300 ${
                isAnimating ? 'fill-pink-500' : ''
              }`}
            />
          </motion.div>
        </AnimatePresence>
        
        <motion.span 
          className="font-mono text-sm"
          key={likes}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {likes.toLocaleString()}
        </motion.span>
      </motion.button>
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 mt-2 text-red-500 text-sm"
        >
          {error}
        </motion.div>
      )}
      
      {isAnimating && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 rounded-full bg-pink-500/20"
        />
      )}
    </div>
  );
};

export default LikeButton; 