import { useState, useEffect, useRef } from 'react';

/** @param {Object} obj - Object of arguments
 * @param {any[]} obj.dataArray - Array of items used to increment and decrement carousel index
 * @param {number} obj.interval - Time in milliseconds to increment carousel index
 * @param {boolean} obj.allowArrowKeysNavigation - Boolean to allow navigating the carousel with keyboard arrow keys
 */
export default function useCarousel({
  dataArray,
  interval,
  allowArrowKeysNavigation
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /** @type React.MutableRefObject<number> */
  const intervalRef = useRef();

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(increment, interval);
    }
    if (allowArrowKeysNavigation) {
      window.addEventListener('keydown', arrowKeysNavigation);
    }
    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener('keydown', arrowKeysNavigation);
    };
  }, [isPaused, interval, index, allowArrowKeysNavigation]);

  const arrowKeysNavigation = (e) => {
    if (e.key === 'ArrowRight' || e.keyCode === 39) {
      next();
    } else if (e.key === 'ArrowLeft' || e.keyCode === 37) {
      previous();
    }
  };

  // increment index, reset to 0 when index is on last item
  const increment = () => {
    if (index >= dataArray.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  };

  const next = () => increment();

  const previous = () => {
    if (index === 0) {
      setIndex(dataArray.length - 1);
    } else {
      setIndex((index) => index - 1);
    }
  };

  const pause = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const resume = () => {
    setIsPaused(false);
    intervalRef.current = window.setInterval(increment, interval);
  };

  return { index, next, previous, pause, isPaused, resume };
}
