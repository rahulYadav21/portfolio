import React from "react";
import "./work.Component.css";
import Accordion, { AccordionItems } from "./accordion.work.Component";
import Contact from "../contact.Component/contact.Component";

export default function Work() {
  return (
    <>
      <div className="container mx-auto p-5 pt-10 pb-10 lg:w-2/3 2xl:w-1/2">
        <div className="pb-5 lg:pb-5 2xl:pb-5">
          <p className="playfair-display text-4xl">Work</p>
          <p className="josefin-sans text-xl text-gray-400 pt-2 tracking-tight lg:tracking-normal 2xl:tracking-normal">
            Coding stories through projects.
          </p>
        </div>
        {/* accordion component */}
        <div>
          <Accordion className="max-w-lg">
            <AccordionItems value="1" triger="Accordion item 1">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="border">
                  <img
                    src="public/profile-pic/photo_3_2024-07-12_00-28-55.jpg"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify border">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus consectetur officiis vero sapiente voluptate
                  voluptatem voluptates incidunt cum. Quo dolorum aut veritatis,
                  omnis dolores quae tenetur? Odio molestiae quos modi!
                </div>
              </div>
            </AccordionItems>
            <AccordionItems value="2" triger="Accordion item 2">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="border">
                  <img
                    src="public/profile-pic/photo_3_2024-07-12_00-28-55.jpg"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify border">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus consectetur officiis vero sapiente voluptate
                  voluptatem voluptates incidunt cum. Quo dolorum aut veritatis,
                  omnis dolores quae tenetur? Odio molestiae quos modi!
                </div>
              </div>
            </AccordionItems>
            <AccordionItems value="3" triger="Accordion item 3">
              <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="border">
                  <img
                    src="public/profile-pic/photo_3_2024-07-12_00-28-55.jpg"
                    alt="not here any photo"
                  />
                </div>
                <div className="text-justify border">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus consectetur officiis vero sapiente voluptate
                  voluptatem voluptates incidunt cum. Quo dolorum aut veritatis,
                  omnis dolores quae tenetur? Odio molestiae quos modi!
                </div>
              </div>
            </AccordionItems>
          </Accordion>
        </div>
      </div>
      <Contact />
    </>
  );
}
