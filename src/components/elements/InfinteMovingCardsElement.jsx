"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

// Replace with your actual image imports
import image from "../../assets/image/team/image.png";

export function InfiniteMovingCardsElement() {
  return (
    <div className="md:h-[700px] h-[400px] md:py-8 flex flex-col antialiased bg-white dark:bg-black  items-center justify-center relative overflow-hidden">
      <h2 className="text-center text-3xl text-white sm:text-4xl md:text-5xl font-bold md:mb-20 mb-12">
        Our{" "}
        <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 bg-clip-text text-transparent">
          Team
        </span>
      </h2>

      <InfiniteMovingCards items={team} direction="left" speed="slow" />
    </div>
  );
}

const team = [
  {
    image: image,
    name: "Gokul Gopalan",
    designation: "CEO Founder",
    dob: "15 March 2003",
    address: "Kalpetta, Wayanad,\nKerala – 673121",
    joinDate: "10 June 2025",
  },
  {
    image: image,
    name: "Akhil Menon",
    designation: "ML Engineer",
    dob: "12 Dec 2000",
    address: "Kozhikode, Kerala",
    joiningDate: "01 Jan 2024",
  },
  {
    image: image,
    name: "Sneha Raj",
    designation: "Flutter Dev",
    dob: "22 July 1999",
    address: "Thrissur, Kerala",
    joiningDate: "05 May 2023",
  },
  {
    image: image,
    name: "Akhil Menon",
    designation: "ML Engineer",
    dob: "12 Dec 2000",
    address: "Kozhikode, Kerala",
    joiningDate: "01 Jan 2024",
  },
  {
    image: image,
    name: "Sneha Raj",
    designation: "Flutter Dev",
    dob: "22 July 1999",
    address: "Thrissur, Kerala",
    joiningDate: "05 May 2023",
  },
];
