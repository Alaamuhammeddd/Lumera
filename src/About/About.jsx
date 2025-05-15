import React from "react";
import natural from "./Images/Natural.png";
import organic from "./Images/Organic.png";
import noSideEffect from "./Images/NoSideEffect.png";

const About = () => {
  return (
    <div id="about" className="container">
      <h2 className="flex justify-center font-justAnotherHand text-7xl py-10 text-zinnwalditeBrown">
        Why Lumera?
      </h2>
      <div className="flex justify-around">
        <figure>
          <img src={natural} alt="natural" />
          <figcaption className="flex justify-center text-2xl py-4 font-semibold text-zinnwalditeBrown">
            Natural
          </figcaption>
        </figure>
        <figure>
          <img src={noSideEffect} alt="No Side Effects" />
          <figcaption className="flex justify-center text-2xl py-4 font-semibold text-zinnwalditeBrown">
            No Side Effects
          </figcaption>
        </figure>
        <figure>
          <img src={organic} alt="organic" />
          <figcaption className="flex justify-center text-2xl py-4 font-semibold text-zinnwalditeBrown">
            Organic
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default About;
