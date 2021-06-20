import './Greetings.css';
import React from 'react';
import { PROPERTY_TYPES } from '@babel/types';


function translateGreeting (lang) {
    const vocabulary = {
        "de": "Hallo",
        "en": "Hello",
        "es": 'Hola',
        "fr": "Salut"
    }

    return vocabulary[lang]

}

const Greetings = (props) => {
    return (
        <div className="greetings-container">
            <span>{translateGreeting(props.lang)}</span>
            <span> </span>
            <span>{props.children}</span>
        </div>
    )
}


export default Greetings;