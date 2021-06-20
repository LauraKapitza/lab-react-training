import React from 'react';
import './IdCard.css';


function fullName(firstname, lastname) {
    return `${firstname} ${lastname}`;
}

function formatDate(date) {
    let arr = date.toString().split(' ', 4)
    console.log(arr.join(' '))
    return arr.join(' ')
}


const IdCard = (props) => {
    return (
        <article className='idCard-container'>
            <img src={props.picture} alt={fullName(props.firstName, props.lastName)} />
            <div>
                <p>First name: {props.firstName}</p>
                <p>Last name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Birth: {formatDate(props.birth)}</p>
            </div>
        </article>
    )

}


export default IdCard;