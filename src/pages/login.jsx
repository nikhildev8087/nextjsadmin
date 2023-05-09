import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Formik } from "formik";

const login = () => {
  const googleSignInHandler = () => {
    signIn("google", { callbackUrl: "http://localhost:3001" });
  };

  const handleSubmit = (value) => {
    console.log(value);
  };

  const validateData = (values) => {
    const errors = {};
    if(!values.email){
      errors.email = "please enter email"
    }
    if(!values.password){
      errors.password = "Please enter password"
    }
    console.log(errors);
    return errors;
  };

  return (
    <div className="bg-gray-700 dark:bg-gray-300 ">
      <div className="px-20 py-20">
        <h2 className="text-center font-bold text-lg text-white mb-2">Login</h2>

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
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className=" mb-2">
                  <label className="mr-2" htmlFor="email">
                    Email:{" "}
                  </label>
                  <input
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="email"
                  />
                </div>

                <div className="">
                  <label className="mr-2" htmlFor="password">
                    Password:{" "}
                  </label>
                  <input
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    type="password"
                  />
                </div>
                <div className="mt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-slate-200 mb-2"
                  >
                    Login
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>

        <button
          className="px-4 py-2 rounded bg-slate-200"
          onClick={googleSignInHandler}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default login;
