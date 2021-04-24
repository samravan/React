import { useContext } from 'react';
import Search from './components/Search'
import Box from './components/Box'
import { AppContext } from './components/AppContext'
import './App.css';
import Forecast from './components/Forecast';

function App() {
  const { datas, isForecastPage } = useContext(AppContext);

  return (
    <>
      <h1 className='heading'>Weather</h1>
      {!isForecastPage ?
        <>
          <Search />
          <div>
            {datas.map((data, index) =>
              <Box
                key={index}
                data={data}
              />
            )}
          </div>
        </>
        : <Forecast />}
    </>
  )
}

export default App;