"use client";


// The following code is used to creat a layout
// For the Navigation bar and is very usefull

import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";



const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full  mb-6">
      
      <div className="flex justify-between items-center gap-4">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-90"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start type to search groups & products"
            className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 focus:outline-none bg-white rounded-lg  focus:border-blue-450"
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
            <Bell className="text-gray-500" size={15} />
          </div>
        </div>
      </div>

      
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={25} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={25} />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={25} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              2
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src=""
              alt="User Profile"
              width={55}
              height={55}
              className="rounded-full h-full object-cover"
            />
            <span className="font-semibold">Awais</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;