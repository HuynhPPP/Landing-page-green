import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../components/css/NotFound.css';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className='not-found-container'>
      <div className='not-found-content'>
        <div className='logos-container'>
          <img
            src='/logo-green100.png'
            alt='Green 100 Logo'
            className='brand-logo'
          />
          <div className='divider'></div>
          <img
            src='/Logo_Radio_Shopping.png'
            alt='Radio Shopping Logo'
            className='brand-logo'
          />
        </div>

        <h1 className='not-found-title-large'>404</h1>
        <h2 className='not-found-subtitle'>Không tìm thấy trang</h2>
        <p className='not-found-message'>
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>

        <a href='/' className='not-found-button'>
          QUAY VỀ TRANG CHỦ
        </a>
      </div>
    </div>
  );
};

export default NotFound;
