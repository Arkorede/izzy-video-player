import { tv } from "tailwind-variants";
import { VideoPlayer } from "~/components/Components/VideoPlayer/VideoPlayer";

const videoPlayerModule = tv({
  slots: {
    wrapper: "w-full max-w-4xl mx-auto p-4",
    placeholder:
      "w-full aspect-video bg-gray-900 flex items-center justify-center text-white",
  },
});

type Props = {
  selectedEpisodeProps: React.ComponentProps<typeof VideoPlayer>;
};

export const VideoPlayerModule = (props: Props) => {
  const { wrapper, placeholder } = videoPlayerModule();

  if (!props.selectedEpisodeProps) {
    return (
      <div className={wrapper()}>
        <div className={placeholder()}>Select an episode to play</div>
      </div>
    );
  }

  return (
    <div className={wrapper()}>
      <VideoPlayer {...props.selectedEpisodeProps} />
    </div>
  );
};
