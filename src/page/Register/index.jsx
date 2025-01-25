import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    username: Yup.string()
      .min(5, "Username must be at least 5 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { name, username, password } = values;
        let response = await axios.post(
          "https://nt-shopping-list.onrender.com/api/users",
          {
            name,
            username,
            password,
          }
        );

        if (response.status === 201) {
          localStorage.setItem("token", response.data.token);
          toast.success("Signed up successfully!");
          navigate("/main");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to sign up. Please try again!");
      }
    },
  });

  if (localStorage.getItem("token")) {
    navigate("/main");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 ">
      <div className="flex bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[70%] lg:w-[50%]">
        <div className="w-1/2 bg-black flex flex-col items-center justify-center p-5">
          <h1 className="text-3xl font-bold">Shopping List</h1>
          <p className="mt-4 text-gray-400">Welcome back to</p>
        </div>

        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Sign Up</h2>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={`p-3 rounded-lg border ${
                formik.errors.name && formik.touched.name
                  ? "border-red-500"
                  : "border-gray-700"
              } bg-gray-800 focus:outline-none focus:ring-2 ${
                formik.errors.name && formik.touched.name
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <span className="text-red-500 text-sm">{formik.errors.name}</span>
            )}

            <input
              type="text"
              name="username"
              placeholder="Username"
              className={`p-3 rounded-lg border ${
                formik.errors.username && formik.touched.username
                  ? "border-red-500"
                  : "border-gray-700"
              } bg-gray-800 focus:outline-none focus:ring-2 ${
                formik.errors.username && formik.touched.username
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched.username && (
              <span className="text-red-500 text-sm">
                {formik.errors.username}
              </span>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`p-3 rounded-lg border ${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : "border-gray-700"
              } bg-gray-800 focus:outline-none focus:ring-2 ${
                formik.errors.password && formik.touched.password
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <span className="text-red-500 text-sm">
                {formik.errors.password}
              </span>
            )}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-400">
            <p>Already have an account? </p>
            <NavLink to="/login" className="text-blue-500 hover:underline">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
