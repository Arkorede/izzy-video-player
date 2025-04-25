import { tv, type VariantProps } from "tailwind-variants";

type ButtonVariants = VariantProps<typeof button>;

interface Props extends ButtonVariants {
  label: string;
  onClick: () => void;
}

const button = tv({
  base: "cursor-pointer rounded-[16px] border border-black py-1 md:py-2 px-3 md:px-6 text-center text-[12px] md:text-[14px] font-semibold capitalize transition-all duration-200 ease-in-out hover:-translate-x-[5px] hover:-translate-y-[5px] hover:shadow-[5px_5px_0px_black]",
  variants: {
    color: {
      success: "bg-blue-500 text-white",
      danger: "bg-red-500 text-white",
    },
  },
});

export const ButtonAtom = (props: Props) => {
  return (
    <button className={button({ color: props.color })} onClick={props.onClick}>
      {props.label}
    </button>
  );
};
