import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="">
      <div className=" flex items-center justify-between px-5 p-2 shadow-sm border-b-[1px]">
        <div className="transform scale-x-[-1]">
          <Image src="/logo3.png" alt="logo" width={120} height={100} />
        </div>

        <div className="hidden md:flex gap-5">
          <h2 className="hover:bg-indigo-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            Home
          </h2>

          <h2 className="hover:bg-indigo-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            Cars
          </h2>
          <h2 className="hover:bg-indigo-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            Features
          </h2>
          <h2 className="hover:bg-indigo-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            About Us
          </h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default NavBar;
