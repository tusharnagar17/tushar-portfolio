"use client";

import React from "react";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Siemreap } from "next/font/google";
import { useTheme } from "next-themes";
// @ts-nocheck
// @use-client

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Link href="/">Home</Link>
      <div>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/writeups">Writeups</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <h1>Theme is equal to : {theme}</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme && <SunIcon />}
          {!theme && <MoonIcon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
