import React, {useState, useEffect,} from 'react';
import { useHistory } from "react-router-dom";

import {
    ResponsiveContainer,
    AreaChart,
    Tooltip, Area,
    CartesianGrid,
    XAxis,
     YAxis } from 'recharts';

const City = (props) => {
    const cityIds = props.match.params.cityId;
    const history = useHistory();
    const [rawData, setRawData] = useState([]);

    useEffect(() => {
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
                })

        }
        getForecast();
    }, [cityIds])


        const handleHistory = () => {
            history.push("/")
        }

    return (
        <div>

            <button onClick={handleHistory}>Back</button>

            <ResponsiveContainer className="recharts" width="100%" height={400} >
                <AreaChart data={rawData} stroke="#82ca9d"
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    >
                    <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.4}/>
                            <stop offset="75%" stopColor="#82ca9d" stopOpacity={0.05}/>
                        </linearGradient>
                    </defs>
                    <Area dataKey="temp" stroke="#82ca9d" fill={"url(#colorPv)"}/>

                    <XAxis dataKey="date" axisLine={false} tickLine={false}  />

                    <YAxis dateKey="temp" axisLine={false} tickLine={false} tickCount={6} />

                    <Tooltip />

                    <CartesianGrid strokeDasharray="3 3" opacity={0.6} vertical={false}/>

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default City;