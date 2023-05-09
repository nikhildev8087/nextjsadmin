import React from "react";
import { Modal } from "antd";
import { Formik } from "formik";
import axios from "axios";

const ProductModal = ({ modalOpen, setModalOpen, data }) => {
  console.log(modalOpen);

  const handleAddData = (value) => {
    console.log(value)
    try{
        axios.post('http://localhost:3000/api/users', {...value, newkey:"value"})
        setModalOpen(false)
    }catch(err){
        console.log(err)
    }
  }

  const handleSubmit = (value) => {
    // console.log(value);
    handleAddData(value)
  };

  const validateData = (value) => { 
    // console.log(value);
    const error = {};

    if(!value.title){
        error.title = "Please Enter the title"
    }
    if(!value.body){
        error.body = "Please Enter the Title"
    }
    console.log(error)

    return error;

  };
  return (
    <div>
      <Modal
        open={modalOpen}
        onOk={() => modalOpen(false)}
        onCancel={() => setModalOpen(false)}
        destroyOnClose
        footer={null}
      >
        <Formik
          initialValues={{ title: "", body: "" }}
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
            <form onSubmit={handleSubmit}>
              <div className="flex items-center mb-2">
                <p className="pr-2">Title</p>
                <input
                  className="border p-2 rounded"
                  name="title"
                  id="title"
                  value={values.title}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

                <div className="flex items-center">
                    <p className="pr-2">body</p>
                    <input
                    className="border p-2 rounded"
                    name="body"
                    id="body"
                    value={values.body}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
              <div>
                <button type="submit" className="px-3 rounded py-2 bg-slate-800 text-white mt-4">Submit</button>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default ProductModal;
