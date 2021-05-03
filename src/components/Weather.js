import {useState} from 'react';
import { Search } from './Search'
import { WeatherProfile } from './WeatherProfile';


require("dotenv").config();

const Weather = () => {
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [newData, setNewData] = useState([]);
    const [isCity, setIsCity] = useState(true);


    // console.log(city)
    const onChange  = (event) => {
        setCity(event.target.value);

    }

    const onDelete = (e) => {
        setNewData(newData.filter((item) => item.id !== parseInt(e.target.id)))
    }

    const getWeather = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const API_KEY = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

        fetch(API_KEY)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setHasError(false);
                if(data.name && data.name.length > 1) {
                    setNewData([data, ...newData]);
                    setIsCity(true);
                    setCity('')
                } else {
                    setIsCity(false)
                }
            })
            .catch(setHasError(true))

        }


    return (

        <div>
            <h1>Weather App</h1>
            <Search city={city} onChange={onChange} getWeather={getWeather}/>
            {isLoading && <h5>Is loading ....</h5>}
            {hasError && <h5>There is an error...!</h5>}
            {!isCity && <h5>The city is not found</h5>}
            <div className="box2">
                {newData.map((data, index) =>
                    <WeatherProfile
                        key={index}
                        data={data}
                        onDelete={onDelete}
                        />
                )}
            </div>
        </div>
    )
}


export default Weather;