import React from 'react';

const divStyle = {
    margin: '10px'
};
const Guarantee = (props)=> {
    return (
        <div style={divStyle}>
            <img src={props.src} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Guarantee