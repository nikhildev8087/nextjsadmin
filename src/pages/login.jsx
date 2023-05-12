"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Formik } from "formik";
import axios from "axios";
import { notification } from "antd";
import { useRouter } from "next/router";

const login = () => {
  const googleSignInHandler = () => {
    signIn("google", { callbackUrl: "http://localhost:3001" });
  };

  const router = useRouter()

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    axios
      .post("http://localhost:3000/api/auth/login", value)
      .then((res) => {
        notification["success"]({
          message:"login successfully..!"
        })
        console.log(res?.data?.token);
        localStorage.setItem("login_token", res?.data?.token)
        router.push("/admin")
      })
      .catch((err) => {
        notification["error"]({
          message: "Invalid credentials",
        });
        console.log(err?.response?.data?.message);
      });
    resetForm();
  };

  const validateData = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "please enter email";
    }
    if (!values.password) {
      errors.password = "Please enter password";
    }
    console.log(errors);
    return errors;
  };

  return (
    <div className="bg-[#1E293B] dark:bg-gray-300 h-screen flex items-center justify-center">
      <div className="px-20 py-20 ">
        <div className="bg-[#E2E8F0] p-8 rounded-lg">
          <h2 className="text-center font-bold text-2xl text-slate-700 mb-4 ">
            Login
          </h2>

          <Formik
            initialValues={{
              email: "",
              password: "",
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

                  <div className="grid grid-cols">
                    <label className="mr-2 text-slate-500 text-sm" htmlFor="password">
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
                  <div className="mt-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gray-700 text-white rounded bg-slate-200 mb-2 w-full mt-4 hover:bg-slate-700"
                    >
                      Login
                    </button>
                    <p>Don't have account ? <span className="cursor-pointer text-indigo-700 mt-2" onClick={() => router.push("/register")}>Sign up</span></p>
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

export default login;

export async function getStaticProps(context) {
  console.log("check context => ",context)
  return{
    props: {
      data: "test"
    }
  }
}
