
 const Weather = (props) => {
    return (
    <div className="box">
        <h2>{props.name}</h2>
        <h2>{props.country}</h2>
        <h3>{props.weather}</h3>
        <h4>{props.description}</h4>
        <p>min temp: {props.temp_min}</p>
        <p>max temp: {props.temp_max}</p>
        <p>location: {props.lon}, {props.lat}</p>

    </div>
    )
}

export default Weather;

