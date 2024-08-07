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
            <AccordionItems value="1" triger="My PortFolio">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="flex justify-center items-center">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a914.appspot.com/o/photo_2024-08-07_13-26-53.jpg?alt=media&token=57fc814b-02c3-41bd-813c-d4a1170b423c"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify">
                  <header className="text-lg font-bold pb-3 montserrat">
                    My Portfolio{" "}
                    <small className="font-normal text-gray-400 josefin-sans">
                      showcases my skills and projects.
                    </small>
                  </header>
                  <div className="pb-3">
                    <p className="font-bold montserrat">
                      Tech Stack Used &mdash;
                    </p>
                    <p className="text-gray-400 josefin-sans">
                      React, Tailwind, vercel
                    </p>
                  </div>
                  <div className="pb-3">
                    <p className="font-bold montserrat">About &mdash;</p>
                    <p className="text-gray-400 josefin-sans tracking-tighter lg:tracking-normal">
                      My portfolio web app, built with React and Tailwind CSS,
                      showcases my skills and projects. It features sections for
                      Home, About, Tech Stack, Work, and Contact, providing a
                      comprehensive overview of my professional journey and
                      expertise.
                    </p>
                  </div>
                  <div className="flex space-x-1 gap-1 justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                    <a href="" target="blank">
                      <button
                        disabled
                        className="px-8 lg:px-10 2xl:px-10 py-1 lg:py-1 2xl:py-1 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transform duration-300"
                      >
                        Hosted link &nbsp;
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </button>
                    </a>
                    <a
                      href="https://github.com/rahulYadav21/portfolio"
                      target="blank"
                    >
                      <button className="px-8 lg:px-10 2xl:px-10 py-1 lg:py-1 2xl:py-1 bg-gray-400 text-black rounded-lg shadow-md hover:bg-purple-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transform duration-500">
                        Github code &nbsp;
                        <FontAwesomeIcon icon={faGithub} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </AccordionItems>
            <AccordionItems value="2" triger="Ghumakkad">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className=" flex justify-center items-center">
                  <img
                    className=""
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a914.appspot.com/o/3-devices-white.png?alt=media&token=08e39fd3-6f0a-497b-9b45-d0d2f6eeb6b8"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify">
                  <header className="text-lg font-bold pb-3 montserrat">
                    Gumakkad{" "}
                    <small className="font-normal text-gray-400 josefin-sans">
                      is a travel guide webapp
                    </small>
                  </header>
                  <div className="pb-3">
                    <p className="font-bold montserrat">
                      Tech Stack Used &mdash;
                    </p>
                    <p className="text-gray-400 josefin-sans tracking-tight lg:tracking-normal">
                      React, Firebase, JSON, JSON Server, MDB, Vercel
                    </p>
                  </div>
                  <div className="pb-3">
                    <p className="font-bold montserrat">About &mdash;</p>
                    <p className="text-gray-400 josefin-sans  tracking-tighter lg:tracking-normal">
                      Ghummakad is a web app that connects users with expert
                      tourist guides for exploring safaris and exotic
                      destinations. It offers personalized guided tours,
                      ensuring memorable travel experiences. Contact Ghummakad
                      for professional guides and unique adventures.
                    </p>
                  </div>
                  <div className="flex space-x-1 gap-1 justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                    <a href="https://ghummakad-repo.vercel.app/" target="blank">
                      <button className="px-8 lg:px-10 2xl:px-10 py-1 lg:py-1 2xl:py-1 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transform duration-300">
                        Hosted link &nbsp;
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </button>
                    </a>
                    <a
                      href="https://github.com/rahulYadav21/GhummakadWebApp"
                      target="blank"
                    >
                      <button className="px-8 lg:px-10 2xl:px-10 py-1 lg:py-1 2xl:py-1 bg-gray-400 text-black rounded-lg shadow-md hover:bg-purple-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transform duration-500">
                        Github code &nbsp;
                        <FontAwesomeIcon icon={faGithub} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </AccordionItems>
            <AccordionItems value="3" triger="Mustang Car">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="flex justify-center items-center">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a914.appspot.com/o/3-devices-white%20(1).png?alt=media&token=a44342eb-6241-44c4-9ef3-1cd7bfa14e60"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify">
                  <header className="text-lg font-bold pb-3 montserrat">
                    Mustang Car{" "}
                    <small className="font-normal text-gray-400 josefin-sans">
                      this is the car webpage
                    </small>
                  </header>
                  <div className="pb-3">
                    <p className="font-bold montserrat">
                      Tech Stack Used &mdash;
                    </p>
                    <p className="text-gray-400 josefin-sans">
                      HTML, CSS, Bootstrap, Vercel
                    </p>
                  </div>
                  <div className="pb-3">
                    <p className="font-bold montserrat">About &mdash;</p>
                    <p className="text-gray-400 josefin-sans tracking-tighter lg:tracking-normal">
                      A single-page, device-responsive website with sections for
                      Home, Features, About, and Contact. Developed using HTML,
                      CSS, and Bootstrap 5 for a clean and user-friendly
                      interface.
                    </p>
                  </div>
                  <div className="flex space-x-1 gap-1 justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                    <a
                      href="https://mustang-pontic-cars.vercel.app/"
                      target="blank"
                    >
                      <button className="px-8 lg:px-10 2xl:px-10 py-1 lg:py-1 2xl:py-1 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transform duration-300">
                        Hosted link &nbsp;
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </button>
                    </a>
                    <a
                      href="https://github.com/rahulYadav21/MustangPonticCars"
                      target="blank"
                    >
                      <button className="px-8 lg:px-10 2xl:px-10 py-1 lg:py-1 2xl:py-1 bg-gray-400 text-black rounded-lg shadow-md hover:bg-purple-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transform duration-500">
                        Github code &nbsp;
                        <FontAwesomeIcon icon={faGithub} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </AccordionItems>
            <AccordionItems value="4" triger="Online Exam Portal">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="flex justify-center items-center">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a914.appspot.com/o/3-devices-white%20(3).png?alt=media&token=fb7847cd-ec6a-4f6e-8479-a0f02cedaef2"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify">
                  <small className="text-red-500 josefin-sans">
                    Note: doing some changes so thats why link unavailable
                  </small>
                  <header className="text-lg font-bold pb-3 montserrat">
                    Online Exam Portal{" "}
                    <small className="font-normal text-gray-400 josefin-sans tracking-tighter lg:tracking-normal">
                      this is the online exam portal
                    </small>
                  </header>
                  <div className="pb-3">
                    <p className="font-bold montserrat">
                      Tech Stack Used &mdash;
                    </p>
                    <p className="text-gray-400 josefin-sans tracking-tight lg:tracking-normal">
                      HTML, CSS, JavaScript, Php, MySQL, Bootstrap, Vercel
                    </p>
                  </div>
                  <div className="pb-3">
                    <p className="font-bold montserrat">About &mdash;</p>
                    <p className="text-gray-400 josefin-sans tracking-tighter lg:tracking-normal">
                      The "Online Examination" project, developed at Government
                      Polytechnic, Adampur, Tarabganj, Gonda, is a web-based
                      system designed to streamline the examination process. It
                      aims to reduce the time and effort involved in conducting
                      manual exams. This project leverages technologies like
                      PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap to
                      provide an efficient and user-friendly platform for online
                      examinations.
                    </p>
                  </div>
                  <div className="flex space-x-1 gap-1 justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                    <a href="" target="blank">
                      <button
                        disabled
                        className="px-8 lg:px-10 2xl:px-10 py-1 lg:py-1 2xl:py-1 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transform duration-300"
                      >
                        Hosted link &nbsp;
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </button>
                    </a>
                    <a href="" target="blank">
                      <button
                        disabled
                        className="px-8 lg:px-10 2xl:px-10 py-1 lg:py-1 2xl:py-1 bg-gray-400 text-black rounded-lg shadow-md hover:bg-purple-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transform duration-500"
                      >
                        Github code &nbsp;
                        <FontAwesomeIcon icon={faGithub} />
                      </button>
                    </a>
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
