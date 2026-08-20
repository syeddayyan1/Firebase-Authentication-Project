"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { GithubAuthProvider} from "firebase/auth";


  // ------------------ for Email or Password ---------------------

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

  // ------------------for Goggle---------------------
  const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);

    router.push("/home");
  } catch (error) {
    alert(error.message);
  }
  };
  

  // ------------------for Github---------------------
  const handleGithubLogin = async () => {
  try {
const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider);

    router.push("/home");
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 px-10 mb-20">
      <div className="w-full max-w-lg">

        {/* Heading */}
        <div className="text-center mb-8 pt-5">
          <h1 className="text-5xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-2">
            Login to continue to Firebase
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">

        <form onSubmit={handleLogin} className="space-y-5">
             {/* Name */}
         <label className="block text-sm font-medium text-slate-700 mb-2">
           Name
        </label>
        
        <input
           type="text"
            placeholder="Enter your name"
            required
           className="w-full px-4 py-2 rounded-lg border border-slate-300 text-slate-700 " />

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 className="w-full px-4 py-2 rounded-lg border border-slate-300
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
                placeholder="••••••••" required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300
                outline-none focus:ring-2 focus:ring-blue-500  text-slate-500"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white
              font-semibold py-2 rounded-lg transition"
            >
              Login
            </button>

            
             <div className="flex items-center gap-4 ">
           <div className="flex-1 h-px bg-slate-300"></div>

           <p className="text-sm font-medium text-slate-400">OR</p>

           <div className="flex-1 h-px bg-slate-300"></div>
         </div>

            <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3
            py-2 px-4 bg-white border border-slate-300 rounded-lg
            text-slate-700 font-semibold hover:bg-slate-50
            transition duration-200 shadow-sm"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-7"
            />

            Continue with Google
            </button>
            
            <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3
            py-2 px-4 bg-white border border-slate-300 rounded-lg
            text-slate-700 font-semibold hover:bg-slate-50
            transition duration-200 shadow-sm"
          >
        <img
          src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          alt="GitHub"
          className="w-5 h-7"
        />

            Continue with Github
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