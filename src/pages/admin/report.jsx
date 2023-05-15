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
import { useEffect } from "react";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { copyToClipboard } from "react-copy-to-clipboard";
import UpdateProductModal from "@/components/UpdateProductModal";
import { notification } from "antd";

const report = () => {
  const [reportState, setReportState] = useState({
    modalOpen: false,
    data: [],
    capied: false,
    state: [],
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [copied, setCopied] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [state, setState] = useState([]);
  const [updateData, setUpdateData] = useState();

  const deleteProductHandler = (id) => {
    try {
      axios.delete(`http://localhost:3000/api/products?id=${id}`);
      notification["success"]({
        message: "Product deleted successfully..!"
      })

    } catch (err) {
      console.log(err);
    }
    fetchProducts()
  };

  const handleCopy = (code) => {
    // copyToClipboard(code.toString());
    console.log(copy);
    setReportState((prev) => {
      return {
        ...prev,
        copied: true,
      };
    });
    // setCopied(true);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      setReportState((prev) => {
        return {
          ...prev,
          data: response.data,
        };
      });
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  useEffect(() => {
   
    fetchProducts();
  }, [modalOpen, updateData]);

  return (
    <AdminLayout>
      <div className="p-5 bg-white dark:bg-slate-900/75 rounded">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Products</h2>
          <button
            // onClick={() => setReportState((prev) =>  ({...prev, modalOpen:true}))}
            onClick={() => {
              setModalOpen(true), setUpdateData();
            }}
            className="px-3 py-2 bg-cyan-500 rounded text-white"
          >
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
            {reportState?.data?.map((ele, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell
                    className="p-2"
                    align="left"
                    component="th"
                    scope="row"
                  >
                    <div className="flex items-center justify-start">
                      <img className="h-12 w-12 bg-slate-400 rounded-lg" />
                      <span className=" text-sm ml-2 text-slate-400 dark:text-slate-200">
                        {ele?.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell
                    className="text-sm text-slate-400 dark:text-slate-200"
                    align="right"
                  >
                    {ele?.category}
                  </TableCell>
                  <TableCell
                    className="text-sm text-slate-400 dark:text-slate-200"
                    align="right"
                  >
                    {ele?.price}
                  </TableCell>
                  <TableCell
                    className="text-sm text-slate-400 dark:text-slate-200"
                    align="right"
                  >
                    {ele?.orders}
                  </TableCell>
                  <TableCell
                    className="text-sm text-slate-400 dark:text-slate-200"
                    align="right"
                  >
                    {ele?.stock === 0 ? "Out of stock" : ele?.stock}
                  </TableCell>
                  <TableCell
                    className="text-sm text-slate-400 dark:text-slate-200"
                    align="right"
                  >
                    {ele?.rating}
                  </TableCell>
                  <TableCell
                    className="text-sm text-slate-400 dark:text-slate-200"
                    align="right"
                  >
                    <div className="flex items-center justify-end gap-1">
                      {/* <VisibilityIcon className="text-sky-500 text-base" /> */}
                      <CreateIcon
                        className="text-cyan-400 text-base cursor-pointer"
                        onClick={() => {
                          setModalOpen(true), setUpdateData(ele);
                        }}
                      />
                      {/* <AddShoppingCartIcon className="text-lime-400 text-base" /> */}
                      <DeleteIcon
                        className="text-rose-400 text-base cursor-pointer"
                        onClick={() => deleteProductHandler(ele?._id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <ProductModal
          // modalOpen={reportState.modalOpen}
          // setModalOpen={setReportState.modalOpen}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          data={updateData}
        />
        <UpdateProductModal
          updateModal={updateModal}
          setUpdateModal={setUpdateModal}
          updateData={updateData}
        />
      </div>

      <div>
        {reportState?.data?.map((ele, idx) => {
          return (
            <div key={idx}>
              <p>{ele?.name}</p>

              <div className="bg-slate-200">
                <SyntaxHighlighter className="bg-slate-200" language={"jsx"}>
                  {ele?.codeSnippet}
                </SyntaxHighlighter>
                <button onClick={() => handleCopy(ele?.codeSnippet)}>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </AdminLayout>
  );
};

export default report;
