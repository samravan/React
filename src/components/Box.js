import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import {
  Link
} from "react-router-dom";

const Box = ({ data: { name, sys, weather, main, coord, id } }) => {
  const { onDelete, fetchForecast } = useContext(AppContext);

  return (
      <div id={id} className='App box'>
        <h2>{name}, {sys.country}</h2>
        <h3>{weather[0].main}</h3>
        <h3>{weather[0].description}</h3>
        <h3>MIN Temp: {main.temp_min + '\xB0'}F</h3>
        <h3>MAX Temp: {main.temp_max + '\xB0'}F</h3>
        <h3>Location: {coord.lon}, {coord.lat}</h3>
        <div style={{ textAlign: 'center' }} onClick={onDelete}>
          <span style={{ cursor: 'pointer', color: 'red' }}>X</span>
        </div>

        <Link to={`forecast/${id}`}>
          <button id={name} onClick={fetchForecast}>Forecast 5-day</button>
        </Link>
      </div>
  )
}

export default Box;