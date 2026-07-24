import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>اتصل بنا</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            فريقنا مستعد دائماً للرد على استفساراتك وتلبية طلباتك بأسرع وقت
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper premium-card">
              <h3 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>أرسل رسالة</h3>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>الاسم بالكامل</label>
                  <input type="text" required placeholder="أدخل اسمك" />
                </div>
                <div className="form-group">
                  <label>البريد الإلكتروني</label>
                  <input type="email" required placeholder="أدخل بريدك الإلكتروني" />
                </div>
                <div className="form-group">
                  <label>رقم الهاتف</label>
                  <input type="tel" placeholder="أدخل رقم هاتفك" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label>الرسالة</label>
                  <textarea rows="5" required placeholder="كيف يمكننا مساعدتك؟"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ gridColumn: '1 / -1' }}>إرسال الرسالة</button>
              </form>
            </div>

            <div className="contact-info premium-card">
              <h3 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>معلومات التواصل</h3>
              
              <div className="info-item">
                <Phone className="icon" size={24} />
                <div>
                  <h4>رقم الهاتف</h4>
                  <p style={{ direction: 'ltr', textAlign: 'right', fontWeight: 'bold' }}>+20 11 27151475</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="icon" size={24} />
                <div>
                  <h4>البريد الإلكتروني</h4>
                  <p style={{ fontWeight: 'bold' }}>info@almagdwoods.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <MapPin className="icon" size={24} />
                <div>
                  <h4>المقر الرئيسي</h4>
                  <p style={{ lineHeight: '1.6', fontWeight: 'bold' }}>مسلسل 3 - قطعة 76 - طريق الواحات مباشر - 6 اكتوبر - الجيزة - مصر</p>
                </div>
              </div>

              <div className="map-container" style={{ marginTop: '2rem' }}>
                <iframe 
                  title="Google Maps Location"
                  src="https://maps.google.com/maps?q=%D9%85%D8%B3%D9%84%D8%B3%D9%84%203%20%D9%82%D8%B7%D8%B9%D8%A9%2076%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%88%D8%A7%D8%AD%D8%A7%D8%AA%206%20%D8%A7%D9%83%D8%AA%D9%88%D8%A8%D8%B1&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0, borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
