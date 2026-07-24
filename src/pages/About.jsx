import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TreePine, Leaf, Recycle } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>من نحن</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            تعرف على شركة المجد، شريكك الموثوق في عالم الأخشاب الطبيعية والصناعية.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid-2">
          <div className="about-image-wrapper">
            <img src="/images/concrete_formwork_wood.jpg" alt="أخشاب الخرسانة" className="about-img" />
            <div className="experience-badge glass">
              <span className="number">15+</span>
              <span className="text">عاماً من الخبرة</span>
            </div>
          </div>
          <div className="about-text">
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>قصتنا</h4>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>شريكك الموثوق في عالم الأخشاب</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              في شركة المجد لتوريد الأخشاب نؤمن أن نجاح أي مشروع يبدأ من اختيار خامات قوية وموثوقة، لذلك نوفر مجموعة متكاملة من أخشاب الخرسانة والشدات الخشبية التي تلبي احتياجات شركات المقاولات، والمطورين العقاريين، والمقاولين، والأفراد.
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              نحرص على تقديم منتجات عالية الجودة، ومقاسات متنوعة، وأسعار تنافسية، مع سرعة في التوريد والالتزام بمواعيد التسليم، لنكون الشريك الذي يعتمد عليه عملاؤنا في جميع مراحل التنفيذ.
            </p>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', marginTop: '2rem' }}>لماذا تختار شركة المجد؟</h4>
            <ul className="features-list">
              <li><CheckCircle size={20} className="icon" /> أجود أنواع أخشاب الخرسانة المستوردة والمحلية</li>
              <li><CheckCircle size={20} className="icon" /> أسعار تنافسية تناسب جميع المشاريع</li>
              <li><CheckCircle size={20} className="icon" /> توريد سريع لجميع أنحاء القاهرة والجيزة والسادس من أكتوبر</li>
              <li><CheckCircle size={20} className="icon" /> خبرة وثقة وخدمة عملاء متميزة</li>
              <li><CheckCircle size={20} className="icon" /> التزام كامل بالجودة والدقة في التنفيذ</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="sus-section grid-2" style={{ alignItems: 'center' }}>
            <div className="sus-text">
              <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>التزامنا نحو كوكبنا (الاستدامة)</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                نحرص على استيراد أخشابنا من غابات تدار بطرق مستدامة (FSC Certified)، مما يضمن عدم الإخلال بالتوازن البيئي. كما نقوم بإعادة تدوير مخلفات الأخشاب والنشارة لتقليل الهدر البيئي إلى أدنى حد ممكن.
              </p>
              
              <div className="sus-features">
                <div className="sus-feature">
                  <TreePine className="icon" size={32} />
                  <div>
                    <h4>غابات مستدامة</h4>
                    <p>دعم الغابات المدارة باحترافية والتي تعيد زراعة الأشجار.</p>
                  </div>
                </div>
                <div className="sus-feature">
                  <Recycle className="icon" size={32} />
                  <div>
                    <h4>إعادة التدوير</h4>
                    <p>استغلال كل قطعة خشب وتقليل الهدر (Zero Waste).</p>
                  </div>
                </div>
                <div className="sus-feature">
                  <Leaf className="icon" size={32} />
                  <div>
                    <h4>مواد آمنة</h4>
                    <p>استخدام غراء ومواد معالجة خالية من المواد السامة والانبعاثات.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sus-image">
              <img src="/images/softwood_planks.jpg" alt="طبيعة مستدامة" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
