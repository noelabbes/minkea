import React from 'react';
import { Header } from '@/web/components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
  showDesktopHeader?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, showDesktopHeader = true }) => {
  return (
    <div className="min-h-screen bg-white">
      {showDesktopHeader && <Header />}
      <div className={`flex flex-col items-center w-full ${showDesktopHeader ? 'pt-20' : ''}`}>
        <main className="w-full max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};
