import { FEATURES } from "../data";

export default function WhatIsBotLeague() {
  return (
    <section className="bg-zinc-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-black uppercase tracking-wide mb-8">
          WHAT IS BOTLEAGUE?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Features grid */}
          <div className="grid grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.num}>
                <p className="text-red-500 font-black text-lg mb-1">{f.num}.</p>
                <p className="text-xs font-bold uppercase tracking-wide mb-2">{f.title}</p>
                <p className="text-zinc-500 text-[11px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Graphic placeholder */}
          <img
            src="https://www.generationrobots.com/blog/wp-content/uploads/2016/04/robots-competitions-687x460.jpg"
            alt="BotLeague"
            className="rounded-lg h-70 w-full object-cover opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
