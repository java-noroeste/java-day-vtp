import { firaCodeCTA, rubikCTA } from "../utils/font";
import { LinkItem } from "./link";

const styleConfig = {
  anchor: {
    "white": "border-light text-light hover:bg-light hover:text-dark",
    "black": "border-dark text-dark hover:bg-dark hover:text-light",
  },
  arrow: {
    "white": "bg-light text-dark",
    "black": "bg-dark text-light"
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