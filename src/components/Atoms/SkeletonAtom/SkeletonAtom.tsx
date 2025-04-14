type Props = {
  // Add props here
  width?: number | string;
  height: number | string ;
  classNamae?: string;
  
    };

export const SkeletonAtom = (props: Props) => {
  return (<div style={props} className={`${props.classNamae} bg-gray-800 animate-pulse rounded-full`}>{ " "}</div>);
};