import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <Gallery />
      <Partners />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
