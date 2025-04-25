import { useState, useMemo } from "react";
import type { Episode, Show } from "../video";
import videos from "../videos.json";
import { useSlider } from "./useSlider";
import { useTabs } from "./useTabs";

const useVideoContainer = () => {
  const ITEMS_PER_VIEW = 4;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>();

  const getAllEpisodes = (shows: Show[]): Episode[] => {
    return shows.flatMap((show) => show.episodes);
  };

  const allEpisodes = getAllEpisodes(videos.shows);

  // Extract unique categories from episodes and add "all" category
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      allEpisodes.map((episode) => episode.category),
    );
    return ["all", ...Array.from(uniqueCategories)];
  }, [allEpisodes]);

  const filteredEpisodes = useMemo(() => {
    if (selectedCategory === "all") {
      return allEpisodes;
    }
    return allEpisodes.filter(
      (episode) => episode.category === selectedCategory,
    );
  }, [allEpisodes, selectedCategory]);

  const { index, next, prev } = useSlider({
    itemCount: Math.ceil(filteredEpisodes.length / ITEMS_PER_VIEW),
    autoPlay: false,
  });

  const transformValue = `translateX(-${index * (100 / ITEMS_PER_VIEW)}%)`;
  const totalPages = Math.ceil(filteredEpisodes.length / ITEMS_PER_VIEW);

  const handleEpisodeSelect = (episode: Episode) => {
    setSelectedEpisode(episode);
  };

  const { activeIndex, setTab } = useTabs(0);

  const handleTabChange = (tabIndex: number) => {
    setTab(tabIndex);
    setSelectedCategory(categories[tabIndex]!);
  };

  return {
    ITEMS_PER_VIEW,
    episodes: filteredEpisodes,
    handleEpisodeSelect,
    transformValue,
    next,
    prev,
    index,
    totalPages,
    setSelectedCategory,
    categories,
    activeIndex,
    handleTabChange,
    selectedEpisode,
  };
};

export default useVideoContainer;
