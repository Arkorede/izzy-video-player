import { tv } from "tailwind-variants";
import { EpisodeCardAtom } from "~/components/Atoms/EpisodeCardAtom/EpisodeCardAtom";

const gallery = tv({
  slots: {
    wrapper: "overflow-hidden",
    container: "flex gap-4 transition-transform duration-300 ease-in-out",
  },
});

type Props = {
  transformValue: string;
  itemsPerView: number;
  episodeProps: React.ComponentProps<typeof EpisodeCardAtom>[];
};

export const EpisodeList = (props: Props) => {
  const { wrapper, container } = gallery();

  return (
    <div className={wrapper()}>
      <div
        className={container()}
        style={{
          transform: props.transformValue,
          width: `${(props.episodeProps.length / props.itemsPerView) * 100}%`,
        }}
      >
        {props.episodeProps.map((episode, index) => (
          <EpisodeCardAtom key={index} {...episode} />
        ))}
      </div>
    </div>
  );
};
