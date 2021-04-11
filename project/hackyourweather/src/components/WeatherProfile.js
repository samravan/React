
export const WeatherProfile = ({data}) => {
    console.log(data[0])
    return (
        <div className="box">

            <h2>{data[0].name}, {data[0].sys.country}</h2>
            {/* <h3>{data[0].weather[0].main}</h3>
            <h3>{data[0].weather[0].description}</h3>
            <br/>
             <p>min temp: {data[0].main.temp_min}</p>
            <p>max temp: {data[0].main.temp_max}</p>
            <p>location: {data[0].coord.lon}, {data[0].coord.lat}</p> */}
        </div>
    )
}