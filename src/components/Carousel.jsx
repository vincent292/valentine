import React, { useState, useEffect } from "react";
import "./style/carousel.css";

const images = Array.from({ length: 17 }, (_, i) => `/images/image${i + 1}.jpg`);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- AUTOROTACIÓN CADA 3 SEGUNDOS ---
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Cambia el 3000 por el intervalo que prefieras (ms)
    return () => clearInterval(interval); // Limpia el intervalo cuando se desmonte el componente
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevImage}>◀</button>
      
      <div className="carousel">
        {images.map((image, index) => {
          // Calcula el desplazamiento en porcentaje para cada imagen
          const offset = (index - currentIndex) * 100;
          return (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              style={{
                transform: `translateX(${offset}%) rotateY(${offset / 2}deg)`
              }}
            />
          );
        })}
      </div>
      
      <button className="next" onClick={nextImage}>▶</button>
    </div>
  );
};

export default Carousel;
