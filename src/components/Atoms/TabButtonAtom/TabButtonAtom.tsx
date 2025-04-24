import { tv } from "tailwind-variants";

const tabButton = tv({
  slots: {
    tab: "px-6 py-2 cursor-pointer transition-colors capitalize",
    activeTab: "border-b-2 border-black",
  },
});

type Props = {
  category: string;
  isActive: boolean;
  onClick: () => void;
};

export const TabButtonAtom = (props: Props) => {
  const { tab, activeTab } = tabButton();

  return (
    <button
      className={`${tab()} ${props.isActive ? activeTab() : ""}`}
      onClick={props.onClick}
    >
      {props.category}
    </button>
  );
};
