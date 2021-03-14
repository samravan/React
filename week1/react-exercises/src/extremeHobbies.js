export const HobbyList = () => {
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
  return hobbies.map((hobby, index) => <Hobby index={index} hobby={hobby} />)
}

const Hobby = (props) => {
  return <h1 key={props.index}>{props.hobby}</h1>
}