import { useState, useEffect, useCallback } from 'react';
import { ref, onValue, runTransaction, get } from 'firebase/database';
import { db, LIKE_COOLDOWN, getUserId } from '@/lib/firebase';
import type { UserLike } from '@/lib/firebase';
import { Heart, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const userId = getUserId();

  useEffect(() => {
    const checkTimelock = async () => {
      const userLikesRef = ref(db, `likes/users/${userId}`);
      const snapshot = await get(userLikesRef);
      const data = snapshot.val();
      
      if (data?.lastLikeTime) {
        const timePassed = Date.now() - data.lastLikeTime;
        if (timePassed < LIKE_COOLDOWN) {
          const remaining = LIKE_COOLDOWN - timePassed;
          setTimeRemaining(remaining);
          setIsLocked(true);
          return true;
        }
      }
      setIsLocked(false);
      setTimeRemaining(null);
      return false;
    };

    checkTimelock();

    const interval = setInterval(async () => {
      const userLikesRef = ref(db, `likes/users/${userId}`);
      const snapshot = await get(userLikesRef);
      const data = snapshot.val();
      
      if (data?.lastLikeTime) {
        const remaining = LIKE_COOLDOWN - (Date.now() - data.lastLikeTime);
        setTimeRemaining(remaining);
        
        if (remaining <= 0) {
          setIsLocked(false);
          setTimeRemaining(null);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [userId]);

  useEffect(() => {
    const likesRef = ref(db, 'likes/count');

    const unsubscribe = onValue(likesRef, (snapshot) => {
      const count = snapshot.val();
      if (typeof count === 'number') {
        setLikes(count);
      } else {
        runTransaction(likesRef, (currentData) => {
          return currentData === null ? 0 : currentData;
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const formatTimeRemaining = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleLike = useCallback(async () => {
    if (isAnimating || isLocked) return;
    
    try {
      const userLikesRef = ref(db, `likes/users/${userId}`);
      const countRef = ref(db, 'likes/count');
      
      await runTransaction(userLikesRef, (currentData) => {
        if (currentData?.lastLikeTime) {
          const timePassed = Date.now() - currentData.lastLikeTime;
          if (timePassed < LIKE_COOLDOWN) {
            return undefined;
          }
        }
        return { lastLikeTime: Date.now() };
      });

      await runTransaction(countRef, (currentCount) => {
        return (currentCount || 0) + 1;
      });

      setIsLocked(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    } catch (error) {
      console.error('Erreur lors du like:', error);
      setError(error.message);
      setIsAnimating(false);
    }
  }, [isAnimating, isLocked, userId]);

  return (
    <div className="relative">
      <motion.button
        onClick={handleLike}
        whileHover={{ scale: isLocked ? 1 : 1.05 }}
        whileTap={{ scale: isLocked ? 1 : 0.95 }}
        className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 bg-white/[0.03] text-slate hover:text-pink-500 ${
          isLocked ? 'cursor-not-allowed opacity-75' : ''
        }`}
        aria-label="Aimer le site"
        disabled={isLocked}
      >
        {isLocked ? (
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-mono text-sm">
              {formatTimeRemaining(timeRemaining || 0)}
            </span>
          </div>
        ) : (
          <>
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
          </>
        )}
      </motion.button>
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 mt-2 text-red-500 text-sm whitespace-nowrap"
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