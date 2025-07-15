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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return null;
}

function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <About />
            <Services />
            <Career />
            <Contact />
          </>
        }
      />
      <Route path="/apply" element={<JobApplicationForm />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;