import { useCollapse } from '../../utils/hooks/Collapse';
import arrow from '../../assets/arrow.png';
import './index.scss';

const Collapse = ({ title, children, className }) => {

  const { isOpen, toggleCollapse } = useCollapse();

  return (
    <div className={`collapse ${isOpen ? "open" : ""} ${className}`}>
      <div className="header">
        <h2 className="collapseTitle">{title}</h2>
        <img
          className={`arrow ${isOpen ? "open" : ""}`}
          src={arrow}
          alt="Flèche"
          onClick={toggleCollapse}
        />
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Collapse;



