import { tv } from "tailwind-variants";
import { EpisodeList } from "~/components/Components/EpisodeList/EpisodeList";
import { NextPrevAtom } from "~/components/Atoms/NextPrevAtom/NextPrevAtom";

const videoContent = tv({
  slots: {
    wrapper: "relative w-full max-w-4xl mx-auto p-4",
  },
});

type Props = {
  videoProps: {
    prevProps: React.ComponentProps<typeof NextPrevAtom>;
    episodeListProps: React.ComponentProps<typeof EpisodeList>;
    nextProps: React.ComponentProps<typeof NextPrevAtom>;
  };
};

export const VideoGalleryModule = (props: Props) => {
  const { wrapper } = videoContent();

  return (
    <div className={wrapper()}>
      <NextPrevAtom {...props.videoProps.prevProps} />
      <EpisodeList {...props.videoProps.episodeListProps} />
      <NextPrevAtom {...props.videoProps.nextProps} />
    </div>
  );
};
