"use client";

import { VideoTemplate } from "~/components/Templates/Video/VideoTemplate";
import useVideoContainer from "./common/hooks/useVideoContainer";

export const VideoContainer = () => {
  const {
    prev,
    next,
    index,
    episodes,
    handleEpisodeSelect,
    ITEMS_PER_VIEW,
    transformValue,
    totalPages,
    categories,
    activeIndex,
    handleTabChange,
    selectedEpisode,
    videoRef,
    isPlaying,
    muted,
    progress,
    togglePlay,
    toggleMute,
    setPlaying,
    isOpen,
    closeModal,
    handleContinueWatching,
    handleStopWatching,
  } = useVideoContainer();

  const videoTemplateProps: React.ComponentProps<typeof VideoTemplate> = {
    videoHeaderModuleProps: { title: "Video Showcase" },
    videoPlayerModuleProps: {
      selectedEpisodeProps: {
        src: selectedEpisode?.sources.full || "",
        title: selectedEpisode?.title || "",
        videoRef,
        isPlaying,
        muted,
        progress,
        togglePlay,
        toggleMute,
        setPlaying,
        popupProps: {
          title: "Are you sure?",
          subtitle: "You are about to stop watching this video.",
          buttonProps: [
            {
              label: "Continue watching",
              onClick: handleContinueWatching,
              color: "success",
            },
            {
              label: "Stop watching",
              onClick: handleStopWatching,
            },
          ],
          isOpen,
          closePopup: closeModal,
        },
      },
    },
    videoGalleryModuleProps: {
      videoProps: {
        prevProps: {
          onClick: prev,
          index,
          direction: "prev",
        },
        episodeListProps: {
          transformValue,
          itemsPerView: ITEMS_PER_VIEW,
          episodeProps: episodes.map((episode) => ({
            episode,
            onClick: () => handleEpisodeSelect(episode),
          })),
        },
        nextProps: {
          onClick: next,
          index,
          totalPages,
          direction: "next",
        },
      },
    },
    videoTabsModuleProps: {
      tabListProps: {
        tabButtonProps: categories.map((category, index) => ({
          category,
          isActive: index === activeIndex,
          onClick: () => handleTabChange(index),
        })),
      },
    },
    videoFooterModuleProps: { title: "" },
  };

  return <VideoTemplate {...videoTemplateProps} />;
};
