import { HomeContentModule } from "~/components/Modules/HomeContentModule/HomeContentModule";
  import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
       {/* 1. Header Modules */}
       {/* <Header style={{ padding: 0, height: 50 }}>
       </Header> */}

       {/* 2. Content Modules */}
       <Content style={{ overflow: "auto" }}>
              <HomeContentModule {...props.homeContentModuleProps}  />
       </Content>

       {/* 3. Footer Modules */}
       {/* <Footer style={{ padding: 0, minHeight: 50 }}>
       </Footer> */}

       {/* 4. Modal Modules */}
    </Layout>
  );
};
  