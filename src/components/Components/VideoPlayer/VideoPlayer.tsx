import { useRef } from "react";
import { useVideoControls } from "~/containers/VideoContainer/common/hooks/useVideoControls";
import { useKeyboardShortcut } from "~/containers/VideoContainer/common/hooks/useKeyboardShortcut";
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
};

export const VideoPlayer = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isPlaying, setPlaying, muted, progress, togglePlay, toggleMute } =
    useVideoControls(videoRef);

  useKeyboardShortcut(" ", togglePlay);
  useKeyboardShortcut("m", toggleMute);

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
        ref={videoRef}
        src={props.src}
        className={video()}
        muted={muted}
        autoPlay
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {/* Title Bar */}
      <div className={titleBar()}>
        <h2 className={titleStyle()}>{props.title}</h2>
      </div>

      {/* Controls */}
      <div className={controls()}>
        <button onClick={togglePlay} className={button()}>
          <NamuSvg iconName={isPlaying ? "pause" : "play"} className={icon()} />
        </button>

        <button onClick={toggleMute} className={button()}>
          <NamuSvg
            iconName={muted ? "volumeOff" : "volumeUp"}
            className={icon()}
          />
        </button>

        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
          <div className="h-full bg-white" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};
