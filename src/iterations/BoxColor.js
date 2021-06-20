import React from 'react';
import './iterartions.css';

function changeBackground(r,g,b) {
    return `rgb(${r},${g},${b})`
}

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

const BoxColor = (props) => {
    console.log(props)
    return (
        <div style={{background: changeBackground(props.r, props.g, props.b)}} className='container boxcolor-container'>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
            <p>{RGBToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}

export default BoxColor;