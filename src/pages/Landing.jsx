import React from 'react'

import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact"
//import Carousel from "../components/carrusel/Carrusel"



const Landing = () => {
  return (
    <>
    <Home/>
    <About />
    <Skills />
    <Projects />
    {/*<Carousel />*/}
    <Contact />
    
    
    </>
  )
}

export default Landing