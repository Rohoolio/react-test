import React from "react";
import "./Card.css";
import food from "../assets/food.png"; // Tell webpack this JS file uses this image



export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-date">{props.date}</div>
        </div>
      </div>
      <img className="card-image" src={food} alt="Logo" />
      <div className="card-text">{props.description}</div>
    </div>
  );
}
