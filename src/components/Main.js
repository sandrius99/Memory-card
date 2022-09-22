import React, {useState, useEffect} from 'react';
import '../styles/Main.css'
import {images as imgs}   from './CardImages';
import Board from './Board';
import {shuffleArray} from '../utils'

const Main = () => {
    const [images, setImages] = useState(shuffleArray([...imgs]));
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    
   

    const handleCardClick = (e) => {
        const cardName = e.target.parentNode.lastChild.innerText;
        if(clickedCards.includes(cardName)) resetGame();
        else {
            setClickedCards([...clickedCards, cardName]);
            setImages(shuffleArray([...imgs]));
            setScore(score + 1);
        }
    }
    console.log(typeof(handleCardClick))
    function resetGame() {
        if(score > bestScore) setBestScore(score);

        setScore(0);
        setClickedCards([]);
        setImages(shuffleArray([...imgs]));
    }

    return (
        <div className='content'>
            <div className='header'>
                <div className='headerTitle'>
                    <span class="title">Buddhist Deities Memory Game</span>
                    <span className="instruction">Get points by clicking on an image but don't click on any more than once!</span>

                </div>
                <div className='scores'>
                    <span className='score'>Score: {score}</span>
                    <span className='score'>Best Score: {bestScore}</span>

                </div>
            </div>
            <Board images={images} handleCardClick={handleCardClick}/>
        </div>
    )

}

export default Main;