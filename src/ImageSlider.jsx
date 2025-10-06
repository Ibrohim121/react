
import React, { useState, useEffect } from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';

const images = [img1, img2, img3, img4];


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ textAlign: 'center' }}
    >
      <h2> Avtomatik Slayder</h2>
      <img src={images[currentIndex]} alt="Slayder" width={300} height={200} />

      <div style={{ marginTop: '10px' }}>
        <button onClick={prevImage}> Oldingi</button>
        <button onClick={nextImage}>Keyingi </button>
      </div>
    </div>
  );
};

export default ImageSlider;
