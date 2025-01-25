import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isGroupsOpen, setIsGroupsOpen] = useState(true);

  const toggleGroups = () => {
    setIsGroupsOpen(!isGroupsOpen);
  };

  return (
    <div className="w-50 bg-gray-100 h-screen p-4 shadow-lg fixed top-16 mt-[17px]">
      {/* Profile Link */}
      <div className="mb-4">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "w-full flex items-center gap-2 p-2 bg-gray-300 rounded"
              : "w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded"
          }
        >
          <span>👤</span> Profile
        </NavLink>
      </div>

      {/* Groups Dropdown */}
      <div>
        <button
          onClick={toggleGroups}
          className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded"
        >
          <span>💬</span> Groups{" "}
          <span
            className={`ml-auto ${
              isGroupsOpen ? "rotate-0" : "-rotate-90"
            } transition-transform`}
          >
            ▼
          </span>
        </button>

        {isGroupsOpen && (
          <div className="pl-4 mt-2 space-y-2 flex flex-col">
            <NavLink
              to="/groups/create"
              className={({ isActive }) =>
                isActive
                  ? "w-full text-left text-blue-600 underline"
                  : "w-full text-left text-blue-600 hover:underline"
              }
            >
              + Create Group
            </NavLink>
            <NavLink
              to="/groups/test2"
              className={({ isActive }) =>
                isActive
                  ? "w-full text-left p-2 bg-gray-300 rounded"
                  : "w-full text-left p-2 hover:bg-gray-200 rounded"
              }
            >
              test2
            </NavLink>
            <NavLink
              to="/groups/test22"
              className={({ isActive }) =>
                isActive
                  ? "w-full text-left p-2 bg-gray-300 rounded"
                  : "w-full text-left p-2 hover:bg-gray-200 rounded"
              }
            >
              test22
            </NavLink>
            <NavLink
              to="/groups/best"
              className={({ isActive }) =>
                isActive
                  ? "w-full text-left p-2 bg-gray-300 rounded"
                  : "w-full text-left p-2 hover:bg-gray-200 rounded"
              }
            >
              best
            </NavLink>
            <NavLink
              to="/groups/test22sdcs"
              className={({ isActive }) =>
                isActive
                  ? "w-full text-left p-2 bg-gray-300 rounded"
                  : "w-full text-left p-2 hover:bg-gray-200 rounded"
              }
            >
              test22sdcs
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
