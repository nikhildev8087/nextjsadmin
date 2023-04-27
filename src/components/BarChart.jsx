import React, { useContext } from 'react'
import dynamic from "next/dynamic";
import { ThemeContext } from "@/context/themeContext";
import { Divider } from '@mui/material';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {

    const { theme } = useContext(ThemeContext);
    console.log(theme);
  
    const options = {
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 7,
          columnWidth: "40px",
        },
      },
      bar: {
        columnWidth: "70%",
      },
      theme: {
        // mode: theme,
      },
      chart: {
        id: "bar-chart",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        // categories: data.map(item => item.label),
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
    };
  
    const series = [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ];

  return (
    <div className="p-4 col-span-3 bg-white dark:bg-slate-900/75 rounded">
    <h2 className="text-base font-semibold pb-4">Audience overview</h2>
    <Divider/>
    <Chart options={options} series={series} type="bar" height={400} />
  </div>
  )
}

export default BarChart
