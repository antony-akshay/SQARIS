"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const jobData = [
  {
    id: 1,
    title: "MERN Stack Developer",
    department: "Engineering",
    type: "Full-time",
    experience: "0–1 years",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    description:
      "Join our backend team to build scalable web apps using the MERN stack. You'll develop REST APIs, work on frontend integration, and manage data with MongoDB.",
  },
  {
    id: 2,
    title: "Flutter Developer",
    department: "Mobile Development",
    type: "Full-time",
    experience: "1–2 years",
    skills: ["Dart", "Flutter", "Firebase"],
    description:
      "We're looking for a Flutter developer to create responsive mobile apps. You’ll build smooth UIs, integrate Firebase services, and publish to app stores.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    experience: "1–2 years",
    skills: ["Figma", "Adobe XD", "Web Design"],
    description:
      "Design intuitive and beautiful interfaces that elevate user experience. Collaborate with developers to turn your concepts into functional digital products.",
  },
  {
    id: 4,
    title: "Testing / QA Engineer",
    department: "Quality Assurance",
    type: "Full-time",
    experience: "1+ year",
    skills: ["Selenium", "JMeter", "Postman"],
    description:
      "Work on maintaining product quality through manual and automated testing. Validate APIs, performance benchmarks, and bug fixes using top QA tools.",
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
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-14 md:py-16">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-4">
        Open <span className="text-teal-400">Positions</span>
      </h2>
      <p className="text-center text-gray-300 text-sm sm:text-base mb-10">
        Find your perfect role and take the next step in your career journey.
      </p>

      <div className="flex flex-wrap gap-4 items-center justify-center mb-10">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search positions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-9 sm:h-10 md:h-12 pl-10 pr-4 rounded-lg bg-zinc-800 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
          />
          <FiSearch className="absolute left-3 top-2 sm:top-2.5 md:top-3.5 text-gray-400 text-base" />
        </div>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="h-9 sm:h-10 md:h-12 px-4 rounded-lg bg-zinc-800 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
        >
          <option value="All">All Types</option>
          <option value="Full-time">Full-time</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {filteredJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 32px rgba(20, 184, 166, 0.6)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="rounded-xl sm:rounded-2xl border border-teal-500 bg-black/40 backdrop-blur-md p-4 sm:p-6 flex flex-col justify-between text-white relative cursor-pointer transition-all shadow-[0_0_12px_rgba(20,184,166,0.4)]"
            onClick={() => setSelectedJob(job)}
          >
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-lg sm:text-xl font-semibold">{job.title}</h3>
              </div>

              <div className="mt-2 text-xs sm:text-sm text-gray-400">
                {job.department} · {job.experience} · {job.type}
              </div>

              <p className="mt-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
                {job.description.slice(0, 90)}...
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-teal-300 border border-teal-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end items-center text-sm text-teal-400 hover:underline">
              Learn more →
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] text-white rounded-2xl max-w-lg w-full p-6 border border-teal-500 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-1 text-white">
                {selectedJob.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {selectedJob.department} · {selectedJob.experience} · {selectedJob.type}
              </p>
              <p className="mb-4 text-gray-300">{selectedJob.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedJob.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-teal-300 border border-teal-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 text-sm rounded-md bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default JobListings;
