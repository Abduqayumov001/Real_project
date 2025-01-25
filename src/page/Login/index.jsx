import axios from "axios";
import { ErrorMessage, Form, Field, Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(6, "At least 6 characters")
    .max(10, "No more than 10 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

function Login() {
  const initialValues = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { username, password } = values;
      console.log(username, password);

      const response = await axios.post(
        "https://nt-shopping-list.onrender.com/api/auth",
        { username, password }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        toast.success("Signed in successfully!");
        navigate("/main");
      }
    } catch (err) {
      toast.error("Failed to sign in. Please check your credentials!");
    }
  };

  if (localStorage.getItem("token")) {
    navigate("/main");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[70%] lg:w-[50%]">
        <div className="w-1/2 bg-black flex flex-col items-center justify-center p-5">
          <h1 className="text-3xl font-bold">Shopping List</h1>
          <p className="mt-4 text-gray-400">Welcome back to</p>
        </div>

        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Sign In</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-4">
                <div>
                  <label htmlFor="username" className="block text-sm mb-1">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    className="p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm mb-1">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  Sign In
                </button>
              </Form>
            )}
          </Formik>
          <div className="mt-4 text-sm text-gray-400">
            <p>
              No account yet?{" "}
              <NavLink to="/register" className="text-blue-500 hover:underline">
                Create one.
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
