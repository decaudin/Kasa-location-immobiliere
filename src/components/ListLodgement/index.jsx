import Lodgement from "../Lodgement";
import { Link } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import "./index.scss";

const ListLodgements = () => {

  const { data, loading } = useFetch("/Data/lodgements.json");

  return (
    <div className="lodgementsContainer">
      {loading && <div className="loader"></div>}
      {!data && <div className="noData">No data available</div>}
      {data.map((lodgement) => (
        <Link to={`/lodgement/${lodgement.id}`} key={lodgement.id}> {/* Nous permet d'aller sur la page de détail de chaque logement identifié par son id */}
          <Lodgement title={lodgement.title} cover={lodgement.cover} />
        </Link> 
      ))}
    </div>
  );
};

export default ListLodgements;


