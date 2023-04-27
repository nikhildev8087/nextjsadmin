import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext, ThemeProvider } from "@/context/themeContext";
import Breadcrumb from "./Breadcrumb";
import { useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState([]);
  // const [isDarkMode, toggelDarkMode] = useDarkMode();
  const [collapse, setCollapse] = useState(false);

  const router = useRouter();

  const { theme, toggelTheme } = useContext(ThemeContext);
  console.log(theme);
  const expandHandler = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    const themeName = localStorage.getItem("theme");
    console.log(themeName);

    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [theme, children]);

  console.log("collapse value", collapse);

  return (
    <div
      className={`relative main-wrapper pb-4 dark:bg-[#1e293b] bg-gray-100 ${
        collapse
          ? " transition-all duration-150 ease-in"
          : "pl-72 transition-all duration-150 ease-out "
      }`}
    >
      <div className="header dark:border-slate-300/10 backdrop-blur sticky border-b border-slate-900/10  bg-white/75 dark:text-white text-black dark:bg-slate-900/75 mb-4 top-0 right-0 w-full flex items-center justify-between p-4 z-[100] shadow-lg shadow-slate-300/50 dark:shadow-gray-600/25">
        <button onClick={expandHandler}>
          <MenuIcon />
        </button>
        <span>Header</span>
        <button className="bg-gray" onClick={toggelTheme}>
          {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
      <Sidebar mode={isDarkMode} collapse={collapse} />
      <div
        className={`main-content backdrop-blur pr-8  text-black dark:text-white  ${
          collapse ? "pl-8" : ""
        }`}
      >
        {/* <Breadcrumb /> */}
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
