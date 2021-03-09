import './App.css';
import { Box } from './components/Box'
const data = require('./city-weather.json');

function App() {
  return (
    data.map((data, index) =>
      <Box
        key={index}
        name={data.name}
        country={data.sys.country}
        main={data.weather[0].main}
        description={data.weather[0].description}
        min={data.main.temp_min}
        max={data.main.temp_max}
        lon={data.coord.lon}
        lat={data.coord.lat}
      />
    )
  )
}



export default App;
