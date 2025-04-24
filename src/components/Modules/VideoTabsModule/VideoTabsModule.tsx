import type React from "react";
import { tv } from "tailwind-variants";
import { TabList } from "~/components/Components/TabList/TabList";

type Props = {
  tabListProps: React.ComponentProps<typeof TabList>;
};

const videoTabs = tv({
  slots: {
    wrapper: "w-full max-w-4xl mx-auto p-4",
  },
});

export const VideoTabsModule = (props: Props) => {
  const { wrapper } = videoTabs();

  return (
    <div className={wrapper()}>
      <TabList {...props.tabListProps} />
    </div>
  );
};
