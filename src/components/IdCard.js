import React from 'react';
import './iterartions.css';


function fullName(firstname, lastname) {
    return `${firstname} ${lastname}`;
}

function formatDate(date) {
    let arr = date.toString().split(' ', 4)
    return arr.join(' ')
}


const IdCard = (props) => {
    return (
        <article className='container idCard-container'>
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