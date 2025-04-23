import { tv } from "tailwind-variants";
import { EpisodeList } from "~/components/Components/EpisodeList/EpisodeList";
import { NextPrevAtom } from "~/components/Atoms/NextPrevAtom/NextPrevAtom";

const videoContent = tv({
  slots: {
    wrapper: "w-full max-w-4xl mx-auto p-4",
    galleryWrapper: "relative",
  },
});

type Props = {
  videoProps: {
    prevProps: React.ComponentProps<typeof NextPrevAtom>;
    episodeListProps: React.ComponentProps<typeof EpisodeList>;
    nextProps: React.ComponentProps<typeof NextPrevAtom>;
  };
};

export const VideoContentModule = (props: Props) => {
  const { wrapper, galleryWrapper } = videoContent();

  return (
    <div className={wrapper()}>
      <div className={galleryWrapper()}>
        <NextPrevAtom {...props.videoProps.prevProps} />
        <EpisodeList {...props.videoProps.episodeListProps} />
        <NextPrevAtom {...props.videoProps.nextProps} />
      </div>
    </div>
  );
};
