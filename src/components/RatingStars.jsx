import React from "react";
import redstar from "../assets/redstar.png";
import graystar from "../assets/graystar.png";

const RatingStars = ({ rating }) => {  // Prends la prop rating en paramètre (nb d'étoiles rouges à afficher)
  const MAX_STARS = 5;

  const renderStars = () => {   // Génère les étoiles à afficher en fonction du rating
    const redStars = rating;
    const grayStars = MAX_STARS - redStars;

    const stars = []; // Tableau qui stockera les étoiles

    for (let i = 0; i < redStars; i++) {
      stars.push(<img key={i} src={redstar} alt="étoile rouge" />); // Rajout des étoiles avec la méthode push au tableau stars
    }

    for (let i = 0; i < grayStars; i++) {
      stars.push(<img key={redStars + i} src={graystar} alt="étoile grise" />);
    }

    return stars; // Retourne le tableau crée
  };

  return <div>{renderStars()}</div>; // Rendu du tableau stars dans une div
};

export default RatingStars;
