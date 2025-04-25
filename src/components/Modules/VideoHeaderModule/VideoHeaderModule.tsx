import { tv } from "tailwind-variants";

const header = tv({
  base: "relative w-full text-4xl font-bold p-8",
});

type Props = {
  title: string;
};

export const VideoHeaderModule = (props: Props) => {
  return <div className={header()}>{props.title}</div>;
};
