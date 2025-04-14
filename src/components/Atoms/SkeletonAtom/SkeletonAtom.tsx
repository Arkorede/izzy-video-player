type Props = {
  // Add props here
  width: number;
  height: number;
    };

export const SkeletonAtom = (props: Props) => {
  return (<div className={`bg-gray-800 animate-pulse rounded-full w-[${props.width}px] h-[${props.height}px]`}></div>);
};