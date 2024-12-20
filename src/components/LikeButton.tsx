import { useState, useEffect, useCallback } from 'react';
import { ref, onValue, runTransaction, get } from 'firebase/database';
import { db, LIKE_COOLDOWN, getUserId, LIKE_MESSAGES } from '@/lib/firebase';
import type { UserLike } from '@/lib/firebase';
import { Heart, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'info';
  isVisible: boolean;
}

const Notification = ({ message, type, isVisible }: NotificationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
    exit={{ opacity: 0, y: 20 }}
    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
  >
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm border shadow-lg ${
      type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
      type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
      'bg-blue-500/10 border-blue-500/20 text-blue-400'
    }`}>
      {type === 'success' ? <CheckCircle2 className="w-4 h-4" /> :
       type === 'error' ? <AlertCircle className="w-4 h-4" /> :
       <Clock className="w-4 h-4" />}
      <span className="text-sm whitespace-nowrap">{message}</span>
      <div className="absolute bottom-0 left-0 h-[2px] rounded-full w-full">
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: 2, ease: "linear" }}
          className={`h-full ${
            type === 'success' ? 'bg-emerald-400' :
            type === 'error' ? 'bg-red-400' :
            'bg-blue-400'
          }`}
        />
      </div>
    </div>
  </motion.div>
);

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const userId = getUserId();
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

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
    if (isAnimating || isLocked) {
      setNotification({
        message: `${LIKE_MESSAGES.error} ${formatTimeRemaining(timeRemaining || 0)}`,
        type: 'error'
      });
      setTimeout(() => setNotification(null), 2000);
      return;
    }
    
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

      setNotification({
        message: LIKE_MESSAGES.success,
        type: 'success'
      });
      setTimeout(() => setNotification(null), 2000);
    } catch (error) {
      console.error('Erreur lors du like:', error);
      setNotification({
        message: error.message,
        type: 'error'
      });
      setIsAnimating(false);
    }
  }, [isAnimating, isLocked, userId, timeRemaining]);

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
      
      <AnimatePresence>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            isVisible={!!notification}
          />
        )}
      </AnimatePresence>
      
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