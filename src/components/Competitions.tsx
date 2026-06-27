import { UPCOMING_EVENTS, PAST_EVENTS } from "../data";

export default function Competitions() {
  return (
    <section className="bg-zinc-900 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-black uppercase tracking-widest mb-6">
          COMPETITIONS & EVENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Live Now */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-red-500 text-[10px] font-bold tracking-widest uppercase">
                LIVE NOW
              </span>
              <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-sm animate-pulse">
                LIVE
              </span>
            </div>
            <div className="bg-zinc-800 border border-zinc-700 rounded-md p-4">
              <p className="font-bold text-sm mb-1">Bengaluru Regionals</p>
              <p className="text-zinc-500 text-[10px] mb-3">Season 01 — Episode 11</p>
              <div className="grid grid-cols-3 gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-zinc-700 rounded h-9 flex items-center justify-center">
                    <div className="w-7 h-5 bg-zinc-600 rounded-sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming */}
          <div>
            <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-3">
              UPCOMING
            </p>
            <div className="space-y-3">
              {UPCOMING_EVENTS.map((evt) => (
                <div key={evt.name} className="bg-zinc-800 border border-zinc-700 rounded-md p-4">
                  <p className="font-bold text-sm mb-2">{evt.name}</p>
                  <div className="flex flex-wrap gap-3 text-[10px] text-zinc-500">
                    <span><strong className="text-zinc-400">Date</strong> {evt.date}</span>
                    <span><strong className="text-zinc-400">Location</strong> {evt.location}</span>
                    <span><strong className="text-zinc-400">Category</strong> {evt.category}</span>
                  </div>
                  <button className="mt-3 bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-sm transition-colors">
                    REGISTER
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Past Results */}
          <div>
            <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-3">
              PAST RESULTS
            </p>
            <div className="space-y-2">
              {PAST_EVENTS.map((evt, i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700/50 rounded-md p-3">
                  <p className="text-sm font-semibold">{evt.name}</p>
                  <p className="text-[10px] text-zinc-600 mt-1">Season 01 results</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
