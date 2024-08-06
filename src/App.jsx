import React from "react";
import "./App.css";
import Home from "./assets/components/home.component/home.Component";
import Navbar from "./assets/components/navbar.Component/navbar.Component";
import About from "./assets/components/about.Component/about.component";
import Stack from "./assets/components/stack.Component/stack.Component";
import Work from "./assets/components/work.Component/work.Component";
import Contact from "./assets/components/contact.Component/contact.Component";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Stack />
      <Work />
      <Contact />
    </>
  );
}
