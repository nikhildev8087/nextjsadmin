import AdminLayout from "@/components/Layout";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SalesCard from "@/components/SalesCard";

const dashboard = () => {
  return (
    <AdminLayout>
      <div className=" grid grid-cols-3 gap-4">
        <SalesCard icon={<PieChartOutlineOutlinedIcon className="text-sky-500/75 dark:text-sky-200"/>} value={"$25,890"} desc={"Sales"} growthRate={1.5} growth={"up"}/>
        <SalesCard icon={<BusinessCenterOutlinedIcon className="text-sky-500/75 dark:text-sky-200"/>} value={"$25,300"} desc={"Orders"} growthRate={1.5} growth={"up"}/>
        <SalesCard icon={<PeopleAltOutlinedIcon className="text-sky-500/75 dark:text-sky-200"/>} value={"183.35M"} desc={"Customers"} growthRate={1.6} growth={"down"}/>

        <div className="p-4 col-span-3 bg-white rounded">
          <h2 className="text-base font-semibold">Audience overview</h2>
          </div>
      </div>
    </AdminLayout>
  );
};

export default dashboard;
