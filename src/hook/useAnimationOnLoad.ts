// hooks/useAnimationOnLoad.ts
import { useEffect, useRef, useState } from 'react';

export const useAnimationOnLoad = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (ref.current) {
        const rect = (ref.current as HTMLElement).getBoundingClientRect();
        const isInViewport = (
          rect.top <= window.innerHeight * 0.9 &&
          rect.bottom >= 0
        );
        
        if (isInViewport && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    // Vérifier immédiatement au chargement
    checkVisibility();
    
    // Et aussi après un délai court
    const timer = setTimeout(checkVisibility, 100);
    
    window.addEventListener('scroll', checkVisibility);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [isVisible]);

  return { ref, isVisible };
};