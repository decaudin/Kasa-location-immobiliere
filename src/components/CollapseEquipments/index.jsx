import Collapse from '../Collapse';
import './index.scss';

const CollapseEquipments = ({ content = [] }) => {

  return (
    <Collapse title="Équipements" className ="collapseEquipments">
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Collapse>
  );
};

export default CollapseEquipments;


