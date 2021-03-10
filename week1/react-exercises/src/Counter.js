import React, { useState } from 'react'


 const Counter = (props) => {
    const [count, setCount] = useState(0)
    const feedback = (count>10) ? "It's higher than 10!" : "Keep counting...";
    return (
        <div>
            <Count count={count}/>
            <Button setCount={setCount} count={count}/>
            <p>{feedback}</p>
        </div>
    )
}

const Count = (props) => {
    return (
        <div>
            {props.count}
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={()=> props.setCount(props.count+1)}>Add 1!</button>
    )
}

export default Counter