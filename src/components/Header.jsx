import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../Auth/AuthStore";

const Header = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 w-full fixed top-0 left-0 z-50 h-16 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-yellow-300 transition duration-200"
        >
          Lammveloka
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-white opacity-80 hover:opacity-100 hover:text-yellow-300 transition"
          >
            Beranda
          </Link>
          <Link
            to="/destinasi"
            className="text-white opacity-80 hover:opacity-100 hover:text-yellow-300 transition"
          >
            Destinasi Wisata
          </Link>
          <Link
            to="/about-us"
            className="text-white opacity-80 hover:opacity-100 hover:text-yellow-300 transition"
          >
            Tentang Kami
          </Link>
          <Link
            to="/kontak"
            className="text-white opacity-80 hover:opacity-100 hover:text-yellow-300 transition"
          >
            Kontak Kami
          </Link>

          {user ? (
            <Link
              to="/profile"
              className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
