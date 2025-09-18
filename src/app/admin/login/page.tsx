"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function AdminLoginPage() {
  const [email, setEmail] = useState<string>("");   // ✅ type safety
  const [password, setPassword] = useState<string>(""); // ✅ type safety
  const [loading, setLoading] = useState<boolean>(false); // ✅ type safety
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => { // ✅ proper type
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
     console.error("Login error:", error); // 👈 Removes warning + helps debugging
  toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <motion.form
        onSubmit={handleLogin}
        className="backdrop-blur-md bg-gray-800/60 p-8 rounded-2xl shadow-lg w-96 border border-gray-700"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
          🔐 Admin Login
        </h2>

        {/* Email */}
        <div className="relative mb-5">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
            className="peer w-full p-3 rounded-lg bg-gray-700 text-white placeholder-transparent border border-gray-600 focus:border-blue-400 outline-none"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-3 text-gray-400 text-sm transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
              peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-300
              peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-blue-300"
          >
            Email
          </label>
        </div>

        {/* Password */}
        <div className="relative mb-5">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
            className="peer w-full p-3 rounded-lg bg-gray-700 text-white placeholder-transparent border border-gray-600 focus:border-blue-400 outline-none"
            placeholder="Password"
          />
          <label
            htmlFor="password"
            className="absolute left-3 top-3 text-gray-400 text-sm transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
              peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-300
              peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-blue-300"
          >
            Password
          </label>
        </div>

        {/* Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: !loading ? 1.05 : 1 }}
          whileTap={{ scale: !loading ? 0.95 : 1 }}
          className={`w-full ${
            loading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
          } text-white py-3 rounded-lg font-semibold shadow-md transition-all`}
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>
      </motion.form>
    </div>
  );
}
