import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/hooks/Api";
import RatingStars from "../../components/RatingStars";
import Carousel from "../../components/Carousel";
import CollapseEquipments from "../../components/CollapseEquipments";
import CollapseDescription from "../../components/CollapseDescription";
import "./index.scss";
import "../../utils/style/loader.scss"

const LodgementRetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("/Data/lodgements.json");

  const lodgementData = data ? data.find(lodgement => lodgement.id === id) : null;

  useEffect(() => {

    if (!loading && error) {
      return;
    }
    if (!loading && !lodgementData) {
      navigate("/Error");
    }
  }, [loading, lodgementData, error, navigate]);

  return (
    <div className="lodgmentPage">
      {loading && <div className="loader"></div>}
      {error && <div className="noData">Erreur lors du chargement des informations du logement</div>}
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
                <p className="host-name">{lodgementData.host.name}</p>
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
