
  'use client';

import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import useHomeContainer from "./common/hooks/useHomeContainer";


export const HomeContainer = () => {
  // Generate all data and functions in this hook
  const { users, isLoading: gettingUser, addUser } = useHomeContainer();

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeContentModuleProps: { title: "HomeContentModule", count: 10 }
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
