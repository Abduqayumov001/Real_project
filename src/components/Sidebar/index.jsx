import React, { useState } from "react";

function Sidebar() {
  const [isGroupsOpen, setIsGroupsOpen] = useState(true);

  const toggleGroups = () => {
    setIsGroupsOpen(!isGroupsOpen);
  };

  return (
    <div className="w-50 bg-gray-100 h-screen p-4 shadow-lg fixed top-16 mt-[17px]">
      <div className="mb-4">
        <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
          <span>👤</span> Profile
        </button>
      </div>

      <div>
        <button
          onClick={toggleGroups}
          className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded"
        >
          <span>💬</span> Groups{" "}
          <span className={`ml-auto ${isGroupsOpen ? "rotate-0" : "-rotate-90"} transition-transform`}>
            ▼
          </span>
        </button>
        {isGroupsOpen && (
          <div className="pl-4 mt-2 space-y-2">
            <button className="w-full text-left text-blue-600 hover:underline">
              + Create Group
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
              test2
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
              test22
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
              best
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
              test22sdcs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
