'use client'

import React from 'react'
import { Pie } from 'react-chartjs-2'

const options = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 55,
            beta: 0
        }
    },
    plotOptions: {
        pie: { depth: 55, shadow: true, size: '90%' }
    },
    title: {
        text: 'DiAGRAM',
        align: 'center'
    },
    series: [{
        type: 'pie',
        data: [
            { name: 'Samsung', y: 25, color: '#7cb6ec' },
            { name: 'Apple', y: 11 },
            { name: 'Sony', y: 9 },
            { name: 'Oppo', y: 7 },
            { name: 'Vivo', y: 10 },
            { name: 'Xiaomi', y: 13 },
            { name: 'Others', y: 55 },
        ]
    }]
}

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

const Diagram = () => {
    return (
        <div className='w-full'>
            <h1 className='text-center'>DiAGRAM</h1>
            <Pie data={data} />
        </div>
    )
}

export default Diagram