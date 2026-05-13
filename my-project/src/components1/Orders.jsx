import React, { useState } from "react";
import { menuDetails } from "./data";
import { dishes } from "./data";
import { useOrders } from "./OrderContext";

const Orders = ({ isOpen, onClose }) => {
  const { orders, removeOrder, addOrder } = useOrders();
  const [showAddFood, setShowAddFood] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 h-screen w-screen flex items-center justify-center">
      <div className="relative h-full w-screen md:w-auto bg-white md:p-10 overflow-auto">
        <div className="absolute right-6 top-6 flex gap-4">
          <button
            onClick={() => setShowAddFood(true)}
            className="inline-flex rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            + Add Food
          </button>
          <button
            onClick={onClose}
            className="inline-flex rounded-sm border-1 border-black bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-300"
          >
            Back to home
          </button>
        </div>
        <div className="mb-8 text-start">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            my orders
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            your recent food orders
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Review your current and previous orders with quick status updates
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="mb-12 flex flex-col items-center justify-center rounded-lg bg-slate-50 py-12 text-center">
            <p className="text-lg font-semibold text-slate-600">
              No food added yet
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Click the + Add Food button to add dishes to your order list.
            </p>
          </div>
        ) : (
          <div className="mb-12 grid gap-8 md:grid-cols-2 text-start">
            {orders.map((item) => (
              <div key={item.id} className="rounded-lg bg-slate-50 p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                      {item.order}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <p className="mb-4 text-xs font-semibold text-slate-500">
                  Estimated time: {item.prepTime}
                </p>
                <p className="mb-6">
                  <span className="font-semibold text-slate-900">Total:</span>{" "}
                  {item.price}
                </p>
                <button
                  onClick={() => removeOrder(item.id)}
                  className="w-full rounded-md border-2 border-red-500 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Popular dishes
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.id}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fff8f0] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-64 overflow-hidden rounded-t-[2rem] bg-slate-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {dish.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {dish.description}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-orange-500">
                    {dish.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showAddFood && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl">
              <button
                onClick={() => setShowAddFood(false)}
                className="absolute right-6 top-6 inline-flex rounded-full bg-orange-200 px-4 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-300"
              >
                Close
              </button>

              <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                  Add Food
                </p>
                <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
                  Choose from popular dishes
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Pick one of the available dishes and add it to your orders.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {menuDetails.map((item) => (
                  <div key={item.id} className="rounded-lg bg-slate-50 p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-600">{item.serving}</p>
                      </div>
                      <span className="text-lg font-bold text-orange-500">
                        {item.price}
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-slate-600">
                      {item.description}
                    </p>
                    <p className="mb-4 text-xs font-semibold text-slate-500">
                      Prep time: {item.prepTime}
                    </p>
                    <div className="space-y-2 mb-4">
                      {item.extras.map((extra, idx) => (
                        <p key={idx} className="text-xs text-slate-600">
                          • {extra}
                        </p>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        addOrder(item);
                      }}
                      disabled={orders.some((o) => o.id === item.id)}
                      className="w-full rounded-md bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-600 disabled:bg-slate-300 disabled:cursor-not-allowed"
                    >
                      {orders.some((o) => o.id === item.id)
                        ? "Added"
                        : "Add to My Orders"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
