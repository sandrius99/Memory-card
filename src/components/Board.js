import React from 'react';
import Card from './Card';
import '../styles/Board.css'

const Board = (images) => {
   const cards = images.images.map(image => {
    
            return <Card images={image.image} name={image.name}/> 
   });
   console.log(cards[0])

   
    return (
        
        <div className='board'>
            {
                images.images.map(image => {
                    return <div className='card'> 
                        <img src={image.image}></img>
                        <span className='cardText'>{image.name}</span>
                        </div>
                })
               
            }
             
        </div>
        )
}

export default Board;