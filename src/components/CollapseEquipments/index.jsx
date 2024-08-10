import Collapse from '../Collapse';
import './index.scss';

const CollapseEquipments = ({ equipments = [] }) => {

  return (
    <Collapse title="Équipements" className ="collapseEquipments">
      <ul>
        {equipments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Collapse>
  );
};

export default CollapseEquipments;


