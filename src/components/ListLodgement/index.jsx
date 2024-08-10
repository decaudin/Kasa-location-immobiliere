import Lodgement from "../Lodgement";
import { Link } from "react-router-dom";
import { useFetch } from "../../utils/hooks/Api";
import "./index.scss";

const ListLodgements = () => {

  const { data, isLoading, isError } = useFetch("/Data/lodgements.json");

  return (
    <div className="lodgementsContainer">
      {isLoading && <div className="loader"></div>}
      {isError && <div className="noData">Erreur lors du chargement des logements</div>}
      {!data && <div className="noData">Pas de données disponibles</div>}
      {data.map((lodgement) => (
        <Link to={`/lodgement/${lodgement.id}`} key={lodgement.id}> {/* Nous permet d'aller sur la page de détail de chaque logement identifié par son id */}
          <Lodgement title={lodgement.title} cover={lodgement.cover} />
        </Link> 
      ))}
    </div>
  );
};

export default ListLodgements;


