import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./page/Profile";
import Login from "./page/Login";
import Register from "./page/Register";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; // Sidebar-ni import qilyapmiz

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route
          path="/main"
          element={
            <div className="flex">
              <Sidebar />{" "}
              {/* Sidebar-ni Navbar bilan yonma-yon joylashtiramiz */}
              <div className="flex-1">
                <Navbar />
              </div>
            </div>
          }
        >
          <Route index element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
