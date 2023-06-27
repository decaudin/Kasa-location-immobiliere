import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingStars from "./RatingStars";
import "../styles/LodgementRetail.scss";
import Carousel from "./Carousel";
import CollapseEquipments from "./EquipmentsLodgement";
import CollapseDescription from "./DescriptionLodgement";

const LodgementRetail = () => {
  const { id } = useParams();
  const [lodgementData, setLodgementData] = useState(null);

  useEffect(() => {
    const fetchLodgementData = async () => {
      try {
        const response = await fetch("/Data/lodgements.json");
        const data = await response.json();
        const lodgement = data.find((lodgement) => lodgement.id === id);
        setLodgementData(lodgement);
      } catch (error) {
        console.error("Erreur lors du chargement du logement :", error);
      }
    };

    fetchLodgementData();
  }, [id]);

  if (!lodgementData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lodgmentPage">
      <Carousel pictures={lodgementData.pictures} />
      <div className="firstInfo">
        <div className="locationTitle">
          <h1>{lodgementData.title}</h1>
          <p>{lodgementData.location}</p>
        </div>
        <div className="host">
          <p>{lodgementData.host.name}</p>
          <img src={lodgementData.host.picture} alt="propriétaire" />
        </div>
      </div>
      <div className="secondInfo">
        <ul>
          {lodgementData.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <RatingStars rating={lodgementData.rating} />
      </div>
      <div className="thirdInfo">
      {lodgementData && (
        <>
          <CollapseDescription content={lodgementData.description} />
          <CollapseEquipments content={lodgementData.equipments} />
        </>
      )}
      </div>
    </div>
  );
};

export default LodgementRetail;
