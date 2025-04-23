import { tv } from "tailwind-variants";
import type { Episode } from "~/containers/VideoContainer/common/video";
import { formatDuration, rgbToStyle } from "~/utils/video";

const episodeCard = tv({
  slots: {
    wrapper:
      "flex-shrink-0 w-[200px] h-[112px] cursor-pointer group transition-all hover:scale-105",
    card: "relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center text-center p-4",
    title: "font-bold text-sm leading-tight",
    duration:
      "absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded",
  },
});

type Props = {
  episode: Episode;
  onClick: (episode: Episode) => void;
};

export const EpisodeCardAtom = ({ episode, onClick }: Props) => {
  const { wrapper, card, title, duration } = episodeCard();

  return (
    <div className={wrapper()} onClick={() => onClick(episode)}>
      <div
        className={card()}
        style={{
          background: `linear-gradient(135deg, 
            ${rgbToStyle(episode.colors.primary)} 0%, 
            ${rgbToStyle(episode.colors.secondary)} 100%
          )`,
        }}
      >
        <div
          className={title()}
          style={{
            color: rgbToStyle(episode.colors.primaryLight),
            textShadow: `1px 1px 2px ${rgbToStyle(episode.colors.quaternary)}`,
          }}
        >
          {episode.title}
        </div>
        <div className={duration()}>{formatDuration(episode.duration)}</div>
      </div>
    </div>
  );
};
