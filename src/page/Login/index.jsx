// 📌 Barcha kerakli kutubxonalarni import qilish
import axios from "axios"; // 🔄 API so‘rovlarini yuborish uchun Axios kutubxonasi
import { ErrorMessage, Form, Field, Formik } from "formik"; // 🛠️ Formani boshqarish va validatsiya qilish uchun Formik
import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // 🚀 Sahifalar orasida yo‘nalishlarni o‘zgartirish uchun
import { toast } from "react-toastify"; // 🔔 Xabar berish uchun Toastify
import * as Yup from "yup"; // ✅ Formani validatsiya qilish uchun Yup

// ✅ Formani validatsiya qilish uchun Yup obyekt yaratish
const validationSchema = Yup.object({
  username: Yup.string()
  .min(6, "At least 6 characters") // ✍️ Username kamida 6 ta harfdan iborat bo‘lishi kerak
  .max(10, "No more than 10 characters") // 🔢 Maksimal uzunlik - 10 ta belgi
  .required("Username is required"), // 🚨 Username majburiy maydon
  
  password: Yup.string()
  .min(6, "At least 6 characters") // 🔑 Parol kamida 6 ta belgidan iborat bo‘lishi kerak
  .required("Password is required"), // 🚨 Parol ham majburiy maydon
});

// 📌 Login komponenti
function Login() {
  // 📝 Formaning boshlang‘ich qiymatlari
  const initialValues = {
    username: "",
    password: "",
  };
  
  const navigate = useNavigate(); // 🔄 Foydalanuvchini boshqa sahifaga yo‘naltirish uchun hook
  
  // 🔑 Foydalanuvchini tizimga kiritish uchun funksiya
  const onSubmit = async (values) => {
    try {
      const { username, password } = values; // 📩 Foydalanuvchidan olingan ma'lumotlar
      console.log(username, password); // 🖥️ Konsolga chiqarish (test maqsadida)
      
      // 🔄 Backend API'ga so‘rov yuborish
      const response = await axios.post(
        "https://nt-shopping-list.onrender.com/api/auth",
        { username, password }
      );
      
      // ✅ Agar muvaffaqiyatli login qilinsa:
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // 🔐 Tokenni localStorage'da saqlash
        toast.success("Signed in successfully!"); // 🎉 Muvaffaqiyatli login xabari
        navigate("/main"); // 🚀 Foydalanuvchini `/main` sahifasiga yo‘naltirish
      }
    } catch (err) {
      toast.error("Failed to sign in. Please check your credentials!"); // ❌ Xatolik xabari
    }
  };
  
  // 🔄 Agar foydalanuvchi allaqachon tizimga kirgan bo‘lsa, uni `/main` ga yo‘naltirish
  if (localStorage.getItem("accessToken")) {
    navigate("/main");
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
    {/* 📌 Login oynasi */}
    <div className="flex bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[70%] lg:w-[50%]">
    {/* 🛒 Chap tomonda Shopping List logotipi */}
    <div className="w-1/2 bg-black flex flex-col items-center justify-center p-5">
    <h1 className="text-3xl font-bold">Shopping List</h1>
    <p className="mt-4 text-gray-400">Welcome back to</p>
    </div>
    
    {/* 🔐 Login formasi */}
    <div className="w-1/2 p-8">
    <h2 className="text-2xl font-bold text-blue-500 mb-4">Sign In</h2>
    
    {/* 📝 Formik yordamida formani boshqarish */}
    <Formik
    initialValues={initialValues} // 🔢 Formaning boshlang‘ich qiymatlari
    validationSchema={validationSchema} // ✅ Yup validatsiyasi
    onSubmit={onSubmit} // 📩 Formani jo‘natish funksiyasi
    >
    {() => (
      <Form className="flex flex-col gap-4">
      {/* 🏷 Username input maydoni */}
      <div>
      <label htmlFor="username" className="block text-sm mb-1">
      Username
      </label>
      <Field
      type="text"
      name="username"
      className="p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      <ErrorMessage
      name="username"
      component="div"
      className="text-red-500 text-sm mt-1"
      />
      </div>
      
      {/* 🔑 Password input maydoni */}
      <div>
      <label htmlFor="password" className="block text-sm mb-1">
      Password
      </label>
      <Field
      type="password"
      name="password"
      className="p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      <ErrorMessage
      name="password"
      component="div"
      className="text-red-500 text-sm mt-1"
      />
      </div>
      
      {/* 🔘 Kirish tugmasi */}
      <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
      >
      Sign In
      </button>
      </Form>
    )}
    </Formik>
    
    {/* 📝 Ro‘yxatdan o‘tish uchun link */}
    <div className="mt-4 text-sm text-gray-400">
    <p>
    No account yet?{" "}
    <NavLink to="/register" className="text-blue-500 hover:underline">
    Create one.
    </NavLink>
    </p>
    </div>
    </div>
    </div>
    </div>
  );
}

// 📌 Login komponentini eksport qilish
export default Login;
