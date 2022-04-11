import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import PageNotFound from "./components/PageNotFound";
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route  exact path="/" element={<Landing/>}/>
      <Route  exact path="/home" element={<Landing/>}/>
      <Route  exact path="/about" element={<About/>}/>
      <Route  exact path="/skills" element={<Skills/>}/>
      <Route  exact path="/projects" element={<Projects/>}/>
      <Route  exact path="/contact" element={<Contact/>}/>
      {/*
      <Route  exact path="/pdf" element={<Pdf/>}/>*/}
     
       <Route path='*' element={<PageNotFound/>}/>

    </Routes>
      <Footer />
    </BrowserRouter>
   
    </>
  );
}

export default App;



