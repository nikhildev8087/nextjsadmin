import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Sidebar = ({collapse}) => {
    const [menuOpen, setMenuOpen] = useState({setting:false, project:false});
console.log("menuopen", menuOpen)

    const router = useRouter()
  return (
    <div className={`sidebar h-screen bg-white dark:bg-slate-900/75  backdrop-blur dark:text-white text-black flex flex-col fixed top-0 left-0 z-50  px-4 py-6 ${collapse ? "hidden transition-all duration-150 ease-in" : "w-64 block transition-all duration-150 ease-out"}`}>
      <div className="logo mb-4">
        <span className="text-center text-lg font-bold">Logo</span>
      </div>
      <li className="hover:bg-gray-300 hover:text-white rounded dark:hover:bg-white dark:hover:text-black">
      <Link className={`p-2 flex items-center justify-between ${router.pathname =="/dashboard" ? "active" : ""}`} href="/dashboard">
        <div> <span>i</span> <span>App</span></div> 
      </Link>
      </li>
      <li>
      <Link className={`p-2 flex items-center justify-between ${router.pathname =="/report" ? "active" : ""}`} href="/report">
        <div> <span>i</span> <span>Email</span></div> 
      </Link>
      </li>

      {/* <li className="px-6 py-2 text-gray-600 border-l-4 border-transparent hover:border-blue-500">  */}
      <li className="" onClick={() => setMenuOpen({...menuOpen,setting:!menuOpen.setting})}> 
      <a className="p-2 flex items-center justify-between" href="#" id="settings-dropdown" >
        <div> <span>i</span> <span>Contact List</span> </div> <div className=""  id="settings-dropdown-icon">^</div>
      </a>
      {/* submenu */}
  <ul className={`ml-6 py-2" id="settings-submenu ${menuOpen.setting ? "" : "hidden" }`}>
    <li className="px-4 py-2 ">
      <a href="#">Profile</a>
    </li>
    <li className="px-4 py-2 ">
      <a href="#" >Security</a>
    </li>
    <li className="px-4 py-2 ">
      <a href="#">Notifications</a>
    </li>
  </ul>

      </li>

      <li onClick={()=> setMenuOpen({ ...menuOpen,project:!menuOpen.project})}>
      <Link className="p-2 flex items-center justify-between" href="">
        <div> <span>i</span> <span >Projects</span></div> 
      </Link>
      </li>
      <li>
      <Link className="p-2 flex items-center justify-between" href="">
        <div> <span>i</span> <span>Analytics</span></div>
      </Link>
      </li>
      <li>
      <Link className="p-2 flex items-center justify-between" href="">
        <div> <span>i</span> <span>E-commerse</span></div>
      </Link>
      </li>
      <li>
      <Link className="p-2 flex items-center justify-between" href="">
        <div> <span>i</span> <span>UI Element</span></div>
      </Link>
      </li>
      <script src="../components/menu.js"></script>
    </div>
  );
};

export default Sidebar;
