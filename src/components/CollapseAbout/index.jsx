import React, { useState, useEffect } from "react";
import { useFetch } from "../../utils/hooks";
import arrow from "../../assets/arrow.png";
import "./index.scss";


const CollapseAbout = () => {

  const { data, loading } = useFetch("Data/about.json");
  const [collapseData, setCollapseData] = useState([]);

  useEffect(() => {
    setCollapseData(data);
  }, [data]);

  const toggleCollapse = (index) => {
    setCollapseData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="allCollapse">
      {loading && <div className="loader"></div>}
      {collapseData.map((item, index) => (
        <div key={index} className="collapse">
          <div className="header">
            <h2 className="collapseTitle">{item.title}</h2>
            <img
              className={`arrow ${item.isOpen ? "imgOpen" : ""}`}
              src={arrow}
              alt="Flèche"
              onClick={() => toggleCollapse(index)}
            />
          </div>
          <div className={`content ${item.isOpen ? "collapseOpen" : ""}`}>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollapseAbout;









