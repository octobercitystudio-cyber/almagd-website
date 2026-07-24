import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Zap, Shield, Truck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Scissors size={40} />,
      title: 'تقطيع الأخشاب (CNC)',
      desc: 'نمتلك أحدث ماكينات القص والتشكيل (CNC) لتقطيع الألواح بدقة متناهية وحسب المقاسات المطلوبة لمشروعك.'
    },
    {
      icon: <Zap size={40} />,
      title: 'تقشيط الحواف (Edge Banding)',
      desc: 'خدمة لصق وتقشيط الحواف (شريط حرف) باستخدام أفضل أنواع المواد اللاصقة لضمان عمر أطول ومظهر جمالي للألواح.'
    },
    {
      icon: <Shield size={40} />,
      title: 'المعالجة الكيميائية',
      desc: 'معالجة الأخشاب ضد الرطوبة، الحشرات، والفطريات لضمان بقائها قوية وسليمة في جميع الظروف الجوية.'
    },
    {
      icon: <Truck size={40} />,
      title: 'الشحن والتوصيل',
      desc: 'أسطول سيارات مجهز لتوصيل طلبياتك بأمان وفي الوقت المحدد إلى موقع العمل أو مصنعك أينما كنت.'
    }
  ];

  return (
    <div className="services-page">
      <Helmet>
        <title>خدماتنا | شركة المجد لتوريد الأخشاب</title>
        <meta name="description" content="خدمات تقطيع الأخشاب CNC، تقشيط الحواف، والمعالجة الكيميائية للخشب. توريد سريع وتجهيز للأخشاب في مصر والسادس من أكتوبر." />
      </Helmet>
      <section className="page-header">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>خدماتنا</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            نقدم حلولاً متكاملة لتجهيز الأخشاب بأحدث التقنيات لنوفر عليك الوقت والجهد
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card premium-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
