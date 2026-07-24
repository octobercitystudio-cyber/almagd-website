import React from 'react';
import { motion } from 'framer-motion';
import './Products.css';

const Products = () => {
  const products = [
    { id: 1, name: 'خشب موسكي (Muski Wood)', category: 'لين', image: '/images/muski_wood_planks.jpg', desc: 'الأكثر استخداماً في مصر لأعمال النجارة العامة والأبواب والديكورات.' },
    { id: 2, name: 'خشب بياض (Whitewood)', category: 'لين', image: '/images/whitewood_planks.jpg', desc: 'خشب خفيف وعملي، يعتمد عليه بكثرة في الشدات الخشبية وأعمال المقاولات.' },
    { id: 3, name: 'خشب بونتي (Bonty Wood)', category: 'لين', image: '/images/bonty_wood_planks.jpg', desc: 'أخشاب متينة مخصصة للأحمال الثقيلة في الشدات الخشبية للخرسانة.' },
    { id: 4, name: 'خشب لتزانة (Latizana)', category: 'لين', image: '/images/latizana_boards.jpg', desc: 'ألواح لتزانة بمقاسات متنوعة لضمان دقة تنفيذ القوالب الخرسانية.' },
    { id: 5, name: 'خشب زان (Beech)', category: 'صلب', image: '/images/hardwood_planks.jpg', desc: 'يتميز بصلابته ومقاومته العالية، مثالي لصناعة الأثاث الفاخر.' },
    { id: 6, name: 'خشب أرو (Oak)', category: 'صلب', image: '/images/oak_wood_planks.jpg', desc: 'عروق واضحة وجميلة، يستخدم في الديكورات والأرضيات.' },
    { id: 7, name: 'خشب كونتر (Blockboard)', category: 'مصنع', image: '/images/plywood_stack.jpg', desc: 'ألواح خشبية متينة ومقاومة للتقوس، أساسية في صناعة الموبيليا.' },
    { id: 8, name: 'خشب سويدي (Pine)', category: 'لين', image: '/images/softwood_planks.jpg', desc: 'سهل التشكيل ومناسب للصناعات الخفيفة والإنشاءات.' },
    { id: 9, name: 'خشب بيتش باين', category: 'لين', image: '/images/pitch_pine_planks.jpg', desc: 'يتحمل العوامل الجوية، ممتاز للاستخدامات الخارجية.' },
    { id: 10, name: 'ألواح MDF', category: 'مصنع', image: '/images/raw_mdf_boards.jpg', desc: 'كثافة متوسطة، سطح ناعم جداً ممتاز للدهانات.' },
    { id: 11, name: 'ألواح Plywood', category: 'مصنع', image: '/images/plywood_stack.jpg', desc: 'قوة تحمل عالية، متوفر سماكات متعددة للشدات الخشبية.' },
  ];

  return (
    <div className="products-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>منتجاتنا</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            نقدم تشكيلة متكاملة من الأخشاب الطبيعية والمصنعة بأعلى مواصفات الجودة العالمية.
          </motion.p>
        </div>
      </section>

      {/* Product List directly below header */}

      {/* Product List */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-3">
            {products.map((product, index) => (
              <motion.div 
                key={product.id} 
                className="premium-card product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="card-img-wrapper">
                  <img src={product.image} alt={product.name} />
                  <span className="category-badge">{product.category}</span>
                </div>
                <div className="card-content">
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <a href="https://wa.me/201127151475" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto', display: 'inline-block', textAlign: 'center' }}>طلب تسعير</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
