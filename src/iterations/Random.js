import './iterartions.css';
import React from 'react';

function randomNumber(from, to) {
    return Math.floor(from + Math.random()*(to-from+1))
}

const Random = (props) => {
    return (
        <p className="container random-container">Random value between {props.min} and {props.max} => {randomNumber(props.min, props.max)}</p>
    )
}

export default Random;