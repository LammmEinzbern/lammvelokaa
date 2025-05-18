import React, { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destinasi from "./pages/Destinasi";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import useAuthStore from "./Auth/AuthStore";
import DestinationDetail from "./pages/DestinationsDetail";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  const checkSession = useAuthStore((state) => state.checkSession);

  useEffect(() => {
    checkSession(); // ✅ Ambil sesi login pas pertama kali buka app
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinasi" element={<Destinasi />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/kontak" element={<ContactUs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/destinasi/:id" element={<DestinationDetail />} />
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedAdminRoute>
            <AdminDashboard />
          </ProtectedAdminRoute>
        }
      />
    </Routes>
  );
};

export default App;
