
import { useState } from "react";
import { api } from "~/utils/api";

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
  const { mutateAsync: addUser } = api.user.addUser.useMutation({
    onSuccess: () => {
      utils.user.getUsers.invalidate(); // refresh user list
    },
  });

  const onSubmitForm = async (data: User) => {
    console.log(data);
    if (data.email === "" || data.name === "") return;
    await addUser(data);
    setName("");
    setEmail("");
  };

  return { users, isLoading, addUser, onSubmitForm, name, setName, email, setEmail };
};

export default useHomeContainer;