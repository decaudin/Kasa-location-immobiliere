import Collapse from '../Collapse';
import './index.scss';

const CollapseDescription = ({ content = [] }) => {

  return (
    <Collapse title="Description" className="collapseDescription">
      <div>{content}</div>
    </Collapse>
  );
};

export default CollapseDescription;



