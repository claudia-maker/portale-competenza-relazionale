'use client';

import React, { useState } from 'react';
import { 
  Folder, 
  BookOpen, 
  FileText, 
  User, 
  Play, 
  Download, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'panoramica' | 'lezioni' | 'eserciziari' | 'profilo'>('panoramica');
  const [activeVideo, setActiveVideo] = useState<string>('Foundations of Relational Competence Theory');
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);

  const modules = [
    {
      id: 1,
      title: 'I 5 Ambienti di Vita',
      desc: 'Analisi strategica degli ambienti fondamentali (Personale, Coppia, Famiglia, Sociale, Professionale).',
      pdfName: 'Modulo-1-Ambienti-di-Vita.pdf',
      video: 'Lezione 1: I 5 Ambienti di Vita'
    },
    {
      id: 2,
      title: 'Modello E.R.A. (Emotional-Relational Aptitude)',
      desc: 'Gestione dell’ansia di performance, autoregolazione emotiva e stabilità relazionale.',
      pdfName: 'Modulo-2-Modello-ERA.pdf',
      video: 'Lezione 2: Il Modello ERA Applicato'
    },
    {
      id: 3,
      title: 'Stili di Comunicazione & Autovalutazione',
      desc: 'Framework pratico di autovalutazione per la risoluzione dei conflitti e negoziazione.',
      pdfName: 'Modulo-3-Autovalutazione-Relazionale.pdf',
      video: 'Lezione 3: Comunicazione e Risoluzione Conflitti'
    }
  ];

  const handleDownload = (fileName: string) => {
    // Genera e scarica direttamente una traccia riassuntiva del modulo
    const content = `Competenza Relazionale - Academy Executive\nMateriale Didattico: ${fileName}\nDocente: Dott.ssa Claudia Scilletta\n\nContenuto riservato e protetto da copyright.`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName.replace('.pdf', '.txt');
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex min-h-screen bg-[#070a0f] text-slate-100 font-sans">
      {/* Sidebar Laterale */}
      <aside className="w-64 border-r border-[#1e293b] bg-[#0c121e] flex flex-col justify-between p-6">
        <div>
          <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-[#d4af37]">Competenza</span>
              <span>Relazionale</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">Academy Executive</p>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('panoramica')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === 'panoramica'
                  ? 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 shadow-lg shadow-[#d4af37]/5'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Folder className="w-4 h-4" />
              Panoramica
            </button>

            <button
              onClick={() => setActiveTab('lezioni')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === 'lezioni'
                  ? 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 shadow-lg shadow-[#d4af37]/5'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Lezioni RCT
            </button>

            <button
              onClick={() => setActiveTab('eserciziari')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === 'eserciziari'
                  ? 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 shadow-lg shadow-[#d4af37]/5'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <FileText className="w-4 h-4" />
              Eserciziari & PDF
            </button>

            <button
              onClick={() => setActiveTab('profilo')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === 'profilo'
                  ? 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 shadow-lg shadow-[#d4af37]/5'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <User className="w-4 h-4" />
              Profilo Utente
            </button>
          </nav>
        </div>

        <div className="pt-4 border-t border-[#1e293b]">
          <div className="bg-[#131b2e] p-3 rounded-xl border border-slate-800">
            <p className="text-xs text-slate-400">Piattaforma Operativa</p>
            <p className="text-xs font-semibold text-[#d4af37] mt-0.5">Potenzia Te Stesso</p>
          </div>
        </div>
      </aside>

      {/* Area Contenuto Principale */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        {/* Header superiore */}
        <header className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-[#1e293b] gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Bentornata nella tua Academy
            </h2>
            <p className="text-sm text-slate-400 mt-1">Dott.ssa Claudia Scilletta</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30">
              <Sparkles className="w-3.5 h-3.5" />
              ACCESSO RISERVATO
            </span>
          </div>
        </header>

        {/* Barra di avanzamento globale */}
        <div className="mb-10 bg-[#0f172a] p-5 rounded-2xl border border-slate-800/80 shadow-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Avanzamento Globale</span>
            <span className="text-xs font-bold text-[#d4af37]">35% Completato</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] w-[35%] rounded-full transition-all duration-500"></div>
          </div>
        </div>

        {/* VISTA 1: PANORAMICA */}
        {activeTab === 'panoramica' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Player Principale */}
              <div className="lg:col-span-2 bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Play className="w-4 h-4 text-[#d4af37]" />
                    Player Formativo
                  </h3>
                  <span className="text-xs text-slate-400">HD 1080p</span>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center group">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="Cover Formativa"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <button 
                    onClick={() => setVideoPlaying(!videoPlaying)}
                    className="absolute w-16 h-16 rounded-full bg-[#d4af37] text-slate-950 flex items-center justify-center shadow-lg shadow-[#d4af37]/30 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider">Lezione Attiva</span>
                    <p className="text-white font-semibold text-base">{activeVideo}</p>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-[#0a0e17] border border-slate-800/60">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Una panoramica dei principi fondamentali che definiscono le dinamiche relazionali efficaci, basata sulla Relational Competence Theory.
                  </p>
                </div>
              </div>

              {/* Moduli Operativi Rapidi */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">I Tuoi Moduli Operativi</h3>
                {modules.map((mod) => (
                  <div key={mod.id} className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold text-[#d4af37] uppercase">Modulo 0{mod.id}</span>
                      <h4 className="text-sm font-semibold text-white mt-0.5">{mod.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-normal line-clamp-2">{mod.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-800/60">
                      <button 
                        onClick={() => {
                          setActiveVideo(mod.video);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex-1 py-1.5 px-3 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-[#d4af37] hover:text-slate-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Play className="w-3 h-3" /> Guarda
                      </button>
                      <button 
                        onClick={() => handleDownload(mod.pdfName)}
                        className="py-1.5 px-3 rounded-lg text-xs font-medium bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 hover:bg-[#d4af37] hover:text-slate-950 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Download className="w-3 h-3" /> PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VISTA 2: LEZIONI RCT */}
        {activeTab === 'lezioni' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Percorso Formativo Completo RCT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod) => (
                <div key={mod.id} className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] font-bold text-sm mb-4">
                      0{mod.id}
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{mod.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{mod.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveVideo(mod.video);
                      setActiveTab('panoramica');
                    }}
                    className="mt-6 w-full py-2.5 rounded-xl bg-[#d4af37] text-slate-950 text-xs font-bold hover:bg-[#e5c158] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#d4af37]/10"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Avvia Sessione Video
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISTA 3: ESERCIZIARI & PDF */}
        {activeTab === 'eserciziari' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-white">Eserciziari Pratici & Schede di Autovalutazione</h3>
                <p className="text-xs text-slate-400 mt-1">Materiali operativi e protocolli compilabili ad uso esclusivo dei partecipanti.</p>
              </div>
            </div>

            <div className="space-y-3">
              {modules.map((mod) => (
                <div key={mod.id} className="bg-[#0f172a] rounded-xl border border-slate-800 p-4 flex items-center justify-between hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-slate-800 text-[#d4af37]">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{mod.pdfName}</h4>
                      <p className="text-xs text-slate-400">Include schede operative per: {mod.title}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(mod.pdfName)}
                    className="px-4 py-2 rounded-xl bg-[#d4af37] text-slate-950 text-xs font-bold hover:bg-[#e5c158] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Scarica File
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISTA 4: PROFILO */}
        {activeTab === 'profilo' && (
          <div className="max-w-2xl bg-[#0f172a] rounded-2xl border border-slate-800 p-8 space-y-6">
            <h3 className="text-xl font-bold text-white">Profilo Utente & Dati Accesso</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#070a0f] border border-slate-800">
                <span className="text-xs text-slate-500">Nome & Titolo</span>
                <p className="text-sm font-semibold text-white mt-0.5">Dott.ssa Claudia Scilletta</p>
              </div>
              <div className="p-4 rounded-xl bg-[#070a0f] border border-slate-800">
                <span className="text-xs text-slate-500">Livello di Accesso</span>
                <p className="text-sm font-semibold text-[#d4af37] mt-0.5">Accesso Premiere &bull; Relational Competence Academy</p>
              </div>
              <div className="p-4 rounded-xl bg-[#070a0f] border border-slate-800">
                <span className="text-xs text-slate-500">Stato Iscrizione</span>
                <p className="text-sm font-semibold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Attivo & Validato
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
