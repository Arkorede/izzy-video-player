import { useEffect, useRef, useCallback } from 'react';

type IdleDetectionProps = {
  timeout: number;
  onIdle: () => void;
  isPlaying: boolean;
};

export const useIdleDetection = ({ timeout, onIdle, isPlaying }: IdleDetectionProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (!isPlaying) {
      timeoutRef.current = setTimeout(onIdle, timeout);
    }
  }, [timeout, onIdle, isPlaying]);

  useEffect(() => {
    // Reset timer when playing state changes
    resetTimer();

    // Setup event listeners for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [resetTimer]);

  return { resetTimer };
};