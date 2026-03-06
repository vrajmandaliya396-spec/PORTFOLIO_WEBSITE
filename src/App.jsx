import  { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import NavMenu from '../src/components/homePage/NavMenu'
import NavMenuInnerContent from '../src/components/homePage/NavMenuInnerContent'

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="h-full">
      <NavMenu setMenuOpen={setMenuOpen} />
      <NavMenuInnerContent menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>    
      <Routes>
        <Route path="/" element={<Home setMenuOpen={setMenuOpen}  />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
