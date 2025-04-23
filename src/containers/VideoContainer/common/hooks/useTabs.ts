import { useState, useCallback } from "react";

export function useTabs(initialIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const setTab = useCallback((index: number) => setActiveIndex(index), []);
  return { activeIndex, setTab };
}
