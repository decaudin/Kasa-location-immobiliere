import Collapse from '../Collapse';
import './index.scss';

const CollapseDescription = ({ description = [] }) => {

  return (
    <Collapse title="Description" className="collapseDescription">
      <div>{description}</div>
    </Collapse>
  );
};

export default CollapseDescription;



