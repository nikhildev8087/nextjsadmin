import React from "react";
import { Modal, notification } from "antd";
import { Formik } from "formik";
import axios from "axios";

const ProductModal = ({ modalOpen, setModalOpen, data }) => {
  const handleAddData = async (value, data) => {
    console.log(value);
    console.log(data);
    if (data ===  null ? true : false) {
      try {
      await  axios.post("http://localhost:3000/api/products", {
          ...value,
        });
        notification["success"]({
          message: "Product added successfully",
        });
        setModalOpen(false);
      } catch (err) {
        notification["error"]({
          message: "error in update product",
        });
        console.log(err);
      }
    } else {
      try {
        await axios.put(`http://localhost:3000/api/products?id=${value?.id}`, {
          ...value,
        });
        notification["success"]({
          message: "Product update successfully",
        });
        setModalOpen(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSubmit = (value) => {
    handleAddData(value);
  };

  const validateData = (value) => {
    // console.log(value);
    const error = {};

    if (!value.name) {
      error.name = "Please Enter the name";
    }
    if (!value.category) {
      error.category = "Please Enter the category";
    }
    if (!value.orders) {
      error.orders = "Please Enter the Orders";
    }
    if (!value.stock) {
      error.stock = "Please Enter the Stock";
    }
    if (!value.rating) {
      error.rating = "Please Enter the Rating";
    }
    if (!value.description) {
      error.description = "Please Enter the Description";
    }
    if (!value.codeSnippet) {
      error.codeSnippet = "Please Enter the codeSnippet";
    }
    if (!value.price) {
      error.price = "Please Enter the price";
    }

    // console.log(error);

    return error;
  };
  return (
    <div className="">
      <Modal
        open={modalOpen}
        onOk={() => modalOpen(false)}
        onCancel={() => setModalOpen(false)}
        destroyOnClose
        footer={null}
        className=""
      >
        <div className=" ">
          <Formik
            enableReinitialize={true}
            initialValues={{
              id: data?._id ? data._id : "",
              name: data?.name ? data.name : "",
              category: data?.category ? data.category : "",
              orders: data?.orders ? data.orders : "",
              stock: data?.stock ? data.stock : "",
              rating: data?.rating ? data.rating : "",
              description: data?.description ? data.description : "",
              codeSnippet: data?.codeSnippet ? data.codeSnippet : "",
              price: data?.price ? data.price : "",
            }}
            validate={validateData}
            onSubmit={handleSubmit}
          >
            {({
              values,
              handleSubmit,
              errors,
              resetForm,
              handleChange,
              handleBlur,
              touched,
              setFieldValue,
            }) => (
              <form
              // onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-2 grid-row gap-4 ">
                  <div className=" items-center mb-2 ">
                    <p className="">Name : </p>
                    <input
                      className="border p-2 rounded focus:outline-0"
                      name="name"
                      id="name"
                      value={values.name}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    {errors.name && touched.name && (
                      <p className="text-rose-700 text-xs">{errors.name}</p>
                    )}
                  </div>

                  <div className=" items-center">
                    <p className="">Category : </p>
                    <input
                      className="border p-2 rounded focus:outline-0"
                      name="category"
                      id="category"
                      value={values.category}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    {errors.category && touched.category && (
                      <p className="text-rose-700 text-xs">{errors.category}</p>
                    )}
                  </div>
                  <div className=" items-center">
                    <p className="">Orders : </p>
                    <input
                      className="border p-2 rounded focus:outline-0"
                      name="orders"
                      id="orders"
                      value={values.orders}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    {errors.orders && touched.orders && (
                      <p className="text-rose-700 text-xs">{errors.orders}</p>
                    )}
                  </div>
                  <div className=" items-center">
                    <p className="">Stock : </p>
                    <input
                      className="border p-2 rounded focus:outline-0"
                      name="stock"
                      id="stock"
                      value={values.stock}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    {errors.stock && touched.stock && (
                      <p className="text-rose-700 text-xs">{errors.stock}</p>
                    )}
                  </div>
                  <div className=" items-center">
                    <p className="">Rating : </p>
                    <input
                      className="border p-2 rounded focus:outline-0"
                      name="rating"
                      id="rating"
                      value={values.rating}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    {errors.rating && touched.rating && (
                      <p className="text-rose-700 text-xs">{errors.rating}</p>
                    )}
                  </div>
                  <div className=" items-center">
                    <p className="">Description : </p>
                    <input
                      className="border p-2 rounded focus:outline-0"
                      name="description"
                      id="description"
                      value={values.description}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    {errors.description && touched.description && (
                      <p className="text-rose-700 text-xs">
                        {errors.description}
                      </p>
                    )}
                  </div>
                  <div className=" items-center">
                    <p className="">codeSnippet : </p>
                    <input
                      className="border p-2 rounded focus:outline-0"
                      name="codeSnippet"
                      id="codeSnippet"
                      value={values.codeSnippet}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    {errors.codeSnippet && touched.codeSnippet && (
                      <p className="text-rose-700 text-xs">
                        {errors.codeSnippet}
                      </p>
                    )}
                  </div>
                  <div className=" items-center">
                    <p className="">Price : </p>
                    <input
                      className="border p-2 rounded focus:outline-0"
                      name="price"
                      id="price"
                      value={values.price}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                    />
                    {errors.price && touched.price && (
                      <p className="text-rose-700 text-xs">{errors.price}</p>
                    )}
                  </div>
                </div>

                <div>
                  {data === undefined ? (
                    <button
                      type="submit"
                      className="px-3 rounded py-2 bg-slate-800 text-white mt-4"
                      onClick={handleSubmit}
                    >
                      Add Product
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-3 rounded py-2 bg-slate-800 text-white mt-4"
                      onClick={handleSubmit}
                    >
                      Update Product
                    </button>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
