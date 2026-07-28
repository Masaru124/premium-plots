'use client';

import React from 'react';
import { PlotsProvider } from '../../context/PlotsContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AdminPage from '../../views/AdminPage';

export default function DirectAdminRoute() {
  const [activePage, setActivePage] = React.useState('admin');

  return (
    <PlotsProvider>
      <div className="min-h-screen bg-[#faf9f6] text-[#121824] flex flex-col justify-between selection:bg-[#d4af37] selection:text-white">
        <div>
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          <main className="animate-fadeIn">
            <AdminPage />
          </main>
        </div>
        <Footer setActivePage={setActivePage} />
      </div>
    </PlotsProvider>
  );
}
