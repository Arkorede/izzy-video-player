import { tv } from "tailwind-variants";
import { TabButtonAtom } from "~/components/Atoms/TabButtonAtom/TabButtonAtom";

const categoryTabs = tv({
  slots: {
    wrapper: "flex justify-center mb-8",
    tab: "px-6 py-2 cursor-pointer transition-colors",
    activeTab: "border-b-2 border-black",
  },
});

type Props = {
  tabButtonProps: React.ComponentProps<typeof TabButtonAtom>[];
};

export const TabList = (props: Props) => {
  const { wrapper } = categoryTabs();

  return (
    <div className={wrapper()}>
      {props.tabButtonProps.map((tab, index) => (
        <TabButtonAtom {...tab} key={index} />
      ))}
    </div>
  );
};
