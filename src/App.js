import { useContext } from 'react';
import Search from './components/Search'
import { Box } from './components/Box'
import { AppContext } from './components/AppContext'
import './App.css';

function App() {
  const { datas,
    city,
    setCity,
    loading,
    isCity,
    error,
    charLim,
    repeat,
    onSubmit,
    onDelete } = useContext(AppContext);

  return (
    <>
      <h1 className='heading'>Weather</h1>
      <Search
        onSubmit={onSubmit}
        city={city}
        setCity={setCity}
        loading={loading}
        isCity={isCity}
        error={error}
        charLim={charLim}
        repeat={repeat}
      />

      <div>
        {datas.map((data, index) =>
          <Box
            key={index}
            id={data.id}
            name={data.name}
            country={data.sys.country}
            main={data.weather[0].main}
            description={data.weather[0].description}
            min={data.main.temp_min}
            max={data.main.temp_max}
            lon={data.coord.lon}
            lat={data.coord.lat}
            onDelete={onDelete}
          />
        )}
      </div>
    </>
  )
}

export default App;