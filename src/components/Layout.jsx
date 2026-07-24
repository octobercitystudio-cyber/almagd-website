import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { FaWhatsapp } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 400px)' }}>
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/201127151475" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="تواصل معنا على واتساب"
      >
        <FaWhatsapp size={35} />
      </a>
    </>
  );
};

export default Layout;
