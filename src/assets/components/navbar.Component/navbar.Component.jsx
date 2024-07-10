import React from "react";
import Home from "../home.component/home.Component";

export default function Navbar() {
  return (
    <>
      <div className="items-center justify-center p-4">
        <div className="">
          <nav className="flex justify-center space-x-10 text-xl">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
          <hr class="border-t border-gray-300" />
        </div>
      </div>
      <Home />
    </>
  );
}
