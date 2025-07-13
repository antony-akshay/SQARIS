"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBrain, FaHandsHelping } from "react-icons/fa";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: "TimeBank Project",
    subtitle: "Social Care App – Gov. of Kerala",
    icon: <FaHandsHelping className="text-rose-300 text-2xl" />,
    stats: [
      { label: "Users", value: "10K+" },
      { label: "Volunteers", value: "5K+" },
      { label: "Hours", value: "50K+" },
    ],
    description: "Connect retired volunteers with elderly citizens in need",
    problems: [
      "Isolation of elderly",
      "Urbanization effects",
      "Missing structured volunteer platforms",
    ],
    features: [
      "Time-based service exchange",
      "Volunteer-elderly matchmaking",
      "Tracking of hours",
      "Community-based engagement",
      "Seamless trust mechanisms",
    ],
    platform: "Mobile + Web",
    technologies: ["React", "Node.js", "MongoDB", "Flutter", "Firebase"],
    ringColor: "ring-cyan-400",
  },
  {
    title: "WIE Project",
    subtitle: "International ML-based Platform",
    icon: <FaBrain className="text-indigo-300 text-2xl" />,
    stats: [
      { label: "Users", value: "Coming Soon" },
      { label: "Features", value: "20+" },
      { label: "Accuracy", value: "95%" },
    ],
    description:
      "Create a next-gen Social Media Platform integrated with LLM models",
    problems: [
      "Limited AI integration in social media",
      "Poor content personalization",
      "Lack of intelligent interactions",
    ],
    features: [
      "ML & LLM-based backend",
      "Global scalability",
      "Real-time interaction",
      "API partnerships with MNCs",
      "Advanced content moderation",
    ],
    platform: "Mobile App + Web App",
    technologies: ["ML Models", "LLMs", "React", "Flutter", "Firebase", "Node.js", "Python"],
    ringColor: "ring-violet-400",
  },
];

const ProjectElement = () => {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-4">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
          Services
        </span>
      </h2>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-sm md:text-base">
        Innovative solutions that transform industries and improve lives through intelligent technology
      </p>

      {/* Project Cards */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`cursor-pointer w-60 p-5 rounded-xl text-center transition duration-300 ease-in-out font-semibold border
              ${selected === i
                ? `bg-zinc-900 text-white shadow-lg ring-2 ${proj.ringColor} border-transparent`
                : "bg-zinc-800 border-zinc-700 text-gray-200 hover:ring-2 hover:ring-cyan-500"
              }`}
            onClick={() => setSelected(i)}
          >
            <div className="mb-4 flex justify-center">{proj.icon}</div>
            <div className="text-lg md:text-xl">{proj.title}</div>
            <div className="text-sm font-normal">{proj.subtitle}</div>
          </motion.div>
        ))}
      </div>

      {/* Selected Project Detail with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Title */}
          <div className="mb-6 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-zinc-800">{project.icon}</div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">{project.subtitle}</p>
            </div>
          </div>

          <p className="text-gray-300 text-sm md:text-base mb-6">
            {project.description}
          </p>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-red-400 font-semibold mb-2 text-base md:text-lg text-left">
                  Problems Addressed
                </h4>
                <ul className="text-sm md:text-base text-gray-400 list-disc list-inside text-left">
                  {project.problems.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm md:text-base text-gray-300 text-left">
                <span className="text-blue-400 font-semibold mr-1">Platform:</span>
                {project.platform}
              </div>

              <div>
                <h5 className="text-purple-400 font-semibold text-sm md:text-base mb-2 text-left">
                  Technologies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs md:text-sm bg-zinc-700 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-green-400 font-semibold mb-2 text-base md:text-lg text-left">
                  Key Features
                </h4>
                <ul className="text-sm md:text-base text-gray-400 list-disc list-inside text-left">
                  {project.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProjectElement;
