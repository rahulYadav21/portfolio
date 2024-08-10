import React from "react";
import "./about.component.css";
import Stack from "../stack.Component/stack.Component";
export default function About() {
  return (
    <>
      <div
        id="about"
        smooth={true}
        duration={500}
        className="about container mx-auto p-5 pt-10 pb-10 lg:w-2/3 2xl:w-1/2"
      >
        <div className="container pb-3 mx-auto">
          <p className="playfair-display text-4xl">About me.</p>

          <p className="josefin-sans text-xl text-gray-400 pt-2">
            A few things you should know.
          </p>
        </div>

        <div className="grid grid-rows-1 lg:grid-rows-1 lg:grid-cols-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="p-0 lg:pt-5 lg:pe-5 lg:pb-5 lg:ps-0 justify-center flex">
              <div className="flex">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a914.appspot.com/o/photo_5_2024-07-12_00-28-55.jpg?alt=media&token=2326e748-d386-4bc6-b9ff-91e6850bb13d"
                  className="w-full lg:w-full size-fit lg:size-fit"
                  alt="Maybe Rahul go somewhere !!"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="container mx-auto text-justify pt-5 lg:p-5">
              <p className="font-bold montserrat">Who Rahul Yadav Is &mdash;</p>
              <p className="ms-3 lg:ms-5 2xl:ms-5 lg:mb-2 2xl:mb-2 josefin-sans text-gray-400">
                Rahul Yadav is a passionate and dedicated software engineer
                based in Bengaluru, India. He holds a B.Tech in Computer Science
                from the College of Engineering Science & Technology, Lucknow,
                and a Diploma in Computer Science from Govt. Polytechnic
                Aadampur, Tarabganj, Gonda. Specializing in creating scalable
                and innovative web applications, Rahul's technical expertise
                encompasses HTML, CSS, JavaScript, and the MERN stack, along
                with proficiency in Java, J2EE, and various data structures.
              </p>
              <p className="font-bold montserrat">
                Rahul Yadav's Journey &mdash;
              </p>
              <p className="ms-3 lg:ms-5 2xl:ms-5 lg:mb-2 2xl:mb-2 josefin-sans text-gray-400">
                With hands-on experience in responsive design and a strong
                foundation in RESTful APIs and version control systems, Rahul
                has made significant contributions to dynamic teams developing
                sophisticated web solutions. His professional journey includes:
              </p>
              <ul className="list-disc ms-3 lg:ms-5 2xl:ms-5 lg:mb-5 2xl:mb-5 ">
                <li className="mt-2">
                  <span className="font-semibold italic tracking-tighter lg:tracking-normal montserrat">
                    Software Developer at GeekMantra Solutions Pvt. Ltd.:
                  </span>{" "}
                  <p className="ms-3 lg:ms-0 2xl:ms-0 lg:mb-2 2xl:mb-2 josefin-sans text-gray-400">
                    Developed and maintained client websites using HTML, CSS,
                    JavaScript, and jQuery. Engineered key features and created
                    responsive designs, ensuring cross-browser compatibility.
                    Collaborated with teams to deliver consistent user
                    experiences and performed quality assurance for optimal
                    performance.
                  </p>
                </li>
                <li className="mt-2">
                  <span className="font-semibold montserrat  italic tracking-tighter lg:tracking-normal">
                    Internship at Newton School:
                  </span>{" "}
                  <p className="ms-3 lg:ms-0 2xl:ms-0 lg:mb-2 2xl:mb-2 josefin-sans text-gray-400">
                    Enhanced skills in the MERN stack, responsive web design,
                    Redux, Tailwind, MDB, and Next, further solidifying
                    expertise in front-end development.
                  </p>
                </li>
                <li className="mt-2">
                  <span className="font-semibold montserrat  italic tracking-tighter lg:tracking-normal">
                    Internship at Sathya Technologies Pvt. Ltd.:
                  </span>{" "}
                  <p className="ms-3 lg:ms-0 2xl:ms-0 lg:mb-2 2xl:mb-2 josefin-sans text-gray-400">
                    Focused on Java development, gaining proficiency in J2SE,
                    J2EE, JDBC, Servlet, JSP, MySQL, Spring, SpringBoot,
                    Hibernate, REST APIs, and Collections.
                  </p>
                </li>
                <li className="mt-2">
                  <span className="font-semibold montserrat  italic tracking-tighter lg:tracking-normal">
                    Internship at Taxtron Technologies Pvt. Ltd.:
                  </span>{" "}
                  <p className="ms-3 lg:ms-0 2xl:ms-0 lg:mb-2 2xl:mb-2 josefin-sans text-gray-400">
                    Specialized in front-end development using HTML, CSS,
                    JavaScript, and Bootstrap, and contributed to effective
                    design.
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
