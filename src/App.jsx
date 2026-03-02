import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
