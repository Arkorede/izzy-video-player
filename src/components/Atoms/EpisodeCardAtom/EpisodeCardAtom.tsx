import { tv } from "tailwind-variants";
import type { Episode } from "~/containers/VideoContainer/common/video";
import { formatDuration, rgbToStyle } from "~/utils/video";
import NamuSvg from "~/components/Components/NamuSvg/NamuSvg";

const episodeCard = tv({
  slots: {
    wrapper:
      "flex-shrink-0 w-[200px] h-[112px] cursor-pointer group transition-all hover:scale-105",
    card: "relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center text-center p-4",
    title: "font-bold text-sm leading-tight",
    duration:
      "absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded",
    playButton: [
      "absolute cursor-pointer",
      "opacity-0 group-hover:opacity-100",
      "transition-opacity duration-200",
      "bg-black/50 rounded-full p-3",
    ],
  },
});

type Props = {
  episode: Episode;
  onClick: (episode: Episode) => void;
};

export const EpisodeCardAtom = (props: Props) => {
  const { wrapper, card, title, duration, playButton } = episodeCard();

  return (
    <div className={wrapper()} onClick={() => props.onClick(props.episode)}>
      <div
        className={card()}
        style={{
          background: `linear-gradient(135deg, 
            ${rgbToStyle(props.episode.colors.primary)} 0%, 
            ${rgbToStyle(props.episode.colors.secondary)} 100%
          )`,
        }}
      >
        <div
          className={title()}
          style={{
            color: rgbToStyle(props.episode.colors.primaryLight),
            textShadow: `1px 1px 2px ${rgbToStyle(props.episode.colors.quaternary)}`,
          }}
        >
          {props.episode.title}
        </div>
        <div className={duration()}>
          {formatDuration(props.episode.duration)}
        </div>
        <button className={playButton()}>
          <NamuSvg iconName="play" className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};
