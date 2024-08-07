import React from "react";
import { ReactTyped } from "react-typed";
import "../home.Component.css";
export default function HeadText() {
  const strings = [
    "<span>an</span> <span class='text-purple-400'>Engineer</span>",
    "<span>a</span> <span class='text-purple-400'>Coder</span>",
    "<span>an</span> <span class='text-purple-400'>Developer</span>",
    "<span>a</span> <span class='text-purple-400'>Innovator</span>",
  ];
  return (
    <>
      <div className="text-center justify-center grid grid-rows-1 text-5xl pt-14 pb-10 lg:pt-20 lg:pb-10 2xl:pt-24 2xl:pb-24 lg:text-7xl md:text-7xl 2xl:text-8xl">
        <h1>
          <span>I'm </span>
          <ReactTyped
            className="home-typed-text tracking-tight lg:tracking-normal 2xl:tracking-normal"
            strings={strings}
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
