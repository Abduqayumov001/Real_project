import React, { useState } from "react"; // React kutubxonasi va useState hook'i
import "./main.css"; // CSS faylni import qilish
import { Outlet, useNavigate } from "react-router-dom"; // `Outlet` sahifalar joylashishi uchun, `useNavigate` esa yo‘nalishlarni o‘zgartirish uchun.
import Logo from "../../assets/logo.png"; // Logotip rasmi
import images from "../../assets/images.png"; // Bildirishnomalar ikonka rasmi
import uve from "../../assets/uve.png"; // Foydalanuvchi ikonkasi
import nastr from "../../assets/nastr.png"; // Sozlamalar ikonkasi

function Navbar() {
  const navigate = useNavigate(); // 🔄 Sahifalar orasida o‘tish uchun React Router `useNavigate` hook'i
  const [dropdownOpen, setDropdownOpen] = useState(false); // 🟡 Dropdown menyuni ochish/yopish uchun holat (state)

  return (
    <>
      {/* 🏠 Navbar asosiy qismi */}
      <div className="Wrapper bg-white shadow-md py-4 px-6 flex justify-between items-center">
        {/* 🏷️ Logo va "New" tugmasi qismi */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="w-15 h-auto" />{" "}
          {/* 📌 Logotip */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            + New {/* 🆕 Yangi narsa qo‘shish tugmasi */}
          </button>
        </div>

        {/* 🔍 Qidiruv input qismi */}
        <input
          type="text"
          placeholder="Search group and join..." // 👀 Qidiruv uchun yozuv
          className="flex-1 mx-6 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />

        {/* ⚙️ Profil va sozlamalar tugmalari */}
        <div className="flex items-center space-x-4 relative">
          {/* 🔔 Bildirishnomalar tugmasi */}
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <img src={images} alt="" width={20} />{" "}
            {/* 📩 Bildirishnoma ikonka rasmi */}
          </button>

          {/* 👤 Foydalanuvchi tugmasi */}
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <img src={uve} alt="" width={20} />{" "}
            {/* 🏷️ Profil rasmini ko‘rsatish */}
          </button>

          {/* ⚙️ Sozlamalar menyusi */}
          <div className="relative">
            <button
              className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
              onClick={() => setDropdownOpen(!dropdownOpen)} // 🔄 Dropdown menyuni ochish/yopish
            >
              <img src={nastr} alt="" width={20} />{" "}
              {/* ⚙️ Sozlamalar ikonka rasmi */}
            </button>

            {/* 🔽 Agar dropdownOpen true bo‘lsa, menyuni ko‘rsatamiz */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    localStorage.removeItem("accessToken"); // 🔑 LocalStorage'dan accessToken'ni o‘chirish (logout)
                    navigate("/login"); // 🔄 Foydalanuvchini login sahifasiga yo‘naltirish
                  }}
                >
                  Log out {/* 🚪 Chiqish tugmasi */}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar; // 🟢 Navbar komponentini eksport qilish
