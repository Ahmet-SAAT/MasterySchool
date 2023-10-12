import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import "./scrollToTop.scss"
import { FiArrowUp} from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // sayfada hareketimizi algılayan ve state'yi buna göre değiştiren yer.
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // sayfada en üst konuma gtmemizi sağlayan yer.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="primary"
      className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <FiArrowUp/>
    </Button>
  );
};

export default ScrollToTopButton;