export default function Dasgal2() {
  const spans = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "SIXTH", "SEVENTH"];

  const cards = [
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, itaque.",
    },
    {
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minima voluptatem rerum neque nam deleniti fugit voluptatum? Nulla praesentium voluptas dicta veritatis, quibusdam deleniti. Laboriosam fugit consectetur alias exercitationem nulla!",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum officia mollitia veritatis asperiores cumque vitae perspiciatis aut minus quaerat?",
    },
  ];

  return (
    <div className="bg-gray-100 p-6 space-y-10">

      <section>
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Дасгал 2</h1>

        <div className="bg-cyan-400 p-6 rounded">
          <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-4 tracking-tight">
            Дасгал 2
          </h1>

          <div className="bg-white p-20 flex flex-wrap sm:justify-center md:justify-start md:align-content-start">
            {spans.map((label) => (
              <span
                key={label}
                className="border-2 border-black text-white font-bold text-sm whitespace-nowrap px-3 py-0.5 rounded-full bg-cyan-300 bg-opacity-40"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>


      <section>
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Дасгал 3</h1>

        <div className="bg-cyan-400 p-6 rounded">
          <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-6 tracking-tight">
            Дасгал 3
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card, i) => (
              <div key={i} className="bg-white rounded border border-gray-200 flex flex-col">
                <div className="p-4 flex-1">
                  <h2 className="font-bold text-sm text-gray-900 mb-2">Card Heading</h2>
                  <p className="text-xs text-gray-600">{card.body}</p>
                </div>
                <footer className="bg-purple-600 text-white text-xs font-semibold text-center py-2 rounded-b">
                  Card Footer
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}