import React, { useState } from "react";
import "./card.css";

const Card = ({ title, price, imageUrls, colors }) => {
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
      <div className="container-body">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
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
        <div className="card-body">
          <small>{selectedColor}</small>
          <h3 className="price-container">${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
