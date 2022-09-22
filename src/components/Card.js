import React from 'react';
import '../styles/Card.css'

const Card = ({image, name, handleCardClick}) => {
    return (
        <div className='card' onClick={ handleCardClick} key={name}> 
        <img src={image}></img>
        <span className='cardText'>{name}</span>
        </div>

    )
}

export default Card;