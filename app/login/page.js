"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/home");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-2">
            Login to continue to Firebase
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 className="w-full px-4 py-3 rounded-lg border border-slate-300
                outline-none focus:ring-2 focus:ring-blue-500  text-slate-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300
                outline-none focus:ring-2 focus:ring-blue-500  text-slate-500"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white
              font-semibold py-3 rounded-lg transition"
            >
              Login
            </button>

          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => router.push("/")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>

        </div>
      </div>
    </main>
  );
}