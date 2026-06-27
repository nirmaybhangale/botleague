import { JOURNEY_STEPS } from "../data";

export default function UserJourney() {
  return (
    <section className="bg-zinc-950 py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-red-500 text-[10px] tracking-[3px] uppercase mb-2">USER JOURNEY</p>
        <h2 className="text-2xl font-black uppercase tracking-wide mb-12">
          YOUR PATH TO THE LEAGUE
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-center">
          {JOURNEY_STEPS.map((step, i) => (
            <div key={step.step} className="flex-1 flex flex-col items-center relative">
              {/* Connector line */}
              {i < JOURNEY_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-7 left-1/2 w-full h-px bg-zinc-800 z-0" />
              )}

              {/* Circle */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-zinc-900 border-2 border-red-600 flex items-center justify-center text-2xl mb-3">
                {step.icon}
              </div>

              <p className="text-[9px] text-zinc-600 tracking-widest uppercase mb-1">
                STEP {step.step}
              </p>
              <p className="text-[10px] font-bold text-zinc-300 uppercase text-center leading-snug max-w-[90px]">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
