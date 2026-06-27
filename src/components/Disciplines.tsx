import { DISCIPLINES } from "../data";

export default function Disciplines() {
  return (
    <section className="bg-zinc-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-red-500 text-[10px] tracking-[3px] uppercase mb-1">SPORTS</p>
        <h2 className="text-2xl font-black uppercase tracking-wide mb-6">
          COMPETITION DISCIPLINES
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {DISCIPLINES.map((d) => (
            <div
              key={d.name}
              className={`relative rounded-md overflow-hidden cursor-pointer group ${
                d.span ? "col-span-2" : ""
              }`}
            >
             <img
                src={d.img}
                alt={d.name}
                className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-3 text-white text-xs font-bold">{d.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
