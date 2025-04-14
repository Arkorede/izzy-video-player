
import { api } from "~/utils/api";


const useHomeContainer = () => {
  const utils = api.useUtils();

  const { data: users, isLoading } = api.user.getUsers.useQuery();
  const { mutateAsync: addUser } = api.user.addUser.useMutation({
    onSuccess: () => {
      utils.user.getUsers.invalidate(); // refresh user list
    },
  });

  return { users, isLoading, addUser };
};

export default useHomeContainer;