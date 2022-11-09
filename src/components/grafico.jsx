import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutApp({ingresoUser, agregarUser}) {

    const data= {
        labels: ['Ingresados', 'Usuarios libres'],
        datasets: [
            {
                label: '# de Usuarios',
                data: [ingresoUser, agregarUser],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                ],
            },
        ],
    };
    return <Doughnut data={data} />;
}