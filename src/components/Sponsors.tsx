import { SPONSORS } from "../data";

export default function Sponsors() {
  return (
    <section className="bg-zinc-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-black uppercase tracking-wide mb-6">SPONSORS</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {SPONSORS.map((s, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-md p-4 flex flex-col items-center gap-2"
            >
              <div className="w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center text-base">
                {s.icon}
              </div>
              <p className="text-[9px] font-bold tracking-wide text-zinc-500 text-center uppercase">
                {s.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
