import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070a0f] flex flex-col justify-center items-center px-4 text-center selection:bg-[#d4af37]/30 selection:text-white">
      <div className="max-w-2xl">
        <span className="inline-block px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-wider mb-4">
          Academy Executive
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Competenza <span className="text-[#d4af37]">Relazionale</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto">
          Piattaforma formativa avanzata basata sulla Relational Competence Theory e Instructional AI Design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-slate-950 text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-lg shadow-[#d4af37]/20"
          >
            Accedi all’Area Riservata
          </Link>
        </div>
      </div>
    </main>
  );
}
