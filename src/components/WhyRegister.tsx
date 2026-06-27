import { ADVANTAGES, LEADERBOARD } from "../data";

export default function WhyRegister() {
  return (
    <section className="bg-zinc-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-red-500 text-[10px] tracking-[3px] uppercase mb-1">WHY REGISTER?</p>
        <h2 className="text-2xl font-black uppercase tracking-wide mb-8">THE LEAGUE ADVANTAGE</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Advantages */}
          <div className="space-y-5">
            {ADVANTAGES.map((adv) => (
              <div key={adv.title} className="flex gap-4 items-start">
                <div className="w-9 h-9 min-w-[36px] rounded-full bg-red-500/10 flex items-center justify-center text-base">
                  {adv.icon}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wide mb-1">{adv.title}</p>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Leaderboard */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🔵</span>
              <span className="text-yellow-400 text-[10px] font-bold tracking-[2px] uppercase">
                LEADERBOARD
              </span>
            </div>

            <div className="text-center py-4">
              <p className="text-3xl font-black text-yellow-400 tracking-tight">508,754</p>
              <p className="text-zinc-500 text-[10px] mt-1">Total Points This Season</p>
            </div>

            <div className="space-y-2">
              {LEADERBOARD.map((entry) => (
                <div
                  key={entry.rank}
                  className="flex items-center gap-3 bg-zinc-800 rounded px-3 py-2"
                >
                  <span className="text-[10px] text-zinc-500 w-5">#{entry.rank}</span>
                  <div className={`w-6 h-6 rounded-full ${entry.color}`} />
                  <span className="text-xs text-zinc-300 flex-1">{entry.name}</span>
                  <span className="text-xs font-bold text-yellow-400">
                    {entry.points.toLocaleString()}
                  </span>
                  <span className={`text-[10px] ${entry.up ? "text-green-400" : "text-red-400"}`}>
                    {entry.up ? "▲" : "▼"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
