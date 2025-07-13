// import { BackgroundBoxes } from "./components/elements/BackgroundBoxes";
import './App.css';
import BackgroundSection from "./components/elements/BackgroundSection";
import cnn from '../src/assets/image/technology/cnn.png';
import python from '../src/assets/image/technology/python.png';
import Keran from '../src/assets/image/technology/keran.png';
import mern from '../src/assets/image/technology/mern.png';
import tenserflow from '../src/assets/image/technology/tenserflow.png';
import deeplearning from '../src/assets/image/technology/deeplearning.png';
import figma from '../src/assets/image/technology/figma.png';
import flutter from '../src/assets/image/technology/flutter.png';
import ml from '../src/assets/image/technology/ml.png';

import { InfiniteMovingCardsElement } from "./components/elements/InfinteMovingCardsElement";

import FeatureShowcase from "./components/elements/FeatureShowcase";

import { Boxes } from "./components/ui/Boxes";
import Navbar from "./components/ui/NavBar";
import Mission from "./components/elements/Mission";
import Philosophy from "./components/elements/Philosophy";
import CoreValues from "./components/elements/CoreValues";
import OurStory from "./components/elements/OurStory";
import HomeLanding from './components/elements/HomeLanding';
import LandingBelow from "./components/elements/LandingBelow";
import FlipCard from './components/elements/Flipcard';


function App() {
  return (
    <>
      <Navbar />
      <HomeLanding />
      <LandingBelow />
      <FeatureShowcase />
      <Mission />
      <OurStory />
      <FlipCard />
      <InfiniteMovingCardsElement />
    </>
  );
}

export default App;



const items = [
  {
    image: flutter,
    description: "Build high-performance apps for iOS, Android, and web using Dart and Flutter's cross-platform toolkit.",
    link: "#",
  },
  {
    image: python,
    description: "Powerful, easy-to-learn language widely used in AI, automation, backend services, and data science.",
    link: "#",
  },
  {
    image: figma,
    description: "Modern UI/UX design and prototyping tool for collaborative and responsive interface design.",
    link: "#",
  },
  {
    image: Keran,
    description: "User-friendly deep learning library that simplifies building and training neural networks on top of TensorFlow.",
    link: "#",
  },
  {
    image: tenserflow,
    description: "End-to-end open-source ML framework for training, deploying, and scaling deep learning models.",
    link: "#",
  },
  {
    image: cnn,
    description: "Convolutional Neural Networks — designed for image analysis tasks like recognition, classification, and detection.",
    link: "#",
  },
  {
    image: deeplearning,
    description: "Deep Learning enables AI systems to learn complex patterns through multi-layered neural networks.",
    link: "#",
  },
  {
    image: mern,
    description: "JavaScript-based full-stack development using MongoDB, Express, React, and Node.js.",
    link: "#",
  },
  {
    image: ml,
    description: "Machine Learning enables systems to learn from data, make predictions, and improve without explicit programming.",
    link: "#",
  },
];

