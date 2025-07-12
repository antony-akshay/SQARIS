"use client";

import React, { useEffect, useState, useRef } from "react";
import { clsx } from "clsx";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const content = Array.from(scrollerRef.current.children);
      content.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current.appendChild(clone);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      let duration = "40s";
      if (speed === "fast") duration = "20s";
      else if (speed === "slow") duration = "80s";

      containerRef.current.style.setProperty("--animation-duration", duration);
      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative z-20 max-w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={clsx(
          "flex w-max min-w-full shrink-0 flex-nowrap lg:gap-12 gap-4 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[80vw] sm:w-[22vw] md:w-[33.33vw] max-w-[110px] md:max-w-[200px] lg:max-w-[300px] md:h-[250px] lg:h-[380px]  h-[140px] rounded-xl overflow-hidden bg-white dark:bg-zinc-900 shadow-md border border-gray-200 dark:border-zinc-700 flex-shrink-0"
          >
            <div className="h-[75%] items-center justify-center relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-fit h-full object-fit "
              />
              <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-zinc-900 to-transparent"></div>
            </div>
            <div className="h-[25%] bg-white dark:bg-zinc-900 flex flex-col justify-center items-center shadow-inner ">
              <p className="text-sm font-semibold text-gray-800 dark:text-white">{item.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.designation}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
