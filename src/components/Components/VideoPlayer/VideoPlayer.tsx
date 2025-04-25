import { Popup } from "../Popup/Popup";
import { tv } from "tailwind-variants";
import NamuSvg from "~/components/Components/NamuSvg/NamuSvg";

const videoPlayer = tv({
  slots: {
    wrapper: "relative w-full aspect-video",
    video: "w-full h-full object-cover",
    controls:
      "absolute bottom-0 left-0 right-0 p-4 flex items-center gap-4 bg-black/50",
    button: "p-2 rounded-full hover:bg-white/20 transition-colors",
    icon: "w-6 h-6 text-white",
    titleBar:
      "absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent",
    title: "text-white text-lg font-semibold",
  },
});

type Props = {
  src: string;
  title: string;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
  muted: boolean;
  progress: number;
  togglePlay: () => void;
  toggleMute: () => void;
  setPlaying: (isPlaying: boolean) => void;
  popupProps: React.ComponentProps<typeof Popup>;
};

export const VideoPlayer = (props: Props) => {
  const {
    wrapper,
    video,
    controls,
    button,
    icon,
    titleBar,
    title: titleStyle,
  } = videoPlayer();

  return (
    <div className={wrapper()}>
      <video
        ref={props.videoRef}
        src={props.src}
        className={video()}
        muted={props.muted}
        autoPlay
        onPlay={() => props.setPlaying(true)}
        onPause={() => props.setPlaying(false)}
      />

      {/* Title Bar */}
      <div className={titleBar()}>
        <h2 className={titleStyle()}>{props.title}</h2>
      </div>

      <div className={controls()}>
        <button onClick={props.togglePlay} className={button()}>
          <NamuSvg
            iconName={props.isPlaying ? "pause" : "play"}
            className={icon()}
          />
        </button>

        <button onClick={props.toggleMute} className={button()}>
          <NamuSvg
            iconName={props.muted ? "volumeOff" : "volumeUp"}
            className={icon()}
          />
        </button>

        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
          <div
            className="h-full bg-white"
            style={{ width: `${props.progress}%` }}
          />
        </div>
      </div>

      <div className="absolute top-0 z-30">
        <Popup {...props.popupProps} />
      </div>
    </div>
  );
};
