export interface LinkItem {
  content: string
  url: string
}

const styleConfig = {
  "white": "text-white hover:bg-white hover:text-black",
  "black": "text-black hover:bg-black hover:text-white"
}

interface LinkProps {
  className?: string
  item: LinkItem
  styleConfig: "white" | "black"
}

const Link = (props: LinkProps) => {
  return (
    <a
      className={`whitespace-pre-wrap text-lg py-4 ${styleConfig[props.styleConfig]} ${props.className}`}
      href={props.item.url}
    >
      {props.item.content}
    </a>
  );
}

export default Link;