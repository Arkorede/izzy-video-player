import { SkeletonAtom } from "~/components/Atoms/SkeletonAtom/SkeletonAtom";

import type { Users } from "~/containers/HomeContainer/common/hooks/useHomeContainer";

type Props = {
  title: string;
  users?: Users;
  gettingUser?: boolean;
  addUser?: (data: any) => Promise<any>;
  onSubmitForm?: (data: any) => Promise<void>;
  setEmail?: (email: string | undefined) => void;
  email?: string | undefined;
  setName?: (name: string | undefined) => void;
  name?: string | undefined;
  isPending?: boolean;
};

export const HomeContentModule = (props: Props) => {
  return <div className="flex flex-col items-center justify-center w-full h-full gap-4 pt-[40px]">

  </div>;
};
