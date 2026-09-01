import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0e17] text-[#f9fafb] flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-3xl space-y-6">
        <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase border border-[#d4af37]/30 px-4 py-1.5 rounded-full bg-[#d4af37]/10">
          Academy Executive
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Competenza <span className="text-[#e5c07b]">Relazionale</span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
          Piattaforma formativa avanzata basata sulla Relational Competence Theory.
        </p>
        <div className="pt-4">
          <Link
            href="/dashboard"
            className="inline-block bg-[#d4af37] text-[#0a0e17] font-bold px-8 py-3.5 rounded-lg hover:bg-[#e5c07b] transition-colors shadow-lg shadow-[#d4af37]/20"
          >
            Accedi alla Dashboard Riservata
          </Link>
        </div>
      </div>
    </main>
  );
}