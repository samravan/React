import React from 'react';


export default function HobbyList(props) {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    return hobbies.map( (hobby, index) => <Hobby key={index} name={hobby} />);

}

function Hobby(props) {
    return <h1>{props.name}</h1>
}