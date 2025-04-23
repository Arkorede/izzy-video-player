import { tv } from "tailwind-variants";
import { VideoHeaderModule } from "~/components/Modules/VideoHeaderModule/VideoHeaderModule";
import { VideoContentModule } from "~/components/Modules/VideoContentModule/VideoContentModule";
import { VideoFooterModule } from "~/components/Modules/VideoFooterModule/VideoFooterModule";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

const videoTemplate = tv({
  slots: {
    layout: "h-screen bg-black",
    content: "h-full overflow-auto",
  },
});

type Props = {
  videoHeaderModuleProps: React.ComponentProps<typeof VideoHeaderModule>;
  videoContentModuleProps: React.ComponentProps<typeof VideoContentModule>;
  videoFooterModuleProps: React.ComponentProps<typeof VideoFooterModule>;
};

export const VideoTemplate = (props: Props) => {
  const { layout, content } = videoTemplate();

  return (
    <Layout className={layout()}>
      <Content className={content()}>
        <VideoHeaderModule {...props.videoHeaderModuleProps} />
        <VideoContentModule {...props.videoContentModuleProps} />
        <VideoFooterModule {...props.videoFooterModuleProps} />
      </Content>
    </Layout>
  );
};
