import React from 'react';
import NumberAnimation from '~/components/NumberAnimation';
import { Link } from 'react-router-dom';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const chartConfig = (title) => {
    return {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: title,
        },
      },
    };
  };

const getPercenTage = (value1, value2) => {
  return (((value1 - value2) / value2) * 100).toFixed(2);
}

const HChart = ({
    data={
        title:'规模',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
              label: 'Dataset 1',
              data: [65, 59, 80, 81, 56, 55, 40],
              borderColor: 'rgb(255, 99, 132)',
            },
        ]
    },
}) =>{
  return (
    <div>
      <div className='mb-12'>
        <Link
            className="w-64 py-2 px-5 rounded-md bg-purple-700 border-2 border-purple-700/50 outline outline-offset-4 outline-purple-600/80"
            data-aos-delay="400"
            to="/datas"
          >
            { data.title }：{' '}
          <span className='text-xl font-bold'><NumberAnimation value={121} delay={400}></NumberAnimation></span>
        </Link>
        <div className='float-right mr-5'>较上周变化 ↑{' '}
          <span className='text-xl ml-2 font-bold'>
            <NumberAnimation value={ getPercenTage(data.datasets[0].data[4], data.datasets[0].data[3]) } delay={400}></NumberAnimation>%
          </span>
        </div>
      </div>
      <Line options={chartConfig(data.title)} data={data} />
    </div>
  )
    
}

export default HChart;