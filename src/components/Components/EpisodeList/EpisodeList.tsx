import { tv } from "tailwind-variants";
import { EpisodeCardAtom } from "~/components/Atoms/EpisodeCardAtom/EpisodeCardAtom";
import { useNamuCheckDeviceType } from "~/hooks/useNamuCheckDeviceType";

const gallery = tv({
  slots: {
    wrapper: "overflow-hidden",
    container: [
      "flex gap-4",
      "md:transition-transform md:duration-300 md:ease-in-out",
      "overflow-x-auto md:overflow-x-hidden",
      "no-scrollbar",
      "scroll-smooth",
      "snap-x snap-mandatory",
    ],
    card: "snap-center",
  },
});

type Props = {
  transformValue: string;
  itemsPerView: number;
  episodeProps: React.ComponentProps<typeof EpisodeCardAtom>[];
};

export const EpisodeList = (props: Props) => {
  const { isMobile } = useNamuCheckDeviceType();
  const { wrapper, container, card } = gallery();

  return (
    <div className={wrapper()}>
      <div
        className={container()}
        style={{
          transform: isMobile ? "none" : props.transformValue,
          width: isMobile
            ? "auto"
            : `${(props.episodeProps.length / props.itemsPerView) * 100}%`,
        }}
      >
        {props.episodeProps.map((episode, index) => (
          <div key={index} className={card()}>
            <EpisodeCardAtom {...episode} />
          </div>
        ))}
      </div>
    </div>
  );
};
