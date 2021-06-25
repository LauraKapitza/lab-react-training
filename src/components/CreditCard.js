import React from 'react';
import './iterartions.css';

function cardLogo(type) {
    let path = "";
    switch(type) {
        case "Visa": path="/img/visa.png"; break;
        case "Master Card": path="/img/master-card.svg"; break;
        default: path="/img/logo-placeholder.png"; break;
    }
    return path
}

function lastCreditCardDigits (card) {
    const arr = card.toString().split('');
    let i;

    for (i=0; i < arr.length-4; i++) {
        arr[i] = "·";
    }

    for(i=4;i < arr.length; i+=4) {
        arr.splice(i,1,' ')
    }
    return arr.join('');
}

function expirationDate(month, year) {
    
    let mm = month;
    if (month < 10) mm = `0${month}`
    let yy = year.toString().slice(0, -2)

    console.log(mm, yy)

    return `${mm}/${yy}`
}

const CreditCard = (props) => {
    const creditCardStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    return (
        <div style={creditCardStyle} className='container creditcard-container'>
            <img src={cardLogo(props.type)} alt={props.type}/>
            <p className='card-number'>{lastCreditCardDigits(props.number)}</p>
            <div>
                <p>{expirationDate(props.expirationMonth, props.expirationYear)}</p>
                <p>{props.bank}</p>
            </div>
            <p>{props.owner}</p>

        </div>
    )
}


export default CreditCard;