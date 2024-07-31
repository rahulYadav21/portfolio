import React from "react";
import "./home.Component.css";
import Svg from "./svg.Component/svg.Home.Component";
import Social from "./social.Home.Components/social.Home.Components";
import HeadText from "./headText.Home.Component/headText.Home.Component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { cilArrowCircleBottom } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import About from "../about.Component/about.component";
export default function Home() {
  const email = "yadavrahul.cs@gmail.com";
  const copiedEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email(yadavrahul.cs@gmail.com) copied on clipboard");
      })
      .catch((err) => {
        console.error("failed to copy", err);
      });
  };

  return (
    <>
      <div className="home">
        <div className="container mx-auto p-4 pb-10 lg:pb-16 2xl:pb-32">
          <HeadText />
          <Social />
          <div className="grid grid-cols-1 grid-rows-2 gap-2 pt-4 lg:pt-10 xl:pt-10 2xl:pt-20 lg:grid-cols-2 lg:grid-rows-1 2xl:grid-cols-2 2xl:grid-rows-1">
            <div
              className="col-span-1 mx-10 lg:col-span-1 lg:w-3/4 xl:w-1/2 xl:mx-52 lg:mx-52 md:col-span-1 md:w-2/4 md:mx-44 
"
            >
              <Svg />
            </div>
            <div className="flex items-center lg:col-span-1 lg:w-4/5 xl:w-4/5 2xl:w-4/5 2xl:-mx-44 lg:-mx-28 ">
              <div className="profile-text">
                <h1 className="playfair-display text-5xl">Rahul Yadav</h1>
                <blockquote>
                  <i className="Montserrat text-xl">
                    &mdash; Software Engineer
                  </i>
                </blockquote>
                <hr class="border-t border-gray-300" />

                <p className="text-justify pb-4 josefin-sans text-gray-400 tracking-tighter lg:tracking-normal">
                  I am Rahul Yadav, a passionate and dedicated software engineer
                  based in Bengaluru, India. Holding a B.Tech in Computer
                  Science & Engineering, I specialize in crafting scalable and
                  innovative web applications. My expertise lies in developing
                  robust front-end interfaces and comprehensive full-stack
                  solutions.
                </p>
                {/* buttons */}
                <div className="flex space-x-1 gap-1 justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                  <button className="px-10 py-1 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transform duration-300">
                    Contact me <FontAwesomeIcon icon={faEnvelope} />
                  </button>
                  <button
                    onClick={copiedEmail}
                    className="px-10 py-1 bg-gray-400 text-black rounded-lg shadow-md hover:bg-purple-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transform duration-500"
                  >
                    Copy email <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-button flex justify-center">
          <div className="icon">
            <CIcon
              icon={cilArrowCircleBottom}
              className="w-10 hover:text-purple-600"
            />
          </div>
        </div>
      </div>
      <About />
    </>
  );
}
