import React, { useState, useEffect } from "react";
import { useFetch } from "../../utils/hooks/Api";
import arrow from "../../assets/arrow.png";
import "./index.scss";

const CollapseAbout = () => {

  const { data, loading, error } = useFetch("Data/about.json");
  const [collapseData, setCollapseData] = useState([]);

  useEffect(() => {
    setCollapseData(data);
  }, [data]);

  // Fonction qui permet d'inverser l'état de isOpen sur le collapse cliqué

  const toggleCollapse = (index) => {
    setCollapseData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="allCollapse">
      {loading && <div className="loader"></div>}
      {error && <div className="noData">Erreur lors du chargement des données</div>}
      {!data && <div className="noData">Pas de données disponibles</div>}
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
          <div className={`content ${item.isOpen ? "collapseOpen" : ""}`}>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollapseAbout;









