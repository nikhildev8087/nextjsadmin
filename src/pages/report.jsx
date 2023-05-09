import AdminLayout from "@/components/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductModal from "@/components/ProductModal";

const report = () => {
  const[reportState, setReportState] = useState({
    modalOpen:false,
  })
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <AdminLayout>
      <div className="p-5 bg-white dark:bg-slate-900/75 rounded">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Products</h2>
          <button 
          // onClick={() => setReportState((prev) =>  ({...prev, modalOpen:true}))}
          onClick={() => setModalOpen(true)}
           className="px-3 py-2 bg-cyan-500 rounded text-white">
            + Create Product
          </button>
        </div>
        <Table className="w-full">
          <TableHead className="bg-cyan-50 ">
            <TableRow className=" ">
              <TableCell
                className="text-sm font-medium text-slate-400"
                align="left"
              >
                Product Name
              </TableCell>
              <TableCell
                className="text-sm font-medium text-slate-400"
                align="right"
              >
                Category
              </TableCell>
              <TableCell
                className="text-sm font-medium text-slate-400"
                align="right"
              >
                Price
              </TableCell>
              <TableCell
                className="text-sm font-medium text-slate-400"
                align="right"
              >
                Orders
              </TableCell>
              <TableCell
                className="text-sm font-medium text-slate-400"
                align="right"
              >
                Stock
              </TableCell>
              <TableCell
                className="text-sm font-medium text-slate-400"
                align="right"
              >
                Rating
              </TableCell>
              <TableCell
                className="text-sm font-medium text-slate-400"
                align="right"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="p-2" align="left" component="th" scope="row">
                <div className="flex items-center justify-start">
                  <img className="h-12 w-12 bg-slate-400 rounded-lg"/>
                  <span className=" text-sm ml-2 text-slate-400 dark:text-slate-200">Admas Airpod x-Zon</span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-slate-400 dark:text-slate-200" align="right">Airpod</TableCell>
              <TableCell className="text-sm text-slate-400 dark:text-slate-200" align="right">$289.50</TableCell>
              <TableCell className="text-sm text-slate-400 dark:text-slate-200" align="right">120</TableCell>
              <TableCell className="text-sm text-slate-400 dark:text-slate-200" align="right">Out of Stock</TableCell>
              <TableCell className="text-sm text-slate-400 dark:text-slate-200" align="right">5.0(150 votes)</TableCell>
              <TableCell className="text-sm text-slate-400 dark:text-slate-200" align="right">
                <div className="flex items-center justify-end gap-1">
                  <VisibilityIcon className="text-sky-500 text-base"/>
                  <CreateIcon className="text-cyan-400 text-base"/>
                  <AddShoppingCartIcon className="text-lime-400 text-base"/>
                  <DeleteIcon className="text-rose-400 text-base"/>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <ProductModal 
        // modalOpen={reportState.modalOpen} 
        // setModalOpen={setReportState.modalOpen} 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen} 
        data={"test"}/>
      </div>
    </AdminLayout> 
  );
};

export default report;
