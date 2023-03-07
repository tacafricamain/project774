/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Button from "../Button/Button";
import Link from "next/link";

type ChildrenProps = {
  children: React.ReactNode;
};

type NavLinkProps = {
  text: string;
  link: string;
  type: string;
};

const navLinks = [
  { text: "The Issue", link: "/the_issue", type: "link" },
  { text: "Mission & Vision", link: "/contact", type: "link" },
  { text: "Our Team", link: "/contact", type: "link" },
  { text: "Get Involved", link: "/contact", type: "link" },
  { text: "About Us", link: "/about", type: "link" },
  { text: "Get in Touch", link: "/contact", type: "link" },
  // {text: 'Blog', link: '#', type: 'link'},
  { text: "Donate", link: "#", type: "Button" },
];

export default function Navbar(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <div className=" w-full">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 z-20 md:h-[15vh]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black">
                <img
                  className="w-24 hover:scale-[6] hover:ml-60 hover:absolute hover:mt-40"
                  src="/mainlogo.jpeg"
                  alt=""
                />
              </a>
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center mb-10" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul  className="flex flex-col lg:flex-row list-none lg:ml-auto w-full p-2 max-md:p-12 bg-white">
                {
                    navLinks.map(({ text, link, type} : NavLinkProps) => type == 'link' ? 
                        (<li key={text} className="nav-item my-auto">
                          <Link href={link}>
                            <a
                              className="px-8 py-2 flex items-center justify-center text-xs font-bold leading-snug text-black text-center hover:opacity-75" onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                            <span className="ml- text-lg font-normal">{text}</span>
                            </a>
                          </Link>
                        </li>)
                       :  (<Button key={text} text={text} />) 
                    )
                }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
