import { FOOTER_LINKS } from "../data";

const SOCIAL_ICONS = [
  { label: "YouTube", icon: "▶" },
  { label: "Instagram", icon: "📷" },
  { label: "Facebook", icon: "f" },
  { label: "Twitter", icon: "𝕏" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <p className="text-[10px] font-bold tracking-[2px] uppercase text-zinc-500 mb-4">
              QUICK LINKS
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] font-bold tracking-[2px] uppercase text-zinc-500 mb-4">
              SOCIAL MEDIA
            </p>
            <div className="flex gap-3">
              {SOCIAL_ICONS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-500 hover:text-white text-xs transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-6 text-center">
          <p className="text-zinc-700 text-[10px]">
            © 2025 BotLeague. All rights reserved. India's National Robotics Arena Ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
