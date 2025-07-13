"use client";

import React from "react";

const CareerSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title with subtle bottom border */}
        <div className="border-b border-zinc-800 pb-6 mb-10 text-center">
          <h2 className="text-4xl font-bold">Career</h2>
        </div>

        {/* Subheading */}
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Equal Employment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Opportunity
            </span>
          </h3>
        </div>

        {/* Paragraphs */}
        <div className="text-center space-y-3 text-sm sm:text-base leading-relaxed text-gray-300">
          <p>
            At SQARIS, we are committed to building an inclusive and diverse workplace.
          </p>
          <p>
            We are an equal opportunity employer and do not discriminate based on race, color, ethnicity, ancestry,
            national origin, religion, sex, gender identity or expression, sexual orientation, age, disability,
            veteran status, genetic information, marital status, or any other legally protected status.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
