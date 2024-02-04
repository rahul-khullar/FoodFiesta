import React from "react";
import "./RestaurantCard.css";
import { IMG_CDN_URL } from "../../../Utils/constants";

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src={IMG_CDN_URL + cloudinaryImageId} // Placeholder image URL
          alt="Restaurant"
        />
      </div>
      <div className="info-container">
        <span className="restaurant-name">{name}</span>
        <span className="food-categories">{cuisines.join(", ")}</span>
      </div>
      <div className="rating-container">
        <div className="rating">
          <h4
            style={
              avgRatingString < 4
                ? { backgroundColor: "var(--light-red)" }
                : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
            }
          >
            {avgRatingString}
          </h4>
        </div>
        <span className="delivery-time">
          {sla?.lastMileTravelString ?? "2.0 km"}
        </span>
        <span className="price-range">{costForTwo ?? "₹200 for two"}</span>
      </div>
    </div>
  );
};
