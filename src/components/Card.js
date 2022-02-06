import React from "react";
import { MdLocationOn } from "react-icons/md";

function Card(props) {
  return (
    <div className="card">
      <img
        src={`../images/${props.imageUrl}`}
        alt="mount-fuji"
        className="card-img"
      ></img>
      <div className="card--stats">
        <div className="top-sec">
          <MdLocationOn className="card-icon" size="1.4em" />
          <span className="location">{props.location}</span>
          <span className="map-link">
            <a href={props.googleMapsUrl} className="link">
              View on Google Maps
            </a>
          </span>
        </div>
        <div className="main-sec">
          <h1 className="card-header ">{props.title}</h1>
          <p className="card-duration">
            {props.startDate} - {props.endDate}
          </p>
          <p className="card-details">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
