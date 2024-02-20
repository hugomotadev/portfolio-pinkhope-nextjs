"use client";

import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Página Inicial" },
  { href: "#about", label: "Sobre Mim" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#ebook", label: "eBook" },
  { href: "#contact", label: "Contate-me" },
];

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleToggleMenu = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <header className="shadow-md w-full fixed top-0 left-0 bg-white">
      <nav className="md:flex items-center justify-between px-7 py-4 md:px-10 lg:container lg:mx-auto p-4">
        {/* ToogleMenu */}
        <div onClick={handleToggleMenu} className="md:hidden ">
          {menuIcon ? (
            <AiOutlineClose size={35} />
          ) : (
            <AiOutlineMenu size={35} />
          )}
        </div>

        <Link href="/" passHref>
          <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl uppercase">
            Logo.
          </span>
        </Link>

        <ul
          className={`md:flex md-items-center md:pb-0 pb-12 ${
            menuIcon ? "hidden md:flex" : ""
          }`}
        >
          {NAV_LINKS.map((link, index) => (
            <li key={index} className="md:ml-8 text-xl uppercase md:my-0 my-7">
              <Link
                className="hover:text-pink-400 duration-300"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
