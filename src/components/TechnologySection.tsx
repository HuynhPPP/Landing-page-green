import { motion } from 'framer-motion';
import { technologyInfo } from '@/data/products';
import { Leaf, FlaskConical, Plus, Equal } from 'lucide-react';
import './css/TechnologySection.css';

const TechnologySection = () => {
  const icons = [FlaskConical, Leaf, Leaf];

  return (
    <section className='technology-section'>
      <div className='tech-container'>
        <motion.div
          className='tech-header'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='tech-title'>{technologyInfo.title}</h2>
          <p className='tech-subtitle'>{technologyInfo.subtitle}</p>
        </motion.div>

        {/* Formula visualization */}
        <div className='formula-container'>
          {technologyInfo.steps.map((step, i) => (
            <motion.div
              key={i}
              className='formula-step'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div className='step-content'>
                <div className='step-circle'>{step.icon}</div>
                <p className='step-label'>{step.label}</p>
              </div>
              {i < technologyInfo.steps.length - 1 && (
                <Plus className='operator-icon' />
              )}
            </motion.div>
          ))}
          <Equal className='operator-icon' />
          <motion.div
            className='step-content'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className='result-circle'>
              <span className='result-text'>{technologyInfo.result}</span>
            </div>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          className='gradient-banner-box'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className='banner-text-main'>
            Với cơ chế làm sạch sâu bằng vi sinh
          </p>
          <p className='banner-text-sub'>"{technologyInfo.tagline}"</p>
          <p className='banner-text-desc'>{technologyInfo.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
