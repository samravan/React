import React, { useState } from 'react';

export const Counter = () => {

  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <Count count={count} />
      <Button setCount={setCount} count={count} />
      <h2>{feedback}</h2>
    </div>
  )
}

const Count = (props) => {
  return <h1>{props.count}</h1>
}

const Button = (props) => {
  return (
    <button onClick={() => props.setCount(props.count + 1)}>Add 1</button>
  )
}

