import { tv } from "tailwind-variants";
import { VideoHeaderModule } from "~/components/Modules/VideoHeaderModule/VideoHeaderModule";
import { VideoPlayerModule } from "~/components/Modules/VideoPlayerModule/VideoPlayerModule";
import { VideoGalleryModule } from "~/components/Modules/VideoGalleryModule/VideoGalleryModule";
import { VideoTabsModule } from "~/components/Modules/VideoTabsModule/VideoTabsModule";
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
  videoPlayerModuleProps: React.ComponentProps<typeof VideoPlayerModule>;
  videoGalleryModuleProps: React.ComponentProps<typeof VideoGalleryModule>;
  videoTabsModuleProps: React.ComponentProps<typeof VideoTabsModule>;
  videoFooterModuleProps: React.ComponentProps<typeof VideoFooterModule>;
};

export const VideoTemplate = (props: Props) => {
  const { layout, content } = videoTemplate();

  return (
    <Layout className={layout()}>
      <Content className={content()}>
        <VideoHeaderModule {...props.videoHeaderModuleProps} />
        <VideoPlayerModule {...props.videoPlayerModuleProps} />
        <VideoTabsModule {...props.videoTabsModuleProps} />
        <VideoGalleryModule {...props.videoGalleryModuleProps} />
        <VideoFooterModule {...props.videoFooterModuleProps} />
      </Content>
    </Layout>
  );
};
