import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router >
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;

