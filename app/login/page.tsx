"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FiArrowLeft, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

import { Theme } from "@/components/Themes";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Add your credentials sign-in logic here if applicable
    console.log({ email, password });
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative font-sans text-slate-900">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-2xl space-y-6">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <FiArrowLeft /> Back to Home
        </Link>
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <span 
            className="text-xs uppercase font-extrabold tracking-widest px-3 py-1 rounded-full text-slate-900 inline-block"
            style={{ backgroundColor: Theme.secondary }}
          >
            Task_Forge
          </span>
          <h1 className="text-3xl font-extrabold" style={{ color: Theme.primary }}>
            Welcome Back
          </h1>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
            Log in to manage your practical tasks, gigs, and client connections.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs text-slate-500 hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm bg-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-white shadow-lg transition-all text-sm mt-2 cursor-pointer hover:opacity-90"
            style={{ backgroundColor: Theme.primary }}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-4">
          <div className="border-t border-slate-200 w-full" />
          <span className="bg-white px-3 text-[11px] uppercase font-semibold text-slate-400 absolute">
            Or continue with
          </span>
        </div>

        {/* Google Sign-In Button */}
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full py-3.5 px-4 rounded-xl font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-3 text-sm shadow-sm cursor-pointer"
        >
          <FcGoogle className="text-xl" />
          Sign In with Google
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="font-bold text-slate-900 underline hover:text-emerald-700">
            Sign up
          </Link>
        </p>

      </div>
    </main>
  );
}