import React from "react";
import Home from "../home.component/home.Component";

export default function Navbar() {
  return (
    <>
      <div className="items-center justify-center p-2">
        <div className="">
          <nav className="flex justify-center space-x-6 text-lg lg:space-x-20 2xl:space-x-28">
            <a
              href="#home"
              className="hover:text-purple-400 transform duration-300 hover:font-bold"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-purple-400 transform duration-300 hover:font-bold"
            >
              About
            </a>
            <a
              href="#Stack"
              className="hover:text-purple-400 transform duration-300 hover:font-bold"
            >
              Stack
            </a>
            <a
              href="#work"
              className="hover:text-purple-400 transform duration-300 hover:font-bold"
            >
              Work
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transform duration-300 hover:font-bold"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
      <hr class="border-t border-purple-400" />
      <Home />
    </>
  );
}
