"use client";

import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import useHomeContainer from "./common/hooks/useHomeContainer";

export const HomeContainer = () => {
  // Generate all data and functions in this hook
  const {
    users,
    isLoading: gettingUser,
    addUser,
    onSubmitForm,
    setEmail,
    email,
    setName,
    name,
    isPending,
    isError,
    handleViewVideoPage,
  } = useHomeContainer();

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeContentModuleProps: {
      users,
      gettingUser,
      addUser,
      onSubmitForm,
      setEmail,
      email,
      setName,
      isPending,
      name,
      title: "Home Page",
      buttonProps: {
        label: "View Video Page",
        onClick: handleViewVideoPage,
      }, // Adding the required title prop
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
