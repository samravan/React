import React, { useContext } from 'react'
import { AppContext } from './AppContext';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  LineChart,
  CartesianGrid,
  PieChart,
  Pie,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
  Bar,
  BarChart
} from "recharts";

const Forecast = () => {
  const { setIsForecastPage, backButton, forecastData, setForecastData } = useContext(AppContext);
  console.log(forecastData);

  return (
    <Router>
      <div>
        <Link to='/'><button onClick={backButton}>Back</button></Link>
      </div>

      <div>

        <BarChart width={150} height={40} data={forecastData}>
          <Bar dataKey="temp" fill="#8884d8" />
        </BarChart>

      </div>
    </Router>

  )
}

export default Forecast
