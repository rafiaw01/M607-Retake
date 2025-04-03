"use client";

import StoreProvider, { useAppSelector } from "./redux";
import Navbar from "@/app/(components)/Navbar";
import React, { useEffect } from "react";
import Sidebar from "@/app/(components)/Sidebar";


// The purpose of the following code is to setup
// the front page of the app and has a dashboard
// the dashboard also consists of a Navbar and also a sidebar
// The entire code adds a appeasing look for the user 

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col h-full w-full px-9 py-7 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-25" : "md:pl-70"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;