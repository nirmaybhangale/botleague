import { ChevronRight } from "lucide-react";
import { CATEGORIES } from "../data";

export default function Categories() {
  return (
    <section className="bg-zinc-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-black uppercase tracking-wide mb-6">CATEGORIES</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="bg-zinc-900 border border-zinc-800 hover:border-yellow-500 rounded-md p-4 transition-colors cursor-pointer"
            >
              <div className="w-9 h-9 bg-yellow-500/10 rounded flex items-center justify-center text-lg mb-3">
                {cat.icon}
              </div>
              <p className="text-xs font-black uppercase tracking-wide mb-2">{cat.name}</p>
              <p className="text-zinc-500 text-[10px] leading-relaxed mb-3">{cat.desc}</p>
              <span className="text-red-500 text-[10px] font-bold tracking-widest uppercase flex items-center gap-1">
                LEARN MORE <ChevronRight size={10} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
