import { useState } from "react";
import NavLinks from "./NavLinks";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";

function Header() {
  const [hamburger, setHamburger] = useState(false);
  const navList = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <header className="text-blackShade shadow-defaultShadow fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-10 py-6 text-lg">
      <h3 className=" cursor-pointer text-xl font-bold">AqeelHaider.dev</h3>
      <ul className="hidden items-center gap-8 font-semibold md:flex">
        {navList.map((item) => (
          <NavLinks key={item.link} item={item} />
        ))}
      </ul>

      <div className="flex text-3xl font-bold md:hidden">
        <HiBars3
          className="hover:text-mainColor transition-all duration-200"
          onClick={() => setHamburger(!hamburger)}
        />
      </div>

      {hamburger && (
        <div className="bg-backgroundColor absolute left-0 top-0 z-30 flex h-screen w-full flex-col items-center justify-center">
          <span className="absolute right-10 top-5 text-4xl">
            <HiMiniXMark
              className="hover:text-mainColor transition-all duration-200"
              onClick={() => setHamburger(!hamburger)}
            />
          </span>

          <ul className="flex flex-col gap-8 text-2xl font-semibold">
            {navList.map((item) => (
              <NavLinks key={item.link} item={item} />
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
