import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RatingStars from "./RatingStars";
import "../styles/LodgementRetail.scss";
import Carousel from "./Carousel";
import CollapseEquipments from "./EquipmentsLodgement";
import CollapseDescription from "./DescriptionLodgement";

const LodgementRetail = () => {
  const { id } = useParams();    // Ce hook permet d'obtenir l'ID du logement à partir de l'url que l'on stocke dans la variable id
  const navigate = useNavigate(); // Utilisation du hook useNavigate pour la redirection
  const [lodgementData, setLodgementData] = useState(null);

  useEffect(() => {
    const fetchLodgementData = async () => {
      try {
        const response = await fetch("/Data/lodgements.json");
        const data = await response.json();
        const lodgement = data.find((lodgement) => lodgement.id === id); // méthode find pour rechercher dans data l'id du logement correspondant à l'id extrait de l'url de la page Lodgement
        
        if (lodgement) { // Si Booléen est true
          setLodgementData(lodgement); // Met à jour la variable d'état lodgementData avec les données du logement récupéré
        } else {
          navigate("/NotFound"); // Redirection vers la page NotFound si l'ID est incorrect
        }
      } catch (error) {
        console.error("Erreur lors du chargement du logement :", error);
      }
    };

    fetchLodgementData();
  }, [id, navigate]); // Dépendance de l'effet : lorsqu'une des valeurs de ces variables change la fonction de rappel est déclenchée.

  if (!lodgementData) {
    return <div>Loading...</div>; // Permet d'attendre que les données soient bien chargées (requête asynchrone) avant de les afficher (pendant le chargement lodgement data est null)
  }

  return (
    <div className="lodgmentPage">
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
          <div className="rating">
            <RatingStars rating={lodgementData.rating} />
          </div> 
        </div>
      </div>
      <div className="thirdInfo">
          <CollapseDescription content={lodgementData.description} />
          <CollapseEquipments content={lodgementData.equipments} />
      </div>
    </div>
  );
};

export default LodgementRetail;
