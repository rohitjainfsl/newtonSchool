import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shapes from "./Shapes";
import Image from "./Image";

export default function App() {
  return (

    <div id="home">
      <Router>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              {/* Home*/}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* Shapes*/}
              <Link to="/shapes">Shapes</Link>
            </li>
            <li>
              {/* Image*/}
              <Link to="/image">Image</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shapes" element={<Shapes />}></Route>
          <Route path="/image" element={<Image />}></Route>
        </Routes>
      </Router>
    </div>

  );
}