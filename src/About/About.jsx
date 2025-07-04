import React from "react";
import natural from "./Images/Natural.png";
import organic from "./Images/Organic.png";
import noSideEffect from "./Images/NoSideEffect.png";

const About = () => {
  return (
    <div id="about" className="container mx-auto px-4">
      <h2 className="flex justify-center font-justAnotherHand text-7xl py-10 text-zinnwalditeBrown">
        Why Lumera?
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        <figure className="text-center">
          <img src={natural} alt="natural" className="mx-auto" />
          <figcaption className="text-2xl py-4 font-semibold text-zinnwalditeBrown">
            Natural
          </figcaption>
        </figure>
        <figure className="text-center">
          <img src={noSideEffect} alt="No Side Effects" className="mx-auto" />
          <figcaption className="text-2xl py-4 font-semibold text-zinnwalditeBrown">
            No Side Effects
          </figcaption>
        </figure>
        <figure className="text-center">
          <img src={organic} alt="organic" className="mx-auto" />
          <figcaption className="text-2xl py-4 font-semibold text-zinnwalditeBrown">
            Organic
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default About;
