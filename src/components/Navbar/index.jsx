import React, { useState } from "react";
import "./main.css";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import images from "../../assets/images.png";
import uve from "../../assets/uve.png";
import nastr from "../../assets/nastr.png";

function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  return (
    <>
      <div className="Wrapper bg-white shadow-md py-4 px-6 flex justify-between items-center">

        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="w-15   h-auto" />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            + New
          </button>
        </div>


        <input
          type="text"
          placeholder="Search group and join..."
          className="flex-1 mx-6 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />

        <div className="flex items-center space-x-4 relative">
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <img src={images} alt="" width={20} />
          </button>
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <img src={uve} alt="" width={20} />
          </button>

          <div className="relative">
            <button
              className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img src={nastr} alt="" width={20} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
