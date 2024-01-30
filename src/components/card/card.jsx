import React, { useState } from "react";
import "./card.css";
import StarRating from "../starRating/starRating";

const Card = ({ title, price, imageUrls, colors, rating }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="card-container">
      <div className="image-container">
        {/* Use the selectedColor to determine the index for the image_urls array */}
        <img src={imageUrls[colors.indexOf(selectedColor)]} alt={title} />
      </div>
          
        <div className="card-body">
        <h4>{title}</h4>

          <h3 className="price-container">${price}</h3>
          <div className="color-buttons-container">
            {colors.map((color, index) => (
              
              <button
                key={index}
                className={`color-button ${color === selectedColor ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>
          <div className="rating-div">
            <StarRating rating={rating} />
          </div>
        </div>
      </div>
  );
};

export default Card;
