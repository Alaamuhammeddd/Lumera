import React from "react";
import Header from "./Shared/Header/Header";
import Home from "./Landing/Home";
import "./index.css";
import About from "./About/About";

const App = () => {
  return (
    <div className="bg-darkGray">
      <Header />
      <Home />
      <About />
    </div>
  );
};

export default App;
