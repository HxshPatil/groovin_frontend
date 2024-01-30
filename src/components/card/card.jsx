// Card.jsx
import React from "react";
import "./card.css";

const Card = ({ title, price, image_url, color }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        {/* Use the image_url field for the image source */}
        <img src={image_url} alt={title} />
      </div>
      <div className="container-body">
        <div className="card-title">
          <h2>{title}</h2> 
        </div >
        <div className="card-body"><p>{price}</p></div>
        
      </div>
    </div>
  );
};

export default Card;
