import React from "react";
import Navbar from "./Nav/NavBar";
import Cards from "../AllCards.js/Cards";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "../particlesConfig";
import FooterContent from "./footer/footerContent";

function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };
  return (
    <div>
      <Navbar />
      <Particles init={particlesInit} options={particlesOptions} />
      <Cards />
      <FooterContent />
    </div>
  );
}

export default App;
