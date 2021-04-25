import { useContext } from 'react';
import Search from './components/Search'
import Box from './components/Box'
import { AppContext } from './components/AppContext'
import './App.css';
import Forecast from './components/Forecast';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  const { datas, isForecastPage } = useContext(AppContext);

  return (
    <Router>
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

      <Route path="/:cityId" exact>
        <Forecast />
      </Route>
    </Router>

  )
}

export default App;