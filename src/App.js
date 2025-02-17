import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";  // Importamos el nuevo componente Home
import ValentineLetter from "./components/Proyecto";
import ValentineCard from "./components/Card2";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ValentineLetter" element={<ValentineLetter />} />
        <Route path="/ValentineCard" element={<ValentineCard />} />
        <Route path="/Carousel"  element={<Carousel />} />

      </Routes>
    </Router>
  );
}

export default App;
