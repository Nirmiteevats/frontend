import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#112240] to-[#1E3A5F] px-4">

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-8 hover:scale-[1.02] transition-all duration-500">

        <h1 className="text-4xl font-extrabold text-center text-white tracking-wide">
          Welcome Back
        </h1>

        <p className="text-center text-slate-300 mt-2 mb-8">
          Login to continue your journey
        </p>

        <form>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-slate-200 mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl bg-white/15 border border-white/20
              text-white placeholder-slate-400
              focus:outline-none focus:ring-2 focus:ring-emerald-400
              transition-all duration-300"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-slate-200 mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 rounded-xl bg-white/15 border border-white/20
              text-white placeholder-slate-400
              focus:outline-none focus:ring-2 focus:ring-cyan-400
              transition-all duration-300"
            />
          </div>

          {/* Remember Me */}
          <div className="flex justify-between items-center text-sm mb-6 text-slate-300">

            <label className="cursor-pointer hover:text-emerald-300 transition">
              <input
                type="checkbox"
                className="mr-2 accent-emerald-400"
              />
              Remember Me
            </label>

            <a
              href="#"
              className="hover:text-cyan-300 transition"
            >
              Forgot Password?
            </a>

          </div>

          {/* Login Button */}
          <button
            className="w-full py-4 rounded-xl
            bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400
            text-slate-900 font-bold text-lg
            hover:scale-105 hover:shadow-xl
            transition-all duration-300"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-7">
          <div className="flex-1 border-t border-white/20"></div>
          <span className="px-4 text-slate-400 text-sm">
            OR
          </span>
          <div className="flex-1 border-t border-white/20"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">

          <button
            className="py-3 rounded-xl bg-white/10 border border-white/20
            text-white hover:bg-white hover:text-slate-900
            transition-all duration-300"
          >
            Google
          </button>

          <button
            className="py-3 rounded-xl bg-white/10 border border-white/20
            text-white hover:bg-white hover:text-slate-900
            transition-all duration-300"
          >
            GitHub
          </button>

        </div>

        <p className="text-center text-slate-300 mt-8">
          Don't have an account?
          <a
            href="#"
            className="ml-2 text-emerald-300 font-semibold hover:text-cyan-300 transition"
          >
            Sign Up
          </a>
        </p>

      </div>

    </div>
  );
}

export default Login;