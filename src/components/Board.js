import React from 'react';
import Card from './Card';
import '../styles/Board.css'

const Board = ({images, handleCardClick}) => {
    console.log(typeof(handleCardClick))

   const cards = images.map(image => {
    
            return <Card image={image.image} name={image.name} handleCardClick={handleCardClick}/> 
   });

    return (
        
        <div className='board'>
            { cards }
             
        </div>
        )
}

export default Board;