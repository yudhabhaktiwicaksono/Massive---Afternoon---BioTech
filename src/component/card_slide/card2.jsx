import React from 'react';
import "./card2.css";


function Card2(props) {
  return (
    <div className="card2">
      <img src={props.imageUrl} alt={props.title} />
      <p>{props.description}</p>
    </div>
  );
}

export default Card2;
