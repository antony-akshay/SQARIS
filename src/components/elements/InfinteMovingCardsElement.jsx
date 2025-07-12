"use client";
import cnn from '../../assets/image/technology/cnn.png';
import python from '../../assets/image/technology/python.png';
import keran from '../../assets/image/technology/keran.png';
import mern from '../../assets/image/technology/mern.png';
import tenserflow from '../../assets/image/technology/tenserflow.png';
import deeplearning from '../../assets/image/technology/deeplearning.png';
import figma from '../../assets/image/technology/figma.png';
import flutter from '../../assets/image/technology/flutter.png';
import ml from '../../assets/image/technology/ml.png';

import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards"; // update path if needed

export function InfiniteMovingCardsElement() {
  return (
    <div className="h-[700px] py-8 flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="text-2xl md:text-5xl my-8 font-semibold text-black dark:text-white">
            Our Team
        </div>
      <InfiniteMovingCards
        items={team}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const team = [
  {
    image: mern,
    name: "MERN STACK",
  },
  {
    image: python,
    name: "PYTHON",
  },
  {
    image: tenserflow,
    name: "TENSERFLOW",
  },
  {
    image: keran,
    name: "KERAS",
  },
  {
    image: cnn,
    name: "CNN",
  },
  {
    image: deeplearning,
    name: "DEEP LEARNING",
  },
  {
    image: ml,
    name: "ML & LLM",
  },
  {
    image: flutter,
    name: "FLUTTER",
  },
  {
    image: figma,
    name: "FIGMA",
  },
];
