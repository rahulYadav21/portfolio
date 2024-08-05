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
      <div className="container mx-auto p-5 pt-10 pb-10 lg:w-2/3 2xl:w-1/2">
        <div className="pb-5 lg:pb-5 2xl:pb-5">
          <p className="playfair-display text-4xl">Contact</p>
          <p className="josefin-sans text-xl text-gray-400 pt-2 tracking-tight lg:tracking-normal 2xl:tracking-normal">
            Let's Connect & Collaborate
          </p>
        </div>
        <div className="contactForm w-4/5">
          <div>
            <span className="italic">Download Resume</span>
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
              <FontAwesomeIcon icon={faFacebookF} />
              &nbsp;
              <FontAwesomeIcon icon={faYoutube} />
              &nbsp;
              <FontAwesomeIcon icon={faInstagram} />
              &nbsp;
              <FontAwesomeIcon icon={faGithub} />
              &nbsp;
              <FontAwesomeIcon icon={faLinkedinIn} />
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}
