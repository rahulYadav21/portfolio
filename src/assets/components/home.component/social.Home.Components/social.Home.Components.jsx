import { cibLeetcode } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
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
          <div className="grid grid-rows-1 grid-cols-6 gap-10 text-3xl md:gap-24 lg:gap-28 2xl:gap-32 lg:pt-10 2xl:pt-0">
            <a href="https://facebook.com" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-gray-300 hover:text-blue-700 duration-300 transform hover:scale-125"
              />
            </a>
            <a href="https://leetcode.com/u/iHAWK/" aria-label="leetcode">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                className="text-gray-300 hover:text-gray-700 duration-300 transform hover:scale-125"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
                ></path>
              </svg>
              {/* <CIcon
                icon={cibLeetcode}
                className="text-gray-300 hover:text-black duration-300 transform hover:scale-125"
              /> */}
            </a>
            <a
              href="https://www.instagram.com/rahul_ihawk/?hl=en"
              aria-label="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-300 hover:text-pink-700 duration-300 transform hover:scale-125"
              />
            </a>
            <a href="https://github.com/rahulYadav21" aria-label="Github">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-300 hover:text-black duration-300 transform hover:scale-125"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul0597/"
              aria-label="Linkedin"
            >
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
