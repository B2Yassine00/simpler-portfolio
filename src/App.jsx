import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";
import Footer from "./components/Footer";
import GoUpButton from "./components/GoUpBotton";

const App =() => {
  

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <Navbar />
        <div className=" bg-cover bg-no-repeat bg-center">
          <Home />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
        <GoUpButton />
      </div>
    </BrowserRouter>
  )
}

export default App
