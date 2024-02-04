import talkers, { Talker } from "@/mock/talkers"
import { rubikCTA } from "@/utils/font"
import { Dispatch, SetStateAction } from "react"

interface FocusState {
  isFocused: boolean
  setFocusedTalker: Dispatch<SetStateAction<Talker>>
}

interface ShowcaseProps {
  name: string
  image: string
  focusState: FocusState
  width: number
}

const Showcase = (props: ShowcaseProps) => {
  const {isFocused, setFocusedTalker} = props.focusState;

  return (
    <li
      key={props.name}
      className={`h-96 flex flex-row items-end overflow-hidden
                  ${isFocused ? "xl:hidden" : "cursor-pointer border-2 hover:border-light"}`}
      onClick={evt => {
        if (isFocused)
          return;

        setFocusedTalker(
          talkers.filter(talker => talker.name === props.name)[0]
        );
      }}
    >
      <img
        className={`h-96 z-10 transition-all transform object-cover ${isFocused ? "brightness-[90%]" : "brightness-[30%]"}`}
        style={{
          width: `${props.width}px`
        }}
        src={props.image}
        alt={props.name}
      />
      <p
        className={`absolute z-20 px-6 pb-4 truncate text-left text-light text-5xl ${rubikCTA.className}
                    ${isFocused ? "hidden" : ""}`}
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
