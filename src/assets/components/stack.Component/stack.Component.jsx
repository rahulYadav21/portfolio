import React from "react";
import {
  BootstrapIcon,
  CssIcon,
  DataStructureIcon,
  ExpressIcon,
  GitIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  JqueryIcon,
  MDBIcon,
  MongoDBIcon,
  MUIIcon,
  MysqlIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  SpringIcon,
  TailwindIcon,
} from "../icons.Comopnent/icons.Comopnent";
import Work from "../work.Component/work.Component";

export default function Stack() {
  return (
    <>
      <div
        id="stack"
        className="container mx-auto p-5 pt-10 pb-10 lg:w-2/3 2xl:w-1/2"
      >
        <div className="pb-5 lg:pb-5 2xl:pb-5">
          <p className="playfair-display text-4xl">Stack</p>
          <p className="josefin-sans text-xl text-gray-400 pt-2 tracking-tight lg:tracking-normal 2xl:tracking-normal">
            My technical skills & expertise at a glance.
          </p>
        </div>
        <div className="skills_List">
          <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-5 p-0 lg:p-5 2xl:p-5 overflow-hidden">
              {/* list of skills icon */}
              <div className="icons">
                <div className="grid grid-cols-3 text-6xl mx-auto gap-4 text-gray-400">
                  <div className="rounded-lg hover:shadow-xl hover:text-green-500 hover:border transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <MongoDBIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-black hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <ExpressIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-cyan-500 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <ReactIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-green-500 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <NodeIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-purple-700 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <ReduxIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-orange-400 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <HtmlIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-blue-500 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <CssIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-yellow-400 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <JavaScriptIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-blue-700 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <JqueryIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-cyan-500 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <TailwindIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-cyan-400 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <MUIIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-blue-700 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4 ">
                    <MDBIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-purple-700 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <BootstrapIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-black hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <GitIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-blue-800 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <JavaIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-green-500 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <SpringIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-red-600 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <MysqlIcon />
                  </div>
                  <div className="rounded-lg  hover:shadow-xl hover:text-blue-400 hover:border   transform duration-500 flex items-center justify-center  p-4 lg:p-4 2xl:p-4">
                    <DataStructureIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-7 text-justify lg:p-5">
              {/* list of skills */}
              <ul className="list-disc ms-5 pt-5 lg:pt-0">
                <li>
                  <p className="font-semibold montserrat">UI/UX Design</p>
                  <p className="josefin-sans text-gray-400">
                    Skilled in creating visually appealing and intuitive user
                    interfaces with seamless, engaging experiences.
                  </p>
                </li>
                <li className="pt-3">
                  <p className="font-semibold montserrat">MERN Stack</p>
                  <p className="josefin-sans text-gray-400">
                    Proficient in developing scalable and maintainable
                    full-stack applications with MongoDB, Express, React,
                    Node.js, and Redux.
                  </p>
                </li>
                <li className="pt-3">
                  <p className="font-semibold montserrat">Responsive Design</p>
                  <p className="josefin-sans text-gray-400">
                    Proficient in creating web applications that work seamlessly
                    across all devices and screen sizes.
                  </p>
                </li>
                <li className="pt-3">
                  <p className="font-semibold montserrat">Java & J2EE</p>
                  <p className="josefin-sans text-gray-400">
                    Strong background in Java development, including J2SE, J2EE,
                    JDBC, Servlet, JSP, and Spring Boot.
                  </p>
                </li>
                <li className="pt-3">
                  <p className="font-semibold montserrat">Version Control</p>
                  <p className="josefin-sans text-gray-400">
                    Adept at using Git for version control and collaborative
                    development.
                  </p>
                </li>
                <li className="pt-3">
                  <p className="font-semibold montserrat">RESTful APIs</p>
                  <p className="josefin-sans text-gray-400">
                    Competent in designing and consuming RESTful APIs for web
                    applications.
                  </p>
                </li>
                <li className="pt-3">
                  <p className="font-semibold montserrat">
                    Data Structures & Algorithms
                  </p>
                  <p className="josefin-sans text-gray-400">
                    Strong grasp of data structures and algorithms, enabling the
                    creation of efficient and optimized code.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
