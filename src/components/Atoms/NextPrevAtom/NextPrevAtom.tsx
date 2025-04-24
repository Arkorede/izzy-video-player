import { tv, type VariantProps } from "tailwind-variants";
import NamuSvg from "~/components/Components/NamuSvg/NamuSvg";

const nextPrev = tv({
  base: [
    "absolute top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-opacity cursor-pointer",
    "hidden md:block",
  ],
  variants: {
    direction: {
      prev: "left-2",
      next: "right-2",
    },
  },
});

type nextPrevVariants = VariantProps<typeof nextPrev>;

interface Props extends nextPrevVariants {
  onClick: () => void;
  index: number;
  totalPages?: number;
}

export const NextPrevAtom = (props: Props) => {
  const shouldShow =
    props.direction === "prev"
      ? props.index > 0
      : props.index < (props.totalPages ?? 0) - 1;

  if (!shouldShow) return null;

  return (
    <button
      onClick={props.onClick}
      className={nextPrev({ direction: props.direction })}
      aria-label={`${props.direction === "prev" ? "Previous" : "Next"} videos`}
    >
      <NamuSvg
        iconName={props.direction === "prev" ? "arrowLeft" : "arrowRight"}
      />
    </button>
  );
};
