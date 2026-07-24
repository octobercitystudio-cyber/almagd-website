import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Truck, TreePine } from 'lucide-react';
import { FaCouch, FaChair, FaBed, FaHammer, FaBuilding, FaFacebook } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import './Home.css';

const PartnerLogo = ({ src, alt }) => {
  const [error, setError] = React.useState(false);
  if (error) return null;
  return (
    <div className="partner-logo">
      <img src={src} alt={alt} onError={() => setError(true)} />
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>شركة المجد لتوريد الأخشاب | الرئيسية</title>
        <meta name="description" content="شركة المجد رواد توريد الأخشاب الطبيعية والصناعية في مصر. خشب موسكي، زان، أرو، MDF، أبلكاش، بونتي، ولاتيزانا. توريد لجميع المشاريع في 6 أكتوبر." />
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            شركة المجد <br /> لتوريد الأخشاب
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            شريكك الموثوق في توريد أخشاب الخرسانة والشدات الخشبية بأعلى جودة وأفضل الأسعار.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/products" className="btn btn-primary">استكشف منتجاتنا</Link>
            <Link to="/contact" className="btn btn-secondary glass-btn">تواصل معنا</Link>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding partners-section">
        <div className="container">
          <div className="section-title">
            <h2>شركاء النجاح</h2>
            <p>نفخر بالعمل مع نخبة من الشركات والمؤسسات الرائدة</p>
          </div>
          <div className="slider-container" dir="ltr">
            <div className="slider-track">
              {/* Slide 1 */}
              <div className="slide">
                <PartnerLogo src="/images/partners/logo1.jpg" alt="Partner 1" />
                <PartnerLogo src="/images/partners/logo2.jpg" alt="Partner 2" />
                <PartnerLogo src="/images/partners/logo3.jpg" alt="Partner 3" />
                <PartnerLogo src="/images/partners/logo4.jpg" alt="Partner 4" />
              </div>
              {/* Slide 2 */}
              <div className="slide">
                <PartnerLogo src="/images/partners/logo5.jpg" alt="Partner 5" />
                <PartnerLogo src="/images/partners/logo6.jpg" alt="Partner 6" />
                <PartnerLogo src="/images/partners/logo7.jpg" alt="Partner 7" />
                <PartnerLogo src="/images/partners/logo8.jpg" alt="Partner 8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding about-snippet">
        <div className="container grid-2">
          <div className="about-image-wrapper">
            <img src="/images/concrete_formwork_wood.jpg" alt="أخشاب الخرسانة" className="about-img" />
            <div className="experience-badge glass">
              <span className="number">15+</span>
              <span className="text">عاماً من الخبرة</span>
            </div>
          </div>
          <div className="about-text">
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>من نحن</h4>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>شريكك الموثوق في عالم الأخشاب</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              في شركة المجد لتوريد الأخشاب نؤمن أن نجاح أي مشروع يبدأ من اختيار خامات قوية وموثوقة، لذلك نوفر مجموعة متكاملة من أخشاب الخرسانة والشدات الخشبية التي تلبي احتياجات شركات المقاولات، والمطورين العقاريين، والمقاولين، والأفراد.
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              نحرص على تقديم منتجات عالية الجودة، ومقاسات متنوعة، وأسعار تنافسية، مع سرعة في التوريد والالتزام بمواعيد التسليم، لنكون الشريك الذي يعتمد عليه عملاؤنا في جميع مراحل التنفيذ.
            </p>
            <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>لماذا تختار شركة المجد؟</h4>
            <ul className="features-list">
              <li><CheckCircle size={20} className="icon" /> أجود أنواع أخشاب الخرسانة المستوردة والمحلية</li>
              <li><CheckCircle size={20} className="icon" /> أسعار تنافسية تناسب جميع المشاريع</li>
              <li><CheckCircle size={20} className="icon" /> توريد سريع لجميع أنحاء القاهرة والجيزة والسادس من أكتوبر</li>
              <li><CheckCircle size={20} className="icon" /> خبرة وثقة وخدمة عملاء متميزة</li>
              <li><CheckCircle size={20} className="icon" /> التزام كامل بالجودة والدقة في التنفيذ</li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
              شركة المجد لتوريد الأخشاب… الجودة التي تبني الثقه
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding stats-section">
        <div className="container grid-4">
          <div className="stat-item">
            <Users size={48} className="stat-icon" />
            <h3 className="stat-number">500+</h3>
            <p>عميل سعيد</p>
          </div>
          <div className="stat-item">
            <Award size={48} className="stat-icon" />
            <h3 className="stat-number">100%</h3>
            <p>ضمان الجودة</p>
          </div>
          <div className="stat-item">
            <Truck size={48} className="stat-icon" />
            <h3 className="stat-number">10K+</h3>
            <p>عملية توريد ناجحة</p>
          </div>
          <div className="stat-item">
            <TreePine size={48} className="stat-icon" />
            <h3 className="stat-number">50+</h3>
            <p>نوع خشب متوفر</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>أبرز المنتجات</h2>
            <p>مجموعة متكاملة من أخشاب الخرسانة والشدات الخشبية</p>
          </div>
          <div className="grid-3">
            {/* Product Card 1 */}
            <motion.div className="premium-card product-card" whileHover={{ y: -10 }}>
              <div className="card-img-wrapper">
                <img src="/images/muski_wood_planks.jpg" alt="خشب موسكي" />
              </div>
              <div className="card-content">
                <h3>خشب موسكي (Muski Wood)</h3>
                <p>الأكثر استخداماً في مصر لأعمال النجارة العامة والأبواب والديكورات نظراً لجودته وسعره الاقتصادي.</p>
                <Link to="/products" className="read-more">التفاصيل &larr;</Link>
              </div>
            </motion.div>

            {/* Product Card 2 */}
            <motion.div className="premium-card product-card" whileHover={{ y: -10 }}>
              <div className="card-img-wrapper">
                <img src="/images/whitewood_planks.jpg" alt="خشب بياض" />
              </div>
              <div className="card-content">
                <h3>خشب بياض (Whitewood)</h3>
                <p>خشب خفيف وعملي، يعتمد عليه بكثرة في الشدات الخشبية وأعمال المقاولات والإنشاءات.</p>
                <Link to="/products" className="read-more">التفاصيل &larr;</Link>
              </div>
            </motion.div>

            {/* Product Card 3 */}
            <motion.div className="premium-card product-card" whileHover={{ y: -10 }}>
              <div className="card-img-wrapper">
                <img src="/images/plywood_stack.jpg" alt="خشب كونتر" />
              </div>
              <div className="card-content">
                <h3>خشب كونتر (Blockboard)</h3>
                <p>ألواح خشبية متينة ومقاومة للتقوس، أساسية ومطلوبة بشدة في صناعة الموبيليا والديكور الداخلي.</p>
                <Link to="/products" className="read-more">التفاصيل &larr;</Link>
              </div>
            </motion.div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
              اعرض المزيد
            </Link>
          </div>
        </div>
      </section>




    </div>
  );
};

export default Home;
