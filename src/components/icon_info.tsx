import { IconType } from "react-icons/lib";
import { firaCodeListing } from "../utils/font";
import { LinkItem } from "./link";

const styleConfig = {
  div: {
    orange: "px-3 py-2 bg-orange text-light",
    blue: "text-lightblue underline"
  },
  icon: {
    orange: "fill-light",
    blue: "fill-lightblue"
  },
}

interface IconInfoProps {
  icon: IconType
  link: LinkItem
  styleConfig?: "orange" | "blue"
}

const IconInfo = (props: IconInfoProps) => {
  return (
    <a
      className={`flex flex-row items-center ${styleConfig.div[props.styleConfig ?? "orange"]}
                  ${(props.link.url === "") ? "hidden" : ""}`}
      href={props.link.url}
    >
      <props.icon
        className={`fill-${styleConfig.icon[props.styleConfig ?? "orange"]}`}
        size={20}
        
      />
      <p className={`ml-2 ${firaCodeListing.className}`}>{props.link.content}</p>
    </a>
  );
}

export default IconInfo;