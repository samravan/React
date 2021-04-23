import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Box = ({ data }) => {
  const { onDelete } = useContext(AppContext);

  return (
    <div className='App box'>
      <h2>{data.name}, {data.sys.country}</h2>
      <h3>{data.weather[0].main}</h3>
      <h3>{data.weather[0].description}</h3>
      <h3>MIN Temp: {data.main.temp_min + '\xB0'}F</h3>
      <h3>MAX Temp: {data.main.temp_max + '\xB0'}F</h3>
      <h3>Location: {data.coord.lon}, {data.coord.lat}</h3>
      <div style={{ textAlign: 'center' }} onClick={onDelete}>
        <span id={data.id} style={{ cursor: 'pointer', color: 'red' }}>
          X
          </span>
      </div>
    </div>
  )
}

export default Box;