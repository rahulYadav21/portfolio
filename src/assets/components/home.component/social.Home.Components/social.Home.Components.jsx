import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LeetcodeIcon } from "../../icons.Comopnent/icons.Comopnent";

export default function Social() {
  return (
    <>
      <div className="home-social-handles">
        <div className="flex justify-center">
          <div className="grid grid-rows-1 grid-cols-6 gap-10 text-3xl md:gap-24 lg:gap-28 2xl:gap-32 lg:pt-10 2xl:pt-0">
            <a href="https://facebook.com" target="blank" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-gray-300 hover:text-blue-700 duration-300 transform hover:scale-125"
              />
            </a>
            <a
              href="https://leetcode.com/u/iHAWK/"
              target="blank"
              aria-label="leetcode"
            >
              <LeetcodeIcon />
            </a>
            <a
              href="https://www.instagram.com/rahul_ihawk/?hl=en"
              target="blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-300 hover:text-pink-700 duration-300 transform hover:scale-125"
              />
            </a>
            <a
              href="https://github.com/rahulYadav21"
              target="blank"
              aria-label="Github"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-300 hover:text-black duration-300 transform hover:scale-125"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul0597/"
              target="blank"
              aria-label="Linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-gray-300 hover:text-blue-900 duration-300 transform hover:scale-125"
              />
            </a>
            <a href="https://youtube.com" target="blank" aria-label="YouTube">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-gray-300 hover:text-red-700 duration-300 transform hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
