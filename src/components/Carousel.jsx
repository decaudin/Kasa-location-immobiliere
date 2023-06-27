import React, { useState } from 'react';
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import '../styles/Carousel.scss';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const showArrows = pictures.length > 1;  // Vérifie s'il y a plus d'une image pour afficher les flèches

  return (
    <div className="carousel">
      <img className="carousel-image" src={pictures[currentIndex]} alt="logement" />
      {showArrows && (
      <div className="carousel-controls">
        <button className="carousel-control" onClick={goToPreviousSlide}>
        <img src={arrowLeft} alt="Fleche gauche" />
        </button>
        <button className="carousel-control" onClick={goToNextSlide}>
        <img src={arrowRight} alt="Fleche droite" />
        </button>
      </div>
      )}
    </div>
  );
};

export default Carousel;