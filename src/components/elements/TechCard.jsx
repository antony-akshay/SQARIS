import React from 'react';
import flutter from '../../assets/image/tech/flutter.png'
import ai from '../../assets/image/tech/ai.png'
import aws from '../../assets/image/tech/aws.png'
import deeplearning from '../../assets/image/tech/deepl.png'
import express from '../../assets/image/tech/express.png'
import figma from '../../assets/image/tech/figma.png'
import ml from '../../assets/image/tech/ml.png'
import mg from '../../assets/image/tech/mongodb.png'
import node from '../../assets/image/tech/node.png'
import postman from '../../assets/image/tech/postman.png'
import py from '../../assets/image/tech/py.png'
import react from '../../assets/image/tech/react.png'
import adobe from '../../assets/image/tech/adobe.png'




// Individual TechCard component that takes props
const TechCard = ({ img, name, description }) => {
    return (
        <div className="lg:w-[420px] lg:h-[520px] md:w-[500px]  md:h-[550px] w-[280px] h-[360px] bg-gradient-to-br from-black-900 via-black to-black-900 border border-gray-700 rounded-2xl relative overflow-hidden flex-shrink-0">
            {/* Tech Icon */}
            <div className="absolute left-1/2 md:top-16 top-4 transform -translate-x-1/2">
                <img src={img} alt={name} className=" md:h-40 h-24   object-contain" />
            </div>

            {/* Tech Title */}
            <div className="absolute left-1/2 md:top-64 top-32 transform -translate-x-1/2">
                <h2 className="text-white md:text-3xl text-xl font-semibold font-['Poppins'] leading-8 text-center">
                    {name}
                </h2>
            </div>

            {/* Description */}
            <div className="absolute md:px-16 md:top-80 px-4 top-44 md:w-full w-[275px]">
                <p className="text-white md:text-base text-xs font-light font-['Poppins'] leading-8 text-left">
                    {description}
                </p>
            </div>

            {/* Optional: Add a subtle hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        </div>
    );
};

const TechCardsContainer = () => {
    // Sample data - replace with your actual data
    const techData = [
  {
    name: "MongoDB",
    description: "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It allows for dynamic schemas, making it ideal for modern applications that require scalability, high performance, and real-time data handling.",
    img: mg
  },
  {
    name: "Express.js",
    description: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's fast, unopinionated, and minimalist.",
    img: express
  },
  {
    name: "React",
    description: "React is a JavaScript library for building user interfaces. It lets you create reusable UI components and efficiently update the UI when data changes through its virtual DOM.",
    img: react
  },
  {
    name: "Node.js",
    description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, enabling full-stack JavaScript development.",
    img: node
  },
  {
    name: "Python",
    description: "Python is a high-level programming language known for its simplicity and readability. It's widely used in web development, data science, artificial intelligence, and automation.",
    img: py
  },
  {
    name: "Artificial Intelligence",
    description: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines. It enables systems to learn, reason, and make decisions, powering applications like automation, recommendation engines, chatbots, and robotics.",
    img: ai
  },
  {
    name: "Flutter",
    description: "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language.",
    img: flutter
  },
  {
    name: "Machine Learning",
    description: "Machine Learning (ML) is a subset of AI that enables systems to learn from data and improve over time without explicit programming. It's used in predictions, recommendations, image recognition, and automation.",
    img: ml
  },
  {
    name: "Deep Learning",
    description: "Deep Learning is a branch of machine learning that uses artificial neural networks to model complex patterns in data. It powers advanced applications like image recognition, speech processing, autonomous systems, and natural language understanding.",
    img: deeplearning
  },
  {
    name: "Postman",
    description: "Postman is a powerful tool for testing, documenting, and managing APIs. It simplifies API development with features like automated testing, collaboration, and monitoring, making backend integration faster and more efficient.",
    img: postman
  },
  {
    name: "Figma",
    description: "Figma is a cloud-based design tool for creating user interfaces, prototypes, and collaborative designs. It enables real-time collaboration, vector editing, and seamless handoff between designers and developers.",
    img: figma
  },
  {
    name: "AWS",
    description: "Amazon Web Services (AWS) is a comprehensive cloud computing platform offering scalable infrastructure, storage, databases, and machine learning services. It enables businesses to build, deploy, and manage applications globally.",
    img: aws
  },
  {
    name: "Adobe XD",
    description: "Adobe provides creative software solutions including Photoshop, Illustrator, After Effects, and Premiere Pro. These tools are industry standards for graphic design, video editing, digital art, and creative content production.",
    img: adobe
  },
];

    return (
        <div className="flex items-center justify-center  bg-black  py-8">
            <div className="w-full max-w-9xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 bg-clip-text text-transparent font-bold text-4xl md:text-5xl overflow-x-hidden flex justify-center items-center">
                        Technologies
                    </h1>
                </div>

                {/* Scrollable Cards Container */}
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
                        {techData.map((tech, index) => (
                            <TechCard
                                key={index}
                                img={tech.img}
                                name={tech.name}
                                description={tech.description}
                            />
                        ))}
                    </div>
                </div>

                {/* Scroll indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                    {techData.map((_, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-full bg-gray-400 opacity-50"
                        />
                    ))}
                </div>
            </div>

            {/* Custom scrollbar styles */}
            <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
};

export default TechCardsContainer;