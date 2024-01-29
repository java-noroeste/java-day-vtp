import { IconType } from "react-icons/lib";
import { firaCodeListing } from "../utils/font";
import { LinkItem } from "./link";

const styleConfig = {
  div: "bg-orange text-white",
  icon: "fill-white",
}

interface IconInfoProps {
  icon: IconType
  link: LinkItem
  content: string
}

const IconInfo = (props: IconInfoProps) => {
  return (
    <a
      className={`px-3 py-2 flex flex-row items-center ${styleConfig.div}`}
      href={props.link.url}
    >
      <props.icon
        className={`fill-${styleConfig.icon}`}
        size={20}
        
      />
      <p className={`ml-2 ${firaCodeListing.className}`}>{props.content}</p>
    </a>
  );
}

export default IconInfo;