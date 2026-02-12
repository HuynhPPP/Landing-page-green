import { Phone } from 'lucide-react';
import { agentInfo } from '@/data/products';
import './css/FloatingSocial.css';

const FloatingSocial = () => {
  return (
    <div className='floating-social-container'>
      {/* Phone Button - Green Circle */}
      <a
        href={`tel:${agentInfo.phone}`}
        className='social-button phone-button'
        aria-label='Gọi điện'
      >
        <div className='social-icon-wrapper'>
          <Phone className='social-icon' />
        </div>
      </a>

      {/* Facebook Button - Blue Circle */}
      <a
        href='https://www.facebook.com'
        target='_blank'
        rel='noopener noreferrer'
        className='social-button facebook-button'
        aria-label='Facebook'
      >
        <svg
          className='social-icon'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50975H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50975H7.19795L6.80206 13.4901H9.19795V21.5Z' />
        </svg>
      </a>

      {/* Zalo Button - Blue Square with Text */}
      <a
        href='https://zalo.me'
        target='_blank'
        rel='noopener noreferrer'
        className='social-button zalo-button'
        aria-label='Zalo'
      >
        <div className='zalo-icon-wrapper'>
          <span className='zalo-text'>Zalo</span>
        </div>
      </a>
    </div>
  );
};

export default FloatingSocial;
