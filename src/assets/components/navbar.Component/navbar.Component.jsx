import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="p-2">
          <nav className="flex justify-center space-x-6 text-lg lg:space-x-20 2xl:space-x-28">
            <span
              onClick={() => scrollToSection("home")}
              className="hover:text-purple-400 transform duration-300 hover:font-bold cursor-pointer"
            >
              Home
            </span>
            <span
              onClick={() => scrollToSection("about")}
              className="hover:text-purple-400 transform duration-300 hover:font-bold cursor-pointer"
            >
              About
            </span>
            <span
              onClick={() => scrollToSection("stack")}
              className="hover:text-purple-400 transform duration-300 hover:font-bold cursor-pointer"
            >
              Stack
            </span>
            <span
              onClick={() => scrollToSection("work")}
              className="hover:text-purple-400 transform duration-300 hover:font-bold cursor-pointer"
            >
              Work
            </span>
            <span
              onClick={() => scrollToSection("contact")}
              className="hover:text-purple-400 transform duration-300 hover:font-bold cursor-pointer"
            >
              Contact
            </span>
          </nav>
        </div>
        <hr className="border-t border-purple-400" />
      </div>
    </>
  );
}
