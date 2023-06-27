import React, { useState, useRef, useEffect  } from 'react';
import arrow from '../assets/arrow.png';
import '../styles/DescriptionLodgement.scss';


const CollapseDescription = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentMaxHeight, setContentMaxHeight] = useState("0");

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setContentMaxHeight("125px");
    } else {
      setContentMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="collapseDescription">
      <div className="header">
        <h2 className="collapseTitle">Description</h2>
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
        {content}
      </div>
    </div>
  );
};

export default CollapseDescription;

