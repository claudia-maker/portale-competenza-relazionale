import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Competenza Relazionale | Academy Executive',
  description: 'Portale riservato e percorsi formativi di Relational Competence - Dr.ssa Claudia Scilletta',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-[#0a0e17] text-[#f9fafb] min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}