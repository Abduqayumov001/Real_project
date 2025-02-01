import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./page/Profile";
import Login from "./page/Login";
import Register from "./page/Register";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/main"
          element={
              <MainLayout />
          }
        >
          <Route path="groups/:groupID" element={<h1>Group</h1>} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
