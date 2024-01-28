import { firaCodeListing } from "../utils/font";
import Link, { LinkItem } from "./link";

/* padItems calculates the minimum necessary
 * padding between the given items. This is then
 * used to add padded content to each item.
 * 
 * For example:
 * 
 * PALESTRANTES ->
 * WORKSHOPS ->
 * 
 * becomes
 * 
 * PALESTRANTES ->
 * workshops    ->
 */
const padItems = (items: LinkItem[], suffix: string) => {
  const longestItem = items.reduce((cur, next) => {
    return cur.content.length > next.content.length ? cur : next;
  });

  const minimumPad = longestItem.content.length + 1;
  items.forEach(item => {
    const itemPad = " ".repeat(minimumPad - item.content.length);
    item.content = item.content + itemPad + suffix;
  });
}

interface CTAListProps {
  items: LinkItem[]
  fgColor: "white" | "black"
}

const CTAList = (props: CTAListProps) => {
  padItems(props.items, "->");
  props.items.forEach(item => {
    item.content = item.content.toUpperCase()
  });

  return (
    <ul className={`flex flex-col space-y-8 ${firaCodeListing.className}`}>
      {props.items.map(item => {
        return (
          <li key={item.content.toLowerCase()}>
            <Link
              className="px-4"
              item={item}
              styleConfig="white"
            />
          </li>
        )
      })}
    </ul>
  );
}

export default CTAList;