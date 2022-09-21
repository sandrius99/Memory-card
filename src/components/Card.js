import React from 'react';

const Card = (images, name) => {
    return (
        <div>
            <img src={images}></img>
            <span>{name}</span>
        </div>
    )
}

export default Card;