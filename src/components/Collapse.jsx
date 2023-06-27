import React, { useState, useRef, useEffect } from "react";
import arrow from "../assets/arrow.png";
import "../styles/Collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentMaxHeight, setContentMaxHeight] = useState("0");

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setContentMaxHeight("100px");
    } else {
      setContentMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="collapse">
      <div className="header">
        <h2 className="collapseTitle">{title}</h2>
        <img
          className={`arrow ${isOpen ? "open" : ""}`}
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

const ShowCollapse = () => {
  const [collapseData, setCollapseData] = useState([]);

  useEffect(() => {
    const fetchCollapseData = async () => {
      try {
        const response = await fetch("Data/about.json");
        const data = await response.json();
        setCollapseData(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchCollapseData();
  }, []);

  return (
    <div className="allCollapse">
      {collapseData.map((item, index) => (
        <Collapse key={index} title={item.title} content={item.description} />
      ))}
    </div>
  );
};

export default ShowCollapse;






