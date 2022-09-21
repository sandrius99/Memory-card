import React, {useState, useEffect} from 'react';
// import * as images from '../assets/card images/*';
import {images as imgs}   from './CardImages';
import Board from './Board';

const Main = () => {
    const [images, setImages] = useState([...imgs]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCard] = useState([]);
    

    return (
        <div>
            <div className='header'>
                <div className='headerTitle'>
                    <span>HeaderTitle</span>
                    <span>instructions</span>

                </div>
                <div className='score'>
                    <span>Score: {score}</span><br/>
                    <span>Best Score: {bestScore}</span>

                </div>
            </div>
            <Board images={images}/>
        </div>
    )

}

export default Main;