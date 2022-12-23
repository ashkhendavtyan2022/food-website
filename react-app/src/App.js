import React from "react";
import Header from "./Components/Header";
import { Home } from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
