import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer className="w-full bg-blackShade py-12">
      <div className="container mx-auto px-8 md:px-0">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:gap-0 sm:text-left">
          <h3 className="text-lg font-bold text-white">
            Copyright © {new Date().getFullYear()}. All rights are reserved
          </h3>

          <div className="flex items-center justify-center gap-5 text-3xl font-bold text-white">
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/aqeelhaiderdev/"
              className="transition-all duration-200 ease-in-out hover:scale-125"
            >
              <CiLinkedin />
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aqeelhaiderdev"
              className="transition-all duration-200 ease-in-out hover:scale-125"
            >
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
