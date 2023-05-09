import React from "react";
import { Formik } from "formik";

const register = () => {

    const handleSubmit = (value) => {
        console.log(value)
    }

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

        if(value.password !== value.confirmPassword){
            error.confirmPassword ="Password does not matched"
        }
        console.log(error)

        return error;
    }


  return (
    <div className="py-12 bg-slate-700  p-4">
      <h2 className="text-cente text-xl font-bold mb-2">Register page </h2>

      <div className="p-4">
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
            handleSubmit,
            resetForm,
            touched,
            handleChange,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="username">User Name: </label>
                  <input
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="username"
                    id="username"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email">Email: </label>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="password">Password: </label>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="confirmPassword">Confirm Password: </label>
                  <input
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                </div>
                <div>
                  <button className="py-2 px-4 bg-indigo-200 rounded text-slate-700" type="submit">Register</button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default register;
