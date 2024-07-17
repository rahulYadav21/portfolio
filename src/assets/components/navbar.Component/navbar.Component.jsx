import React from "react";
import Home from "../home.component/home.Component";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="items-center justify-center p-2">
        <div className="">
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
      </div>
      <hr class="border-t border-purple-400" />
      <Home />
      <Outlet />
    </>
  );
}
