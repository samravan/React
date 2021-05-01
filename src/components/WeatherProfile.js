import { useState , useEffect} from 'react';
import CloseButton from './CloseButton'
import {
    Link
  } from "react-router-dom";
  import City from './City';




export const WeatherProfile = ({data, onDelete}) => {
    const [newData, setNewDate] = useState([]);
    const [temp, setTemp] = useState([])

    useEffect(() => {

    },[])

    const cityHandler = () => {

        const getForecast = () => {
            const API_KEY = `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`

            fetch(API_KEY)
                .then(res => res.json())
                .then(data => {
                    console.log(data.list[0].dt_txt)
                    newData.map((data2, index) => <City
                                        key={ index }
                                        data={data2}
                                        />)
                })
        }

        return getForecast();
    }
    return (

            <div className="box">
                <CloseButton onClick={onDelete} id={data.id}/>
                <Link to={`${data.id}`} onClick={cityHandler}><h2>{data.name}, {data.sys.country}</h2></Link>
                <h3>{data.weather[0].main}</h3>
                <h3>{data.weather[0].description}</h3>
                <br/>
                <p>min temp: {data.main.temp_min}</p>
                <p>max temp: {data.main.temp_max}</p>
                <p>location: {data.coord.lon}, {data.coord.lat}</p>
                <br />
            </div>

    )
}