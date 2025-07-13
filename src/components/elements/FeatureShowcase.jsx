"use client";

import React from "react";
import { motion } from "framer-motion";

const FeatureShowcase = () => {
  const features = [
    { id: 1, title: "Innovation through Research" },
    { id: 2, title: "Precision in Engineering" },
    { id: 3, title: "Ethical AI & Tech Responsibility" },
    { id: 4, title: "Commitment to Global Standards" },
    { id: 5, title: "Scalable AI Products" },
  ];

  return (
    <>
      <h1 className="w-full max-w-4xl mx-auto p-8 text-white font-bold text-4xl overflow-x-hidden flex justify-center items-center">
        About SQARIS
      </h1>
      <div className="h-[2px] w-92 lg:max-w-[90vw] mx-auto mt-2 bg-gradient-to-r from-black via-[#3c3c3c] to-black mb-[37px]" />
      <p className="mx-auto text-gray-100 lg:max-w-[940px] md:max-w-[560px] max-w-72 text-center mb-10">
        At SQARIS, we believe in lifecycle-aligned rewards & performance, high
        accountability and initiative, maintaining an 8-hour
        <br />
        productive workday minimum, with no part-time/side employment. We
        operate with transparent contribution to operating cost, growth, and
        valuation.
      </p>

      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full h-auto bg-gradient-to-r from-black to-gray-900 rounded-3xl border border-gray-600 overflow-hidden p-8">
          {/* Mobile layout: stacked */}
          <div className="md:hidden flex flex-col gap-8 items-center">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full max-w-xs h-16 bg-black bg-opacity-60 backdrop-blur-sm rounded-3xl border border-teal-600 shadow-inner px-4 flex items-center justify-center text-center"
                style={{
                  background: `linear-gradient(172.57deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(to left, #000000, #000000)`,
                  boxShadow: `inset 0px 7px 17px 0px rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(0, 141, 134, 1)`,
                }}
              >
                <h3 className="text-gray-200 font-medium text-base leading-tight">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Desktop layout: 3 top, 2 bottom centered */}
          <div className="hidden md:flex flex-col items-center gap-8">
            {/* Top row */}
            <div className="flex gap-6 justify-center">
              {features.slice(0, 3).map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="w-72 h-24 bg-black bg-opacity-60 backdrop-blur-sm rounded-3xl border-2 border-teal-600 shadow-inner text-center flex items-center justify-center px-4"
                  style={{
                    background: `linear-gradient(172.57deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(to left, #000000, #000000)`,
                    boxShadow: `inset 0px 7px 17px -7px rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(0, 141, 134, 1)`,
                  }}
                >
                  <h3 className="text-gray-200 font-medium text-base leading-tight">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </div>
            {/* Bottom row (centered pair) */}
            <div className="flex gap-6 justify-center">
              {features.slice(3).map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (i + 3) * 0.1, duration: 0.4 }}
                  className="w-72 h-24 bg-black bg-opacity-60 backdrop-blur-sm rounded-3xl border-2 border-teal-600 shadow-inner text-center flex items-center justify-center px-4"
                  style={{
                    background: `linear-gradient(172.57deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(to left, #000000, #000000)`,
                    boxShadow: `inset 0px 7px 17px -7px rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(0, 141, 134, 1)`,
                  }}
                >
                  <h3 className="text-gray-200 font-medium text-base leading-tight">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureShowcase;
