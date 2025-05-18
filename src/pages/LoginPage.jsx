import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../Auth/AuthStore";

const Login = () => {
  const { login, loading, error } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const role = await login(email, password);
    if (role) {
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Masuk ke Akun</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="contoh@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition-colors py-3 rounded-lg font-semibold"
        >
          {loading ? "Masuk..." : "Masuk"}
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Daftar di sini
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
