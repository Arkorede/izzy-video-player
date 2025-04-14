type Props = {
  // Add props here
  width?: number | string;
  height: number | string ;
  className?: string;
  classEdit?: string;
  
    };

export const SkeletonAtom = (props: Props) => {
  return (<div style={props} className={`${props.className} bg-gray-800 animate-pulse rounded-full`}>{ " "}</div>);
};