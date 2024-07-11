import React from "react";
import "./home.Component.css";
import Svg from "./svg.Component/svg.Home.Component";
import Social from "./social.Home.Components/social.Home.Components";
import HeadText from "./headText.Home.Component/headText.Home.Component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEnvelope } from "@fortawesome/free-regular-svg-icons";
export default function Home() {
  return (
    <>
      <div className="home">
        <div className="container mx-auto p-4">
          <HeadText />
          <Social />
          <div className="grid grid-cols-5 grid-rows-1 gap-2 pt-10">
            <div className="col-span-2 ">
              <Svg />
            </div>
            <div className=" p-4 flex items-center col-span-3">
              <div className="profile-text">
                <h1 className="text-5xl">Rahul Yadav</h1>
                <blockquote>
                  <i className="text-xl">&ndash;&ndash; Software Engineer</i>
                </blockquote>
                <hr class="border-t border-gray-300" />

                <p className="text-justify pb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {/* buttons */}
                <div className="flex space-x-4">
                  <button className="px-10 py-1 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transform duration-300">
                    Contact me <FontAwesomeIcon icon={faEnvelope} />
                  </button>
                  <button className="px-10 py-1 bg-gray-400 text-black rounded-lg shadow-md hover:bg-purple-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transform duration-500">
                    Copy email <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
