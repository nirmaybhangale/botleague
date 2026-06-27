export default function Hero() {
  return (
    <section className="relative min-h-[340px] flex items-center overflow-hidden bg-zinc-950">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-red-950/20 to-zinc-950 pointer-events-none" />

      {/* Arena image placeholder */}
      <img
        src="https://t3.ftcdn.net/jpg/05/77/82/70/360_F_577827031_q4oTTPH7KIzBA1WRxJuKle6FXFvhYg4V.jpg"
        alt="Robotics Arena"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-[44%] h-[400px] rounded-lg object-cover hidden md:block opacity-60"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-14 md:py-20 w-full">
        {/* Live ticker */}
        <p className="flex items-center gap-2 text-red-500 text-[10px] tracking-[2px] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Episode 11 | Bengaluru Regionals — Watch Live
        </p>

        <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-4 tracking-tight">
          INDIA'S ULTIMATE
          <br />
          <span className="text-yellow-400">ROBOTICS</span> ARENA
        </h1>

        <p className="text-zinc-500 text-sm mb-8 max-w-xs">
          Build. Compete. Rank. The National Ecosystem for Robotics Arena.
        </p>

        <div className="flex gap-3 flex-wrap">
          <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-colors">
            CREATE ACCOUNT
          </button>
          <button className="border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-colors">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
    </section>
  );
}
