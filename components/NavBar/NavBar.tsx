import React, { useState } from "react";
import { FaBars } from "react-icons/fa"
import Button from "../Button/Button";
import Link from "next/link";

type ChildrenProps = {
    children: React.ReactNode;
}

type NavLinkProps = {
  text: string;
  link: string;
  type: string;
}



const navLinks = [
    {text: 'About Us', link: '#', type: 'link'},
    {text: 'Get in Touch', link: '#', type: 'link'},
    {text: 'Blog', link: '#', type: 'link'},
    {text: 'Donate', link: '#', type: 'Button'},
]

export default function Navbar(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  

  return (
    <div className=' w-full'>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 z-20 md:h-[15vh]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
              href="#pablo"
            >
            </a>
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
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {
                    navLinks.map(({ text, link, type} : NavLinkProps) => type == 'link' ? 
                        <li key={text} className="nav-item my-auto">
                          <Link href={link}>
                            <a
                              className="px-12 py-2 flex items-center justify-center text-xs font-bold leading-snug text-black hover:opacity-75" 
                            >
                            <span className="ml-2 text-lg font-normal">{text}</span>
                            </a>
                          </Link>
                        </li>
                       :  <Button text={text} /> 
                    )
                }
            </ul>
          </div>
        </div>
      </nav>
     </div>
  );
}