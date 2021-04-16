import CloseButton from './CloseButton'
export const WeatherProfile = ({data, onDelete}) => {

    return (
        <div className="box">
            <CloseButton onClick={onDelete} id={data.id}/>
            <h2>{data.name}, {data.sys.country}</h2>
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