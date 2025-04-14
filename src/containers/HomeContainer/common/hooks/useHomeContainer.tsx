
import type { AppRouter } from "~/server/api/root";
import { useState } from "react";
import { api } from "~/utils/api";
import type { inferRouterOutputs } from "@trpc/server";

type RouterOutput = inferRouterOutputs<AppRouter>;
export type Users = RouterOutput['user']['getUsers'];
type User = {
  id: string;
  name: string;
  email: string;
};

const useHomeContainer = () => {
  const utils = api.useUtils();

  const [email, setEmail] = useState<string | undefined>("");
  const [name, setName] = useState<string | undefined>("");

  const { data: users, isLoading } = api.user.getUsers.useQuery();
  const { mutateAsync: addUser, isPending, isError } = api.user.addUser.useMutation({
    onSuccess: () => {
      utils.user.getUsers.invalidate(); // refresh user list
    },
  });


  const onSubmitForm = async (data: User) => {
    console.log(data);
    if (data.email === "" || data.name === "") return;

    try {
      await addUser(data);
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding user:", error);
      // You can add additional error handling here if needed
    }
  };

  return { users, isLoading, addUser, onSubmitForm, name, setName, email, setEmail, isPending, isError };
};

export default useHomeContainer;