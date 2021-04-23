import React, { useState } from 'react';
require('dotenv').config()

export const AppContext = React.createContext();

const Context = ({ children }) => {
  const [datas, setData] = useState([]);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCity, setIsCity] = useState(true);
  const [error, setError] = useState(false);
  const [charLim, setCharLim] = useState(false);
  const [repeat, setRepeat] = useState(false)

  const cityIds = datas.map(item => item.id);
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

  const onSubmit = (e) => {
    e.preventDefault();

    if (city.length > 0) {
      setRepeat(false)
      setLoading(true);
      setError(false);
      setIsCity(true);

      fetch(API)
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          if (data.name) {
            if (cityIds.some(item => item === data.id)) {
              setRepeat(true)
            } else {
              setIsCity(true);
              setData([data, ...datas])
            }
          } else {
            setIsCity(false)
          }
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        })
        .finally(() => {
          setCharLim(false)
          setCity('');
        })
    } else {
      setCharLim(true)
    }
  }

  const onDelete = (e) => {
    const newData = datas.filter(data => data.id !== parseInt(e.target.id));
    setData(newData)
  }

  return (
    <AppContext.Provider
      value={{
        datas,
        setData,
        city,
        setCity,
        loading,
        setLoading,
        isCity,
        setIsCity,
        error,
        setError,
        charLim,
        setCharLim,
        repeat,
        setRepeat,
        onDelete,
        onSubmit,
        cityIds
      }}>
      {children}
    </AppContext.Provider>
  )
}

export default Context
