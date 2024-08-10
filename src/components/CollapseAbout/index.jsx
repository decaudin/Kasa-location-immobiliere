import { useFetch } from "../../utils/hooks/Api";
import Collapse from '../Collapse';
import './index.scss';

const CollapseAbout = () => {
  
  const { data, isLoading, isError } = useFetch("Data/about.json");

  return (
    <div className="allCollapse">
      {isLoading && <div className="loader"></div>}
      {isError && <div className="noData">Erreur lors du chargement des données</div>}
      {!data && <div className="noData">Pas de données disponibles</div>}
      {data.map((item, index) => (
          <Collapse title={item.title} className="" key={index}>
            {item.description}
          </Collapse>
      ))}
    </div>
  );
};

export default CollapseAbout;











