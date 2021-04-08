import './App.css';
import Weather from './Weather'

const data = require('./city-weather.json');
const citiesList = data.map((items, index) => <Weather key={index} name={items.name} country={items.sys.country} weather={items.main.temp} description={items.weather[0].description} temp_max={items.main.temp_max} temp_min={items.main.temp_min} lon={items.coord.lon} lat={items.coord.lat} />)

function App() {
  return (
    <div>
      {citiesList}
    </div>

  );
}

export default App;
