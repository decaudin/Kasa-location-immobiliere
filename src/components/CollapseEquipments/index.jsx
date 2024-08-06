import { useCollapse } from '../../utils/hooks/Collapse';
import arrow from '../../assets/arrow.png';
import './index.scss';

const CollapseEquipments = ({ content = [] }) => { 

  const { isOpen, toggleCollapse } = useCollapse();

  return (
    <div className={`collapseEquipment ${isOpen ? "open" : ""}`}>
      <div className="header">
        <h2 className="collapseTitle">Équipements</h2>
        <img
          className={`arrow ${isOpen ? "open" : ""}`}
          src={arrow}
          alt="Flèche"
          onClick={toggleCollapse}
        />
      </div>
      <div className="content">
        <ul>
          {content.map((item, index) => (   // Fonction map pour itérer les éléments de content en un tableau de balises <li> dans la balise <ul>
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollapseEquipments;
