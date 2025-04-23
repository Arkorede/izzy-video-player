"use client";

import { VideoTemplate } from "~/components/Templates/Video/VideoTemplate";
import useVideoContainer from "./common/hooks/useVideoContainer";

export const VideoContainer = () => {
  const {
    prev,
    next,
    index,
    allEpisodes,
    handleEpisodeSelect,
    ITEMS_PER_VIEW,
    transformValue,
    totalPages,
  } = useVideoContainer();

  const videoTemplateProps: React.ComponentProps<typeof VideoTemplate> = {
    videoHeaderModuleProps: { title: "" },
    videoContentModuleProps: {
      videoProps: {
        prevProps: {
          onClick: prev,
          index,
          direction: "prev",
        },
        episodeListProps: {
          transformValue,
          itemsPerView: ITEMS_PER_VIEW,
          episodeProps: allEpisodes.map((episode) => ({
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
    videoFooterModuleProps: { title: "" },
  };

  return <VideoTemplate {...videoTemplateProps} />;
};
