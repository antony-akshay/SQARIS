"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const jobData = [
  {
    id: 1,
    title: "MERN Stack Developer",
    department: "Developer",
    type: "Full-time",
    experience: "0–1 years",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    description:
      "Kickstart your journey as a MERN Stack Developer with our engineering team! Work on real-world, impactful projects using MongoDB, Express.js, React, and Node.js. You'll collaborate with experienced professionals, solve meaningful challenges, and help build scalable web applications used by users worldwide. Perfect for passionate freshers or developers with 0–1 year of experience eager to grow quickly in a fast-paced, tech-driven environment.",
  },
  {
    id: 2,
    title: "Flutter Developer",
    department: "Developer",
    type: "Full-time",
    experience: "1–2 years",
    skills: ["Dart", "Flutter", "Firebase"],
    description:
      "Kickstart your journey as a Flutter Developer with our engineering team! Work on real-world, cross-platform apps using Flutter and Dart. Collaborate with experienced professionals, solve meaningful challenges, and build scalable mobile solutions for users worldwide. Ideal for passionate freshers or developers with 0–1 year of experience ready to grow in a fast-paced tech environment.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    experience: "1–2 years",
    skills: ["Figma", "Adobe xd", "Web Design"],
    description:
      "Kickstart your journey as a UI/UX Designer at SQARIS! Work on real-world digital products, craft intuitive interfaces, and enhance user experiences that reach global audiences. Collaborate with talented teams and grow your skills in a fast-paced, design-driven environment. Perfect for creative freshers or designers with 0–1 year of experience looking to make an impact.",
  },
  {
    id: 4,
    title: "Testing / QA",
    department: "Developer",
    type: "Full-time",
    experience: "1 years",
    skills: ["Selenium", "JMeter", "Postman"],
    description:
      "Kickstart your journey as a MERN Stack Developer with our engineering team! Work on real-world, impactful projects using MongoDB, Express.js, React, and Node.js. You'll collaborate with experienced professionals, solve meaningful challenges, and help build scalable web applications used by users worldwide. Perfect for passionate freshers or developers with 0–1 year of experience eager to grow quickly in a fast-paced, tech-driven environment.",
  },
];

const JobListings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredJobs = jobData.filter((job) => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "All" || job.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <section className="bg-black text-white px-4 py-16">
      <h2 className="text-center text-4xl font-bold mb-3">
        Open <span className="text-[#15ffa5]">Positions</span>
      </h2>
      <p className="text-center text-gray-400 text-base mb-10">
        Find your perfect role and take the next step in your career journey
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {filteredJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-xl border border-[#15ffa5] bg-black/60 p-6 shadow-[0_0_20px_#15ffa566] backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold text-white">{job.title}</h3>
            <p className="text-sm text-gray-400 mt-1">
              {job.type} <span className="mx-1">•</span> {job.experience}
            </p>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-zinc-900 text-teal-300 border border-teal-500"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button className="bg-[#15ffa5] text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-teal-300 transition">
                Apply now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JobListings;
