import { useState, useEffect, useRef } from "react";

export default function useCarousel({ dataArray, interval } = {}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const intervalRef = useRef();

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(increment, interval);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, interval, index]);

  // increment index, reset to 0 when index is on last item
  const increment = () => {
    if (index >= dataArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(index => index + 1);
    }
  };

  const next = () => {
    if (index >= dataArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(index => index + 1);
    }
  };

  const previous = () => {
    if (index === 0) {
      setIndex(dataArray.length - 1);
    } else {
      setIndex(index => index - 1);
    }
  };

  const pause = () => {
    setPaused(true);
    clearInterval(intervalRef.current);
  };

  const resume = () => {
    setPaused(false);
    let int = setInterval(increment, interval);
    intervalRef.current = int;
  };

  return { index, next, previous, pause, paused, resume };
}
