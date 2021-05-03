import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Weather from './components/Weather'
import City from './components/City';




function App() {
  return (
    <Router>
      <Switch>
        <div className='container'>
          <Route exact path="/" component={Weather} />
          <Route path="/:cityId" component={City} />
        </div>
      </Switch>
    </Router>


  );
}

export default App;
