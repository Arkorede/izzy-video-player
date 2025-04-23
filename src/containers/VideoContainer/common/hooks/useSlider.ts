import { useState, useEffect } from "react";

type SliderOptions = {
  itemCount: number;
  autoPlay?: boolean;
  interval?: number;
};

export function useSlider({
  itemCount,
  autoPlay = false,
  interval = 3000,
}: SliderOptions) {
  const [index, setIndex] = useState<number>(0);
  const next = () => setIndex((i) => (i + 1) % itemCount);
  const prev = () => setIndex((i) => (i - 1 + itemCount) % itemCount);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval]);

  return { index, next, prev, setIndex };
}
