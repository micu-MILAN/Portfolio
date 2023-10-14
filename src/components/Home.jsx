import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
