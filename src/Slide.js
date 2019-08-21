import React from 'react';
import './Slide.css';

function Slide(props) {
  return (
    <div className="Slide">
        <h1>{props.koptekst}</h1>
        <img src={props.plaatje} />
    </div>
  );
}

export default Slide;
