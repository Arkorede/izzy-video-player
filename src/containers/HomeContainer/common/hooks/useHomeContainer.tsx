
import type { AppRouter } from "~/server/api/root";
import { api } from "~/utils/api";

export   type Users = AppRouter['user']['getUsers'];
const useHomeContainer = () => {
  const utils = api.useUtils();

  const { data: users, isLoading } = api.user.getUsers.useQuery();
  const { mutateAsync: addUser, isPending, isError } = api.user.addUser.useMutation({
    onSuccess: () => {
      utils.user.getUsers.invalidate(); // refresh user list
    },
  });

  return { users, isLoading, addUser, isPending, isError };
};

export default useHomeContainer;