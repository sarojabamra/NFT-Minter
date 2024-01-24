import "./App.css";
//import Minter from "./Minter";
import React from "react";
import Home from "./pages/home/Home";
import Mint from "./pages/mint/Mint";
import About from "./pages/about/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
