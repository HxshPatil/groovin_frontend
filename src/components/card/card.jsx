// Card.jsx
import React, { useState } from "react";
import "./card.css";
import StarRating from "../starRating/starRating";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Card = ({ title, price, imageUrls, colors, rating, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="card-container">
      <div className="image-container">
        <div className="cart-container-card" onClick={onAddToCart}>
          <HiOutlineShoppingBag />
        </div>
        {/* Use the selectedColor to determine the index for the image_urls array */}
        <img
          src={imageUrls[colors.indexOf(selectedColor)]}
          alt={title}
          onClick={onAddToCart} // Attach onClick event to the image
        />
      </div>

      <div className="card-body">
        <h2>{title}</h2>

        <h3 className="price-container">${price}</h3>
        <div className="color-buttons-container">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`color-button ${color === selectedColor ? "selected" : ""}`}
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
