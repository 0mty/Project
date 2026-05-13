import React, { useState } from "react";
import authContent from "./data2";

const AuthModal = ({ isOpen, onClose, mode = "login", onToggleMode }) => {
  const content = authContent[mode];
  const [formData, setFormData] = useState({});

  if (!isOpen) return null;

  const handleInputChange = (label, value) => {
    setFormData((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  const handleSecondaryAction = () => {
    onToggleMode();
  };

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
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            {content.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            {content.description}
          </p>
        </div>

        <form className="space-y-4">
          {content.fields.map((field) => (
            <div key={field.label}>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                value={formData[field.label] || ""}
                onChange={(e) => handleInputChange(field.label, e.target.value)}
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm placeholder-slate-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
          ))}

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="mt-6 w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            {content.primaryLabel}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          {content.secondaryText}{" "}
          <button
            onClick={handleSecondaryAction}
            className="font-semibold text-orange-500 transition hover:text-orange-600"
          >
            {content.secondaryAction}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
