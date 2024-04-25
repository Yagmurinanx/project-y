import React from "react";
import "../App.css";
import "../index.css";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="glitch" id="namePart" data-glitch="I'M YAĞMUR İNAN">
        I'M YAĞMUR İNAN
      </h1>
      <div>
        <p className="text-lg ">
          Hi there! I'm a passionate web developer with a strong foundation in
          bringing designs to life through code. I recently graduated from
          Anadolu University's Web Design and Coding associate degree program
          and I'm constantly striving to improve my skills, particularly in user
          experience (UX). My goal is to become a well-rounded front-end
          developer by applying web design principles effectively and expanding
          my knowledge. I'm excited to tackle new challenges and contribute to
          projects that prioritize a user-centric approach.
        </p>
      </div>
      <a href="about">
        <button className="fancyButton mt-5 mb-5 text-gray-500">
          See More About Me
        </button>
      </a>
    </div>
  );
};

export default Home;
