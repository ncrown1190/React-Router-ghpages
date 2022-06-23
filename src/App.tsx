import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { NavLink } from "react-router-dom";
import Store from "./components/Store";
import Dog from "./components/Dog";
import Cat from "./components/Cat";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Router>
        <p>
          <Link to="/home">Home</Link>
        </p>

        <Link to="/about"> About</Link>
        {/* <p>
          <a href="/home">Home</a>
        </p> */}
        <p>
          <NavLink to="/dog">Dog</NavLink>
          <NavLink to="/cat">Cat</NavLink>
        </p>
        <p>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </p>
        <p>
          <NavLink to="/store/111">Store 111</NavLink>
          <NavLink to="/store/222">Store 222</NavLink>
          <NavLink to="/store/333">Store 333</NavLink>
          <NavLink to="/store/555?color=blue">Store 555</NavLink>
        </p>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/:id" element={<Store />} />

          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
