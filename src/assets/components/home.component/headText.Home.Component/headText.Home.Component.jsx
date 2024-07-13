import React from "react";
import { ReactTyped } from "react-typed";
import "../home.Component.css";
export default function HeadText() {
  return (
    <>
      <div className="text-center justify-center grid grid-rows-1 text-5xl pt-10 pb-16 lg:p-10 2xl:p-24 lg:text-7xl md:text-7xl 2xl:text-8xl">
        <h1>
          I'm a&nbsp;
          <ReactTyped
            className="home-typed-text text-purple-400"
            strings={[
              "Engineer",
              "Coder",
              "Designer",
              "Developer",
              "Creator",
              "Innovator",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
          <span className="custom-cursor">{"<"}</span>
        </h1>
      </div>
    </>
  );
}
