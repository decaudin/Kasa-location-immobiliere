import { useState } from 'react';
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import './index.scss';

const Carousel = ({ pictures }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonctions de navigation

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex === 0 ? pictures.length - 1 : currentIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex === pictures.length - 1 ? 0 : currentIndex + 1));
  };

  return (
    <div className="carousel">
      <img className="carousel-image" src={pictures[currentIndex]} alt="logement" />
      {pictures.length > 1 && (
        <>
          <div className="carousel-controls">
            <button className="carousel-control" onClick={goToPreviousSlide}>
              <img src={arrowLeft} alt="Fleche gauche" />
            </button>
            <button className="carousel-control" onClick={goToNextSlide}>
              <img src={arrowRight} alt="Fleche droite" />
            </button>
          </div>
          <div className="image-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;