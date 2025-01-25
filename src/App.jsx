import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserProfile from "./page/UseProfile";
import Login from "./page/Login";
import Register from "./page/Register";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CreateGroup from "./page/createGruop";
import Test2 from "./page/Test2";
import Test22 from "./page/Test22";
import Best from "./page/Best";
import Test22sdcs from "./page/Test22sdcs";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/main/profile" replace />} />
          <Route path="/main/profile" element={<UserProfile />} />
          <Route path="/main/groups/create" element={<CreateGroup />} />
          <Route path="/main/groups/test2" element={<Test2 />} />
          <Route path="/main/groups/test22" element={<Test22 />} />
          <Route path="/main/groups/best" element={<Best />} />
          <Route path="/main/groups/test22sdcs" element={<Test22sdcs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
