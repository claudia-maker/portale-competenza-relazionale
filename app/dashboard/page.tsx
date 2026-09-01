'use client';

import type { FC, SVGProps } from 'react';
import React from 'react';

// --- TYPE DEFINITIONS ---
type IconProps = SVGProps<SVGSVGElement>;

// --- ICON COMPONENTS (SVG) ---
// Per un codice pulito, le icone sono definite come componenti funzionali.

const OverviewIcon: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
);

const LessonsIcon: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.905 59.905 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.172 2.172a12.092 12.092 0 002.172 2.172m15.482 0l2.172 2.172a12.092 12.092 0 01-2.172 2.172" />
  </svg>
);

const ExercisesIcon: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const ProfileIcon: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const LogoutIcon: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
  </svg>
);

const PlayIcon: FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);


// --- UI COMPONENTS ---

const DashboardSidebar: FC = () => {
  const menuItems = [
    { name: 'Panoramica', icon: OverviewIcon, active: true },
    { name: 'Lezioni RCT', icon: LessonsIcon, active: false },
    { name: 'Eserciziari', icon: ExercisesIcon, active: false },
    { name: 'Profilo', icon: ProfileIcon, active: false },
  ];

  return (
    <aside className="bg-gray-900/50 backdrop-blur-sm w-64 min-h-screen p-6 hidden lg:flex flex-col justify-between border-r border-gray-800">
      <div>
        <h1 className="text-2xl font-bold text-champagne mb-12">
          Competenza<span className="block font-light text-gray-300">Relazionale</span>
        </h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                item.active
                  ? 'bg-gold/10 text-gold font-semibold'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
      <div>
        <a
          href="#"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-200"
        >
          <LogoutIcon className="h-6 w-6" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};


const DashboardHeader: FC = () => (
  <header className="mb-12">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 className="text-3xl font-bold text-white">Bentornata nella tua Academy</h2>
        <p className="text-gray-400 mt-1">Dott.ssa Claudia Scilletta</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-gold/10 text-gold text-xs font-bold uppercase px-3 py-1.5 rounded-full border border-gold/30">
          Accesso Riservato
        </span>
      </div>
    </div>
    <div className="mt-8">
        <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-champagne">Avanzamento Globale</span>
            <span className="text-sm font-bold text-white">35%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-champagne to-gold h-2.5 rounded-full" style={{ width: '35%' }}></div>
        </div>
    </div>
  </header>
);

interface ModuleCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ModuleCard: FC<ModuleCardProps> = ({ title, description, imageUrl }) => (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{description}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="w-full text-center px-6 py-3 bg-gold text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-200">
                    Visualizza Modulo
                </button>
                <button className="w-full text-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    Download PDF
                </button>
            </div>
        </div>
    </div>
);


const VideoPlayerPreview: FC = () => (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
        <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
            <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Anteprima lezione Relational Competence Theory" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                 <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300">
                    <PlayIcon className="w-10 h-10 ml-1" />
                </button>
            </div>
        </div>
        <div>
            <p className="text-sm text-gold font-semibold">Lezione Introduttiva</p>
            <h3 className="text-2xl font-bold text-white mt-1">Foundations of Relational Competence Theory</h3>
            <p className="text-gray-400 mt-2">Una panoramica dei principi fondamentali che definiscono le dinamiche relazionali efficaci, basata sulla teoria del 2010.</p>
            <button className="mt-6 w-full sm:w-auto px-8 py-3 bg-gold text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-200">
                Riprendi Lezione
            </button>
        </div>
    </div>
);

// --- MAIN DASHBOARD PAGE COMPONENT ---

export default function DashboardPage() {
  return (
    <div className="bg-background min-h-screen text-main-text font-montserrat flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <DashboardHeader />

          {/* Grid Layout for Content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mt-8">
            
            {/* Left Column: Player and other info */}
            <div className="xl:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-6">Player Formativo</h3>
              <VideoPlayerPreview />
            </div>

            {/* Right Column: Modules */}
            <div className="xl:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-6">I Tuoi Moduli Operativi</h3>
              <div className="space-y-8">
                <ModuleCard 
                    title="Modulo 1: I 5 Ambienti di Vita"
                    description="Analisi strategica degli ambienti fondamentali (Personale, Coppia, Famiglia, Sociale, Professionale) per una leadership relazionale completa."
                    imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}