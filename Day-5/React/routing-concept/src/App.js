import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Content } from "./components/Content";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </>
  );
}

export default App;
