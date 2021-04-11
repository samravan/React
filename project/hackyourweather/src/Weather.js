import {useState} from 'react';
import { Search } from './components/Search'
import { WeatherProfile } from './components/WeatherProfile'
require("dotenv").config();

const Weather = () => {
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [newData, setNewData] = useState([])
    const [isCity, setIsCity] = useState(true)


    const onChange  = (event) => {
        setCity(event.target.value);
    }

    const getWeather = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const API_KEY = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
        fetch(API_KEY)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setHasError(false);
                if(data.name) {
                    setNewData([data, ...newData]);
                    setIsCity(true);
                } else {
                    setIsCity(false)
                }
            })
            .catch(error => setHasError(true))

        }

    return (
        <div>

            <Search city={city} onChange={onChange} getWeather={getWeather}/>
            {isLoading && <h5>Is loading ....</h5>}
            {hasError && <h5>There is an error...!</h5>}
            {!isCity && <h5>The city is not found</h5>}
            <div className="box2">
                {newData.map((data, index) =>
                    <WeatherProfile
                        key={index}
                        data={data}
                        />
                )}
            </div>
        </div>
    )
}





export default Weather;