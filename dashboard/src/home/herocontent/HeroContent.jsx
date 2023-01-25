import React from 'react'
import LineChartData from "./local.json"
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import "./HeroContent.css"
import Chart from "./Chart"
const HeroContent = () => {
  return (
    <div>
        <Chart chartData = {LineChartData} />
    </div>
  )
}

export default HeroContent