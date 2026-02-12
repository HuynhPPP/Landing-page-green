import { motion } from 'framer-motion';
import { whyChooseReasons } from '@/data/products';
import './css/WhyChooseSection.css';

const WhyChooseSection = () => {
  return (
    <section className='why-choose-section'>
      <div className='why-choose-container'>
        <motion.h2
          className='why-choose-title'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          LÝ DO CHỌN SẢN PHẨM SINH HỌC VI SINH?
        </motion.h2>

        <div className='reasons-list'>
          {whyChooseReasons.map((reason, index) => (
            <motion.div
              key={index}
              className='reason-item'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className='reason-icon-wrapper'>{reason.icon}</div>
              <div className='reason-content'>
                <h3 className='reason-title'>{reason.title}</h3>
                <p className='reason-description'>{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
