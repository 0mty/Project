import React, { useState } from "react";
import authContent from "./data2";

const BookTable = ({ isOpen, onClose, onLoginClick }) => {
  const content = authContent.booking;
  const [tables, setTables] = useState([
    { id: 1, seats: 2, booked: false },
    { id: 2, seats: 4, booked: true },
    { id: 3, seats: 2, booked: false },
    { id: 4, seats: 4, booked: false },
    { id: 5, seats: 6, booked: true },
    { id: 6, seats: 2, booked: false },
    { id: 7, seats: 4, booked: false },
    { id: 8, seats: 6, booked: false },
    { id: 9, seats: 2, booked: true },
    { id: 10, seats: 4, booked: false },
    { id: 11, seats: 6, booked: false },
    { id: 12, seats: 2, booked: false },
  ]);

  const handleTableClick = (id) => {
    setTables(
      tables.map((table) =>
        table.id === id && !table.booked ? { ...table, booked: true } : table,
      ),
    );
  };

  const bookedCount = tables.filter((t) => t.booked).length;
  const availableCount = tables.length - bookedCount;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-y-auto bg-black/50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl">
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
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {content.description}
          </p>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-emerald-50 p-4 text-center">
            <p className="text-sm font-semibold text-slate-600">Available</p>
            <p className="text-3xl font-bold text-emerald-600">
              {availableCount}
            </p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 text-center">
            <p className="text-sm font-semibold text-slate-600">Booked</p>
            <p className="text-3xl font-bold text-orange-600">{bookedCount}</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 text-center">
            <p className="text-sm font-semibold text-slate-600">Total</p>
            <p className="text-3xl font-bold text-blue-600">{tables.length}</p>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-4 gap-4 sm:grid-cols-6">
          {tables.map((table) => (
            <button
              key={table.id}
              onClick={() => handleTableClick(table.id)}
              disabled={table.booked}
              className={`relative flex flex-col items-center justify-center rounded-lg p-4 font-semibold transition ${
                table.booked
                  ? "cursor-not-allowed bg-orange-200 text-orange-700"
                  : "cursor-pointer bg-emerald-200 text-emerald-700 hover:bg-emerald-300"
              }`}
            >
              <span className="text-lg">T{table.id}</span>
              <span className="text-xs">{table.seats}p</span>
              {table.booked && (
                <span className="mt-2 inline-block text-xs font-bold">
                  ✓ Booked
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border-2 border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-50"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            {content.primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
