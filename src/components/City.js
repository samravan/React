import React, {useState, useEffect} from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    Tooltip, Area,
    CartesianGrid,
    XAxis,
     YAxis } from 'recharts';

const City = (props) => {
    const cityIds = props.match.params.cityId;
    console.log(props)
    const [rawData, setRawData] = useState([]);

    useEffect(() => {
      getForecast();
    }, [])
    const getForecast = () => {
            const API_KEY = `https://api.openweathermap.org/data/2.5/forecast?id=${cityIds}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`

            fetch(API_KEY)
                .then(res => res.json())
                .then(data => {
                    const allData = data.list.map(item => {
                        return {
                            date: item.dt_txt,
                            temp: item.main.temp
                        }
                    })
                    setRawData(allData);
                    console.log(allData)
                })

        }

    return (
        <div>

            <button>Back</button>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={rawData} stroke="#82ca9d">
                <Area dataKey="temp" />
                <XAxis dataKey="date" />
                <YAxis dateKey="temp"/>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default City;