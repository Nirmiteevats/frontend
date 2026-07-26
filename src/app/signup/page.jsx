import React from "react";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#112240] to-[#1E3A5F] relative overflow-hidden px-4">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-[160px]"></div>

      {/* Signup Card */}
      <div className="relative w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] p-8 hover:scale-[1.02] transition-all duration-500">

        <h1 className="text-4xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-center text-slate-300 mt-2 mb-8">
          Join us and start your journey today ✨
        </p>

        <form>

          {/* Full Name */}
          <div className="mb-5">
            <label className="block text-slate-200 mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20
              text-white placeholder-slate-400
              focus:outline-none focus:ring-2 focus:ring-emerald-400
              transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-slate-200 mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20
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
              placeholder="Create a password"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20
              text-white placeholder-slate-400
              focus:outline-none focus:ring-2 focus:ring-cyan-400
              transition-all duration-300"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-slate-200 mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20
              text-white placeholder-slate-400
              focus:outline-none focus:ring-2 focus:ring-cyan-400
              transition-all duration-300"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start text-sm text-slate-300 mb-6">

            <input
              type="checkbox"
              className="mt-1 mr-3 accent-emerald-400"
            />

            <span>
              I agree to the{" "}
              <a
                href="#"
                className="text-emerald-300 hover:text-cyan-300"
              >
                Terms & Conditions
              </a>
            </span>

          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl
            bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400
            text-slate-900 font-bold text-lg
            hover:scale-105 hover:shadow-xl
            transition-all duration-300"
          >
            Create Account
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-7">
          <div className="flex-1 border-t border-white/20"></div>
          <span className="mx-4 text-slate-400 text-sm">OR</span>
          <div className="flex-1 border-t border-white/20"></div>
        </div>

        {/* Social Signup */}
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

        {/* Login Link */}
        <p className="text-center text-slate-300 mt-8">
          Already have an account?
          <a
            href="#"
            className="ml-2 text-emerald-300 font-semibold hover:text-cyan-300 transition"
          >
            Login
          </a>
        </p>

      </div>

    </div>
  );
}

export default Signup;