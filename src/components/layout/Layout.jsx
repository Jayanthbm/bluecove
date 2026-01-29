import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../common/BackToTop';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
