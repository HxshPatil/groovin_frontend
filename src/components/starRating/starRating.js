import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "./starRating.css";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="star-rating-container">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="star-icon filled" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="star-icon half-filled" />}
      {[...Array(5 - Math.ceil(rating))].map((_, index) => (
        <FaRegStar key={index + fullStars} className="star-icon outline" />
      ))}
    </div>
  );
};

export default StarRating;
