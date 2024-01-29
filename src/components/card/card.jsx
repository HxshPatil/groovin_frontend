// Card.jsx
import React from "react";
import "./card.css";

const Card = ({ title, content, image_url }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        {/* Use the image_url field for the image source */}
        <img src={image_url} alt={title} />
      </div>
      <div className="container-body">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
