import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/home" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
      <Footer />
    </BrowserRouter>
   
    </>
  );
}

export default App;



