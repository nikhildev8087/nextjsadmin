import AdminLayout from "@/components/Layout";
import React, { useContext, useEffect } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SalesCard from "@/components/SalesCard";
// import ApexCharts from "apexcharts";
// import Chart from 'react-apexcharts'
import BarChart from "@/components/BarChart";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import { Divider } from "@mui/material";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const dashboard = ({}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;

  const options = ["Last 15 Days", "Last Month", "Last Year"];

  const optionsRadar= {
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
      // text: 'Basic Radar Chart'
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
  }

  const series= [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }]

  return (
    <AdminLayout>
      <div className=" grid grid-cols-3 gap-4">
        <SalesCard
          icon={
            <PieChartOutlineOutlinedIcon className="text-sky-500/75 dark:text-sky-200" />
          }
          value={"$25,890"}
          desc={"Sales"}
          growthRate={1.5}
          growth={"up"}
        />
        <SalesCard
          icon={
            <BusinessCenterOutlinedIcon className="text-sky-500/75 dark:text-sky-200" />
          }
          value={"$25,300"}
          desc={"Orders"}
          growthRate={1.5}
          growth={"up"}
        />
        <SalesCard
          icon={
            <PeopleAltOutlinedIcon className="text-sky-500/75 dark:text-sky-200" />
          }
          value={"183.35M"}
          desc={"Customers"}
          growthRate={1.6}
          growth={"down"}
        />
        <BarChart />

        <div className="p-4 rounded bg-white dark:bg-slate-900/75 col-span-2 dark:text-slate-400 text-slate-600">
          <div className=" relative flex items-center justify-between pb-4 ">
            <h2 className="text-medium font-bold">Visits by Day</h2>
            <p className="text-sm font-base">Total 248.5k visits</p>
          </div>
          <Divider />

    <Chart options={optionsRadar} series={series} type="radar" height={400} />
          
        </div>
        <div className="grid grid-rows-1 gap-4 ">
          <div className="p-4 rounded bg-[#8676FF] dark:bg-[#8676FF] backdrop-blur dark:text-white text-white">
            <p className="text-sm font-base">Impression</p>
            <h2 className="text-lg font-bold">$12,875</h2>
            <p className="text-sm font-base ">Compared to $21,490 last year</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-900/75 backdrop-blur text-slate-600 dark:text-slate-400 rounded">
            <div className="flex items-center justify-between pb-2">
              <p className="text-base font-medium">Activity Timeline</p>
              <div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreHorizOutlinedIcon className="dark:text-slate-400 text-slate-600" />
                </IconButton>
                <Menu
                  className="text-sm font-normal p-0"
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      // maxHeight: ITEM_HEIGHT * 4.5,
                      width: "15ch",
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem
                      className="text-sm font-normal "
                      key={option}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
            <Divider className="mb-3" />

            <div className="relative pl-5 pb-4 mb-2 before:content-[''] before:w-3 before:h-3 before:bg-gradient-to-r from-cyan-500 to-blue-500  before:absolute before:top-1.5 before:left-0 before:rounded-full after:content-[''] after:bg-[#f7faff] after:w-[3px] after:h-[75px] after:absolute after:top-[18px] after:left-[5px]">
              <h4 className="text-sm font-semibold">
                5 Invoices have been paid
              </h4>
              <div className="flex items-center ">
                <span className="mr-4">
                  <PictureAsPdfOutlinedIcon />
                </span>
                <h5 className="text-sm font-normal">
                  Invoices Have been paid to the company
                </h5>
              </div>
              <span className="text-xs font-extralight">
                11:47 PM Wednesday
              </span>
            </div>

            <div className="relative pl-5 pb-4 mb-2 before:content-[''] before:w-3 before:h-3 before:bg-gradient-to-r from-cyan-500 to-blue-500  before:absolute before:top-1.5 before:left-0 before:rounded-full after:content-[''] after:bg-[#f7faff] after:w-[3px] after:h-[75px] after:absolute after:top-[18px] after:left-[5px]">
              <h4 className="text-sm font-semibold">
                8 Invoices have been paid
              </h4>
              <div className="flex items-center ">
                <span className="mr-4">
                  <AssignmentIndOutlinedIcon />
                </span>
                <h5 className="text-sm font-normal">
                  Create a new project for client Johnson.
                </h5>
              </div>
              <span className="text-xs font-extralight">April, 18</span>
            </div>

            <div className="relative pl-5 pb-4 mb-2 before:content-[''] before:w-3 before:h-3 before:bg-gradient-to-r from-cyan-500 to-blue-500 before:absolute before:top-1.5 before:left-0 before:rounded-full after:content-[''] after:bg-[#f7faff] after:w-[3px] after:h-[75px] after:absolute after:top-[18px] after:left-[5px]">
              <h4 className="text-sm font-semibold">
                Added new style collection
              </h4>
              <div className="flex items-center ">
                <span className="mr-4">
                  <ContactsOutlinedIcon />
                </span>
                <h5 className="text-sm font-normal">
                  Product uploaded By Nesta Technologies.
                </h5>
              </div>
              <span className="text-xs font-extralight">02:14 PM Today</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default dashboard;
