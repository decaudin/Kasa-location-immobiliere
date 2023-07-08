import React, { useState, useRef, useEffect  } from 'react';
import arrow from '../assets/arrow.png';
import '../styles/DescriptionLodgement.scss';


const CollapseDescription = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false); // Initialisation de la variable d'état isOpen sur false avec useState, fonction associée setIsOpen pour modifier son état.
  const contentRef = useRef(null); // Le hook useref crée une référence à un élément du DOM initialisé à null, on pourra utiliser cette réf pour cibler n'importe quel élément du DOM (le contenu du collapse pour nous)
  const [contentMaxHeight, setContentMaxHeight] = useState("0");

  const toggleCollapse = () => {
    setIsOpen(!isOpen);        // Inverse l'état isOpen
  };

  // Mise à jour avec useEffect de la hauteur suivant l'état de isOpen

  useEffect(() => {
    if (isOpen) {
      setContentMaxHeight("205px");
    } else {
      setContentMaxHeight("0px");
    }
  }, [isOpen]); // Tableau des dépendances, indique de surveiller les changements de la variable d'état "isOpen" et de déclencher la fonction de rappel associée chaque fois que sa valeur change. Cela permet de mettre à jour dynamiquement la valeur de "contentMaxHeight" en fonction de "isOpen".

  return (
    <div className="collapseDescription">
      <div className="header">
        <h2 className="collapseTitle">Description</h2>
        <img
          className={`arrow ${isOpen ? 'open' : ''}`}  // classe conditionnelle
          src={arrow}
          alt="Flèche"
          onClick={toggleCollapse}
        />
      </div>
      <div
        ref={contentRef}
        className={`content ${isOpen ? "open" : ""}`}
        style={{ maxHeight: contentMaxHeight }}
      >
        {content}
      </div>
    </div>
  );
};

export default CollapseDescription;

