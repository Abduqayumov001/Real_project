import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Profile() {

    const handleCopy = () => {
      navigator.clipboard.writeText("Test2");
      toast.success("Username copied to clipboard!");
    };

    const handleDelete = () => {
      toast.error("Account deleted successfully!");
    };
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto mt-[30px] mr-[50px]">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-red-500 text-white w-16 h-16 rounded-full flex justify-center items-center text-3xl">
          T
        </div>
        <div>
          <h2 className="text-xl font-semibold">Test2</h2>
          <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
            Active
          </span>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleCopy}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Copy Username
        </button>
        <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default Profile;
