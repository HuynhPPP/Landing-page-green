import { motion } from 'framer-motion';
import { mechanismSteps } from '@/data/products';
import { ChevronRight } from 'lucide-react';
import './css/MechanismSection.css';

const MechanismSection = () => {
  return (
    <section className='mechanism-section'>
      <div className='mechanism-container'>
        <motion.div
          className='mechanism-header'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='mechanism-title'>CƠ CHẾ HOẠT ĐỘNG</h2>
          <div className='mechanism-badge'>
            <span className='mechanism-badge-text'>SẠCH LÂU SAU KHI LAU</span>
          </div>
        </motion.div>

        <div className='mechanism-grid'>
          {mechanismSteps.map((item, index) => (
            <motion.div
              key={index}
              className='mechanism-card'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Step number */}
              <div className='mechanism-step-circle'>
                <span className='mechanism-step-number'>{item.step}</span>
              </div>

              <p className='mechanism-description'>{item.description}</p>

              <p className='mechanism-card-title'>{item.title}</p>

              {/* Arrow connector */}
              {index < mechanismSteps.length - 1 && (
                <div className='mechanism-arrow'>
                  <ChevronRight className='arrow-icon' />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
