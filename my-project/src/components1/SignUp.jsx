import React, { useState } from "react";

const SignUp = ({ isOpen, onClose, onBookTableClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-y-auto bg-black/50 p-4">
      <div className="relative w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 inline-flex rounded-full bg-orange-200 px-4 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-300"
        >
          Close
        </button>

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Welcome Back
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Login to manage your bookings
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Check your reservations, update your details, and keep track of your
            favorite menu selections.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm placeholder-slate-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm placeholder-slate-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="mt-6 w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Need to book a table first?{" "}
          <button
            onClick={() => {
              onClose();
              onBookTableClick();
            }}
            className="font-semibold text-orange-500 transition hover:text-orange-600"
          >
            Book Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
