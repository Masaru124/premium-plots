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
      <div className="min-h-svh bg-[#0B192C] text-[#FBFBFD] flex flex-col justify-between selection:bg-[#D4AF37] selection:text-[#0B192C]">
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
