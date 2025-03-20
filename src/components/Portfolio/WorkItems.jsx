import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <h4 className="work__description">{item.description}</h4>
      {item.link && (
      <a href={item.link} className="work__button" target="_blank">
        Link
        <i className="bx bx-link-alt  work__button-icon"></i>
      </a>
       )}
      <div className="work__badge">
        {item.badge && item.badge.map((badge, index) => (
          <span key={index} className="badge-item">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkItems;
