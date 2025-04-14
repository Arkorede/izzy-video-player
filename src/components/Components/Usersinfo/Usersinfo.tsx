type Props = {
  // Add props here
  name: string;
  email: string;
    };

export const Usersinfo = (props: Props) => {
  return (<div>
    <div className=" text-2xl  leading-1 font-bold ">    {props.name}</div>
    <div className=" text-2xl">    {props.email}</div>

  </div>);
};