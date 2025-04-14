import { SkeletonAtom } from "~/components/Atoms/SkeletonAtom/SkeletonAtom";

type Props = {
  // Add props here
    count: number; 
    };

export const DemoSkeltonConp = (props: Props) => {
  return (    <div className=" flex flex-col w-[400px] h-[400px] bg-gray-400 rounded-2xl p-4  gap-2">

      <div className="flex flex-row p-2 items-center gap-2">
        <SkeletonAtom width={50} height={50} />
        <SkeletonAtom width={100} height={30} />
      </div>
      <SkeletonAtom width={'full'} height={200} className=" rounded-md" />
      {
        Array.from({ length: props.count }).map((_, index) => (
          <SkeletonAtom key={index} width={'full'} height={20} />
        ))
      }

    </div>);
};