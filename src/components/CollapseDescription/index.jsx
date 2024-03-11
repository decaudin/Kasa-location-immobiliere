import { useCollapse } from '../../utils/hooks';
import arrow from '../../assets/arrow.png';
import './index.scss';

const CollapseDescription = ({ content = [] }) => {
  
  const { isOpen, contentRef, toggleCollapse } = useCollapse();

  return (
    <div className={`collapseDescription ${isOpen ? "open" : ""}`}>
      <div className="header">
        <h2 className="collapseTitle">Description</h2>
        <img
          className={`arrow ${isOpen ? "open" : ""}`}
          src={arrow}
          alt="Flèche"
          onClick={toggleCollapse}
        />
      </div>
      <div ref={contentRef} className="content">
        {content}
      </div>
    </div>
  );
};

export default CollapseDescription;

