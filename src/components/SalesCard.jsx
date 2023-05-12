import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";

const SalesCard = ({ icon, value, desc, growth, growthRate }) => {
  return (
    
    <div className="bg-white dark:bg-slate-900/75 rounded p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl  font-bold">{value}</h1>
          <span className="text-sm text-slate-400 font-base">Total {desc}</span>
        </div>
        <div className="h-10 w-10 rounded bg-cyan-100/50 flex items-center justify-center text-center ">
          <span>{icon}</span>
        </div>
      </div>
      <div>
        <p className="flex items-center text-sm text-slate-400 font-base">
          <span className="mr-2">
            {growth === "up" ? (
              <TrendingUpIcon className="text-lime-500/75" />
            ) : (
              <TrendingDownOutlinedIcon className="text-red-500/75" />
            )}
          </span>
          {growthRate}% {growth} from past week
        </p>
      </div>
    </div>
  );
};

export default SalesCard;
