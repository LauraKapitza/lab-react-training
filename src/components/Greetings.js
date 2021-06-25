import './iterartions.css';
import React from 'react';


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
        <p className="container greetings-container">{translateGreeting(props.lang)} {props.children}</p>
    )
}


export default Greetings;