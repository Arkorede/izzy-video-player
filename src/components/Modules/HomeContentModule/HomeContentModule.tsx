import { SkeletonAtom } from "~/components/Atoms/SkeletonAtom/SkeletonAtom";

type Props = {
  title: string;
};

export const HomeContentModule = (props: Props) => {
  return <div className="flex flex-col items-center justify-center w-full h-full gap-4 pt-[40px]">
    <div className=" flex flex-col w-[400px] h-[400px] bg-gray-400 rounded-2xl p-4  gap-2">

      <div className="flex flex-row p-2 items-center gap-2">
        <SkeletonAtom width={50} height={50} />
        <SkeletonAtom width={100} height={30} />
      </div>
      <SkeletonAtom width={'full'} height={200}  classNamae=" rounded-md"/>
      <SkeletonAtom width={'full'} height={20} />
      <SkeletonAtom width={'full'} height={20} />
      <SkeletonAtom width={'full'} height={20} />
    </div>
  </div>;
};
