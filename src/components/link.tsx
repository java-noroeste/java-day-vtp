export interface LinkItem {
  content: string
  url: string
}

const styleConfig = {
  "white": "text-light hover:bg-light hover:text-dark",
  "black": "text-dark hover:bg-dark hover:text-light"
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