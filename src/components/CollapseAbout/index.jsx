import React from "react";
import { useFetch } from "../../utils/hooks/Api";
import Collapse from '../Collapse';
import './index.scss';

const CollapseAbout = () => {
  
  const { data, loading, error } = useFetch("Data/about.json");

  return (
    <div className="allCollapse">
      {loading && <div className="loader"></div>}
      {error && <div className="noData">Erreur lors du chargement des données</div>}
      {!data && <div className="noData">Pas de données disponibles</div>}
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Collapse title={item.title} className="">
            {item.description}
          </Collapse>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CollapseAbout;











