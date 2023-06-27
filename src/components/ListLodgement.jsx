import Lodgement from "./lodgement";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ListLodgements.scss";

const ListLodgements = () => {
  const [lodgementsData, setLodgementsData] = useState([]);

  useEffect(() => {
    const fetchLodgementsData = async () => {
      try {
        const response = await fetch("/Data/lodgements.json");
        const data = await response.json();
        console.log(data);
        setLodgementsData(data);
      } catch (error) {
        console.error("Erreur lors du chargement des logements :", error);
      }
    };

    fetchLodgementsData();
  }, []);

  return (
    <div className="lodgementsContainer">
      {lodgementsData.map((lodgement) => (
        <Link to={`/lodgement/${lodgement.id}`} key={lodgement.id}>
          <Lodgement title={lodgement.title} cover={lodgement.cover} />
        </Link>
      ))}
    </div>
  );
};

export default ListLodgements;
