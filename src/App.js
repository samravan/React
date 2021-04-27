import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Weather from './components/Weather'



function App() {
  return (
    <Router>

      <div className='container'>
        <Link to="/"><Weather /></Link>
        <Link to="/cityId"> <h1>This is the City</h1> </Link>
      </div>
      <Switch>
        <Route path="/">
          <Weather />
        </Route>
        <Route path="/cityId">
          <h1>Hello</h1>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
