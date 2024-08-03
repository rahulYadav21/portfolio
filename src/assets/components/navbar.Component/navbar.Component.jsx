import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="p-2">
          <nav className="flex justify-center space-x-6 text-lg lg:space-x-20 2xl:space-x-28">
            <Link
              to="/"
              className="hover:text-purple-400 transform duration-300 hover:font-bold"
            >
              Home
            </Link>
            <Link
              to="about"
              className="hover:text-purple-400 transform duration-300 hover:font-bold"
            >
              About
            </Link>
            <Link
              to="stack"
              className="hover:text-purple-400 transform duration-300 hover:font-bold"
            >
              Stack
            </Link>
            <Link
              to="work"
              className="hover:text-purple-400 transform duration-300 hover:font-bold"
            >
              Work
            </Link>
            <Link
              to="contact"
              className="hover:text-purple-400 transform duration-300 hover:font-bold"
            >
              Contact
            </Link>
          </nav>
        </div>
        <hr className="border-t border-purple-400" />
      </div>

      <div className="lg">
        <Outlet />
      </div>
    </>
  );
}
