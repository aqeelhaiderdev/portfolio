import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProBox({
  title,
  img,
  description,
  techno1,
  techno2,
  code,
  demo,
  cName = "normal",
}) {
  const [scroll, setScroll] = useState(false);
  console.log(cName);
  return (
    <div className="h-auto rounded-2xl bg-backgroundColor">
      <div
        className={`flex h-[46rem] flex-col items-center gap-8 rounded-2xl bg-backgroundColor p-5 shadow-md md:h-96 md:flex-row md:items-stretch md:gap-14 
          ${cName === "reverse" ? "md:flex-row-reverse" : ""}`}
      >
        <div className="h-auto max-w-lg overflow-hidden rounded-2xl shadow-md">
          <a href="#" target="_blank">
            <img
              src={img}
              alt="project-image"
              className="h-auto w-full"
              style={{
                transform: scroll ? `translateY(-87%)` : "translateY(0%)",
                transition: "transform 10s ease-in-out",
              }}
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)}
            />
          </a>
        </div>

        <div className="flex h-auto flex-col items-center justify-center px-2.5 pb-4 pt-8 text-center">
          <h3 className="mb-2.5 text-lg font-bold uppercase text-blackShade">
            {title}
          </h3>
          <p className="text-lg font-medium text-textColor">{description}</p>

          <div className="mt-2.5 flex justify-center gap-2.5">
            <p className="bg-backgroundColor px-3 py-2.5 font-titleFont text-base font-semibold uppercase text-titleColor shadow-md">
              {techno1}
            </p>
            <p className="bg-backgroundColor px-3 py-2.5 font-titleFont text-base font-semibold uppercase text-titleColor shadow-md">
              {techno2}
            </p>
          </div>

          <div className="mb-2.5 mt-7 flex items-center justify-between gap-6 text-lg font-medium">
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 transition-all duration-200 hover:text-mainColor"
            >
              Code <FiGithub />
            </a>

            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 transition-all duration-200 hover:text-mainColor"
            >
              Live Demo <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProBox;
