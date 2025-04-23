import { useState, useEffect } from "react";
import type {
  Show,
  Episode,
  Videos,
} from "~/containers/VideoContainer/common/video";
import videos from "../videos.json";
import { useSlider } from "~/containers/VideoContainer/common/hooks/useSlider";

const useVideoContainer = () => {
  // 1. States
  // 2. Queries
  // 3. Effects
  // 4. Functions
  const ITEMS_PER_VIEW = 4;

  const getAllEpisodes = (shows: Show[]): Episode[] => {
    return shows.flatMap((show) => show.episodes);
  };

  const allEpisodes = getAllEpisodes(videos.shows);

  const { index, next, prev } = useSlider({
    itemCount: Math.ceil(allEpisodes.length / ITEMS_PER_VIEW),
    autoPlay: false,
  });

  const transformValue = `translateX(-${index * (100 / ITEMS_PER_VIEW)}%)`;

  const totalPages = Math.ceil(allEpisodes.length / ITEMS_PER_VIEW);

  const handleEpisodeSelect = (episode: Episode) => {
    console.log(episode);
  };

  return {
    ITEMS_PER_VIEW,
    allEpisodes,
    handleEpisodeSelect,
    transformValue,
    next,
    prev,
    index,
    totalPages,
  };
};

export default useVideoContainer;
