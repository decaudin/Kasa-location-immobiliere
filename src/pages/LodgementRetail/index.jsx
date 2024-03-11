import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import RatingStars from "../../components/RatingStars";
import Carousel from "../../components/Carousel";
import CollapseEquipments from "../../components/CollapseEquipments";
import CollapseDescription from "../../components/CollapseDescription";
import "./index.scss";
import "../../utils/style/loader.scss"

const LodgementRetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { data , loading } = useFetch("/Data/lodgements.json");

  const lodgementData = data ? data.find(lodgement => lodgement.id === id) : null;

  useEffect(() => {
    if (!loading && !lodgementData) {
      navigate("/Error");
    }
  }, [loading, lodgementData, navigate]);

  return (
    <div className="lodgmentPage">
      {loading && <div className="loader"></div>}
      {lodgementData && (
        <>
      <Carousel pictures={lodgementData.pictures} />
      <div className="firstAndSecondInfo">
        <div className="firstInfo">
          <div className="locationTitle">
            <h1>{lodgementData.title}</h1>
            <p>{lodgementData.location}</p>
            <ul>
              {lodgementData.tags.map((tag, index) => (
              <li key={index}>{tag}</li>   // Key donne une identité unique à chaque élément de la liste
            ))}
            </ul>
          </div> 
        </div>
        <div className="secondInfo">
          <div className="host">
            <p>{lodgementData.host.name}</p>
            <img src={lodgementData.host.picture} alt="propriétaire" />
          </div>
          <RatingStars rating={lodgementData.rating} />
        </div>
      </div>
      <div className="thirdInfo">
          <CollapseDescription content={lodgementData.description} />
          <CollapseEquipments content={lodgementData.equipments} />
      </div>
      </>
      )}
    </div>
  );
};

export default LodgementRetail;
