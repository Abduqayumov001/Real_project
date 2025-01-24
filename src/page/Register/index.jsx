import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let name = e.target[0].value;
      let username = e.target[1].value;
      let password = e.target[2].value;

      console.log(username, password);

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
      toast.error("Failed to sign in. Please check your credentials!");
    }
  };
  if (localStorage.getItem("token")) {
    return <navigate to={"/main"} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 ">
      <div className="flex bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[70%] lg:w-[50%]">
        <div className="w-1/2 bg-black flex flex-col items-center justify-center p-5">
          <h1 className="text-3xl font-bold">Shopping List</h1>
          <p className="mt-4 text-gray-400">Welcome back to</p>
        </div>

        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Sign In</h2>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="name"
              className="p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Username"
              className="p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Sign In
            </button>
          </form>
          <div className=" d-fmt-4 text-sm text-gray-400">
            <p>account yet? </p>
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

