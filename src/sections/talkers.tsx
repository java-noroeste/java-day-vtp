"use client";

import Showcase from "@/components/talkers/showcase";
import useWindowSize from "@/effects/window_size";
import { useState } from "react";

const talkers = [
  {
    name: "Josue Teodoro",
    image: "https://avatars.githubusercontent.com/u/41875891?v=4",
  },
  {
    name: "Joao Augusto",
    image: "https://avatars.githubusercontent.com/u/91899995?v=4",
  },
  {
    name: "Gustavo Bizo",
    image: "https://avatars.githubusercontent.com/u/69866294?v=4",
  },
  {
    name: "Ravi Vendramini",
    image: "https://avatars.githubusercontent.com/u/79207982?v=4",
  },
  {
    name: "Fabricio",
    image: "https://avatars.githubusercontent.com/u/88052209?v=4",
  }
]

const Talkers = () => {
  const windowSize = useWindowSize();
  const focusedTalkerWidth = windowSize.width * 0.25;
  const defaultTalkerWidth =
    (windowSize.width - focusedTalkerWidth) /
    (talkers.length - 1);

  const [focusedTalkerName, setFocusedTalkerName]= useState(talkers[0].name);

  return (
    <section className="w-full text-center text-black">
      <ul className="flex flex-row">
        {talkers.map(({name, image}) => {
          const isFocused = focusedTalkerName === name;

          return (
            <Showcase
              focusState={{
                isFocused,
                setFocusedTalkerName
              }}
              width={isFocused ? focusedTalkerWidth : defaultTalkerWidth}
              name={name}
              image={image}
            />
          );
          })}
      </ul>
    </section>
  );
};

export default Talkers;
