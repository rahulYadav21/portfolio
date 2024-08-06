import React from "react";
import "./work.Component.css";
import Accordion, { AccordionItems } from "./accordion.work.Component";
import Contact from "../contact.Component/contact.Component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Work() {
  return (
    <>
      <div
        id="work"
        className="container mx-auto p-5 pt-10 pb-10 lg:w-2/3 2xl:w-1/2"
      >
        <div className="pb-5 lg:pb-5 2xl:pb-5">
          <p className="playfair-display text-4xl">Work</p>
          <p className="josefin-sans text-xl text-gray-400 pt-2 tracking-tight lg:tracking-normal 2xl:tracking-normal">
            Coding stories through projects.
          </p>
        </div>
        {/* accordion component */}
        <div>
          <Accordion className="max-w-lg">
            <AccordionItems value="1" triger="Accordion item 1">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="border">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/07/89/33/00/1000_F_789330076_E9kR6hYXGatltJzDNw2jesffAGbtyCo7.webp"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify border p-5">
                  <header className="text-lg font-bold pb-3">
                    My Portfolio
                  </header>
                  <div className="pb-3">
                    <p>Tech Stack Used &mdash;</p>
                    <p>tech</p>
                  </div>
                  <div className="pb-3">
                    <p>About &mdash;</p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus consectetur officiis vero sapiente voluptate
                      voluptatem voluptates incidunt cum. Quo dolorum aut
                      veritatis, omnis dolores quae tenetur? Odio molestiae quos
                      modi!
                    </p>
                  </div>
                  <div className="flex space-x-1 gap-1 justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                    <button className="px-10 py-1 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transform duration-300">
                      Hosted link &nbsp;
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </button>
                    <button className="px-10 py-1 bg-gray-400 text-black rounded-lg shadow-md hover:bg-purple-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transform duration-500">
                      Github code &nbsp;
                      <FontAwesomeIcon icon={faGithub} />
                    </button>
                  </div>
                </div>
              </div>
            </AccordionItems>
            <AccordionItems value="2" triger="Accordion item 2">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="border">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/07/89/33/00/1000_F_789330076_E9kR6hYXGatltJzDNw2jesffAGbtyCo7.webp"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify border p-5">
                  <header className="text-lg font-bold pb-3">
                    My Portfolio
                  </header>
                  <div className="pb-3">
                    <p>Tech Stack Used &mdash;</p>
                    <p>tech</p>
                  </div>
                  <div className="pb-3">
                    <p>About &mdash;</p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus consectetur officiis vero sapiente voluptate
                      voluptatem voluptates incidunt cum. Quo dolorum aut
                      veritatis, omnis dolores quae tenetur? Odio molestiae quos
                      modi!
                    </p>
                  </div>
                  <div className="flex space-x-1 gap-1 justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                    <button className="px-10 py-1 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transform duration-300">
                      Hosted link &nbsp;
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </button>
                    <button className="px-10 py-1 bg-gray-400 text-black rounded-lg shadow-md hover:bg-purple-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transform duration-500">
                      Github code &nbsp;
                      <FontAwesomeIcon icon={faGithub} />
                    </button>
                  </div>
                </div>
              </div>
            </AccordionItems>
            <AccordionItems value="3" triger="Accordion item 3">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="border">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/07/89/33/00/1000_F_789330076_E9kR6hYXGatltJzDNw2jesffAGbtyCo7.webp"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify border p-5">
                  <header className="text-lg font-bold pb-3">
                    My Portfolio
                  </header>
                  <div className="pb-3">
                    <p>Tech Stack Used &mdash;</p>
                    <p>tech</p>
                  </div>
                  <div className="pb-3">
                    <p>About &mdash;</p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus consectetur officiis vero sapiente voluptate
                      voluptatem voluptates incidunt cum. Quo dolorum aut
                      veritatis, omnis dolores quae tenetur? Odio molestiae quos
                      modi!
                    </p>
                  </div>
                  <div className="flex space-x-1 gap-1 justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                    <button className="px-10 py-1 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transform duration-300">
                      Hosted link &nbsp;
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </button>
                    <button className="px-10 py-1 bg-gray-400 text-black rounded-lg shadow-md hover:bg-purple-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transform duration-500">
                      Github code &nbsp;
                      <FontAwesomeIcon icon={faGithub} />
                    </button>
                  </div>
                </div>
              </div>
            </AccordionItems>
            <AccordionItems value="4" triger="Accordion item 4">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="border">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/07/89/33/00/1000_F_789330076_E9kR6hYXGatltJzDNw2jesffAGbtyCo7.webp"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify border p-5">
                  <header className="text-lg font-bold pb-3">
                    My Portfolio
                  </header>
                  <div className="pb-3">
                    <p>Tech Stack Used &mdash;</p>
                    <p>tech</p>
                  </div>
                  <div className="pb-3">
                    <p>About &mdash;</p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus consectetur officiis vero sapiente voluptate
                      voluptatem voluptates incidunt cum. Quo dolorum aut
                      veritatis, omnis dolores quae tenetur? Odio molestiae quos
                      modi!
                    </p>
                  </div>
                  <div className="flex space-x-1 gap-1 justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                    <button className="px-10 py-1 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transform duration-300">
                      Hosted link &nbsp;
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </button>
                    <button className="px-10 py-1 bg-gray-400 text-black rounded-lg shadow-md hover:bg-purple-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transform duration-500">
                      Github code &nbsp;
                      <FontAwesomeIcon icon={faGithub} />
                    </button>
                  </div>
                </div>
              </div>
            </AccordionItems>
          </Accordion>
        </div>
      </div>
    </>
  );
}
