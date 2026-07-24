import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <Link to="/" className="logo flex-center" style={{ justifyContent: 'flex-start', textDecoration: 'none' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#facc15' }}>المجد</span>
          </Link>
          <p className="footer-desc">
            رواد توريد الأخشاب الطبيعية والصناعية بجودة عالمية وفخامة تلبي طموحاتك.
          </p>
          <div className="social-links">
            <a href="#"><FaFacebook size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaLinkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h3>روابط سريعة</h3>
          <ul>
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/about">من نحن</Link></li>
            <li><Link to="/products">منتجاتنا</Link></li>
            <li><Link to="/contact">اتصل بنا</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>تواصل معنا</h3>
          <ul>
            <li><Phone size={18} className="icon" /> <span style={{ direction: 'ltr', display: 'inline-block' }}>+20 11 27151475</span></li>
            <li><Mail size={18} className="icon" /> <span>info@almagdwoods.com</span></li>
            <li><MapPin size={18} className="icon" /> <a href="https://maps.app.goo.gl/tgdZMvnrbYdhQFsf7" target="_blank" rel="noopener noreferrer">مسلسل 3 - قطعة 76 - طريق الواحات - 6 اكتوبر</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} شركة المجد لتوريدات الأخشاب. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
