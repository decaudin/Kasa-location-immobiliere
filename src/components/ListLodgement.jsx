import Lodgement from "./lodgement";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ListLodgements.scss";

const ListLodgements = () => {
  const [lodgementsData, setLodgementsData] = useState([]);  // Déclaration d'un variable d'état à un tableau vide avec useState et fonction pour mettre à jour cet état

  useEffect(() => {           // Effectue une action lorsque le composant apparait au DOM - Permet de faire des effets de bord dans un composant fonctionnel, ici récupération de données
    const fetchLodgementsData = async () => {
      try {
        const response = await fetch("/Data/lodgements.json");
        const data = await response.json();
        setLodgementsData(data);
      } catch (error) {
        console.error("Erreur lors du chargement des logements :", error);
      }
    };

    fetchLodgementsData();
  }, []); // tableau des dépendances vide en 2nd argument pour n'appeler la fonction qu'une seule fois
  

  return (
    <div className="lodgementsContainer">
      {lodgementsData.map((lodgement) => (
          <Link to={`/lodgement/${lodgement.id}`} key={lodgement.id}> {/* Nous permet d'aller sur la page de détail de chaque logement identifié par son id */}
            <Lodgement title={lodgement.title} cover={lodgement.cover} />
          </Link> 
      ))}
    </div>
  );
};

export default ListLodgements;

