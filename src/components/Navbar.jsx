import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'منتجاتنا', path: '/products' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex-between nav-container">
        <Link to="/" className="logo flex-center">
          <img src="/images/logo.png" alt="لوجو المجد" style={{ height: '70px', objectFit: 'contain' }} />
        </Link>

        <ul className={`nav-links ${isOpen ? 'active glass' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active-link' : ''}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mobile-only">
            <a href="https://wa.me/201127151475" target="_blank" rel="noopener noreferrer" className="btn btn-header" onClick={() => setIsOpen(false)}>
              اطلب عرض سعر
            </a>
          </li>
        </ul>

        <div className="desktop-only">
          <a href="https://wa.me/201127151475" target="_blank" rel="noopener noreferrer" className="btn btn-header">
            اطلب عرض سعر
          </a>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
