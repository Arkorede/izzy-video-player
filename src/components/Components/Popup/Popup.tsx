import { tv } from "tailwind-variants";
import { ButtonAtom } from "~/components/Atoms/ButtonAtom/ButtonAtom";
import NamuSvg from "../NamuSvg/NamuSvg";

type Props = {
  title: string;
  subtitle: string;
  buttonProps: React.ComponentProps<typeof ButtonAtom>[];
  closePopup: () => void;
  isOpen: boolean;
};

const basePopup = tv({
  slots: {
    overlay: ["fixed inset-0 z-10", "flex items-center justify-center"],
    base: [
      "bg-white",
      "rounded-[16px] p-4 md:p-6",
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      "z-20",
    ],
    header: "flex justify-end items-center",
    title: "text-[14px] md:text-[18px] font-bold",
    subtitle: "text-[12px] md:text-[14px] text-wrap",
    buttonWrapper: "flex gap-x-3 mt-4",
  },
});

const { base, header, title, subtitle, buttonWrapper, overlay } = basePopup();

export const Popup = (props: Props) => {
  return (
    props.isOpen && (
      <div className={overlay()}>
        <div className={base()}>
          <div className={header()}>
            <button className="cursor-pointer" onClick={props.closePopup}>
              <NamuSvg iconName="close" />
            </button>
          </div>
          <h1 className={title()}>{props.title}</h1>
          <p className={subtitle()}>{props.subtitle}</p>
          <div className={buttonWrapper()}>
            {props.buttonProps.map((buttonProps, index) => (
              <ButtonAtom key={index} {...buttonProps} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};
