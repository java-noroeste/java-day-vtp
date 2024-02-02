import { rubikCTA } from "@/utils/font"
import { Dispatch, SetStateAction } from "react"

interface FocusState {
  isFocused: boolean
  setFocusedTalkerName: Dispatch<SetStateAction<string>>
}

interface ShowcaseProps {
  name: string
  image: string
  focusState: FocusState
  width: number
}

const Showcase = (props: ShowcaseProps) => {
  const {isFocused, setFocusedTalkerName} = props.focusState;

  return (
    <li
      key={props.name}
      className={`h-96 flex flex-row items-end overflow-hidden transition-width
                  ${isFocused ? "" : "cursor-pointer border-2 hover:border-white"}`}
      onClick={evt => {
        if (isFocused)
          return;

        setFocusedTalkerName(props.name);
      }}
    >
      <img
        className={`h-96 z-10 object-cover ${isFocused ? "brightness-[90%]" : "brightness-[30%]"}`}
        style={{
          width: `${props.width}px`
        }}
        src={props.image}
        alt={props.name}
      />
      <p
        className={`absolute z-20 px-6 pb-4 truncate text-left text-white text-5xl ${rubikCTA.className}`}
        style={{
          width: `${props.width}px`
        }}
      >
        {props.name.toUpperCase()}
      </p>
    </li>
  );
}

export default Showcase;