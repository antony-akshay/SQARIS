// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/elements/NavBar";
import Footer from "./components/elements/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Career from "./components/pages/Career";
import JobApplicationForm from "./components/elements/JobApplicationForm";




function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/career" element={<Career/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
    <Footer/>
    </Router>
  );
}


export default App;
