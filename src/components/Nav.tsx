"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from 'react-icons/fi';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container pt-1 bg-black max-w-screen-2xl text-white">
      <div className="flex justify-between items-center space-x-10">
        <Link href="/">
          <Image src="/images/logo.png" width={60} height={60} alt="logo" />
        </Link>
        <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />
      </div>

      <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:justify-end w-full`}>
        <ul className="lg:flex lg:space-x-10 font-bold text-xl mt-2 lg:mt-0 w-full justify-end" data-aos="flip-up" >
          <li className="hover:text-stone-400 p-1 menuLink"><Link href="/">Home</Link></li>
          <li className="hover:text-stone-400 p-1 menuLink"><Link href="#about">About</Link></li>
          <li className="hover:text-stone-400 p-1 menuLink"><Link href="#projects">Projects</Link></li>
          <li className="hover:text-stone-400 p-1 menuLink"><Link href="#skills">Skills</Link></li>
          <li className="hover:text-stone-400 p-1 menuLink"><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
