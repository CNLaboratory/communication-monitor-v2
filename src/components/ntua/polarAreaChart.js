import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);



const PolarAreaChart = (props) => {
  
    return (
      <div>
        <PolarArea data={props.data} />
        
      </div>
    )
  }
  
  export default PolarAreaChart;
  