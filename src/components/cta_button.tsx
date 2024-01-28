import { firaCodeCTA, rubikCTA } from "../utils/font";
import { LinkItem } from "./link";

const styleConfig = {
  anchor: {
    "white": "border-white text-white hover:bg-white hover:text-black",
    "black": "border-black text-black hover:bg-black hover:text-white",
  },
  arrow: {
    "white": "bg-white text-black",
    "black": "bg-black text-white"
  }
}

interface CTAButtonProps {
  className?: string
  link: LinkItem
  styleConfig: "white" | "black"
}

const CTAButton = (props: CTAButtonProps) => {
  return (
    <a
      className={`w-full flex flex-row justify-between border-4 text-xl
                  bg-transparent ${styleConfig.anchor[props.styleConfig]} ${props.className}`}
      href={props.link.url} 
    >
      <p className={`ml-4 my-2 ${rubikCTA.className}`}>{props.link.content}</p>
      <div className={`h-full px-2 py-1 ${styleConfig.arrow[props.styleConfig]}`}>
        <p className={`text-2xl ${firaCodeCTA.className}`}>{"->"}</p>
      </div>
    </a>
  );
}

export default CTAButton;