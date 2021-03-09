export const Guarantee = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}