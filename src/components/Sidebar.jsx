import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import EmailIcon from '@mui/icons-material/Email';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Sidebar = ({collapse}) => {
    const [menuOpen, setMenuOpen] = useState({setting:false, project:false});
console.log("menuopen", menuOpen)
    const router = useRouter()
  return (
    <div className={`sidebar  h-screen bg-white dark:bg-slate-900/75  backdrop-blur dark:text-slate-400 text-slate-600 flex flex-col fixed top-0 left-0 z-50  px-4 py-6 ${collapse ? "hidden transition-all duration-150 ease-in" : "w-64 block transition-all duration-150 ease-out"}`}>
      <div className="logo mb-8">
        <span className="text-center text-3xl font-black">Logo</span>
      </div>
      <li className="hover:bg-gray-300 hover:text-white rounded dark:hover:bg-white dark:hover:text-black">
      <Link className={`p-2 flex items-center justify-between ${router.pathname =="/dashboard" ? "active" : ""}`} href="/dashboard">
        <div className="text-sm flex items-center"> <AppShortcutIcon className="w-5 h-5"/> <span className="ml-2">App</span></div> 
      </Link>
      </li>
      <li>
      <Link className={`p-2 flex items-center justify-between ${router.pathname =="/report" ? "active" : ""}`} href="/report">
        <div className="text-sm flex items-center"> <EmailIcon className="w-5 h-5"/> <span className="ml-2">Email</span></div> 
      </Link>
      </li>

      {/* <li className="px-6 py-2 text-gray-600 border-l-4 border-transparent hover:border-blue-500">  */}
      <li className="" onClick={() => setMenuOpen({...menuOpen,setting:!menuOpen.setting})}> 
      <a className="p-2 flex items-center justify-between" href="#" id="settings-dropdown" >
        <div className="text-sm flex items-center"> <PermContactCalendarIcon className="w-5 h-5"/> <span className="ml-2">Contact List</span> </div> <div className=""  id="settings-dropdown-icon">{menuOpen.setting ? <KeyboardArrowDownOutlinedIcon/> : <ChevronRightOutlinedIcon/> }</div>
      </a>
      {/* submenu */}
  <ul className={`ml-6 py-2" id="settings-submenu  ${menuOpen.setting ? "" : "hidden" }`}>
    <li className="px-4 py-2 ">
    <AccountBoxIcon className="w-5 h-5"/>
      <a href="#"><span className="ml-2">Profile</span> </a>
    </li>
    <li className="px-4 py-2 ">
    <SecurityIcon className="w-5 h-5"/>
      <a href="#" > <span className="ml-2">Security</span> </a>
    </li>
    <li className="px-4 py-2 ">
    <NotificationsActiveIcon className="w-5 h-5"/>
      <a href="#">
        <span className="ml-2">Notifications</span>
        
        </a>
    </li>
  </ul>

      </li>

      <li onClick={()=> setMenuOpen({ ...menuOpen,project:!menuOpen.project})}>
      <Link className="p-2 flex items-center justify-between" href="">
        <div className="text-sm flex items-center"> <CopyAllIcon className="w-5 h-5"/> <span className="ml-2">Projects</span></div> 
      </Link>
      </li>
      <li>
      <Link className="p-2 flex items-center justify-between" href="">
        <div className="text-sm flex items-center"> <InsertChartIcon className="w-5 h-5"/> <span className="ml-2">Analytics</span></div>
      </Link>
      </li>
      <li>
      <Link className="p-2 flex items-center justify-between" href="">
        <div className="text-sm flex items-center"> <ShoppingCartCheckoutIcon className="w-5 h-5"/> <span className="ml-2">E-commerse</span></div>
      </Link>
      </li>
      <li>
      <Link className="p-2 flex items-center justify-between" href="">
        <div className="text-sm flex items-center"> <ViewComfyIcon className="w-5 h-5"/> <span className="ml-2">UI Element</span></div>
      </Link>
      </li>
      {/* <script src="../components/menu.js"></script> */}
    </div>
  );
};

export default Sidebar;
