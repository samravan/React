import React, {useState} from 'react';


const Weather = () => {
    const [city, setCity] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [getData, setGetData] = useState();

    const getWeather = () => {
        setIsLoading(true)
        const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
        return fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data => setGetData(data))
                .catch(error => console.log(error))

    }

    return <WeatherProfile />
}

const WeatherProfile = (props) => {
    return (
        <div className="box">
            <Form />
            {/* <h2>{props.name}</h2>
            <h2>{props.country}</h2>
            <h3>{props.weather}</h3>
            <h4>{props.description}</h4>
            <p>min temp: {props.temp_min}</p>
            <p>max temp: {props.temp_max}</p>
            <p>location: {props.lon}, {props.lat}</p> */}
        </div>
    )
}

const Form = (props) => {
    return (
        <form className="searchBox" onsubmit={props.getWeather}>
            <input className="searchInput"type="text" name="" placeholder="Search"/>
            <button className="searchButton" type="submit" href="#" value={props.city}>
                <i className="material-icons">
                    search
                </i>
            </button>
        </form>
    )
}

export default Weather;