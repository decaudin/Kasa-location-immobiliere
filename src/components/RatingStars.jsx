import React from "react";
import redstar from "../assets/redstar.png";
import graystar from "../assets/graystar.png";

const RatingStars = ({ rating }) => {
  const MAX_STARS = 5;

  const renderStars = () => {
    const redStars = rating;
    const grayStars = MAX_STARS - redStars;

    const stars = [];

    for (let i = 0; i < redStars; i++) {
      stars.push(<img key={i} src={redstar} alt="étoile rouge" />);
    }

    for (let i = 0; i < grayStars; i++) {
      stars.push(<img key={redStars + i} src={graystar} alt="étoile grise" />);
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default RatingStars;
