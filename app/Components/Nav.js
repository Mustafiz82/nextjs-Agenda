"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="bg-primary-200">
      <ul className="flex text-lg md:text-xl 2xl:text-2xl  justify-center items-center gap-5 p-5">
        <li>
          <Link
            href="/"
            className={` ${pathname == "/" ? "text-primary" : ""} `}
          >
            {" "}
            Agenda
          </Link>
        </li>
        <li>
          <Link
            href="/Agenda1"
            className={` ${pathname == "/Agenda1" ? "text-primary" : ""} `}
          >
            {" "}
            Agenda1
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
