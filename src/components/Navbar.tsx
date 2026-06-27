import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 h-13 flex items-center justify-between h-12">
        {/* Logo */}
        <div className="text-red-500 font-black text-sm tracking-widest flex items-center gap-1">
          ⚡<span className="text-white">BOT</span>LEAGUE
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-zinc-400 hover:text-white text-xs tracking-wide transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-zinc-400 hover:text-white text-xs border border-zinc-700 px-3 py-1.5 rounded-sm transition-colors">
            Login
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-sm transition-colors">
            REGISTER NOW
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="text-zinc-300 text-sm">
              {link}
            </a>
          ))}
          <button className="bg-red-600 text-white text-xs font-bold tracking-widest py-2 rounded-sm">
            REGISTER NOW
          </button>
        </div>
      )}
    </nav>
  );
}
