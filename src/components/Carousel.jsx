import React, { useState } from 'react';
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import '../styles/Carousel.scss';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // variable d'état (currentIndex) initialisé à 0 avec useState (hook), fonction setCurrentIndex pour la mettre à jour)

// Fonctions navigation

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex === 0 ? pictures.length - 1 : currentIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex === pictures.length - 1 ? 0 : currentIndex + 1));
  };

  const showArrows = pictures.length > 1;  // Vérifie s'il y a plus d'une image pour afficher les flèches

  return (
    <div className="carousel">
      <img className="carousel-image" src={pictures[currentIndex]} alt="logement" />
      {showArrows && (   // vérifie que showArrows est true et dans ce cas execute le code suivant
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