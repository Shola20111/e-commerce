// "use client"
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { BsCart3 } from 'react-icons/bs'
// import { CiHeart } from 'react-icons/ci'
// import SearchBar from './SearchBar'
// import { usePathname } from 'next/navigation'
// import Navbutton from './Navbutton'



// const Header = () => {

//   const pathname = usePathname();

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/contact", label: "Contact" },
//     { href: "/about", label: "About" },
//     { href: "/signUp", label: "Sign Up" },
//   ]
//   return (
//     <div className='px-[135px] w-full h-[50px] mt-[40px] pb-[15px] border border-[#e4e0e0] mx-auto flex justify-between items-center'>
//       <div className='border w-[700px] h-[100%] flex items-center justify-between'>
//         <div className='flex items-center w-[220px] h-full '>
//           <Image src='/logo.png' width={200} height={20} alt='Logo'/>
//         </div>
//         <div className="w-[370px] h-full flex justify-center items-center gap-[40px] text-[18px] md:text-lg">
//       {links.map((link) => (
//         <Link
//           key={link.href}
//           href={link.href}
//           className={pathname === link.href ? "underline" : ""}
//         >
//           <Navbutton text={link.label} />
//         </Link>
//       ))}
//     </div>
//       </div>
     
//       <div className='w-[347px] h-full flex items-center justify-between'>
//         <SearchBar/>
//         <div className='w-[80px] h-full flex gap-[16px] '>
//           <CiHeart className='w-[25px] h-[25px]'/>
//           <BsCart3 className='w-[25px] h-[20px]'/>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default Header

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Navbutton from "./Navbutton";
import SearchBar from "./SearchBar";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signUp", label: "Sign Up" },
  ];

  return (
    <div className="px-4 md:px-[135px] w-full h-[60px] mt-[20px] md:mt-[40px] pb-[10px] md:pb-[15px] border border-[#e4e0e0] mx-auto flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center justify-between w-full md:w-[700px] h-full">
        {/* Logo */}
        <div className="flex items-center w-[150px] md:w-[220px] h-full">
          <Image src="/logo.png" width={200} height={20} alt="Logo" />
        </div>

        {/* Links (desktop only) */}
        <div className="hidden md:flex  w-full h-full justify-center items-center gap-[40px] text-[18px] md:text-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "underline" : ""}
            >
              <Navbutton text={link.label} />
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* SearchBar hidden on mobile */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Icons */}
        <div className="flex gap-[16px]">
          <CiHeart className="w-[25px] h-[25px]" />
          <BsCart3 className="w-[25px] h-[20px]" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white z-50 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          
            {/* Close Button */}
            <div className="w-full h- flex justify-end p-5">
              <button className="text-[30px]" onClick={() => setMenuOpen(false)}>
              X
            </button>
            </div>
            

          

            {/* Links */}
            <nav className="flex flex-col justify-center items-center gap-4 text-lg">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname === link.href ? "underline" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  <Navbutton text={link.label} />
                </Link>
              ))}
            </nav>
          
        </div>
      )}
    </div>
  );
};

export default Header;
