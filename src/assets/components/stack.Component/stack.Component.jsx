import React from "react";

export default function Stack() {
  return (
    <>
      <div className="container mx-auto p-5 pt-10 pb-10 lg:w-2/3 2xl:w-1/2">
        <div className="pb-5 lg:pb-5 2xl:pb-5">
          <p className="playfair-display text-4xl">Stack</p>
          <p className="josefin-sans text-xl text-gray-400 pt-2">
            My technical skills & expertise at a glance.
          </p>
        </div>
        <div className="skills_List">
          <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-12">
            <div className="border border-red-600 col-span-5 p-5">
              {/* list of skills icon */}
              <p className="font-semibold montserrat"></p>
            </div>
            <div className="col-span-7 text-justify lg:p-5">
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
