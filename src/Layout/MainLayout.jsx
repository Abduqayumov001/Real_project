import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout() {
    // if (!localStorage.getItem(accessToken)) {
    //   return <Navigate to={"/login"} />;
    // }
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* <Outlet /> */}
    </div>
  );
}

export default MainLayout;
