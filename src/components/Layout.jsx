import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useDarkMode } from "@/hook/useDarkMode";

const AdminLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState([]);
  const [isDarkMode, toggelDarkMode] = useDarkMode();
  const [collapse, setCollapse] = useState(false)

  const expandHandler = () => {
    setCollapse(!collapse)
  }

  console.log("collapse value",collapse)

  return (
    <div className={`relative main-wrapper pb-4 dark:bg-[#1e293b] bg-gray-100 ${collapse ? " transition-all duration-150 ease-in" : "pl-72 transition-all duration-150 ease-out "}`}>
      <div className="header dark:border-slate-300/10 backdrop-blur sticky bg-white dark:text-white text-black dark:bg-slate-900/75 pb-3 mb-4 top-0 right-0 w-full flex items-center justify-between p-4 z-[100]">
        <button onClick={expandHandler}>=</button>
        <span>Header</span>
        <button className="bg-gray" onClick={toggelDarkMode}>
          {" "}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <Sidebar mode={isDarkMode} collapse={collapse} />
      <div className="main-content h-screen pr-8 bg-white text-black dark:text-white dark:bg-slate-900/75">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
