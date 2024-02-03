"use client";

import About from "@/components/talkers/about";
import Showcase from "@/components/talkers/showcase";
import useWindowSize from "@/effects/window_size";
import talkers from "@/mock/talkers";
import { useEffect, useState } from "react";

const Talkers = () => {
  const windowSize = useWindowSize();
  const focusedTalkerWidth = windowSize.width * 0.25;
  const defaultTalkerWidth =
    (windowSize.width - focusedTalkerWidth) /
    (talkers.length - 1);

  const [focusedTalker, setFocusedTalker] = useState(talkers[0]);

  return (
    <section className="w-full text-center text-dark">
      <ul className="flex flex-row">
        {talkers.map(({name, image}) => {
          const isFocused = focusedTalker.name === name;

          return (
            <Showcase
              focusState={{
                isFocused,
                setFocusedTalker
              }}
              width={isFocused ? focusedTalkerWidth : defaultTalkerWidth}
              name={name}
              image={image}
            />
          );
          })}
      </ul>
      <About
        name={focusedTalker.name}
        socials={focusedTalker.socials}
        about={focusedTalker.about}
        presentation={focusedTalker.presentation}
      />
    </section>
  );
};

export default Talkers;