"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Siemreap } from "next/font/google";
import { useTheme } from "next-themes";
// @ts-nocheck
// @use-client

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const showToggle = () => {
    console.log("show toggle clicked!");
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const toggleDarkMode = () => {
    console.log("toggleDarkMode", theme);
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="flex mx-auto max-w-3xl  font-semibold justify-between bg-white dark:bg-gray-800 rounded-full p-2 mt-10">
        {/* Company Logo or Brand Name */}
        <div className="mr-10 pl-2 whitespace-nowrap">
          <Link href="/">Tushar Nagar</Link>
        </div>

        {/* Nav bar options for medium screen*/}
        <div className="hidden md:flex space-x-20 ml-10">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/writeups">Writeups</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="ml-30">
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center bg-gray-800 text-white p-2 ml-10 rounded-full"
          >
            {theme === "light" ? (
              <SunIcon className="text-yellow-500" />
            ) : (
              <MoonIcon className="text-gray-500" />
            )}
          </button>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={showToggle}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive navigation menu for smaller screens  */}
      <div
        className={`md:hidden  mt-2 ${
          showMenu
            ? "flex flex-col justify-center items-center rounded-full border-2"
            : "hidden"
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/writeups">Writeups</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
