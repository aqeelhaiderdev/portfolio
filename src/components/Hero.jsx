import waving from "../../public/waving.png";
import heroImg from "../../public/hero-img.png";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

import Html from "../../public/html.svg";
import Css from "../../public/css.svg";
import Js from "../../public/javaScript.svg";
import React from "../../public/react.svg";
import Tailwind from "../../public/tailwind.svg";

function Hero() {
  const skillsIcons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: React,
      title: "React",
    },
    {
      img: Tailwind,
      title: "Tailwind CSS",
    },
  ];
  return (
    <section
      className="h-auto w-full bg-grayBackground pb-10 md:pb-0"
      id="home"
    >
      <div className="container mx-auto px-10">
        <div className="flex h-auto flex-col items-center justify-center gap-16 pt-28 md:h-[40rem] md:pt-24 lg:gap-24">
          <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:gap-24">
            <div className="relative flex max-w-lg flex-col">
              <h1 className="my-5  text-6xl font-bold text-blackShade">
                Front-End React Developer
              </h1>
              <img
                src={waving}
                alt="waving_hand"
                className="absolute right-16 top-20 h-16 w-16 lg:right-32"
              />
              <p className="font-titleFont text-lg font-medium text-textColor">
                Hi, I'm Aqeel Haider. A passionate Front-end React Developer
                based in Faisalabad, Pakistan. 📍
              </p>

              <span className="my-6 flex justify-center gap-3 text-4xl md:justify-normal">
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/aqeelhaiderdev/"
                  className="transition-all duration-200 hover:text-mainColor"
                >
                  <CiLinkedin />
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/aqeelhaiderdev"
                  className="transition-all duration-200 hover:text-mainColor"
                >
                  <FiGithub />
                </a>
              </span>
            </div>
            <div className="shrink-0">
              <img
                src={heroImg}
                alt="waving_hand"
                className="bottom-4 h-72 w-72 rounded-full border-4 border-[#2d2e32] bg-[#B7B2AF] lg:h-80 lg:w-80"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <p className="mb-5 mr-0 border-b-2 border-gray-700 pr-0 font-titleFont text-lg font-semibold text-blackShade md:mb-0 md:mr-16 md:border-b-0 md:border-r-2 md:pr-5">
              Tech Stack
            </p>
            <div>
              <ul className="flex gap-4 md:gap-8">
                {skillsIcons.map((icon) => (
                  <li key={icon.title}>
                    <img
                      className="h-12 w-12"
                      src={icon.img}
                      title={icon.title}
                      alt="skill-icon"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
