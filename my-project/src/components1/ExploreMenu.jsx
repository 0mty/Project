import React from 'react'

const ExploreMenu = ({isOpen, onClose}) => {
    if (!isOpen) return null;
 return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 inline-flex rounded-full bg-orange-200 px-4 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-300"
        >
          Close
        </button>

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Featured Menu
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Take a closer look at today's popular dishes
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            This demo menu overview gives customers a quick look at the
            restaurant's featured meals before ordering.
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
              <p className="mb-4 text-sm text-slate-600">{item.description}</p>
              <p className="mb-4 text-xs font-semibold text-slate-500">
                Prep time: {item.prepTime}
              </p>
              <div className="space-y-2">
                {item.extras.map((extra, idx) => (
                  <p key={idx} className="text-xs text-slate-600">
                    • {extra}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 );
};

export default ExploreMenu