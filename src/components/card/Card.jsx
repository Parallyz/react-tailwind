import PropTypes from "prop-types";
import React from "react";

function Card(props) {
  return (
    <div className="card__item">
      <img src={props.img} alt={props.img} className="img" />
      <h3 className="title">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
