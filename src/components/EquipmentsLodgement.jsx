import React, { useState, useRef, useEffect  } from 'react';
import arrow from '../assets/arrow.png';
import '../styles/EquipmentsLodgement.scss';

const CollapseEquipments = ({ content = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentMaxHeight, setContentMaxHeight] = useState("0");

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setContentMaxHeight("200px");
    } else {
      setContentMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="collapseEquipment">
      <div className="header">
        <h2 className="collapseTitle">Équipements</h2>
        <img
          className={`arrow ${isOpen ? 'open' : ''}`}
          src={arrow}
          alt="Flèche"
          onClick={toggleCollapse}
        />
      </div>
      <div
        ref={contentRef}
        className={`content ${isOpen ? "open" : ""}`}
        style={{ maxHeight: contentMaxHeight }}
      >
        <ul>
        {content.map((item, index) => (
  <li key={index}>{item}</li>
))}
        </ul>
      </div>
    </div>
  );
};

export default CollapseEquipments;
