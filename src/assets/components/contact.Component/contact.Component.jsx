import React from "react";
import Social from "../home.component/social.Home.Components/social.Home.Components";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="container mx-auto p-5 pt-10 pb-10 lg:w-2/3 2xl:w-1/2"
      >
        <div className="pb-5 lg:pb-5 2xl:pb-5">
          <p className="playfair-display text-4xl">Contact</p>
          <p className="josefin-sans text-xl text-gray-400 pt-2 tracking-tight lg:tracking-normal 2xl:tracking-normal">
            Let's Connect & Collaborate
          </p>
        </div>
        <div className="contactForm w-4/5">
          <div>
            <a
              className="italic underline text-purple-400 hover:text-lg font-bold"
              download="resume_RahulYadav.pdf"
              target="blank"
              href="https://firebasestorage.googleapis.com/v0/b/portfolio-8a914.appspot.com/o/Resume_jul24.pdf?alt=media&token=bcb563cb-842d-4025-89eb-93b43209e6c0"
            >
              Download Resume
            </a>
          </div>
          <br />
          <dl>
            <dt>Email : </dt>
            <dd>&mdash; yadavrahul.cs@gmail.com</dd>
            <dd>&mdash; rahulcs989@gmail.com</dd>
            <dt>Phone : </dt>
            <dd>&mdash; (+91) 9140621966</dd>
            <dt>Social : </dt>
            <dd className="">
              &mdash; &nbsp;
              <a
                href="https://facebook.com"
                target="blank"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              &nbsp;
              <a href="https://youtube.com" target="blank" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com/rahul_ihawk/?hl=en"
                target="blank"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              &nbsp;
              <a
                href="https://github.com/rahulYadav21"
                target="blank"
                aria-label="Github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/rahul0597/"
                target="blank"
                aria-label="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}
