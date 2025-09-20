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
  buttonProps: {
    label: string;
    onClick: () => void;
  };
};

export const HomeContentModule = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 pt-[40px]">
      {props.title}
      <button
        className="cursor-pointer rounded-2xl bg-blue-700 p-4 text-white"
        onClick={props.buttonProps.onClick}
      >
        {props.buttonProps.label}
      </button>
    </div>
  );
};
