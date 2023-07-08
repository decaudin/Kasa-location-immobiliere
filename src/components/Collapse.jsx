import React, { useState, useEffect } from "react";
import arrow from "../assets/arrow.png";
import "../styles/Collapse.scss";


const ShowCollapse = () => {
  const [collapseData, setCollapseData] = useState([]);  // Déclaration de la variable d'état (collapseData) dans un tableau vide avec le hook useState et de la fonction setCollapseData pour modifier son état

  useEffect(() => {   // Permet de faire un effet lorsque le composant apparait au DOM ( ici récupération de données)
    const fetchCollapseData = async () => {
      try {
        const response = await fetch("Data/about.json");
        const data = await response.json();
        setCollapseData(data);  // Mise à jour des données dans CollapseData
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchCollapseData();
  }, []);  // Tableau vide comme 2nd argument de useEffect, fetchCollapseData ne sera éxécuté qu'une seule fois

  // Fonction pour inverser l'état de isopen sur le bon élément du tableau CollapseData

  const toggleCollapse = (index) => {
    setCollapseData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="allCollapse">
      {collapseData.map((item, index) => (
        <div key={index} className="collapse">
          <div className="header">
            <h2 className="collapseTitle">{item.title}</h2>
            <img
              className={`arrow ${item.isOpen ? "imgOpen" : ""}`}
              src={arrow}
              alt="Flèche"
              onClick={() => toggleCollapse(index)}
            />
          </div>
          <div
            className={`content ${item.isOpen ? "collapseOpen" : ""}`}
            style={{ maxHeight: item.isOpen ? "230px" : "0px" }}
          >
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowCollapse;





