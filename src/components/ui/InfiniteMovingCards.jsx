"use client";

import React, { useEffect, useState, useRef } from "react";
import { clsx } from "clsx";
import { FaBirthdayCake, FaHome, FaCalendarAlt } from "react-icons/fa";

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

      let duration = "20s";
      if (speed === "fast") duration = "10s";
      else if (speed === "slow") duration = "30s";

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
          "flex min-w-max shrink-0 flex-nowrap gap-8 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[130px] h-[165px] md:w-[260px] md:h-[330px] lg:w-[300px] lg:h-[380px] 
                       rounded-xl flex-shrink-0 border border-white/10"
          >
            <div className="group w-full h-full">
              <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* FRONT */}
                <div className=" inset-0 bg-black rounded-2xl overflow-hidden [backface-visibility:hidden]">
                  <div className="h-[85%] relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
                  </div>
                  <div className="h-[15%] flex items-center justify-center">
                    <h2 className="text-green-400 text-sm sm:text-base md:text-lg font-semibold font-[Poppins] text-center px-1">
                      {item.name}
                    </h2>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-2xl  text-white p-2 sm:p-4 md:p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] text-[10px] sm:text-[12px] md:text-sm leading-tight">
                  <h2 className="text-green-400 text-[11px] sm:text-base md:text-lg font-bold text-center mb-2 sm:mb-4">
                    {item.designation}
                  </h2>

                  {/* DOB */}
                  <div className="mb-2 sm:mb-3">
                    <p className="text-[9px] sm:text-xs mb-1 ml-1 sm:ml-2">Date of birth</p>
                    <div className="flex justify-between items-center px-2 sm:px-3 py-1 sm:py-2  rounded-xl border border-gray-700">
                      <span className="text-[10px] sm:text-sm">{item.dob}</span>
                      <FaBirthdayCake className="text-green-400 text-xs sm:text-base" />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-2 sm:mb-3">
                    <p className="text-[9px] sm:text-xs mb-1 ml-1 sm:ml-2">Address</p>
                    <div className="flex justify-between items-center px-2 sm:px-3 py-1 sm:py-2 rounded-xl border border-gray-700">
                      <span className="text-[10px] sm:text-sm leading-snug">{item.address}</span>
                      <FaHome className="text-green-400 text-xs sm:text-base" />
                    </div>
                  </div>

                  {/* Join Date */}
                  <div>
                    <p className="text-[9px] sm:text-xs mb-1 ml-1 sm:ml-2">Joining date</p>
                    <div className="flex justify-between items-center px-2 sm:px-3 py-1 sm:py-2  rounded-xl border border-gray-700">
                      <span className="text-[10px] sm:text-sm">{item.joinDate}</span>
                      <FaCalendarAlt className="text-green-400 text-xs sm:text-base" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
