// AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin({ setIsAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email === "admin@sangar.com" && password === "password123") {
      setIsAdmin(true);
      navigate("/admin-dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-10 rounded-xl shadow-lg w-96 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-center font-poppins">Admin Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 font-poppins"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 font-poppins"
        />
        <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition font-poppins">Login</button>
      </form>
    </section>
  );
}
