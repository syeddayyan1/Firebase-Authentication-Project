"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      
      router.push("/login");
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-6">
              🔥 Firebase Authentication
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Welcome to your
              <span className="text-blue-500"> Firebase </span>
              App.
            </h1>

            <p className="text-slate-400 text-lg mt-6 max-w-lg">
              You have successfully created an account and logged in.
              Your authentication system is working perfectly.
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleLogout}
                className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold transition"
              >
                Logout
              </button>

              <div className="px-6 py-3 rounded-lg border border-white/10 text-slate-300">
                Authentication ✓
              </div>
            </div>
          </div>

          {/* Right Banner/Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full"></div>

            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl">

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-blue-100 text-sm">
                    Authentication Status
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    Verified ✓
                  </h2>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                  🔐
                </div>
              </div>

              <div className="mt-12 space-y-4">

                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm text-blue-100">
                    Account
                  </p>
                  <p className="font-semibold mt-1">
                    Successfully Logged In
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm text-blue-100">
                    Security
                  </p>
                  <p className="font-semibold mt-1">
                    Firebase Authentication
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}