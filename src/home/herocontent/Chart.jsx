import React from 'react'
import { Line, Doughnut} from 'react-chartjs-2';

const Chart = ({chartData}) => {
    
  return (
    <div className='heroContent-container'>
        <div className='chart-wrapper lineChart card-bgColor '>
        <p></p>
       <Line
          data={chartData.LineChartData}
          options={{
            plugins: {
             legend:{
                 display:true,
                 align:"start",
                 labels: {
                    usePointStyle:true,
                    pointStyle:false,
                    font: {
                        size:18
                    }
                 }
               },
               
            },
            elements : {
             point: {
                 pointStyle: false
             }
            },
            maintainAspectRatio: false,
            responsive:true,
            
           }}
        />
        </div>
      <div className='chart-wrapper doughnutChart card-bgColor '>
      <Doughnut
          data={chartData.PieChartData}
          options={{
            maintainAspectRatio: false,
            responsive:true,
            plugins: {
             legend:{
                 display:true,
                position: 'bottom',
                labels :{
                    pointStyle:"circle",
                    usePointStyle:true,
                    pointStyleWidth:0,
                    font: {
                        size:18
                    }
                }
               },
               subtitle: {
                display: true,
                text: "Budget",
                align:"start",
                font: {
                    size: 18,
                    
                }
               },
              
               
            },
            elements : {
             point: {
                 pointStyle: false
             }
            }
            
           }}
           
        />
      </div>
    </div>
  )
}

export default Chart