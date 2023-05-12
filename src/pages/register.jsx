import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { notification } from "antd";
import { useRouter } from "next/router";

const register = () => {

  const router = useRouter()

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    axios
      .post("http://localhost:3000/api/auth/signup", value)
      .then((res) => {
        notification["success"]({
          message:"user Created successfully..!"
        })
        console.log(res?.data?.token);
        localStorage.setItem("login_token", res?.data?.token)
        router.push("/login")
      })
      .catch((err) => {
        notification["error"]({
          message: err?.response?.data?.message,
        });
        console.log(err?.response?.data?.message);
      });
    resetForm();
  };

    const validateData = (value) => {
        const error = {};

        if(!value.email){
            error.email="Please enter email"
        }
        if(!value.username){
            error.username="please enter user name"
        }

        if(!value.password){
            error.password="Please enter password"
        }

        if(!value.confirmPassword){
          error.confirmPassword = "Please enter password"
        }
        if(value.password !== value.confirmPassword){
            error.confirmPassword ="Password does not matched"
        }
        console.log(error)

        return error;
    }


  return (
    <div className="bg-[#1E293B] dark:bg-gray-300 h-screen flex items-center justify-center">
    <div className="px-20 py-20 ">
      <div className="bg-[#E2E8F0] p-8 rounded-lg">
        <h2 className="text-center font-bold text-2xl text-slate-700 mb-4 ">
          Register
        </h2>

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSubmit}
          validate={validateData}
        >
          {({
            values,
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            handleReset,
            resetForm,
            setFieldValue,
            touched
          }) => {
            return (
              <form action="/api/login" onSubmit={handleSubmit}>
                <div className=" mb-2 grid grid-cols">
                  <label className="mr-2 text-slate-500 text-sm" htmlFor="username">
                    User Name
                  </label>
                  <input
                    className="bg-slate-400 p-1 rounded focus:outline-0"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    type="text"
                  />
                  {errors?.username && touched?.username && (<p className="text-sm text-rose-700">{errors.username}</p>)}
                </div>

                <div className=" mb-2 grid grid-cols">
                  <label className="mr-2 text-slate-500 text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="bg-slate-400 p-1 rounded focus:outline-0"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="email"
                  />
                  {errors?.email && touched?.email && (<p className="text-sm text-rose-700">{errors.email}</p>)}
                </div>

                <div className="mb-2 grid grid-cols">
                  <label className="mr-2 text-slate-500 text-sm text-sm " htmlFor="password">
                    Password
                  </label>
                  <input
                    className="bg-slate-400 p-1 rounded w-60 focus:slate-400 active:slate-400 focus:outline-0"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    type="password"
                  />
                  {errors?.password && touched?.password && (<p className="text-sm text-rose-700">{errors.password}</p>)}

                </div>

                <div className="mb-2 grid grid-cols">
                  <label className="mr-2 text-slate-500 text-sm " htmlFor="confirmPassword">
                   Confirm Password
                  </label>
                  <input
                    className="bg-slate-400 p-1 rounded w-60 focus:slate-400 active:slate-400 focus:outline-0"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    type="confirmPassword"
                  />
                  {errors?.confirmPassword && touched?.confirmPassword && (<p className="text-sm text-rose-700">{errors.confirmPassword}</p>)}
                  
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gray-700 text-white rounded bg-slate-200 mb-2 w-full mt-4 hover:bg-slate-700"
                  >
                    Register
                  </button>
                  <p>Already have account ? <span className="cursor-pointer text-indigo-700 mt-2" onClick={() => router.push("/login")}>Login</span></p>
                </div>
              </form>
            );
          }}
        </Formik>

        {/* <button
        className="px-4 py-2 rounded bg-slate-200 w-full"
        onClick={googleSignInHandler}
      >
        Login with Google
      </button> */}
      </div>
    </div>
  </div>
  );
};

export default register;
