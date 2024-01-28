import { IconType } from "react-icons/lib";
import { firaCodeListing } from "../utils/font";

const styleConfig = {
  div: "bg-orange text-white",
  icon: "fill-white",
}

interface IconInfoProps {
  icon: IconType
  content: string
}

const IconInfo = (props: IconInfoProps) => {
  return (
    <div
      className={`px-3 py-2 flex flex-row items-center ${styleConfig.div}`}
    >
      <props.icon
        className={`fill-${styleConfig.icon}`}
        size={20}
      />
      <p className={`ml-2 ${firaCodeListing.className}`}>{props.content}</p>
    </div>
  );
}

export default IconInfo;