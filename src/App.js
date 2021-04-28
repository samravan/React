import { useContext } from 'react';
import Search from './components/Search'
import Box from './components/Box'
import { AppContext } from './components/AppContext'
import './App.css';
import Forecast from './components/Forecast';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  const { datas } = useContext(AppContext);

  return (
    <Router>
      <h1 className='heading'>Weather</h1>

      <Switch>
        <Route path='/' exact>
          <Search />
          <div>
            {datas.map((data, index) =>
              <Box
                key={index}
                data={data}
              />
            )}
          </div>
        </Route>

       <Route path="/forecast/:cityId" exact component={Forecast} />
       <Route path="*"><p>Error 404: page not found</p></Route>
      </Switch>
    </Router>

  )
}

export default App;