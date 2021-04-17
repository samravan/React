const CloseButton = (props) => {
    return (
        <button className="close-btn" onClick={props.onClick} id={props.id}>X</button>
    )
}

export default CloseButton;