import { tv } from "tailwind-variants";

const header = tv({
  base: "relative max-w-4xl mx-auto w-full text-4xl font-bold p-4",
});

type Props = {
  title: string;
};

export const VideoHeaderModule = (props: Props) => {
  return <div className={header()}>{props.title}</div>;
};
