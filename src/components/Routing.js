import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../PAGES/Home";
import About from "../PAGES/About";
import Contact from "../PAGES/Contact";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ float: "right", border: "3px black" }}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={"errrorrr"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
