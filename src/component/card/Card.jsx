import React from 'react';
import './Card.css';
import arrow from "../images/arrow.png"

function Card({ title, description, imageUrl }) {
    return (
      <div className="card">
        <img src={imageUrl} alt={title} />
        <h5>{title}</h5>
        <p>{description}</p>
      <a className='read-more' href="">Read More <span>&#62;</span></a>

      </div>
    );
  } 

export default Card;
