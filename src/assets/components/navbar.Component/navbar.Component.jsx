import React from "react";
import Home from "../home.component/home.Component";

export default function Navbar() {
  return (
    <>
      <div className="items-center justify-center p-4">
        <div className="">
          <nav className="flex justify-center space-x-10 text-xl">
            <a
              href="#home"
              className="hover:text-purple-400 transform duration-300 transform duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-purple-400 transform duration-300"
            >
              About
            </a>
            <a
              href="#Stack"
              className="hover:text-purple-400 transform duration-300"
            >
              Stack
            </a>
            <a
              href="#work"
              className="hover:text-purple-400 transform duration-300"
            >
              Work
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transform duration-300"
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
