
export const Search = ({onChange, city, getWeather}) => {

    return (
        <form className="searchBox" onSubmit={getWeather}>
            <input className="searchInput"type="text" name="cityName" value={city} onChange={onChange} placeholder="Search"/>
            <button className="searchButton" type="submit" href="#" >
                <i className="material-icons">
                    search
                </i>
            </button>
        </form>
    )
}