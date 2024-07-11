import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Social() {
  return (
    <>
      <div className="home-social-handles">
        <div className="flex justify-center">
          <div className="grid grid-rows-1 grid-cols-6 gap-24 text-3xl">
            <a href="https://facebook.com" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-gray-300 hover:text-blue-700 duration-300 transform hover:scale-125"
              />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-gray-300 hover:text-black duration-300 transform hover:scale-125"
              />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-300 hover:text-pink-700 duration-300 transform hover:scale-125"
              />
            </a>
            <a href="https://github.com" aria-label="Github">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-300 hover:text-black duration-300 transform hover:scale-125"
              />
            </a>
            <a href="https://linkedin.com" aria-label="Linkedin">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-gray-300 hover:text-blue-900 duration-300 transform hover:scale-125"
              />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
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
